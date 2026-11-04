---
name: migrate-workflows
description: 自动将旧版工作流 (Workflows) 迁移为现代技能规范 (Skills)，支持全局与工作区配置。自动扫描现有工作流，生成对应的 SKILL.md 文件并安全归档旧文件。
---

# 将旧版工作流迁移为现代技能 (Migrate Workflows to Skills)

使用本技能可以自动化地将旧版的工作流文件迁移为现代化的技能规范 (Skills)。

旧版工作流 (`.agents/workflows/*.md` 或 `_agents/workflows/*.md`) 已被弃用。现代技能 (`.agents/skills/<name>/SKILL.md` 或 `_agents/skills/<name>/SKILL.md`) 在具备旧版全部能力的基础上，还提供了：

-   **原生斜杠命令支持**：在聊天输入框直接键入 `/<name>` 即可唤起。
-   **语义化智能体自主发现**：智能体在处理相关任务时能自动发现并加载技能。
-   **多文件与资源支持**：支持子目录中的辅助脚本、模版和参考文档。

--------------------------------------------------------------------------------

## 智能体执行指令

当激活本技能时，你**必须自动执行迁移流程**，按部就班完成以下步骤：

### 第 1 步：检索现有工作流

使用文件搜索工具检索**全局**与**当前工作区**目录中的旧版 `.md` 工作流文件以及 `workflows.json` 清单：

1.  **全局工作流 (Global Workflows)**：
    -   `~/.gemini/config/global_workflows/*.md`
    -   `~/.gemini/config/workflows/*.md`
    -   清单文件：`~/.gemini/config/workflows.json`

2.  **工作区工作流 (Workspace Workflows)**：
    -   `<workspace_root>/.agents/workflows/*.md`
    -   `<workspace_root>/_agents/workflows/*.md`
    -   `<workspace_root>/.agent/workflows/*.md`
    -   `<workspace_root>/_agent/workflows/*.md`
    -   清单文件：`<workspace_root>/{.agents,_agents,.agent,_agent}/workflows.json`

> [!NOTE]
> **操作系统路径格式提示：**
> 根据宿主机系统自适应路径解析（Windows 使用 `%USERPROFILE%`，macOS/Linux 使用 `$HOME`）。向用户汇报时，使用系统原生路径分隔符（Windows 为 `\`，macOS/Linux 为 `/`）。

**比对现有技能：** 针对每个发现的工作流，检查 `<target_skill_dir>/<name>/SKILL.md` 是否已存在，以判断是否已经完成过迁移。

**向用户展示发现的工作流清单与迁移状态：**

作用域    | 工作流名称     | 源文件路径                                    | 目标技能路径                                  | 状态
:-------- | :------------ | :-------------------------------------------- | :------------------------------------------- | :-----
全局      | `<name>`      | `~/.gemini/config/global_workflows/<name>.md` | `~/.gemini/config/skills/<name>/SKILL.md`    | `待迁移` / `已迁移`
全局      | `<name>`      | `~/.gemini/config/workflows/<name>.md`        | `~/.gemini/config/skills/<name>/SKILL.md`    | `待迁移` / `已迁移`
工作区    | `<name>`      | `<workspace>/.agents/workflows/<name>.md`     | `<workspace>/.agents/skills/<name>/SKILL.md` | `待迁移` / `已迁移`
工作区    | `<name>`      | `<workspace>/_agents/workflows/<name>.md`     | `<workspace>/_agents/skills/<name>/SKILL.md` | `待迁移` / `已迁移`

-   若未找到任何旧版工作流文件，告知用户当前环境已是最新规范。
-   若全部显示为 `已迁移`，告知用户技能文件已就绪，直接安全清理/归档残留的旧文件，绝不覆盖已有技能。

--------------------------------------------------------------------------------

### 第 2 步：将工作流转换为技能 (幂等执行)

针对每个待转换的工作流文件：

1.  **覆盖保护检查**：
    -   若 `<target_dir>/<name>/SKILL.md` **已存在**，**严禁覆盖**（保留用户此前的任何手工修改）。直接跳转至归档步骤。
    -   若目标文件不存在，开始转换。

2.  **提取并格式化工作流内容**：
    -   读取原 `.md` 文件；
    -   提取工作流的标题、描述及主体指南；
    -   构建标准的 YAML Frontmatter：

        ```markdown
        ---
        name: <name>
        description: <用简明扼要的一句话概括技能功能与适用时机>
        ---

        # <标题>

        <工作流操作指南与执行细节>
        ```

3.  **写入目标技能文件**：
    -   创建目录：`<target_dir>/<name>/`
    -   写入文件：`<target_dir>/<name>/SKILL.md`

4.  **安全归档旧版工作流**：
    -   将原 `.md` 文件重命名为 `<name>.md.bak`（Windows 使用 `Move-Item`，UNIX 使用 `mv`）。不要彻底删除，安全保留原版备份。
    -   从相关的 `workflows.json` 清单中移除对应项。

--------------------------------------------------------------------------------

### 第 3 步：校验并向用户汇报

1.  确认所有目标 `SKILL.md` 正常生成，旧文件已成功重命名为 `.md.bak`。
2.  向用户汇报最终总结：
    -   本次新迁移的技能清单；
    -   跳过的已有技能清单；
    -   已安全归档为 `.md.bak` 的旧文件清单。
