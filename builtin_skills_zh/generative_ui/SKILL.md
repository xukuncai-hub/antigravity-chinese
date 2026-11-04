---
name: generative_ui
description: 如何在对话中内联渲染富交互 HTML 小组件或生成独立的工件页面。当需要向用户展示架构图、数据可视化、交互式控件、教程演练或任何超越纯文本和 Markdown 的富视觉内容时使用本技能。
---

# 生成式 UI (Generative UI)

你可以直接在对话中渲染自定义的、富有表现力的交互式用户界面（内联小组件或独立大型工件）。这是向用户传达复杂信息、生成丰富的数据可视化乃至构建小型交互体验的绝佳方式。

## 工作流程

1.  **创建 HTML 工件**：使用 `write_file` 将自包含的 `.html` 文件（使用 Tailwind CSS 和内联 JavaScript）保存到工件目录中，并在 `ArtifactMetadata` 中设置 `UserFacing: true`。
2.  **内联嵌入（可选）**：若你决定将该 HTML 组件直接内嵌在对话流中，可以在回复中包含 `<agent-embed>` 标签：

    ```html
    <agent-embed src="file:///<artifact_path>/widget.html"></agent-embed>
    ```

## 样式约束与主题适配

*   **外部资源与 Tailwind CSS**：由于安全内容策略 (CSP) 限制，所有外部 CDN 均被拦截，但允许使用唯一的官方白名单 Tailwind CSS 脚本。在 `<head>` 中引入以下标签即可启用 Tailwind：

    ```html
    <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
    ```

*   **使用内置主题变量**：嵌入的 iframe 会自动注入宿主环境的设计系统 Token，使组件无缝契合当前深色/浅色主题。包括背景色 (`--background`, `--content`, `--card`, `--sidebar`)、边框色 (`--border`)、文字色 (`--foreground`, `--muted-foreground`, `--placeholder`) 以及强调色 (`--primary`/`--primary-foreground`)。字体已在 `body` 上全局定义，无需自行设置；同时切勿使用低于 12px 的过小微型字号（保持 `text-xs` / `12px` 为底限）。

*   **文字与背景颜色规范**：使用语义化变量（如 `bg-[var(--card)]`, `text-[var(--foreground)]`, `text-[var(--muted-foreground)]`），避免硬编码具体的颜色类名（如 `bg-slate-900`, `text-white`），以保证在浅色与深色主题下均有极佳的对比度。

*   **切勿在 `:root` 上重写本地颜色**：不要在 `<style>` 块中在 `:root` 上硬编码后备变量，宿主环境会自动动态注入并管理这些变量。

*   **推荐 HTML 基础模板**：

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
    </head>
    <body class="bg-transparent text-[var(--foreground)] antialiased p-5">
      <div class="bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
        <h2 class="text-[var(--foreground)] font-semibold text-lg">组件标题</h2>
        <p class="text-[var(--muted-foreground)] text-sm">组件功能描述</p>
        <!-- 此处放置交互内容 -->
      </div>
    </body>
    </html>
    ```

## 布局决策（内联 vs 独立侧边栏）

**默认推荐仅作为工件 (Artifact only)**：在回复中引用 HTML 工件，让用户在右侧辅助面板中全屏查阅。仅当小组件非常紧凑（高度在 500px 以内）且直接服务于当前对话内容时（如小型公式推导图表、简易模拟器），才考虑内联嵌入。复杂的仪表盘、完整原型应用请务必保留在侧边工件面板中。

## 内联小组件设计要点

在内嵌至聊天记录中时，请按原生聊天卡片进行设计：

*   **透明根节点背景**：始终设置 `<body class="bg-transparent ...">`，使小组件自然融入对话背景。
*   **卡片式布局**：将主要内容封装在卡片容器内（带有微妙的边框与圆角阴影），提升界面层次。
*   **高度预算约束**：内联容器的最大可视高度约为 **500px**。超过该高度将产生内部滚动条，影响阅读体验。因此内联卡片必须紧凑精炼。

> [!IMPORTANT]
> 切勿在顶层容器上使用相对于视口的尺寸单位：绝对不要使用 `h-screen`, `min-h-screen`, `100vh` 或 `height: 100%`。因为 iframe 的视口高度由内容自适应推导，使用 100vh 会陷入死循环并导致组件折叠为一条细缝。请使用合理的 padding 撑开空间。
