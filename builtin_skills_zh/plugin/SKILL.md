---
name: plugin
description: 如何管理和创建插件（Plugin）——将技能、智能体、规则、MCP 服务器和钩子打包为单一的命名空间模块，实现一键安装、启用和禁用。当用户希望启用、禁用、安装或卸载插件，或者创建新插件、将零散的自定义项封装成插件时使用本技能。也可以通过 /plugin 斜杠命令触发。
---

# 插件管理与制作指南 (Plugins)

**插件 (Plugin)** 是一组带有命名空间的自定义项集合包，作为一个整体单元进行分发、安装和启闭。一个插件内部可以包含技能 (Skills)、子智能体 (Agents)、规则 (Rules)、MCP 服务器以及生命周期钩子 (Hooks)。当插件启用时，其内部的所有扩展全部生效；禁用该插件则会将整套模块同时下线。

你的任务通常是：调整现有插件的生命周期状态（启用/禁用/安装/卸载），或者为新功能选择/制作合适的插件。

--------------------------------------------------------------------------------

## 快速参考表

在 **步骤 0** 中写入 `/tmp/lsrpc.sh` 后，在每个 `lsrpc` 调用前加上 `source /tmp/lsrpc.sh &&`，并始终以 `<dir>`（步骤 0 输出中的实际安装目录名，而非 `plugin.json` 中的 `name`）作为操作键：

| 操作 | 对应命令 / 动作 | 核心避坑要点 |
| :--- | :--- | :--- |
| **盘点已安装插件** (步骤 0) | `source /tmp/lsrpc.sh && lsrpc GetAllPlugins '{"workspaceUris":["file:///path/to/workspace"]}' \| jq '[.plugins[] \| {name, dir: (.path \| split("/") \| last), disabled: (.disabled // false), isGlobal, skills: [.skills[]?.name], agents: [.agents[]?.name], rules: [.rules[]?.absolutePath], hooks: ((.hooksJson // "") \| length > 0), mcp: [.mcpServers[]?.name]}]'` | 绝不能未经过滤直接读取 `GetAllPlugins`（其响应内联了所有 `SKILL.md` 全文，极易打爆上下文）；必须经由 `jq` 过滤，并提取 `dir` 进行后续变更。 |
| **启用 / 禁用插件** (步骤 2A) | `source /tmp/lsrpc.sh && lsrpc JetboxWriteState '{"userConfig":{"plugins":{"<dir>":{"enabled":true}}}}'`（禁用传 `false`） | 即时热生效（无需重启）。绝不要直接手工修改 `~/.gemini/config/config.json`。 |
| **卸载用户插件** (步骤 2A) | `source /tmp/lsrpc.sh && lsrpc DeletePlugin '{"pluginId":"<dir>"}'` | 若 `.path` 包含 `/builtin/plugins/` 则属于系统内置插件，严禁卸载（建议改用禁用）。若当前处于禁用状态，先将其置为 `enabled: true` 再删除，避免残留脏状态。 |
| **安装市场插件** (步骤 2A) | `source /tmp/lsrpc.sh && lsrpc InstallCustomization '{"id":"<marketplace-id>"}'` | 使用从市场页面或用户处获取的 `<marketplace-id>`（严禁根据名称随意臆测）。安装后需要重启生效。 |
| **编写 / 整理插件** (步骤 2B–4)| 创建 `~/.gemini/config/plugins/<name>/plugin.json` 及子目录（`skills/`, `agents/`, `rules/AGENTS.md`, `mcp_config.json`, `hooks.json`, `assets/logo.svg`） | 必须先检查步骤 0 盘点结果避免 `name` 冲突；完成后重新盘点，提醒用户重启，并使用 `[<name>](customization://<dir>)` 形式提供链接。 |

--------------------------------------------------------------------------------

## 步骤 0：运行前检查与插件盘点

所有操作前都必须首先掌握当前已安装的插件清单。通过本地 Connect 端点与语言服务器通信：

```bash
: "${ANTIGRAVITY_LS_ADDRESS:=localhost:5387}"
curl -sS "http://${ANTIGRAVITY_LS_ADDRESS}/healthz"
```

先将辅助函数写入文件：

