---
name: ui-plugin-navigation
description: 发现与当前任务相关的 UI 插件面板，并在对话中呈现一键胶囊链接 (Pill)，以便在右侧辅助面板中打开或切换该面板。当正在运行的 UI 插件面板对用户任务有帮助时，或在用户刚启用新的 UI 面板后提供便捷快捷入口时使用本技能。
disable-slash-command: true
---

# UI 插件导航指南 (UI Plugin Navigation)

> [!NOTE]
> **UI 插件 (UI Plugin) 与 UI 扩展 (UI Extension) 指代同一事物**：均是由 Sidecar 驱动、在辅助（右侧）面板中渲染的 Web 界面。

部分插件会暴露可在辅助面板中渲染的交互式 UI 面板。本技能指导你如何在对话中生成一个可点击的**胶囊按钮 (Pill)**，使用 `sidecar://` 链接协议便捷地打开或切换该面板。

## 何时生成胶囊按钮

在以下两种情形下可以主动提供胶囊按钮：

1.  **情境相关性**：阅读已启用的 UI 插件的 `description` 与 `display_name`。如果某个插件的功能恰好与用户当前正在进行的操作相契合，且打开其面板能为用户带来便利，则生成该插件的胶囊链接。
2.  **新启用了 UI 插件面板后**：当用户刚刚创建并启用了某个 UI 插件面板时，提供一个直达按钮方便其立即预览。

*控制展示频率：仅在真正实用时提供，切勿重复推荐用户已经打开或忽略过的面板。*

## 步骤 1：检索 UI 插件面板及其视图路径

UI 插件面板由 Sidecar 驱动，存储在以下目录中的 `<sidecar-id>/sidecar.json`：

-   `~/.gemini/config/sidecars/<sidecar-id>/`
-   `~/.gemini/<app-name>/builtin/sidecars/<sidecar-id>/`
-   `~/.gemini/config/plugins/<plugin>/sidecars/<sidecar-id>/`
-   `~/.gemini/<app-name>/builtin/plugins/<plugin>/sidecars/<sidecar-id>/`

只有当 `sidecar.json` 中配置了 `"has_web_ui": true` 且 `ui_config.views` 中包含 `entrypoint: SIDECAR_UI_ENTRYPOINT_AUX_PANE` 时，才存在辅助面板。从中提取：

-   **sidecar-id**：文件夹名（插件内部的 Sidecar 格式为 `<plugin>/<folder>`）。
-   **view-path**：`path` 字段（如 `/` 或 `host.html?view=auxpane`）。

## 步骤 2：生成胶囊链接

使用标准的 `sidecar://` 协议 Markdown 链接格式：

```markdown
[面板名称](sidecar://<sidecar-id>/<view-path>)
```

示例：

```markdown
[打开监控面板](sidecar://system-monitor/)
[查看设计预览](sidecar://preview-tool/host.html?view=auxpane)
```

## 注意事项

*   点击该胶囊按钮会直接展开/折叠右侧辅助面板。只有当插件**已处于启用并运行状态**时才可输出链接。
*   根据功能描述判断相关性，切勿生搬硬套。