```bash
cat > /tmp/lsrpc.sh <<'EOF'
: "${ANTIGRAVITY_LS_ADDRESS:=localhost:5387}"
lsrpc() {  # 用法: lsrpc <方法名> <JSON主体>
  curl -sS -X POST \
    "http://${ANTIGRAVITY_LS_ADDRESS}/exa.language_server_pb.LanguageServerService/$1" \
    -H "Content-Type: application/json" \
    -H "x-codeium-csrf-token: ${ANTIGRAVITY_CSRF_TOKEN}" \
    -d "$2"
}
EOF
```

列出已安装的插件清单（通过 `jq` 过滤关键摘要）：

```bash
source /tmp/lsrpc.sh && lsrpc GetAllPlugins '{"workspaceUris":["file:///path/to/workspace"]}' | jq '[.plugins[] | {
  name,
  dir: (.path | split("/") | last),
  disabled: (.disabled // false),
  isGlobal,
  skills: [.skills[]?.name],
  agents: [.agents[]?.name],
  rules: [.rules[]?.absolutePath],
  hooks: ((.hooksJson // "") | length > 0),
  mcp: [.mcpServers[]?.name]
}]'
```

> **`dir` 才是真正关键的标识符。** 它是实际安装目录名称（路径的最后一段），所有后续生命周期操作均以此为键。它往往与 `plugin.json` 中的 `name` **不一致**（例如从市场下载的插件目录名可能是类似 `-1870732469773246571` 的哈希串）。

--------------------------------------------------------------------------------

## 步骤 1：明确操作类别

-   用户提到某个具体插件的生命周期操作（“关闭 X”、“安装 Y”、“卸载 Z”）-> 进入 **步骤 2A**。
-   用户希望添加新能力或整理零散自定义项（“做个新功能插件”、“把这些技能打包在一起”）-> 进入 **步骤 2B**。

--------------------------------------------------------------------------------

## 步骤 2A：生命周期操作

先从步骤 0 的清单中解析出目标插件的 `dir`。

**启用或禁用（即时热生效，无需重启）：**

```bash
# 启用:
source /tmp/lsrpc.sh && lsrpc JetboxWriteState '{"userConfig":{"plugins":{"<dir>":{"enabled":true}}}}'

# 禁用:
source /tmp/lsrpc.sh && lsrpc JetboxWriteState '{"userConfig":{"plugins":{"<dir>":{"enabled":false}}}}'
```

**卸载插件：**

```bash
source /tmp/lsrpc.sh && lsrpc DeletePlugin '{"pluginId":"<dir>"}'
```

*注意：内置插件（路径含 `/builtin/plugins/`）无法卸载，请建议用户禁用。*

**从市场安装插件：**

```bash
source /tmp/lsrpc.sh && lsrpc InstallCustomization '{"id":"<marketplace-id>"}'
```

新插件安装后需要重启 Antigravity 以完成目录探测与挂载。

--------------------------------------------------------------------------------

## 步骤 2B：设计与组织插件

如果需要制作新插件，目录位于 `~/.gemini/config/plugins/<name>/`。

插件目录标准结构：

```text
~/.gemini/config/plugins/<name>/
├── plugin.json       # 必需配置文件
├── README.md         # 用户说明文档（智能体不读取）
├── mcp_config.json   # 可选，格式与用户自身的 MCP 配置完全一致
├── hooks.json        # 可选，生命周期钩子
├── assets/logo.svg   # 可选，图标文件
├── skills/<skill>/SKILL.md
├── agents/<agent>.md
└── rules/AGENTS.md
```

`plugin.json` 示例：

```json
{
  "name": "strava",
  "displayName": "Strava 运动同步",
  "description": "Strava 数据集成：拉取运动数据、分析训练负荷并生成总结报告。",
  "logo": "assets/logo.svg",
  "suggestedPrompts": [
    "总结本周的训练里程与心率区间",
    "对比我最近 4 次长距离跑的配速与步频",
    "为我的最新活动起草一段 Strava 图文动态"
  ]
}
```

--------------------------------------------------------------------------------

## 步骤 4：校验与交付

重新执行步骤 0 的盘点命令，确认新插件或修改状态已正确生效。然后向用户说明：
1. 本次所做的具体变更及归属插件；
2. 是否需要**重启**软件；
3. 提供插件管理直达链接：`[<displayName>](customization://<dir>)`。
