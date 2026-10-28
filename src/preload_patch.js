/* --- ANTIGRAVITY CHINESE LOCALIZATION START --- */
(() => {
    // V12.0 终极隔离版：基于容器回溯的物理隔离引擎
    // 逻辑：不再仅仅检查当前标签，而是向上回溯父级，识别“代码/编辑器”禁区
    const USE_TW = false;
    const map = new Map(Object.entries({
    "9222": "9222",
    "Loading...": "加载中...",
    "Loading Antigravity": "反重力引擎已启动，正在摆脱地心引力...",
    "Loading Antigravity...": "反重力引擎已启动，正在摆脱地心引力...",
    "Projects": "项目列表",
    "No items found": "未找到项",
    "No matching results": "没有匹配的结果",
    "Something went wrong": "出错了",
    "Something went wrong!": "出错了！",
    "Save": "保存",
    "Cancel": "取消",
    "Confirm": "确认",
    "Edit": "编辑",
    "Close": "关闭",
    "Back": "返回",
    "Delete": "删除",
    "Rename": "重命名",
    "Refresh": "刷新",
    "Submit": "提交",
    "Try Again": "重试",
    "Dismiss": "忽略",
    "Toggle Fullscreen": "切换全屏",
    "Open Editor": "打开编辑器",
    "Configure": "配置",
    "Learn more": "了解更多",
    "Learn more.": "了解更多。",
    "Search by name": "按名称搜索",
    "Search by name or Cascade ID...": "按名称或 Cascade ID 搜索...",
    "Type to search...": "输入以搜索...",
    "Filter": "筛选",
    "Proceed": "继续",
    "Approve": "批准",
    "Reject": "驳回",
    "Accept": "接受",
    "Accept all": "全部接受",
    "Reject all": "全部驳回",
    "Skip": "跳过",
    "Copy": "复制",
    "Copied": "已复制",
    "Copy Content": "复制内容",
    "Copy Path": "复制路径",
    "Export as PDF": "导出为 PDF",
    "Search": "搜索",
    "Open in Code Search": "在代码搜索中打开",
    "Go Back": "后退",
    "Terminal": "终端",
    "Browser": "浏览器",
    "Editor": "编辑器",
    "Editor Window": "编辑器窗口",
    "Toggle Editor": "切换编辑器",
    "Output:": "输出：",
    "Description:": "描述：",
    "Prompt": "提示词",
    "Files Changed": "文件已更改",
    "Files Modified": "文件已修改",
    "File": "文件",
    "Files": "文件",
    "Recent Files": "最近的文件",
    "Search for files in the project...": "在项目中搜索文件...",
    "Code Search": "代码搜索",
    "Artifact": "交付件(Artifact)",
    "Artifacts": "交付件列表(Artifacts)",
    "Artifact Name": "交付件名称",
    "Comments": "注释/评论",
    "Context": "上下文",
    "Thought Process": "思维过程",
    "Thinking": "思考中",
    "Action required": "需要操作",
    "Blocked on Your Input": "等待您的输入",
    "Needs input": "需要输入",
    "Encountered an error": "遇到错误",
    "Error Details": "错误详情",
    "An error was thrown.": "抛出了一个错误。",
    "Failed to load image": "加载图片失败",
    "Getting scripts...": "正在获取脚本...",
    "No results found": "未找到结果",
    "Clear": "清除",
    "Overview": "概览",
    "Review": "评审",
    "Review Changes": "评审更改",
    "Build with Google": "基于 Google 构建",
    "Build With Google": "基于 Google 构建",
    "Plugins are packaged collections of skills and MCPs to help the Agent in Antigravity work with Google developer products. You can always change your choices in Settings.": "插件是打包的技能与 MCP 集合，用于帮助反重力智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。",
    "Plugins are packaged collections of skills and MCPs to help the Agent in 反重力智能编程 work with Google developer products. You can always change your choices in Settings.": "插件是打包的技能与 MCP 集合，用于帮助反重力智能编程中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。",
    "Plugins are packaged collections of skills and MCPs to help the Agent in 反重力智慧程式設計 work with Google developer products. You can always change your choices in Settings.": "插件是打包的技能与 MCP 集合，用于帮助反重力智能编程中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。",
    "Plugins are packaged collections of skills and MCPs to help the Agent in": "插件是打包的技能与 MCP 集合，用于帮助",
    "work with Google developer products. You can always change your choices in Settings.": "中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。",
    "Build with Antigravity Plugins": "基于反重力插件构建",
    "Build With Antigravity Plugins": "基于反重力插件构建",
    "Core tools and knowledge required to develop for Android": "开发 Android 应用所需的内核工具及知识库。",
    "Keep your coding agent up to date with the latest web best practices.": "让您的编程智能体紧跟最新的 Web 最佳实践。",
    "Using the Antigravity Python SDK to build AI agents": "使用 Antigravity Python SDK 构建 AI 智能体。",
    "Curated collection of agent skills for science.": "专为科学研究领域精选的智能体技能集合。",
    "Prototype, build & run modern apps users love with Firebase's backend, AI, and operational infrastructure.": "利用 Firebase 的后端、AI 和运营基础设施，快速原型设计、构建和运行深受用户喜爱的现代化应用。",
    "Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer": "利用 Chrome DevTools 和 Puppeteer，在 Chrome 中进行可靠的自动化、深度调试和性能分析。",
    "Skills providing tailored instructions for happy path Dart and Flutter development workflows.": "为 Dart 和 Flutter 开发流程的顺畅路径提供定制化指引的技能集。",
    "Build and prototype location-aware applications with Google Maps Platform. Integrate interactive maps, search and inspect Places details, calculate optimal routes.": "使用 Google Maps Platform 构建和原型设计具备位置感知能力的应用。集成交互式地图、搜索并查看地点详情、计算最佳路线。",
    "Specialized suite of skills for data engineers and database practitioners on Google Cloud": "专为 Google Cloud 上的数据工程师和数据库从业人员打造的专业技能套件。",
    "Build applications with the Gemini Interactions API and Live API, including text generation, multi-turn chat, streaming, function calling, managed agents, and real-time audio and video.": "使用 Gemini Interactions API 和 Live API 构建应用，涵盖文本生成、多轮对话、流式传输、函数调用、托管智能体以及实时音视频交互。",
    "Build applications with the Gemini Interactions API and Live API": "使用 Gemini Interactions API 和 Live API 构建应用",
    "Dart and Flutter": "Dart 和 Flutter",
    "Data Agent Kit": "数据智能体套件 (Data Agent Kit)",
    "Modern Web Guidance": "现代 Web 指南",
    "Google Antigravity SDK": "Google 反重力 SDK",
    "Science": "科学研究",
    "Chrome DevTools": "Chrome 开发者工具",
    "Select Antigravity Theme": "选择反重力主题",
    "System": "系统默认",
    "Security Notice & Data Use": "安全告示与数据使用",
    "AI coding agents are known to have certain security limitations. Users should be aware of potential risks, including data exfiltration and possible code execution. Avoid processing highly sensitive data and verify all the actions taken by the agent.": "已知的 AI 编程智能体存在某些安全局限。用户应当意识到潜在的风险，包括数据外泄和可能的代码执行。请避免处理高度敏感的数据，并验证智能体所采取的所有操作。",
    "Yes, I agree to help improve": "是的，我同意协助改进",
    "by allowing Google to collect and use my Interactions data, subject to the Google": "，允许 Google 收集并使用我的交互数据，并遵守 Google ",
    "Google Privacy Policy": "Google 隐私政策",
    ". I understand I can choose to opt out later whenever I want via my settings.": "。我理解我随时可以根据需要通过设置选择退出。",
    "I understand I can choose to opt out later whenever I want via my settings.": "。我理解我随时可以根据需要通过设置选择退出。",
    "Welcome to": "欢迎使用",
    "Success, Continuing...": "登录成功，正在跳转...",
    "Use Google Cloud project instead": "改用 Google Cloud 项目",
    "Awaiting Authentication...": "正在等待身份验证...",
    "Continue with Google": "通过 Google 继续",
    "Previous": "上一步",
    "Next": "下一步",
    "Finish": "完成",
    "Allow running this command?": "是否允许运行此命令？",
    "Yes, allow this time": "是，仅允许本次执行",
    "No (tell the agent what to do instead)": "否（告知智能体其他操作）",
    "Allow read access to this path?": "是否允许读取此路径？",
    "Allow write access to this path?": "是否允许写入此路径？",
    "Allow read/write access to this path?": "是否允许读写此路径？",
    "Allow read access?": "是否允许读取权限？",
    "Allow write access?": "是否允许写入权限？",
    "Allow executing this command?": "是否允许执行此命令？",
    "Allow network access to this URL?": "是否允许访问此 URL？",
    "Allow network access?": "是否允许访问网络？",
    "Yes, and always allow in this project": "是，且在此项目中始终允许",
    "Yes, and always allow": "是，且始终允许",
    "Authentication Required": "需要身份验证",
    "To start using the agent, please sign in with your Google account.": "要开始使用智能体，请登录您的 Google 账号。",
    "Sign In": "登录",
    "Open Settings": "打开设置",
    "There was an unexpected issue setting up your account.": "设置您的账号时遇到了意外问题。",
    "Continue with different account": "使用其他账号继续",
    "Having trouble? Let us know": "遇到问题？告诉我们",
    "No conversations yet": "暂无会话",
    "Not Signed In": "未登录",
    "Sign in to use Antigravity!": "登录以使用 Antigravity！",
    "No models available": "没有可用的模型",
    "No token data available.": "没有 Token 使用数据。",
    "Add MCP +": "添加 MCP +",
    "App": "应用设置",
    "Show all": "显示全部",
    "e.g., /path/to/file": "例如：/path/to/file",
    "Bug Report": "缺陷报告",
    "Feature Request": "功能建议",
    "Auth and Billing": "身份验证与计费",
    "General Feedback": "常规反馈",
    "Description": "描述",
    "Please describe the issue in detail. The more actionable your feedback, the quicker our team can address your request. Some helpful information includes:": "请详细描述您遇到的问题。您的反馈越具体，我们的团队就能越快处理您的请求。一些有帮助的信息包括：",
    "Steps to reproduce the issue": "重现问题的步骤",
    "Any error messages": "任何错误信息",
    "Any relevant information": "任何相关信息",
    "Describe the bug you encountered...": "描述您遇到的缺陷...",
    "Please list the steps to reproduce the issue": "请列出重现该问题的步骤",
    "Attach a screenshot (optional)": "上传屏幕截图（可选）",
    "Attach Antigravity server logs": "附带 Antigravity 服务器日志",
    "Install IDE": "安装 IDE",
    "See Activity": "查看活动",
    "Get More AI Credits": "获取更多 AI 额度",
    "Check for Updates": "检查更新",
    "No updates available": "暂无可用更新",
    "Version": "版本",
    "Ask anything, @ to mention, / for actions": "提问任何问题，使用 @ 提及，/ 执行操作",
    "Commands": "命令",
    "to navigate": "进行导航",
    "to select": "进行选择",
    "Select folder(s)": "选择文件夹",
    "+ Add Folder": "+ 添加文件夹",
    "Add Folder": "添加文件夹",
    "Display Options": "显示选项",
    "Create New Project": "创建新项目",
    "Project Settings": "项目设置",
    "New Conversation in Project": "在此项目中新建对话",
    "+ New": "+ 新建",
    "Search tasks...": "搜索任务...",
    "No scheduled tasks configured.": "未配置计划任务。",
    "Search conversations...": "搜索会话...",
    "Pin Conversation": "置顶会话",
    "Unpin Conversation": "取消置顶会话",
    "Archive Conversation": "归档会话",
    "Unarchive Conversation": "取消归档会话",
    "Archive": "归档",
    "Pin": "置顶",
    "Unpin": "取消置顶",
    "Copy Conversation Name": "复制会话名称",
    "Copy Conversation ID": "复制会话 ID",
    "Copy Workspace Name": "复制工作区名称",
    "Copy Project Name": "复制项目名称",
    "Conversation archived": "会话已归档",
    "Undo": "撤销",
    "Delete Permanently": "彻底删除",
    "Restore Conversation": "恢复会话",
    "Good response": "回答得好",
    "Bad response": "回答得不好",
    "Stop Execution": "停止执行",
    "Undo changes up to this point": "撤销截至此处的更改",
    "New Scheduled Task": "新建计划任务",
    "Name": "名称",
    "Enter task name": "输入任务名称",
    "Schedule": "触发计划",
    "Daily": "每天",
    "around": "在",
    "Enter a prompt for the agent": "为智能体输入提示词",
    "All tasks run as Flash.": "所有任务均以 Flash 模型运行。",
    "Add Scheduled Task": "添加计划任务",
    "New Worktree": "新建工作区树",
    "Worktrees are available for Git repositories": "工作区树仅适用于 Git 仓库",
    "New Project": "新建项目",
    "Quick Start": "快速开始",
    "No Project": "无项目",
    "Create project with existing folder(s).": "从现有文件夹创建项目。",
    "Instantly create a new project and folder to start building.": "立即创建新项目和文件夹以开始构建。",
    "New standalone conversation, outside of projects.": "新建独立对话，不属于任何项目。",
    "Finalizing...": "正在收尾...",
    "Record Audio": "录制语音",
    "Stop Recording": "停止录音",
    "Stop Recording and Send": "停止录音并发送",
    "See less": "收起",
    "Add Context": "添加上下文",
    "Media": "媒体",
    "Mentions": "提及",
    "Actions": "操作",
    "New": "新建",
    "Complete": "已完成",
    "Archived": "已归档",
    "goal": "目标",
    "grill-me": "访谈对齐",
    "teamwork-preview": "团队协作预览",
    "Run until the specified goal is completely finished": "持续运行，直到指定的目标完全完成",
    "Run an instruction on a recurring schedule or as a one-time timer": "按周期计划或作为一次性定时器运行指令",
    "Invoke a browser agent for web tasks": "调用浏览器代理执行网页任务",
    "Interview me to align on a plan": "通过访谈与我对齐方案",
    "Invoke a team of agents to autonomously tackle large projects": "调用智能体团队自主应对大型项目",
    "learn": "经验反思",
    "antigravity-guide": "官方指南",
    "boost": "深度增效",
    "Invoke the Boost multi-agent orchestrator for complex tasks.": "调用 Boost 多智能体编排器以应对复杂任务。",
    "Invoke the Boost multi-agent orchestrator for complex tasks": "调用 Boost 多智能体编排器以应对复杂任务",
    "agy-customizations": "定制系统指南",
    "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers.": "Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制、加载优先级、发现机制，并指导技能、规则、插件、钩子及 MCP 服务器的创建。",
    "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers": "Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制、加载优先级、发现机制，并指导技能、规则、插件、钩子及 MCP 服务器的创建",
    "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, the...": "Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制等…",
    "btw": "顺便提问",
    "Ask a quick question without interrupting the main conversation": "在不打断当前主对话流程的情况下快速提问",
    "Ask a quick question without interrupting the main conversation.": "在不打断当前主对话流程的情况下快速提问。",
    "Reflect on recent successes or corrections to capture reusable skills or rules": "反思近期成功的解决经验或用户的纠正提示，将其总结为可复用的技能或规则",
    "Reflect on recent successes or corrections to capture reusable skills or rules.": "反思近期成功的解决经验或用户的纠正提示，将其总结为可复用的技能或规则。",
    "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0": "提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行 (agy CLI)、Antigravity 2.0、IDE、Python SDK、斜杠命令、快捷键以及自定义配置（技能、规则、MCP、Sidecars 插件等）。当用户询问如何使用、配置或自定义 Antigravity 及其工具链时激活",
    "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.": "提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行 (agy CLI)、Antigravity 2.0、IDE、Python SDK、斜杠命令、快捷键以及自定义配置（技能、规则、MCP、Sidecars 插件等）。当用户询问如何使用、配置或自定义 Antigravity 及其工具链时激活。",
    "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the ...": "提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行等 ...",
    "See all": "显示全部",
    "Create a new project. You can add folders to it now or later.": "创建一个新项目。您现在或稍后都可以为其添加文件夹。",
    "This will permanently delete the project and all conversations within it. This action cannot be undone.": "这将永久删除该项目及其包含的所有会话。此操作无法撤销。",
    "Are you sure you want to delete the project": "您确定要删除项目 ",
    "This will permanently delete the project and": "这将永久删除该项目及其包含的",
    "all conversations": "所有会话",
    "within it. This action cannot be undone.": "。此操作无法撤销。",
    "Select Environment": "选择环境",
    "Local": "本地",
    "Download": "下载",
    "Downloading": "正在下载",
    "Downloading...": "正在下载...",
    "Downloaded": "已下载",
    "Install": "安装",
    "Installing": "正在安装",
    "Installing...": "正在安装...",
    "Installed": "已安装",
    "Uninstall": "卸载",
    "Uninstalling": "正在卸载",
    "Uninstalling...": "正在卸载...",
    "Uninstalled": "已卸载",
    "Update": "更新",
    "Updating": "正在更新",
    "Updating...": "正在更新...",
    "Updated": "已更新",
    "Stop": "停止",
    "Pending messages": "等待中的消息",
    "Messages can be sent while the agent is still working. Your message will be queued and inserted at the next available break in reasoning.": "在智能体工作时仍可发送消息。您的消息将进入队列，并在下一个可用的推理间隙插入。",
    "Update Available": "更新可用",
    "Update Available →": "更新可用 →",
    "Update Available ->": "更新可用 ->",
    "Downloading Update": "正在下载更新",
    "Downloading update": "正在下载更新",
    "Downloading Update...": "正在下载更新...",
    "Mark Unread": "标记为未读",
    "Mark Read": "标记为已读",
    "Mark as Unread": "标记为未读",
    "Mark as Read": "标记为已读",
    "Mark as read": "标记为已读",
    "Mark as unread": "标记为未读",
    "Send feedback as": "以该身份发送反馈",
    "Send feedback": "发送反馈",
    "Customization token budget exceeded. Large customizations will be truncated.": "自定义设置 Token 预算超限。过大的自定义内容将被自动截断。",
    "Customization token budget exceeded. Large customizations will be truncated automatically.": "自定义设置 Token 预算超限。过大的自定义内容将被自动截断。",
    "Customization token budget exceeded.": "自定义设置 Token 预算已超限。",
    "Customization token budget exceeded": "自定义设置 Token 预算已超限",
    "Customization token budget": "自定义设置 Token 预算",
    "Customization Token Budget": "自定义设置 Token 预算",
    "Customization budget exceeded.": "自定义设置预算已超限。",
    "Customization budget exceeded": "自定义设置预算已超限",
    "Token budget exceeded.": "Token 预算已超限。",
    "Token budget exceeded": "Token 预算已超限",
    "Large customizations will be truncated.": "过大的自定义内容将被截断。",
    "Large customizations will be truncated automatically.": "过大的自定义内容将被自动截断。",
    "Large customizations will be truncated": "过大的自定义内容将被截断",
    "Custom Keybindings": "自定义按键绑定",
    "Customize keyboard shortcuts for various actions.": "为各种操作自定义键盘快捷键。",
    "Plugins": "插件",
    "Open Marketplace": "打开市场",
    "Marketplace": "市场",
    "Workspaces": "工作区列表",
    "Quick Search": "快速搜索",
    "Search or create a new project...": "搜索或创建新项目...",
    "Choose folder": "选择文件夹",
    "Settings": "设置",
    "Feedback": "反馈",
    "Send": "发送",
    "Open in Editor": "在编辑器中打开",
    "Documentation": "文档",
    "Help": "帮助",
    "Select Theme": "选择主题",
    "Split": "拆分",
    "Split Right": "向右拆分",
    "Split Down": "向下拆分",
    "Replace With New": "替换为新会话",
    "Remove From Split": "退出拆分",
    "Show in File Explorer": "在文件资源管理器中显示",
    "Reveal in Finder": "在访达中显示",
    "Show in File Manager": "在文件管理器中显示",
    "Agent Manager": "智能体管理器",
    "Welcome to the Agent Manager": "欢迎使用智能体管理器",
    "Set up your workspace in the Agent Manager.": "在智能体管理器中设置您的工作区。",
    "The agent manager is a new window allowing you to manage and create agents across workspaces.": "智能体管理器是一个全新的窗口，允许您在不同工作区中跨平台管理和创建智能体。",
    "Command Center": "控制中心",
    "Setup": "初始设置",
    "Tasks can be done either in your agent manager or in an AI-powered editor.": "您可以在智能体管理器中或在 AI 驱动的编辑器中完成任务。",
    "Agent-driven development": "智能体驱动开发",
    "No workspaces yet": "暂无工作区",
    "No chats yet": "暂无聊天记录",
    "Workspace": "工作区",
    "workspace": "工作区",
    "Workspace and Chat": "工作区与会话",
    "Select workspace": "选择工作区",
    "Open Workspace": "打开工作区",
    "Open Workspace Selector": "打开工作区选择器",
    "Conversation": "会话",
    "Conversations": "会话列表",
    "Chat History": "聊天历史",
    "New Conversation": "新建对话",
    "Delete Conversation": "删除对话",
    "Other Conversations": "其他对话",
    "Search conversations (by name or Cascade ID)": "搜索对话（按名称或 Cascade ID）",
    "Select a conversation": "选择一个会话",
    "History": "历史记录",
    "Recent": "最近项",
    "Background Tasks": "后台任务",
    "Recent Remote Workspaces": "最近的远程工作区",
    "Marketplace Item URL": "市场项目 URL",
    "Toggle Sidebar": "切换侧边栏",
    "Open Folder": "打开文件夹",
    "Connect to Remote Workspace": "连接到远程工作区",
    "Recent actions": "最近操作",
    "About": "关于",
    "License": "许可证",
    "Account": "账户",
    "Scheduled Tasks": "计划任务",
    "View": "视图",
    "Window": "窗口",
    "Create Project": "创建项目",
    "Command Palette": "命令面板",
    "Minimize": "最小化",
    "Maximize": "最大化",
    "Zoom In": "放大",
    "Zoom Out": "缩小",
    "Reset Zoom": "重置缩放",
    "Toggle Developer Tools": "切换开发者工具",
    "New Window": "新建窗口",
    "Close Tab": "关闭标签页",
    "New Editor Window": "新建编辑器窗口",
    "Open Conversation History": "打开会话历史",
    "Open Launchpad": "打开启动台",
    "Open Keyboard Shortcuts": "打开键盘快捷键",
    "Copy conversation markdown": "复制会话 Markdown",
    "Open Command Palette": "打开命令面板",
    "Open Project Picker": "打开项目选择器",
    "Collapse All Folders": "折叠所有文件夹",
    "Expand All Folders": "展开所有文件夹",
    "Next Aux Pane Tab": "下一个辅助面板标签页",
    "Previous Aux Pane Tab": "上一个辅助面板标签页",
    "← Previous Aux Pane Tab": "← 上一个辅助面板标签页",
    "→ Next Aux Pane Tab": "→ 下一个辅助面板标签页",
    "Download Diagnostics": "下载诊断信息",
    "New Terminal Tab": "新建终端标签页",
    "Toggle Project Selector": "切换项目选择器",
    "Toggle Environment Selector": "切换环境选择器",
    "Toggle Aux Pane": "切换辅助面板",
    "Show more...": "显示更多...",
    "Show more": "显示更多",
    "Show less": "收起",
    "Show less...": "收起...",
    "View Usage": "查看用量",
    "Search for commands...": "搜索命令...",
    "Search for commands": "搜索命令",
    "Split Terminal": "拆分终端",
    "Split Conversation Horizontally": "水平拆分会话",
    "Split Conversation Vertically": "垂直拆分会话",
    "Find in conversation": "在会话中查找",
    "Toggle Between Light/Dark Themes": "切换浅色/深色主题",
    "Agent": "智能体",
    "Agents": "智能体列表",
    "New Agent": "新建智能体",
    "Create Agent": "创建智能体",
    "Run Agent": "运行智能体",
    "Stop Agent": "停止智能体",
    "Delete Agent": "删除智能体",
    "Agent Details": "智能体详细信息",
    "Custom Agents": "自定义智能体",
    "Subagents": "子代理",
    "Defined subagent": "已定义的子代理",
    "Skills": "技能预设",
    "Installed Skills": "已安装技能",
    "Skills and Customizations": "技能与自定义",
    "Active": "活跃",
    "Disabled": "已禁用",
    "Running": "运行中",
    "Stopped": "已停止",
    "Idle": "空闲",
    "In Progress": "处理中",
    "Automation": "自动化",
    "No Custom Agents or Plugins": "暂无自定义智能体或插件",
    "No subagents": "暂无子代理",
    "No active skills": "暂无活跃技能",
    "Agent Auto-Fix Lints": "智能体自动修复 Lint",
    "When enabled, agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.": "启用后，智能体将能够感知其编辑所产生的 Lint 错误，并可在未经用户明确提示的情况下尝试修复它们。",
    "Loading knowledge items...": "正在加载知识库...",
    "Loading MCP servers...": "正在加载 MCP 服务器...",
    "No resources available": "无可用的资源",
    "MCP Servers": "MCP 服务器",
    "Installed MCP Servers": "已安装的 MCP 服务器",
    "Add MCP Servers": "添加 MCP 服务器",
    "Search for MCP servers to add to your configuration": "搜索要添加到配置中的 MCP 服务器",
    "No MCP Servers": "暂无 MCP 服务器",
    "MCP Configuration Error:": "MCP 配置错误：",
    "Knowledge": "知识库",
    "Knowledge Generation": "知识生成",
    "Search for MCP servers": "搜索 MCP 服务器",
    "Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative...": "利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题并读取排查记录...",
    "Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative reports, and suggest fixes.": "利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题、读取排查报告并给出修复建议。",
    "Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot,...": "跨 325+ 数据连接器查询和处理您的营销、分析、CRM、电商及仓储数据（涵盖 Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot 等）...",
    "Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, Salesforce, etc.).": "跨 325+ 数据连接器查询和处理您的营销、分析、CRM、电商及仓储数据（涵盖 Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot、Salesforce 等）。",
    "Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a...": "将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全扫描发现索引到图谱中...",
    "Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a knowledge graph.": "将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全问题索引到统一知识图谱中。",
    "Enable Antigravity to deploy apps to Google Cloud Run.": "让 Antigravity 能够将应用程序部署到 Google Cloud Run。",
    "Interact directly with the PostHog product analytics platform using natural language. Run queries, manage feature flags, track errors, and manage projects.": "使用自然语言与 PostHog 产品分析平台直接交互。支持运行查询、管理特性开关 (Feature Flags)、追踪错误以及管理项目。",
    "Interact with Google Kubernetes Engine (GKE) clusters using natural language. Manage clusters, workloads, and Kubernetes resources.": "使用自然语言与 Google Kubernetes Engine (GKE) 集群交互。轻松管理集群、工作负载和 Kubernetes 资源。",
    "Deploy, manage, and inspect Google Kubernetes Engine (GKE) clusters and applications.": "部署、管理并检查 Google Kubernetes Engine (GKE) 集群与应用程序。",
    "Interact with Google Cloud Storage buckets and objects using natural language.": "使用自然语言与 Google Cloud Storage 存储桶和对象进行交互。",
    "Run SQL queries and analyze datasets in Google BigQuery.": "在 Google BigQuery 中运行 SQL 查询并分析数据集。",
    "Inspect and manage Google Cloud SQL database instances.": "检查并管理 Google Cloud SQL 数据库实例。",
    "Connect to GitHub to search repositories, manage issues, pull requests, and workflows.": "连接至 GitHub 以搜索代码仓库、管理 Issue、合并请求 (PR) 及工作流。",
    "Search error logs, inspect stack traces, and manage issues in Sentry.": "在 Sentry 中搜索错误日志、检查堆栈跟踪并管理异常问题。",
    "Create, search, and manage issues, projects, and cycles in Linear.": "在 Linear 中创建、搜索并管理任务、项目及研发迭代周期。",
    "Send messages, search history, and interact with channels in Slack.": "在 Slack 中发送消息、搜索聊天记录并与频道互动。",
    "Automate browser interactions, take screenshots, and extract web content.": "自动化浏览器交互、截取网页屏幕截图并提取网页内容。",
    "Provide read and write access to directories on the local filesystem.": "提供对本地文件系统目录的读取和写入权限。",
    "Connect to a PostgreSQL database to inspect schemas and execute queries.": "连接至 PostgreSQL 数据库以检查表结构并执行 SQL 查询。",
    "Interact with local SQLite database files to read and modify data.": "与本地 SQLite 数据库文件交互以读取和修改数据。",
    "Perform web searches and retrieve information using the Brave Search API.": "使用 Brave Search API 执行网络搜索并检索相关信息。",
    "Fetch web pages and convert HTML content into clean markdown for analysis.": "抓取网页并将 HTML 内容转换为清晰的 Markdown 格式以便分析。",
    "Store and retrieve persistent memory and knowledge across conversations.": "跨会话存储与检索持久化记忆和知识图谱。",
    "Interact with Supabase projects, inspect database schemas, run SQL queries, and manage edge functions.": "与 Supabase 项目交互，查看数据库表结构，执行 SQL 查询并管理边缘函数 (Edge Functions)。",
    "Manage Vercel deployments, inspect project logs, and manage environment variables.": "管理 Vercel 部署项目，查看构建运行日志并配置环境变量。",
    "Manage Docker containers, inspect images, volumes, and networks.": "管理 Docker 容器，查看镜像、存储卷与虚拟网络配置。",
    "Search Notion pages, read databases, and create or update documentation.": "搜索 Notion 页面、查询数据库，并创建或更新文档内容。",
    "Search Jira issues, create tickets, and manage agile sprints and workflows.": "搜索 Jira 问题单、创建工单，并管理敏捷开发 Sprint 迭代与工作流。",
    "Search Confluence spaces, read knowledge base pages, and publish documentation.": "搜索 Confluence 空间、阅读知识库页面并发布技术文档。",
    "Query Stripe customers, subscriptions, invoices, and payment intents.": "查询 Stripe 客户列表、订阅计划、账单明细及支付流水记录。",
    "Query Datadog metrics, inspect logs, and monitor application performance and traces.": "查询 Datadog 监控指标、分析日志并监控应用程序性能与链路追踪。",
    "Query Grafana dashboards, inspect data sources, and analyze alert rules.": "查询 Grafana 监控仪表盘、查看数据源并分析告警规则。",
    "Connect to MongoDB clusters, inspect collections, and execute aggregation queries.": "连接至 MongoDB 集群，检查集合文档结构并执行聚合查询。",
    "Interact with Redis key-value stores to inspect keys, hashes, and queues.": "连接 Redis 内存缓存，查看键值、哈希表与消息队列缓存数据。",
    "Connect to MySQL database instances to query schemas and execute SQL statements.": "连接至 MySQL 数据库实例以查询表结构并执行 SQL 命令。",
    "Query and manage Pinecone vector indexes for similarity search and RAG applications.": "查询并管理 Pinecone 向量索引，助力相似度搜索与 RAG 应用。",
    "Read and write Obsidian markdown notes and explore local vault links.": "读取和写入 Obsidian 笔记文档并探索本地知识库双链关联。",
    "Query events, create meetings, and manage schedules on Google Calendar.": "在 Google 日历中查询日程活动、创建会议预约并管理排期。",
    "Read, search, and edit Google Docs text documents.": "读取、搜索并在 Google Docs 中在线编辑文本文档。",
    "Interact with Amazon Web Services (AWS) resources including S3, EC2, Lambda, and IAM.": "与 AWS 云服务资源交互，涵盖 S3 存储桶、EC2 实例、Lambda 函数及 IAM 权限。",
    "Interact with Raycast extensions and trigger local system automation workflows.": "调用 Raycast 扩展插件并触发本地系统快捷自动化工作流。",
    "Enable Antigravity to interact with Google Kubernetes Engine (GKE).": "让 Antigravity 能够与 Google Kubernetes Engine (GKE) 进行交互并管理集群。",
    "The Dart and Flutter MCP server exposes Dart (and Flutter) development tool actions to compatible AI-assistant clients.": "该 Dart 与 Flutter MCP 服务器为兼容的 AI 客户端提供 Dart（及 Flutter）开发工具操作能力。",
    "The Firebase Model Context Protocol (MCP) Server gives AI-powered development tools the ability to work with your Firebase projects and your app's codebase.": "Firebase MCP 服务器赋予 AI 开发工具与您的 Firebase 项目及应用代码库进行全方位开发与调试的能力。",
    "The Genkit Model Context Protocol (MCP) Server gives AI-powered development tools the ability to build, debug and inspect your Genkit app.": "Genkit MCP 服务器赋予 AI 开发工具构建、调试以及检查您的 Genkit AI 应用程序的能力。",
    "The gopls Model Context Protocol (MCP) server provides tools for semantic code analysis, live diagnostics, and transformation of your Go codebase.": "gopls MCP 服务器为您的 Go 语言代码库提供语义代码分析、实时错误诊断及代码重构转换的工具集。",
    "Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table...": "使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集，执行数据表搜索、表结构检查与 SQL 查询...",
    "Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table schemas, and execute SQL queries.": "使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集，执行数据表搜索、表结构检查与 SQL 查询。",
    "The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore...": "AlloyDB for PostgreSQL 远程 MCP 服务器可让您访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群及实例、管理用户，以及创建和恢复数据备份...",
    "The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore backups.": "AlloyDB for PostgreSQL 远程 MCP 服务器可让您访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群及实例、管理用户，以及创建和恢复数据备份。",
    "Interact with Google Cloud Spanner databases using natural language. Inspect schemas, query data, and manage Spanner instances.": "使用自然语言与 Google Cloud Spanner 分布式数据库交互。检查表结构、查询数据并管理 Spanner 实例。",
    "Search and analyze Google Cloud logs across your GCP projects using natural language.": "使用自然语言跨 GCP 项目搜索和分析 Google Cloud 运行日志。",
    "Query Google Cloud Monitoring metrics, inspect dashboards, and analyze alert policies.": "查询 Google Cloud 监控指标、查看仪表盘并分析告警策略。",
    "Interact with Google Cloud Vertex AI models, prompts, and pipelines.": "与 Google Cloud Vertex AI 模型、提示工程和机器学习流水线进行交互。",
    "The Pyright Model Context Protocol (MCP) server provides tools for semantic Python code analysis, live type checking, and diagnostics.": "Pyright MCP 服务器提供 Python 语义代码分析、实时类型检查及问题诊断工具。",
    "The TypeScript Model Context Protocol (MCP) server provides tools for semantic code analysis and diagnostics for TypeScript and JavaScript.": "TypeScript MCP 服务器为 TypeScript 及 JavaScript 代码库提供语义分析与诊断工具。",
    "Inspect, debug, and control Google Chrome browser pages using Chrome DevTools Protocol.": "使用 Chrome DevTools 协议检查、调试和控制 Google Chrome 浏览器网页。",
    "The rust-analyzer Model Context Protocol (MCP) server provides tools for semantic Rust code analysis and diagnostics.": "rust-analyzer MCP 服务器提供 Rust 语义代码分析与诊断功能。",
    "The Bigtable Admin remote MCP server lets you manage Bigtable resources.": "Bigtable Admin 远程 MCP 服务器可让您管理 Google Cloud Bigtable 资源及表实例。",
    "The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administ...": "Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维...",
    "The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer databases.": "Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维。",
    "The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development...": "Spanner 远程 MCP 服务器可让您从 AI 开发环境中访问并运行 Spanner 工具，以创建、管理和查询分布式数据库资源...",
    "The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development workflow.": "Spanner 远程 MCP 服务器可让您从 AI 开发环境中访问并运行 Spanner 工具，以创建、管理和查询分布式数据库资源。",
    "Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural...": "将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够通过自然语言执行数据探索、大屏看板与分析管理...",
    "Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural language queries.": "将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够通过自然语言执行数据探索、大屏看板与分析管理。",
    "Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search...": "将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器通过数据搜索与资产检查支持企业级数据治理与血缘检索...",
    "Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search and inspect data assets.": "将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器通过数据搜索与资产检查支持企业级数据治理与血缘检索。",
    "The MCP Toolbox for Databases is an open-source MCP server designed to simplify and secure the development of tools for interacting with databases.": "数据库 MCP 工具箱 (MCP Toolbox for Databases) 是一款开源 MCP 服务器，旨在安全、高效地简化各类数据库交互工具的开发与操作。",
    "The Oracle Database remote MCP server lets you access and run Oracle Database tools to create, manage, and query Oracle Database resources from...": "Oracle Database 远程 MCP 服务器可让您访问并运行 Oracle 数据库工具，以创建、管理并查询 Oracle 数据库资源...",
    "The Oracle Database remote MCP server lets you access and run Oracle Database tools to create, manage, and query Oracle Database resources from your AI workflow.": "Oracle Database 远程 MCP 服务器可让您访问并运行 Oracle 数据库工具，以创建、管理并查询 Oracle 数据库资源。",
    "Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries,...": "使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库以执行 SQL 查询...",
    "Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries, inspecting schemas, and managing tables.": "使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库以执行 SQL 查询、检查表结构并管理数据表。",
    "The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Fig...": "Dev Mode MCP 服务器将 Figma 深度集成到您的工作流中，为生成前端代码的 AI 智能体提供关键的设计信息与组件上下文...",
    "The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma.": "Dev Mode MCP 服务器将 Figma 深度集成到您的工作流中，为生成前端代码的 AI 智能体提供关键的设计信息与组件上下文。",
    "The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and...": "GitHub MCP 服务器提供与 GitHub API 的无缝深度集成，支持高级自动化工作流与仓库全流程操作...",
    "The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and repository management.": "GitHub MCP 服务器提供与 GitHub API 的无缝深度集成，支持高级自动化工作流与仓库全流程操作。",
    "Neon MCP Server is an open-source tool that lets you interact with your Neon Postgres databases in natural language.": "Neon MCP 服务器是一款开源工具，让您能够使用自然语言直接与 Neon Postgres 云数据库进行交互。",
    "The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with...": "Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用多种工具与支付及财务资源进行交互...",
    "The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with Stripe resources.": "Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用多种工具与支付及财务资源进行交互。",
    "A Model Context Protocol server for interacting with MongoDB Atlas.": "用于与 MongoDB Atlas 云数据库进行交互的 MCP 服务器。",
    "Official Notion MCP Server that allows interaction with Notion workspaces, pages, databases, and comments via the Notion API.": "官方 Notion MCP 服务器，支持通过 Notion API 访问和交互 Notion 工作空间、页面、数据库以及评论。",
    "Official Linear.app MCP Server for interacting with Linear projects, issues, and workflows.": "官方 Linear.app MCP 服务器，用于访问和管理 Linear 项目、工单及研发迭代工作流。",
    "An MCP server implementation that integrates the Perplexity Sonar API to provide real-time, web-wide research capabilities.": "集成 Perplexity Sonar API 的 MCP 服务器，为 AI 智能体提供实时、全网深度的智能研究与问答检索能力。",
    "Official PayPal MCP Server that allows integration with PayPal APIs for payment processing, transaction management, and account operations.": "官方 PayPal MCP 服务器，可集成 PayPal API 以进行支付处理、交易订单管理及账户相关业务操作。",
    "The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add...": "Heroku 平台 MCP 服务器提供与 Heroku 云资源的无缝交互，让大语言模型能够读取、管理并运维应用及插件...",
    "The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add-ons, and databases.": "Heroku 平台 MCP 服务器提供与 Heroku 云资源的无缝交互，让大语言模型能够读取、管理并运维应用及插件。",
    "The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and...": "Pinecone MCP 服务器允许 AI 工具检索 Pinecone 官方文档、配置向量索引、基于索引结构生成代码并查询向量...",
    "The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and query vectors.": "Pinecone MCP 服务器允许 AI 工具检索 Pinecone 官方文档、配置向量索引、基于索引结构生成代码并查询向量。",
    "Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and...": "将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置、执行 SQL 查询及边缘函数...",
    "Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and database schemas.": "将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置、执行 SQL 查询及边缘函数。",
    "The Prisma MCP Server enables AI tools to interact with Prisma for creating and managing Postgres databases easily.": "Prisma MCP 服务器可让 AI 工具通过 Prisma 轻松创建、操作并管理 Postgres 数据库。",
    "The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code...": "Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档与代码示例...",
    "The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code samples, and APIs.": "Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档与代码示例。",
    "This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE...": "该 MCP 服务器为大模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 诊断追踪服务...",
    "This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE to debug traces.": "该 MCP 服务器为大模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 诊断追踪服务。",
    "The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments,...": "Postman MCP 服务器连接 Postman 与 AI 工具，赋予 AI 智能体访问工作空间、管理接口集合与环境及测试 API 的能力...",
    "The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments, and test APIs.": "Postman MCP 服务器连接 Postman 与 AI 工具，赋予 AI 智能体访问工作空间、管理接口集合与环境及测试 API 的能力。",
    "The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen...": "Stitch MCP 服务器允许 AI 智能体与 Stitch 交互进行感官 UI 设计：从文本与图像生成原型 UI，并管理屏幕原型...",
    "The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen prototypes.": "Stitch MCP 服务器允许 AI 智能体与 Stitch 交互进行感官 UI 设计：从文本与图像生成原型 UI，并管理屏幕原型。",
    "The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve...": "谷歌开发者知识库 MCP 服务器赋予 AI 开发工具搜索 Google 官方开发者文档及参考指南的能力...",
    "The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve reference guides.": "谷歌开发者知识库 MCP 服务器赋予 AI 开发工具搜索 Google 官方开发者文档及参考指南的能力。",
    "The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view...": "ClickHouse MCP 服务器让 AI 能够安全地与 ClickHouse 数据库交互，提供通用的 SQL 执行与表结构分析接口...",
    "The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view table structures.": "ClickHouse MCP 服务器让 AI 能够安全地与 ClickHouse 数据库交互，提供通用的 SQL 执行与表结构分析接口。",
    "Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance template...": "执行各类云基础设施管理任务，包括：管理虚拟机 (VM) 实例、管理实例组及实例模版...",
    "Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance templates.": "执行各类云基础设施管理任务，包括：管理虚拟机 (VM) 实例、管理实例组及实例模版。",
    "Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device...": "使用自然语言查询访问企业移动设备管理数据、自动合规审计及设备数据遥测分析...",
    "Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device telemetry.": "使用自然语言查询访问企业移动设备管理数据、自动合规审计及设备数据遥测分析。",
    "Search your Google Cloud projects using natural language.": "使用自然语言轻松搜索和管理您的 Google Cloud 云项目。",
    "Perform searches on ingested data in Google-owned data stores.": "基于 Google 数据存储库中的数据执行智能检索与问答搜索。",
    "Interact with documents stored in a Firestore database using natural language.": "使用自然语言与 Firestore 云数据库中文档资源直接交互。",
    "Access resources in the Cloud Logging platform using natural language.": "使用自然语言直接访问并检索 Cloud Logging 日志平台中的资源。",
    "Manage clusters for Managed Service for Apache Kafka and Kafka Connect using natural language.": "使用自然语言管理 Google Managed Service for Apache Kafka 及 Kafka Connect 消息集群。",
    "Access resources in the Cloud Monitoring platform using natural language.": "使用自然语言直接访问 Cloud Monitoring 监控平台中的监控指标与告警资源。",
    "Manage Pub/Sub resources and publish messages. Create, list, get, update, and delete Pub/Sub topics, subscriptions, and snapshots, as well as publish messages t...": "管理 Pub/Sub 消息订阅发布资源。支持创建、查询、更新和删除主题及订阅，并发布消息...",
    "Manage Pub/Sub resources and publish messages. Create, list, get, update, and delete Pub/Sub topics, subscriptions, and snapshots, as well as publish messages to topics.": "管理 Pub/Sub 消息订阅发布资源。支持创建、查询、更新和删除主题及订阅，并发布消息。",
    "Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and...": "赋予 Antigravity 控制并检查实时 Chrome 浏览器的能力，充分利用 Chrome DevTools 的强大调试自动化分析功能...",
    "Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and DOM inspection.": "赋予 Antigravity 控制并检查实时 Chrome 浏览器的能力，充分利用 Chrome DevTools 的强大调试自动化分析功能。",
    "The Locofy MCP Server enables Locofy.ai code to be integrated and extended with your IDE.": "Locofy MCP 服务器可将 Locofy.ai 代码无缝集成并扩展到您的 IDE 中。",
    "Airweave lets agents search any app.": "Airweave 允许智能体搜索任何应用程序。",
    "Atlassian MCP Server for interacting with Atlassian products.": "用于与 Atlassian 系列产品进行交互的 Atlassian MCP 服务器。",
    "SonarQube MCP Server enables AI assistants to interact with SonarQube instances for code quality analysis, project management, and quality gate operations.": "SonarQube MCP 服务器允许 AI 助手与 SonarQube 实例进行交互，用于代码质量分析、项目管理和质量闸口 (Quality Gate) 操作。",
    "Netlify MCP Server enables AI assistants to interact with Netlify's platform for managing sites, deployments, domains, and other web development workflows.": "Netlify MCP 服务器允许 AI 助手与 Netlify 平台进行交互，以管理站点、部署、域名及其他 Web 开发工作流。",
    "Sonatype MCP server for interacting with our dependency management and security intelligence platform.": "用于与 Sonatype 依赖关系管理和安全情报平台进行交互的 MCP 服务器。",
    "The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer...": "Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维...",
    "Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands...": "提问，即得答案。该 MCP 是供您的编程智能体调用的服务器。用英语提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在...",
    "Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands in your editor.": "提问，即得答案。该 MCP 是供您的编程智能体调用的服务器。用英语提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在您的编辑器中。",
    "Search and reference over 600,000 real-world app screens, user flows, and UI patterns from Mobbin directly within your AI tools.": "直接在您的 AI 工具中搜索并参考 Mobbin 提供的 600,000+ 款真实应用界面、用户流程与 UI 设计模式。",
    "Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to...": "使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至...",
    "Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to Lovable, allowing your AI agent to interact with, create, and manage your Lovable projects directly from within your preferred AI editor or assistant.": "使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至 Lovable，允许您的 AI 智能体直接在偏好的编辑器或助手中交互、创建和管理 Lovable 项目。",
    "The GKE remote MCP server provides read write access to your GKE Kubernetes resources. It allows an AI agent to inspect and observe your environment.": "GKE 远程 MCP 服务器提供对 GKE Kubernetes 资源的读写权限。允许 AI 智能体检查并监控您的运行环境。",
    "Cloud CLI MCP Server provides tools to run gcloud and bq CLIcommands in a remote sandbox environment": "Cloud CLI MCP 服务器提供在远程沙箱环境中运行 gcloud 与 bq CLI 命令的工具集。",
    "Cloud CLI MCP Server provides tools to run gcloud and bq CLI commands in a remote sandbox environment": "Cloud CLI MCP 服务器提供在远程沙箱环境中运行 gcloud 与 bq CLI 命令的工具集。",
    "The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in...": "Apigee API hub 远程 MCP 服务器可让您管理注册在平台中的 API、版本、规范、操作、部署、属性、外部 API 以及依赖项...",
    "The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in your Apigee API hub.": "Apigee API hub 远程 MCP 服务器可让您管理注册在 Apigee API hub 中的 API、版本、规范、操作、部署、属性、外部 API 以及依赖项。",
    "The Google Home Developer MCP server allows you to search through Google Home documentation, OpenThread and Matter specifications documentation.": "Google Home Developer MCP 服务器支持检索 Google Home 文档、OpenThread 与 Matter 规范文档。",
    "The Cloud Quotas MCP server allows you to view quota allocations, request quota increases, and manage Quota Adjuster configurations.": "Cloud Quotas MCP 服务器支持查看配额分配、申请提升配额以及管理 Quota Adjuster 自动调整配置。",
    "Search MCP servers by name": "按名称搜索 MCP 服务器",
    "by Google": "Google 官方",
    "The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the us-central1 region.": "Cloud Audit Manager 远程 MCP 服务器允许您在 us-central1 区域注册项目、生成审计与范围报告，并检查资源注册状态。",
    "The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the europe-west1 region.": "Cloud Audit Manager 远程 MCP 服务器允许您在 europe-west1 区域注册项目、生成审计与范围报告，并检查资源注册状态。",
    "Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative reports with causal graphs, retrieve observability artifacts (logs, traces, metrics), and apply remediations—directly from your AI tools.": "利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题、读取带有因果图的排查报告、检索可观测性数据（日志、调用链、指标）并直接从 AI 工具中应用修复方案。",
    "Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, Salesforce, Shopify, Stripe, BigQuery, Snowflake, and more) using natural language. Read live data and write changes back (pause or enable campaigns, set budgets, upload conversions) with no SQL and no custom integrations.": "使用自然语言跨 325+ 种连接器（Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot、Salesforce、Shopify、Stripe、BigQuery、Snowflake 等）查询并处理您的营销、分析、CRM、电商及仓储数据。无需编写 SQL 或自定义集成，即可读取实时数据并回写变更（暂停或启用广告活动、设定预算、上传转化数据）。",
    "Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a single graph so agents can answer blast radius, onboarding, and dependency mapping questions by traversing real relationships instead of grepping across separate systems.": "将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全扫描发现索引到统一知识图谱中，使智能体能够通过遍历真实关联关系来回答影响面分析、新人上手和依赖关系映射等问题，而无需在分散的系统中到处搜索。",
    "Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands in your editor. No SQL. No dashboards. No tabs full of charts you forgot you opened. Try things like: - \"How many unique users signed up in the last 7 days, broken down by day?\" - \"Create an A/B test for our pricing page that measures conversion to checkout.\" - \"What are the top 5 errors in my project this week?\"": "提问，即得答案。\n该 MCP 是供您的编程智能体调用的服务器。用自然语言提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在您的编辑器中。无需编写 SQL，无需仪表盘，也无需打开一堆早已遗忘的图表标签页。\n\n试试输入类似以下内容：\n - \"过去 7 天内有多少独立用户注册，按天细分？\"\n - \"为我们的定价页面创建一个 A/B 测试，衡量结账转化率。\"\n - \"本周我的项目中排名前 5 的错误是什么？\"",
    "Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to Lovable so you can create projects and workspaces, send build instructions to the Lovable agent, inspect generated code via diffs and file trees, read and write project knowledge, manage Postgres databases and connectors, and deploy apps directly from your AI tools.": "使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至 Lovable，让您可以创建项目和工作区、向 Lovable 智能体发送构建指令、通过差异对比和文件树检查生成的代码、读写项目知识库、管理 Postgres 数据库与连接器，并直接从 AI 工具中部署应用程序。",
    "Let your agents talk to your Splunk data. Ask what broke, why, and what changed -- in plain English -- and agents search your events, surface the saved searches and lookups that matter, and write the SPL for you.": "让您的智能体与 Splunk 数据对话。用自然语言询问发生了什么故障、原因何在以及有什么变动，智能体即可搜索您的事件、调出关键的已存搜索和查询表，并为您自动编写 SPL 查询语句。",
    "The Wiz MCP Server connects multiple security data sources through a central host and server setup. This creates a single, contextual view of your security posture—simplifying investigations and speeding up incident response and remediation. Wiz MCP also gives users instant access to cloud inventory, configurations, and security issues, all through a single host with just a simple prompt. By using Wiz MCP, customers can enrich security investigations with precise business context. This allows security teams to prioritize responses based on relevance, drastically improving the accuracy and effectiveness of threat mitigation.": "Wiz MCP 服务器通过中心化主机与服务器架构连接多种安全数据源，为您的安全状况提供统一的上下文全景视图，从而简化调查流程并加速安全事件的响应与修复。Wiz MCP 还让用户只需一条简单提示词即可通过单一主机即时访问云资产清册、配置和安全隐患。借助 Wiz MCP，安全团队能够利用精准的业务上下文丰富调查细节，根据相关度确定响应优先级，大幅提升威胁排查与缓解的准确度与效率。",
    "Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table metadata, execute SQL queries, generate time-series forecasts, and perform contribution analysis directly from your AI tools.": "使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集以搜索数据表、检查表元数据、执行 SQL 查询、生成时间序列预测，并直接从 AI 工具中进行归因贡献分析。",
    "The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.": "AlloyDB for PostgreSQL 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群与实例、管理用户权限、创建和恢复备份、导入导出数据以及执行 SQL 查询。",
    "Manage Google Cloud resources with gcloud and bq CLI tools in a remote sandbox environment": "在远程沙箱环境中借助 gcloud 和 bq 命令行工具管理 Google Cloud 资源",
    "The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.": "Cloud SQL 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复备份、导入导出数据以及执行 SQL 查询。",
    "The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development environments and AI agent platforms.": "Spanner 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 Spanner 工具，以创建、管理和查询 Spanner 分布式数据库资源。",
    "The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in your API hub instance - including creating, reading, updating, and deleting them - and search across resources, using natural language.": "Apigee API hub 远程 MCP 服务器可让您使用自然语言管理注册在 API hub 实例中的 API、版本、规范、操作、部署、属性、外部 API 和依赖项（涵盖增删改查操作），并在各类资源之间进行全局搜索。",
    "Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural language queries, run saved Looks, create and manage dashboards, and perform instance health checks within your Looker environment.": "将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够在 Looker 环境中通过自然语言执行查询、运行已存报表 (Looks)、创建和管理仪表盘，并执行实例健康状况检查，实现数据探索与内容管理。",
    "Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search for data assets, retrieve detailed metadata such as schemas and ownership, and explore aspect types across your distributed data.": "将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器支持搜索数据资产、检索表结构和归属关系等详细元数据，并跨分布式数据探索切面类型，实现高效的数据发现与治理。",
    "Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries, inspecting table schemas, and troubleshooting database performance issues directly from your AI tools.": "使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库，直接从 AI 工具中执行 SQL 查询、检查表结构并排查数据库性能问题。",
    "The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma design files.": "Dev Mode MCP 服务器将 Figma 深度引入您的工作流中，为根据 Figma 设计文件生成前端代码的 AI 智能体提供关键的设计信息与设计上下文。",
    "The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and interaction capabilities for developers and tools.": "GitHub MCP 服务器提供与 GitHub API 的无缝集成，为开发者和工具赋予高级自动化与深度交互能力。",
    "Manage your Neon backend with the Neon MCP Server: Lakebase Postgres, branching, Object Storage, Functions, and the AI Gateway": "借助 Neon MCP 服务器管理您的 Neon 后端：支持 Lakebase Postgres、分支管理、对象存储、函数计算以及 AI 网关",
    "The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with different Stripe services.": "Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用丰富的工具集与各类 Stripe 支付及账单服务进行交互。",
    "Interact with Redis key-value stores": "与 Redis 键值存储进行交互",
    "The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add-ons, databases, and more.": "Heroku 平台 MCP 服务器支持与 Heroku 云资源进行无缝交互，允许大语言模型读取、管理并运维应用程序、附加组件 (Add-ons)、数据库等资源。",
    "The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and upsert/search data in your Pinecone indexes.": "Pinecone MCP 服务器允许 AI 工具检索 Pinecone 文档、配置向量索引、结合索引结构生成代码，并在 Pinecone 索引中执行数据插入/更新 (Upsert) 与相似度检索。",
    "Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and working with database schema in your Supabase projects.": "将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置信息、执行 SQL 查询、管理边缘函数 (Edge Functions)，并对 Supabase 项目中的数据库表结构进行操作。",
    "Interact with your Harness account using natural language. This MCP server lets AI agents inspect and manage CI/CD pipelines, executions, services, environments, connectors, feature flags, cloud costs, security findings, chaos experiments, and other Harness platform resources.": "使用自然语言与您的 Harness 账户交互。该 MCP 服务器让 AI 智能体能够检查并管理 CI/CD 流水线、任务执行、服务、运行环境、连接器、特性开关 (Feature Flags)、云成本、安全隐患、混沌工程实验等各类 Harness 平台资源。",
    "A Model Context Protocol server that provides structured thinking and reasoning capabilities for LLM conversations.": "为大语言模型会话提供结构化思考与递进推理能力的 MCP 服务器。",
    "The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code samples, and best practices. By grounding your AI assistant in our official resources, it can generate more accurate, reliable, and useful code.": "Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档、代码示例及最佳实践。通过以官方权威资源为依据，让 AI 助手能够生成更加准确、可靠且实用的地图代码。",
    "This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE or LLM and get curated tracing examples, best practices and Arize support!": "该 MCP 服务器为大语言模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 支持服务的通道。将其连接到您的 IDE 或大模型，即可获取精选调用链跟踪示例、最佳实践与 Arize 官方支持！",
    "The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments, evaluate APIs, and automate workflows through natural language interactions.": "Postman MCP 服务器将 Postman 与 AI 工具连接，让 AI 智能体能够通过自然语言交互访问工作区、管理接口集合与环境变量、评估 API 并在工作流中实现自动化。",
    "The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen details. See https://stitch.withgoogle.com/docs for more details.": "Stitch MCP 服务器允许 AI 智能体与 Stitch 进行感官 UI 设计交互：支持根据文本和图像生成界面原型，并访问项目与屏幕细节。详情请参阅 https://stitch.withgoogle.com/docs。",
    "The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve information for Google's products such as Firebase, Google Cloud, Android, Maps, and more. By connecting your AI application straight to our official library of documentation, it ensures the code and guidance you receive are up-to-date and based on authoritative context.": "谷歌开发者知识库 MCP 服务器赋予 AI 开发工具检索 Google 官方开发者文档的能力，可查询 Firebase、Google Cloud、Android、Maps 等 Google 系列产品的官方资料。通过将 AI 应用直连官方文档库，确保您获取的代码与开发指导始终保持最新并具备权威上下文依据。",
    "The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view backup & billing details, allowing agentic tooling to leverage ClickHouse's high-performance analytical capabilities.": "ClickHouse MCP 服务器允许智能体安全地与 ClickHouse 数据库交互。它提供了统一的接口以执行 SQL 查询、探索数据分布并查看备份与账单明细，使智能体工具能够充分发挥 ClickHouse 卓越的高性能分析能力。",
    "Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance templates, manage disks and snapshots, retrieve information about reservations and commitments.": "执行一系列云基础设施管理任务，涵盖：管理虚拟机 (VM) 实例、管理实例组管理器与实例模板、管理磁盘和快照，以及检索资源预留与承诺使用折扣信息。",
    "Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device management data into broader automated workflows.": "使用自然语言查询访问企业移动设备管理数据，包括设备机队状态、合规策略自动审计，并将设备管理数据无缝整合到更广泛的自动化工作流中。",
    "Discover, manage, and audit organization policies and custom constraints across your Google Cloud resources using natural language.": "使用自然语言在您的 Google Cloud 资源中发现、管理和审计组织策略及自定义约束条件。",
    "Create, inspect, restrict, and manage the lifecycle of API keys in your Google Cloud projects using natural language.": "使用自然语言在您的 Google Cloud 项目中创建、检查、设置限制条件并管理 API 密钥的生命周期。",
    "Access Personalized Service Health events impacting Google Cloud products and services relevant to your projects using natural language.": "使用自然语言访问与您的项目直接相关的 Google Cloud 产品和服务健康事件 (Personalized Service Health)。",
    "The Unified Maintenance MCP server allows you to discover and query planned disruptive maintenance events across Google Cloud resources.": "Unified Maintenance MCP 服务器允许您发现并查询 Google Cloud 各项云资源计划内的中断性维护事件。",
    "Interact with your Neo4j graph database using natural language. This MCP server connects directly to your Neo4j instance to explore your graph schema, run read and write Cypher queries, and inspect nodes, relationships, and paths directly from your AI tools.": "使用自然语言与您的 Neo4j 图数据库交互。该 MCP 服务器直接连接到您的 Neo4j 实例，以便从 AI 工具中探索图谱表结构、执行读写 Cypher 查询，并检查节点、关系和路径。",
    "Author, run, and maintain mabl end-to-end tests from your AI tools. Connect to your mabl workspaces to generate and edit tests, trigger cloud or local runs, diagnose failures with AI analysis, and query results across environments — with every run and its evidence retained in mabl for auditability and compliance.": "直接从 AI 工具中编写、运行并维护 mabl 端到端测试。连接至您的 mabl 工作区即可生成并编辑测试用例、触发云端或本地运行、通过 AI 分析诊断失败原因并跨环境查询测试结果，所有运行记录和证据均留存在 mabl 中以满足审计与合规要求。",
    "Connect your Miro boards to AI assistants. This MCP server allows summarizing and searching boards, creating and updating board items (sticky notes, shapes, frames, connectors), generating Mermaid diagrams, and acting on board comments - all while respecting existing Miro permissions and access controls.": "将您的 Miro 白板连接至 AI 智能体。该 MCP 服务器支持总结与搜索白板内容、创建和更新白板元素（便签、形状、框架、连线）、生成 Mermaid 流程图并处理白板批注评论，全程严格遵守 Miro 现有的权限与访问控制机制。",
    "Search the live web and extract content from URLs directly in Antigravity. Parallel provides relevant search results and readable page content for your agent. Free to get started, with no API key required.": "直接在 Antigravity 中搜索实时网络并从网址提取页面内容。Parallel 为您的智能体提供相关的搜索结果与清晰可读的网页内容。无需 API 密钥，可直接免费上手体验。",
    "The Grafana Cloud MCP server is a remotely hosted Model Context Protocol (MCP) server that lets external AI agents connect directly to your Grafana Cloud data. MCP-compatible clients can query metrics, logs, and other observability data from your Grafana environment without any local installation.": "Grafana Cloud MCP 服务器是一款远程托管的 MCP 服务器，允许外部 AI 智能体直连您的 Grafana Cloud 数据。兼容 MCP 的客户端无需任何本地安装，即可从 Grafana 环境中查询指标、日志及其他可观测性数据。",
    "Give your agent real-time web search and content retrieval. This MCP server connects to Exa's search API so you can run web searches, read full page content as clean markdown, and run multi-step research agents for list-building and enrichment directly from your AI tools.": "为您的智能体赋予实时网络搜索与内容检索能力。该 MCP 服务器连接至 Exa 搜索 API，让您可以直接从 AI 工具中执行网络搜索、将完整网页内容作为纯净 Markdown 阅读，并运行多步骤研究智能体以构建清单和补充数据。",
    "Use natural language to find hosts, review detections, search events, and perform other security operations across your Falcon environment. CrowdStrike MCP securely connects AI applications to Falcon platform capabilities through the Model Context Protocol (MCP).": "使用自然语言在您的 Falcon 环境中查找主机、查看威胁检测、搜索安全事件并执行其他安全运维操作。CrowdStrike MCP 通过 MCP 协议将 AI 应用程序安全连接至 Falcon 平台能力。",
    "Interact with your Vercel projects using natural language. Vercel MCP allows AI tools to search Vercel documentation, inspect projects and deployments, analyze deployment and build logs, and manage supported Vercel resources securely.": "使用自然语言与您的 Vercel 项目交互。Vercel MCP 允许 AI 工具安全地检索 Vercel 文档、检查项目与部署状态、分析部署和构建日志，并管理受支持的 Vercel 云资源。",
    "Connect to FactSet AI-Ready Data to search and read institutional-grade financial data using natural language. This MCP server provides unified access to company fundamentals, consensus estimates, global prices, ownership, M&A transactions, debt capital structure, supply chain relationships, funds/ETFs, and unstructured content directly from your AI tools.": "连接至 FactSet AI-Ready Data，使用自然语言搜索并阅读机构级金融数据。该 MCP 服务器直接从您的 AI 工具中提供对公司基本面、分析师一致预期、全球行情报价、股权结构、并购交易、债务资本结构、供应链上下游关系、基金/ETF 以及非结构化研报内容的统一访问。",
    "Stand up matters, shape workspace schema, govern access, and analyze usage in RelativityOne. This MCP server allows you to securely connect to your RelativityOne instance to search and locate content, create and edit matters, workspaces, and clients, manage user and group permissions, and generate usage reports using natural language.": "在 RelativityOne 中建立案件、定制工作区结构、治理访问权限并分析使用情况。该 MCP 服务器允许您使用自然语言安全连接至 RelativityOne 实例以搜索定位内容、创建和编辑案件、工作区及客户信息、管理用户与用户组权限，并生成使用情况审计报告。",
    "Connect to Daloopa to discover companies, series, get company fundamentals, search financial documents, and get stock prices. Access verified financial data and KPIs from SEC filings, investor presentations, and earnings reports with source traceability.": "连接至 Daloopa 以发现企业、分析时间序列、获取公司财务基本面、检索金融文档并获取股票行情。访问来自 SEC 监管申报、投资者推介材料及财报电话会议的可追溯源头的已验证财务指标与 KPI。",
    "Search and retrieve real-time financial and stock market data from Finnhub using natural language. This MCP server connects to your Finnhub account to access stock quotes, historical OHLCV candles, company profiles, standardized financial statements (balance sheets, income statements, cash flow), earnings call transcripts, analyst estimates and price targets, SEC filings, ETF and mutual fund holdings, forex, crypto, and economic indicators directly from your AI tools.": "使用自然语言从 Finnhub 搜索并检索实时金融与股市数据。该 MCP 服务器连接至您的 Finnhub 账户，直接从 AI 工具中访问股票实时报价、历史 K 线 (OHLCV)、公司概况、标准化财务报表（资产负债表、利润表、现金流量表）、财报电话会议纪要、分析师预期与目标价、SEC 监管文件、ETF/共同基金持仓、外汇、加密货币及宏观经济指标。",
    "Search and retrieve comprehensive financial and corporate data from S&P Global using natural language. This MCP server connects to S&P Global Market Intelligence (via Kensho) to query company profiles, identifiers (CUSIP, ISIN), financial statements (balance sheets, income statements, cash flows), historical stock prices, market capitalization, earnings call transcripts, M&A transactions, funding rounds, consensus analyst estimates, and executive profiles directly from your AI tools.": "使用自然语言从标普全球 (S&P Global) 搜索并检索全面的金融与企业数据。该 MCP 服务器连接至标普全球市场情报（通过 Kensho），直接从 AI 工具中查询企业概况、证券标识符 (CUSIP、ISIN)、财务报表（资产负债表、利润表、现金流表）、历史股价、市值、财报会议纪要、并购交易、融资轮次、分析师一致预期及高管履历。",
    "Explore deep global markets data and financial analytics from LSEG (London Stock Exchange Group). This MCP server connects your AI tools to LSEG Financial Analytics (LFA) to price bonds and bond futures, analyze yield and credit curves, evaluate FX spot and forward carry trades, value options with full Greeks, and access IBES consensus estimates, company fundamentals, historical pricing, and macroeconomic indicators.": "探索来自伦敦证券交易所集团 (LSEG) 的深度全球金融市场数据与财务分析。该 MCP 服务器将您的 AI 工具连接至 LSEG 金融分析平台 (LFA)，用于对债券和国债期货统一定价、分析收益率与信用利差曲线、评估外汇即期与远期套息交易、计算期权完整希腊字母风控指标 (Greeks)，并调取 IBES 市场一致预期、公司基本面、历史行情与宏观经济指标。",
    "Bring Harvey's legal intelligence into your AI tools for general legal inquiries, Vault project analysis, and specialized knowledge source research. The Harvey MCP server lets you ask general legal questions, analyze documents in your Vault projects, and query specialized legal research knowledge sources.": "将 Harvey 法律智能深度集成到您的 AI 工具中，用于日常法律咨询、Vault 项目分析及专业法律知识库检索。Harvey MCP 服务器允许您提出综合法律问题、分析 Vault 专案文档并检索专业法律研究知识源。",
    "Search Guidepoint's expert network for interview transcripts, browse curated event catalogs, and retrieve your personal event schedule. This MCP server also allows you to manage your event participation by registering for, requesting approval for, or canceling upcoming Guidepoint events directly from your AI tools.": "在 Guidepoint 专家网络中搜索访谈纪要、浏览精选行业活动目录并获取您的个人活动日程。该 MCP 服务器还允许您直接从 AI 工具中管理活动参与事项，包括报名、申请审批或取消即将举行的 Guidepoint 专家会议。",
    "Access institutional-grade financial data in your AI tools, delivering fundamentals, ratios, KPIs, segments, adjusted metrics, SEC filings, earnings calls, and market quotes within minutes of earnings.": "在您的 AI 工具中访问机构级金融数据，在企业财报发布后数分钟内即可极速呈实体基本面、财务比率、关键 KPI、业务分部数据、调整后口径指标、SEC 监管申报文件、业绩电话会记录以及实时行情报价。",
    "Connect with your Docusign account using natural language. This MCP server allows you to search and locate Docusign envelopes, templates, and documents, read item details and metadata, create and update envelopes, and trigger or cancel workflow instances directly from your AI tools.": "使用自然语言连接至您的 Docusign 账户。该 MCP 服务器让您能够直接在 AI 工具中搜索并定位 Docusign 签署信封、合同模板与文档、读取详细信息与元数据、创建和更新签署信封，并触发或取消电子签署工作流实例。",
    "LegalZoom's MCP connector gives users instant access to legal product information, business formation guidance, and on-demand attorney consultations, all without leaving the conversation.": "LegalZoom MCP 连接器让用户无需离开对话，即可即时获取法律产品资讯、公司设立注册指导以及按需律师专业咨询服务。",
    "Search and retrieve documents from your NetDocuments repository using natural language. This MCP server allows AI tools to securely search documents and emails, filter by metadata, and read document contents and details while respecting your existing NetDocuments permissions and governance controls.": "使用自然语言在 NetDocuments 文档库中搜索并检索文档。该 MCP 服务器允许 AI 工具安全检索文档与电子邮件、按元数据筛选并阅读文档内容及详情，全程严格遵循您现有的 NetDocuments 权限与数据治理控制。",
    "Interact with your iManage Work platform using natural language. This MCP server connects to your iManage account to search workspaces, folders, and documents, inspect document profiles and version histories, read document contents, and manage legal and knowledge work workflows directly from your AI tools.": "使用自然语言与您的 iManage Work 平台交互。该 MCP 服务器连接至您的 iManage 账户，直接从 AI 工具中搜索工作区、文件夹与文档、检查文档属性与版本历史记录、阅读文档内容并管理法律与知识工作流。",
    "Search and manage Salesforce records from your Salesforce remote MCP server. Connect to your Salesforce instance to search across objects (SOSL), execute SOQL queries, inspect object schemas, traverse related records, and create, update, or delete records.": "通过 Salesforce 远程 MCP 服务器搜索并管理 Salesforce 业务记录。连接至您的 Salesforce 实例以跨对象搜索 (SOSL)、执行 SOQL 结构化查询、检查对象表结构、遍历关联记录，并创建、更新或删除各类业务记录。",
    "Civil legal guidance for people navigating court without a lawyer. This MCP server provides educational guidance for self-represented litigants in U.S. civil legal matters across all 50 states, including case intake assessments, procedural deadline calculations, and prioritized next-step guidance directly from your AI tools.": "为未聘请律师亲自出庭的当事人提供民事诉讼指导。该 MCP 服务器为全美 50 个州参与民事诉讼的无律师当事人提供指导，直接在您的 AI 工具中提供案件受理评估、诉讼程序期限计算以及按优先级排序的下一步诉讼行动指南。",
    "Intelligent DevSecOps automation for your development workflow, powered by natural language. Connects your AI coding agent (Antigravity) to 150+ integrated DevOps tools via MCP — security scanning, pipeline generation, compliance auditing, and documentation, all via plain-English commands without leaving the IDE. Source code analysis runs locally; only structured results are returned to the portal.": "基于自然语言驱动的研发工作流智能化 DevSecOps 自动化套件。通过 MCP 将您的 AI 编程智能体 (Antigravity) 连接至 150+ 款集成 DevOps 工具——无需离开 IDE，仅凭纯自然语言指令即可完成安全扫描、流水线生成、合规审计与技术文档撰写。源码分析完全在本地运行，仅向门户回传结构化结果。",
    "Forge is an AI-powered platform that automates the earliest, most time-consuming phase of software development — the \"Day 0\" planning that typically takes weeks of meetings, documents, and back-and-forth. Exposes project/repo linking, PRD/BRD/architecture artifact retrieval, work-order management, commit/PR automation, and CI/CD pipeline tools directly to your AI coding agent.": "Forge 是一款 AI 驱动的研发平台，致力于实现软件开发最早期、最耗时的阶段自动化——即通常需要耗费数周开会、撰写文档和反复沟通的 \"Day 0\" 规划阶段。直接向您的 AI 编程智能体开放项目/代码仓库关联、PRD/BRD/架构产物检索、工单管理、代码提交/PR 自动化以及 CI/CD 流水线工具。",
    "Bring Endor Labs security into your AI tools. With this MCP server, you can check dependency safety before adding a new package, scan your open source dependencies for vulnerabilities and malware, find leaked secrets accidentally committed in your Git history, run static analysis (SAST) on your code, and perform AI security reviews on your code changes.": "将 Endor Labs 安全防护能力引入您的 AI 工具中。借助该 MCP 服务器，您可以在引入新依赖包之前检查其安全性、扫描开源依赖中的已知漏洞与恶意软件、发现意外提交到 Git 历史记录中的泄露机密、对代码执行静态应用安全测试 (SAST)，并对代码变更进行 AI 安全审查。",
    "Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and performance analysis.": "赋予 Antigravity 控制并检查实时运行的 Chrome 浏览器的能力，全面调用 Chrome DevTools 的强大功能以实现高可靠的自动化、深度代码调试与页面性能分析。",
    "Agent Settings": "智能体设置",
    "Loading custom agents...": "正在加载自定义智能体...",
    "Loading metrics...": "正在加载指标数据...",
    "Loading models...": "正在加载驱动模型...",
    "Loading skills...": "正在加载技能...",
    "No message prompts available": "无消息提示可用",
    "General": "通用常规",
    "Advanced": "高级",
    "Advanced settings": "高级设置",
    "Model Settings": "模型设置",
    "Model": "模型",
    "Models Tab": "模型选项卡",
    "Select Model": "选择模型",
    "Model Name:": "模型名称：",
    "Chat Model Metadata": "聊天模型元数据",
    "Max Tokens": "最大 Token 数",
    "Tokens": "Token 消耗",
    "Token Usage": "Token 使用量",
    "Strict Mode": "严格模式",
    "Always Ask": "总是询问",
    "Always Allow": "总是允许",
    "Always Deny": "总是拒绝",
    "Agent Decides": "智能体决策",
    "Agent always asks for review.": "智能体始终会要求您进行审查。",
    "Agent will always ask for your permission before running terminal commands locally and will always request for a review when making changes.": "智能体在本地运行终端命令前总是会征求您的许可，并且在进行更改时总是会请求审查。",
    "Agent will decide when to ask for review based on task complexity and user preference.": "智能体将根据任务复杂性和用户偏好自主决定何时请求审查。",
    "Agent will execute tasks directly. Use for simple tasks that can be completed faster": "智能体将直接执行任务。适用于可以更快完成的简单任务。",
    "Allow List Terminal Commands": "终端命令白名单",
    "Deny List Terminal Commands": "终端命令黑名单",
    "Browser URL Allowlist": "浏览器 URL 白名单",
    "Enable Browser Tools": "启用浏览器工具",
    "Enable Terminal Sandbox": "启用终端沙箱",
    "Review Policy": "审查策略",
    "Terminal execution policy": "终端执行策略",
    "Browser Javascript Execution Policy": "浏览器 JS 执行策略",
    "Browser user profile path": "浏览器用户配置文件路径",
    "Always run": "始终运行",
    "Ask every time": "每次都询问",
    "Ask first": "先询问",
    "Never run": "永不运行",
    "Allow Once": "允许一次",
    "Allow This Conversation": "允许本次对话",
    "Allow Globally": "全局允许",
    "Deny": "拒绝",
    "Actual behavior": "实际行为",
    "Expected behavior": "预期行为",
    "Steps to Reproduce": "重现步骤",
    "Feedback Type": "反馈类型",
    "Priority action": "优先级操作",
    "Secure mode enabled state": "安全模式启用状态",
    "Security": "安全",
    "Extensions": "扩展",
    "Keybindings": "键位绑定",
    "Keyboard Shortcuts": "键盘快捷键",
    "Theme": "主题",
    "Choose your theme": "选择您的主题",
    "Notification Settings": "通知设置",
    "Enable Notifications": "启用通知",
    "Telemetry": "遥测数据",
    "Enable Telemetry": "启用遥测",
    "Shell Integration": "Shell 集成",
    "Enable Shell Integration": "启用 Shell 集成",
    "Demo Mode (Beta)": "演示模式 (Beta)",
    "Enable Demo Mode (Beta)": "启用演示模式 (Beta)",
    "When enabled, your UI will be slightly modified to ensure more consistent demos. This is only recommended for demo purposes. In most cases, you can run \"Antigravity: Start Demo Mode\" and \"Antigravity: Stop Demo Mode\" to control this switch and update your ~/.gemini/antigravity data directory.": "启用后，您的 UI 将进行微调，以确保演示效果的一致性。仅建议用于演示目的。在大多数情况下，您可以运行 \"Antigravity: Start Demo Mode\" 和 \"Antigravity: Stop Demo Mode\" 命令来控制此开关并更新您的数据目录。",
    "Workspace API": "工作区 API",
    "Enable Workspace API": "启用工作区 API",
    "Choose your preferred terminal and review policies.": "选择您偏好的终端和审查策略。",
    "Predict the location of your next edit and navigates you there with a tab keypress.": "预测您下一次编辑的位置，并按 Tab 键导航至该处。",
    "Quickly add and update imports with a tab keypress.": "通过 Tab 键快速添加和更新导入。",
    "Get notified when the agent needs your attention or completes a task.": "当智能体需要您的注意或完成任务时获得通知。",
    "Artifacts are created when the agent performs more complex, longer running tasks while in Planning mode.": "当智能体在规划模式下执行更复杂、耗时更长的任务时，会创建交付件 (Artifacts)。",
    "Choose your preferred terminal and review policies": "选择您偏好的终端和审查策略",
    "Set the speed of tab suggestions": "设置 Tab 建议的速度",
    "Show suggestions when typing in the editor": "在编辑器中键入时显示建议",
    "Predict the location of your next edit": "预测下一次编辑的位置",
    "Configure Your Editor": "配置您的编辑器",
    "Configure your editor settings below.": "在下方配置您的编辑器设置。",
    "Model Credits": "模型额度",
    "Available AI credits": "可用 AI 额度",
    "Purchase Credits": "购买额度",
    "Insufficient AI Credits": "AI 额度不足",
    "Model quota reached": "模型配额已用完",
    "Troubleshooting guide": "故障检测与排查指南",
    "GLOBAL": "全局应用",
    "Notifications": "通知设置",
    "Models": "驱动模型",
    "Customizations": "个性化定制",
    "Tab": "Tab 键补全",
    "When toggled on, Antigravity collects usage data to help Google enhance performance and features.": "开启后，反重力智能编程将收集使用数据，以帮助 Google 改进性能和功能。",
    "Marketing Emails": "营销邮件",
    "Receive product updates, tips, and promotions from Google Antigravity via email.": "通过电子邮件接收来自 Google 反重力智能编程的产品更新、提示和促销信息。",
    "ACCOUNT": "账户",
    "Your Plan: Google AI Pro": "您的计划：Google AI Pro",
    "You can upgrade to the Google AI Ultra plan to receive the highest rate limits.": "您可以升级到 Google AI Ultra 计划以获得最高的速率限制。",
    "Upgrade": "升级",
    "Enable AI Credit Overages": "启用 AI 额度超量使用",
    "When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.": "开启后，当您的模型配额耗尽时，反重力智能编程将使用您的 AI 额度来满足模型请求。反重力智能编程始终会先使用您的模型配额，然后再使用 AI 额度。",
    "MODEL QUOTA": "模型配额",
    "Refreshes in": "刷新倒计时：",
    "hours": "小时",
    "minutes": "分钟",
    "View your available model quota and AI credits. Model quota refreshes periodically based on your plan. Enable AI Credit Overages to continue using models when your quota is exhausted.": "查看您可用的模型配额和 AI 额度。模型配额会根据您的计划定期刷新。启用 AI 额度超量使用，以便在配额耗尽时继续使用模型。",
    "When enabled, enforces settings that prevent the agent from autonomously running targeted exploits and requires human review for all agent actions. Visit antigravity.google/docs/strict-mode for details.": "启用后，将强制执行相关设置，防止智能体自主运行针对性漏洞利用，并要求对所有操作进行人工审查。访问 antigravity.google/docs/strict-mode 了解详情。",
    "Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.": "指定智能体在请求审查交付件时的行为。交付件(Artifact)是智能体为了提供更丰富的交互体验而生成的文档。",
    "Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content.": "始终继续 - 智能体从不请求审查。这能最大化自主性，但在不安全或被注入内容上运行的风险也最高。",
    "Agent Decides - Agent will decide when to ask for review based on task complexity and user preference.": "智能体决策 - 智能体将根据任务复杂程度及用户偏好决定何时请求审查。",
    "Asks for Review - Agent always asks for review.": "请求审查 - 智能体始终会请求审查。",
    "Asks for Review": "请求审查",
    "Always Proceeds": "始终继续",
    "Always Proceed": "始终继续",
    "Command Auto Execution": "命令自动执行",
    "Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command.": "始终继续 - 执行终端命令前从不请求确认（黑名单除外）。提供最强免干预运行能力，但风险也最高。",
    "Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list).": "请求审查 - 执行终端命令之前总是请求确认（白名单除外）。",
    "Request Review": "请求审查",
    "To modify notification settings, open your operating system's system preferences.": "要修改通知设置，请打开基于操作系统的系统偏好设置。",
    "Open System Preferences": "打开系统偏好设置",
    "When enabled, Agent can use browser tools to open URLs, read web pages, and interact with browser content. This allows the Agent access to important (and often critical) knowledge and methods of validation, but any browser integration does increase exposure to external malicious parties for security exploits.": "启用后可使用浏览器工具互动网页。提供验证知识途径，但也加大了遭遇外部网站页面挂马和网络越权等各路安全劫持风险口子。",
    "Disabled - Agent will never run Javascript code in the browser.": "已禁用 - 智能体绝不会在浏览器中运行 Javascript 代码。",
    "Request Review - Agent will always stop to ask for permission to run Javascript code in the browser.": "请求审查 - 智能体在浏览器中运行 Javascript 代码前，始终会停下来征求您的许可。",
    "Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser. This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.": "始终继续 - 智能体在浏览器中运行 Javascript 代码前不会停下来征求您的许可。这赋予了智能体执行复杂操作的最大自主性，但也使安全漏洞暴露风险最高。",
    "Control which URLs the browser can access. Add domains or full URLs to the allowlist.": "控制浏览器可以访问的 URL。将域名或完整 URL 加入允许列表。",
    "+ Add": "+ 添加",
    "hour": "小时",
    "minute": "分钟",
    "SUGGESTIONS": "建议",
    "Suggestions in Editor": "编辑器内建议",
    "Tab Speed": "Tab 建议速度",
    "Fast": "快",
    "Slow": "慢",
    "Highlight newly inserted text after accepting a Tab completion.": "高亮接受 Tab 补全后新插入的文本",
    "Highlight After Accept": "接受后高亮",
    "Tab to Import": "通过 Tab 快速导入",
    "NAVIGATION": "导航",
    "Tab to Jump": "按 Tab 键实现快速跳转",
    "Tab Gitignore Access": "Tab 访问 .gitignore",
    "Allow Tab to view and edit the files in .gitignore. Use with caution if your .gitignore lists files containing credentials, secrets, or other sensitive information.": "允许使用 Tab 键查看和编辑 .gitignore 文件。如果您的 .gitignore 文件列出了包含凭证、密钥或其他敏感信息的文件，请谨慎使用",
    "When enabled, Agent will use IDE's shell integration to detect and report terminal command execution. When disabled, the agent will use its own shell. Restart the application for this to take effect.": "开启后，智能体将利用 IDE 的 Shell 集成来探测并上报终端命令的执行情况。禁用后，智能体将使用其自带的 Shell 环境。重新启动应用程序后方可生效。",
    "Agent auto-executes commands matched by an allow list entry. For Unix shells, an allow list entry matches a command if its space-separated tokens form a prefix of the command's tokens. For PowerShell, the entry tokens may match any contiguous subsequence of the command's tokens.": "智能体将自动执行与白名单条目相匹配的命令。对于 Unix 系统 Shell，如果白名单条目的空格分隔分段组成了命令分段的前缀，则视为匹配。对于 PowerShell，分段令牌可以匹配命令中任何连续的子序列。",
    "Agent asks for permission before executing commands matched by a deny list entry. The deny list follows the same matching rules as the allow list and takes precedence over the allow list.": "智能体在执行与黑名单条目匹配的命令前会先征得您的许可。黑名单遵循与白名单相同的匹配规则，且其优先级高于白名单。",
    "Agent Non-Workspace File Access": "智能体非工作区文件访问权限",
    "Allow Agent to view and edit files outside of the current Workspace automatically. Use with caution: this provides the Agent access to additional potentially-relevant information, but also allows the Agent to access credential files, secrets, and other files outside of the Workspace that could be targeted in prompt injection attacks or other exploits by malicious actors.": "允许智能体自动查看并编辑当前工作区之外的文件。请谨慎使用：这赋予了智能体访问额外潜在相关信息的权限，但也允许其访问凭证文件、机密私钥以及工作区之外的其他敏感文件，这些文件可能会成为恶意攻击者进行提示词注入攻击或其他漏洞利用的目标。",
    "Auto-Open Edited Files": "自动打开编辑过的文件",
    "Open files in the background if agent creates or edits them": "如果智能体创建或编辑了文件，则在后台自动打开它们",
    "AUTOMATION": "自动化",
    "HISTORY": "历史记录",
    "Terminal Command Auto Execution": "终端命令行自动执行",
    "• Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content.": "• 始终继续 - 智能体绝不主动请求审查。这能最大化智能体的工作效率和自主性，但也伴随着在不安全或被注入污染的交付件上运行的极高风险。",
    "• Agent Decides - Agent will decide when to ask for review based on task complexity and user preference.": "• 智能体决策 - 智能体将根据任务的复杂程度及用户偏好，自行判断并决定何时请求审查。",
    "• Asks for Review - Agent always asks for review.": "• 请求审查 - 智能体始终会在下一步操作前，严格向您请求审查与确认。",
    "• Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command.": "• 始终继续 - 智能体在执行终端命令前从不请求确认（黑名单中的命令除外）。这赋予了智能体最高效的免干预持续运转能力，但也极具风险，可能导致其执行高危系统命令。",
    "• Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list).": "• 请求审查 - 只要不在您设定的白名单中，智能体在执行任何终端命令之前都会始终请求您的明确许可。",
    "Note: A change to this setting will only apply to new messages sent to Agent. In-progress responses will use the previous setting value.": "注意：对于此项设置的更改，仅对之后新发送给智能体的消息起效。正在进行的响应将沿用此前的设置规则。",
    "Customize Global Skills": "自定义全局技能",
    "Skill Custom Paths": "技能自定义路径",
    "In addition to the custom skills folder, Antigravity will search the following paths in order to find skills for the agent.": "除了自定义技能文件夹之外，反重力智能引擎还将按照顺序搜索以下路径，以为智能体加载查找相应的技能组件。",
    "• Disabled - Agent will never run Javascript code in the browser.": "• 已禁用 - 智能体绝不会在浏览器中运行 Javascript 代码。",
    "• Request Review - Agent will always stop to ask for permission to run Javascript code in the browser.": "• 请求审查 - 智能体在浏览器中运行 Javascript 代码前，始终会停下来征求您的许可。",
    "• Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser. This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.": "• 始终继续 - 不会停下来征求在浏览器中执行 JS 的权限。这赋予了智能体执行复杂操作的最大自主性，但安全漏洞暴露风险也最高。",
    "Agent auto-executes commands matched by an allow list entry. For Unix shells, an allow list entry matches a command if its space-separated tokens form a prefix of the command's tokens. For PowerShell, the entry tokens may match any contiguous subsequence of the command tokens.": "智能体会自动执行与允许列表条目匹配的命令。对于 Unix shell，如果命令的空格分隔标记形成允许列表条目标记的前缀，则视为匹配。对于 PowerShell，允许列表条目标记可以匹配命令标记中的任何连续子序列。",
    "File Access": "设备文件访问权",
    "Allow Agent to view and edit files outside of the current workspace automatically. Use with caution: this provides the Agent access to additional potentially-relevant information, but also allows the Agent to access credential files, secrets, and other files outside of the workspace that could be targeted in prompt injection attacks or other exploits by malicious actors.": "允许智能体自动查看和编辑当前工作区之外的文件。请谨慎使用：这使智能体能够访问更多可能相关的信息，但也可能让智能体接触到凭证文件、密钥和其他工作区外的文件，这些文件可能被恶意行为者利用进行提示注入攻击或其他形式的利用。",
    "Open files in the background if Agent creates or edits them": "如果智能体创建或编辑了文件，则在后台自动打开它们。",
    "When enabled, Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.": "开启后，智能体将能感知到其修改产生的代码检查(Lint)错误，并可能在不询问用户的情况下自动修复它们。",
    "When enabled, the agent will be able to access past conversations to inform its responses.": "启用后，智能体将能够访问过去的对话记录，以为其响应提供参考。",
    "When enabled, the agent will be able to access its knowledge base to inform its responses and automatically generate knowledge items in the background. Disabling this will prevent the agent from accessing existing knowledge items, but will not delete them.": "启用后，智能体将能够访问其知识库以辅助生成响应，并在后台自动创建知识条目。禁用此功能将阻止智能体访问现有知识条目，但不会将其删除。",
    "Explain and Fix in Current Conversation": "解释并修复当前对话",
    "When enabled, \"Explain and Fix\" actions will continue in the current conversation instead of starting a new one.": "启用后，\"解释并修复\"操作将在当前对话中继续，而不是开启一个新的对话。",
    "Open Agent on Reload": "重新加载时打开智能体",
    "Open Agent panel on window reload": "窗口重新加载时自动打开智能体面板。",
    "Enable Sounds for Agent": "启用智能体的声音通知",
    "When enabled, Antigravity will play a sound when Agent finishes generating a response.": "启用后，当 Agent 完成生成响应时，Antigravity 会播放声音。",
    "Auto-Expand Changes Overview": "自动展开更改概览",
    "When enabled, the Changes Overview toolbar will automatically expand when Agent finishes generating a response.": "启用后，当 Agent 完成生成响应时，更改概览工具栏将自动展开。",
    "[Dev] GCP Project ID": "[开发] GCP 项目 ID",
    "GCP Project ID for enterprise features.": "用于连接 Google Cloud Platform 企业级特性的项目 ID。",
    "my-gcp-project-id": "我的-GCP-项目-ID",
    "Advanced Settings": "高级设置",
    "Permissions": "权限",
    "Actions the agent may always perform without asking.": "智能体始终可以执行的操作，无需询问。",
    "Actions the agent may never perform.": "智能体绝不可执行的操作。",
    "Actions the agent must always ask before performing.": "智能体在执行前必须始终询问的操作。",
    "Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience. • Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content. • Agent Decides - Agent will decide when to ask for review based on task complexity and user preference. • Asks for Review - Agent always asks for review.": "指定智能体在请求审查交付件时的行为。交付件(Artifact)是智能体为提供更丰富的对话体验而创建的文档。 \n• 始终继续 - 智能体从不请求审查。这能最大化自主性，但在不安全或被注入内容上运行的风险也最高。 \n• 智能体决策 - 智能体将根据任务复杂程度及用户偏好决定何时请求审查。 \n• 请求审查 - 智能体始终会请求审查。",
    "• Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command. • Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list). Note: A change to this setting will only apply to new messages sent to Agent. In-progress responses will use the previous setting value.": "• 始终继续 - 执行终端命令前从不请求确认（黑名单除外）。这赋予了智能体最强免干预持续运行能力，但执行高危命令的风险也最高。 \n• 请求审查 - 执行终端命令之前总是请求确认（白名单除外）。 \n\n注意：对此项设置的更改，仅对之后新发送给智能体的消息生效。正在进行中的响应将沿用此前的设置规则。",
    "Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.": "智能体将能感知到其修改产生的代码检查(Lint)错误，并可能在不询问用户的情况下自动修复它们。",
    "View your available model quota. Quota refreshes periodically based on your plan.": "查看您可用的模型配额。配额将根据您的计划定期刷新。",
    "day": "天",
    "days": "天",
    "Model Quota": "模型配额",
    "AI Credit": "AI 额度",
    "AI Credits": "AI 额度",
    "Changes the base URL on each extension page. You must restart Antigravity to use the new marketplace after changing this value.": "更改每个扩展页面的基础 URL。更改此值后，您必须重启 Antigravity 才能使用新的市场。",
    "Marketplace Gallery URL": "市场展示厅 URL",
    "Changes the base URL for marketplace search results. You must restart Antigravity to use the new marketplace after changing this value.": "更改市场搜索结果的基础 URL。更改此值后，您必须重启 Antigravity 才能使用新的市场。",
    "SELECTION ACTIONS": "选择操作",
    "Show Selection Actions": "显示选择操作",
    "Show \"Edit\" and \"Chat\" buttons when selecting text in the editor.": "在编辑器中选择文本时，显示“编辑”和“聊天”按钮。",
    "Editor Settings": "编辑器设置",
    "To modify editor settings, open Settings within the editor window.": "要修改编辑器设置，请在编辑器窗口中打开设置。",
    "Open Editor Settings": "打开编辑器设置",
    "Theme Mode": "主题模式",
    "Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser.": "始终继续 - 智能体在浏览器中运行 Javascript 代码前，不会停下来征求您的许可。",
    "This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.": "这赋予了智能体执行复杂操作和验证的最强自主权，但也会增加安全漏洞风险。",
    "Chrome Binary Path": "Chrome 程序路径",
    "Path to the Chrome/Chromium executable. Leave empty for auto-detection.": "Chrome/Chromium 可执行文件的路径。留空则启用自动检测。",
    "Absolute path to the Chrome/Chromium executable": "Chrome/Chromium 可执行文件的绝对路径",
    "Browser User Profile Path": "浏览器用户配置路径",
    "Custom path for the browser user profile directory. Leave empty for default (~/.gemini/antigravity-browser-profile).": "自定义浏览器用户配置文件目录的路径。留空则使用默认路径 (~/.gemini/antigravity-browser-profile)。",
    "~/.gemini/antigravity-browser-profile": "~/.gemini/antigravity-browser-profile",
    "Browser CDP Port": "浏览器 CDP 端口",
    "Port number for Chrome DevTools Protocol remote debugging. Leave empty for default (9222).": "用于 Chrome DevTools Protocol 远程调试的端口号。留空则使用默认值 (9222)。",
    "By using this app, you agree to its": "使用本应用即表示您同意其",
    "Terms of Service": "服务条款",
    "Provide Feedback": "提供反馈",
    "Sign out": "退出登录",
    "Global": "全局应用",
    "Settings -": "设置 - ",
    "Autocomplete": "Tab 键补全",
    "Settings - Account": "设置 - 账户",
    "Settings - Agent": "设置 - 智能体",
    "Settings - Notifications": "设置 - 通知设置",
    "Settings - Models": "设置 - 驱动模型",
    "Settings - Customizations": "设置 - 个性化定制",
    "Settings - Browser": "设置 - 浏览器",
    "Settings - Autocomplete": "设置 - Tab 键补全",
    "Settings - Editor": "设置 - 编辑器",
    "Settings-": "设置-",
    "agent": "智能体",
    "AGENT": "智能体",
    "account": "账户",
    "models": "驱动模型",
    "MODELS": "驱动模型",
    "notifications": "通知设置",
    "NOTIFICATIONS": "通知设置",
    "customizations": "个性化定制",
    "CUSTOMIZATIONS": "个性化定制",
    "autocomplete": "Tab 键补全",
    "AUTOCOMPLETE": "Tab 键补全",
    "editor": "编辑器",
    "EDITOR": "编辑器",
    "Auto Execution": "自动执行",
    "Manage": "管理",
    "Snooze": "暂停提点",
    "Start": "开始",
    "AI Shortcuts": "AI 快捷键",
    "On": "开启",
    "Off": "关闭",
    "Security Preset": "安全预设",
    "Choose a predefined security preset for the agent. This controls terminal auto-execution policy, and file access policy.": "为智能体选择预定义的安全预设。这控制了终端自动执行策略和文件访问策略。",
    "Controls the actions the agent can take.": "控制智能体可以执行的操作。",
    "Learn more about": "了解更多关于",
    "Learn more about Turbo Mode": "了解关于极速模式 (Turbo Mode) 的更多信息",
    "Learn more about Full Machine": "了解关于全机访问 (Full Machine) 的更多信息",
    "Learn more about Custom": "了解关于自定义 (Custom) 的更多信息",
    "Tool Permissions": "工具权限",
    "Modify permissions for file, terminal, and MCP tools.": "修改文件、终端和 MCP 工具的权限。",
    "Whether the agent asks you to review its documents.": "智能体是否要求您审查其文档。",
    "You have used some of your weekly limit, it will fully refresh in less than a minute.": "您已使用部分每周额度限制，将在不到 1 分钟后完全刷新。",
    "You have used all of your weekly limit, it will fully refresh in less than a minute.": "您已用尽每周额度限制，将在不到 1 分钟后完全刷新。",
    "You have reached your weekly limit, it will fully refresh in less than a minute.": "您已达到每周额度限制，将在不到 1 分钟后完全刷新。",
    "Refreshes in less than a minute.": "不到 1 分钟后刷新。",
    "Refreshes in less than a minute": "不到 1 分钟后刷新",
    "in less than a minute.": "不到 1 分钟后刷新。",
    "in less than a minute": "不到 1 分钟后刷新",
    "Learn more about Default": "了解关于 Default 的更多信息",
    "Local Permissions": "本地权限",
    "Inherits from global settings. Local permissions have higher priority.": "继承自全局设置。本地权限具有更高的优先级。",
    "File Access Rules": "文件访问规则",
    "Configure allowed and denied paths for file reads and writes.": "配置允许和禁止的读写文件路径。",
    "Network Access Rules": "网络访问规则",
    "Configure allowed and denied URLs for reading.": "配置允许和禁止访问的读取 URL 地址。",
    "Terminal Commands": "终端命令",
    "Configure allowed terminal commands.": "配置允许的终端命令。",
    "Commands Outside Sandbox": "沙箱外执行命令",
    "Configure allowed commands outside the sandbox.": "配置允许在沙箱之外执行的命令。",
    "MCP Tools": "MCP 工具",
    "Configure external tools via Model Context Protocol.": "通过模型上下文协议 (Model Context Protocol) 配置外部工具。",
    "Appearance": "外观",
    "Configure default behaviors, skills, and MCP servers.": "配置默认行为、技能预设和 MCP 服务器。",
    "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "下方的细目展示了源自技能预设、规则和 MCP 等个性化定制的 Token 使用量。如果超出了预算额度，大型的定制组件将会被自动截断。",
    "The breakdown below shows token usage from customizations like rules, skills, and MCP. If a budget is exceeded, large rules are demoted to path pointers and large customizations are excluded automatically.": "下方的细目展示了规则、技能预设和 MCP 等个性化定制项的 Token 占用情况。如果超出预算，大型规则将被降级为路径指针，大型自定义项将被自动排除。",
    "Customization token budget exceeded. Large customizations are excluded from context.": "自定义项 Token 预算已超出。大型自定义项已从上下文中排除。",
    "Rules and customization token budgets exceeded. Large rules are demoted to path pointers and large customizations are excluded from context.": "规则与自定义项 Token 预算已超出。大型规则已降级为路径指针，大型自定义项已从上下文中排除。",
    "Rules token budget exceeded. Large rules are demoted to path pointers.": "规则 Token 预算已超出。大型规则已降级为路径指针。",
    "Demoted": "已降级",
    "of the customization budget is available.": "的个性化定制预算额度可用。",
    "100.0% of the customization budget is available.": "100.0% 的个性化定制预算额度可用。",
    "No customizations found for this workspace.": "当前工作区未找到个性化定制。",
    "You currently don't have any MCP Servers installed. Add an MCP server above": "您当前尚未安装任何 MCP 服务器。请在上方添加一个 MCP 服务器。",
    "You currently don't have any MCP Servers installed.": "您当前尚未安装任何 MCP 服务器。",
    "Add an MCP server above": "请在上方添加一个 MCP 服务器。",
    "Add an MCP server above.": "请在上方添加一个 MCP 服务器。",
    "an MCP server above": "在上方添加一个 MCP 服务器",
    "Manage project folders,": "管理项目文件夹，",
    "agent settings,": "智能体设置，",
    "and permissions.": "与权限。",
    "Build With Google Plugins": "基于 Google 插件构建",
    "Customize": "自定义",
    "Shortcuts": "快捷键",
    "Not in Project": "不在项目中",
    "Configure the agent's visual theme and display preferences.": "配置智能体的视觉主题与显示偏好设置。",
    "Chat Settings": "会话设置",
    "Verbose agent chat": "详细智能体输出",
    "Display and preserve intermediate thinking steps": "显示并保留中间思维过程步骤",
    "Select light, dark, or inherit system settings.": "选择浅色、深色或继承系统偏好设置。",
    "Light": "浅色",
    "Dark": "深色",
    "Inherit System": "继承系统",
    "Light Theme": "浅色主题",
    "Dark Theme": "深色主题",
    "Preset": "主题预设",
    "Background": "背景颜色",
    "Foreground": "前景颜色",
    "Accent": "强调颜色",
    "Default Light": "默认浅色",
    "Default Dark": "默认深色",
    "Manage your plan, credentials, and general preferences.": "管理您的订阅计划、凭证及常规偏好设置。",
    "You can upgrade to a Google AI Ultra plan to receive the highest rate limits.": "您可以升级到 Google AI Ultra 计划以获取最高的速率限制。",
    "Email": "电子邮箱",
    "Agent settings and permissions for conversations outside of projects.": "配置项目之外会话的智能体设置与权限。",
    "Inherits from": "继承自 ",
    "global settings": "全局设置",
    ". Local permissions have higher priority.": "。本地权限具有更高的优先级。",
    "Open": "打开",
    "Agent Behavior": "智能体行为",
    "Configure global allowed and denied resource permissions.": "配置全局允许和禁止的资源访问权限。",
    "Project-Specific Settings": "特定项目设置",
    "Modify scoped permissions, folders, and agent settings like Sandbox and Terminal Command Execution.": "修改特定范围的权限、文件夹和智能体设置，如沙箱以及终端命令执行。",
    "Go To Projects": "前往项目列表",
    "File Permissions": "文件权限",
    "Network Permissions": "网络权限",
    "Terminal & Tooling Permissions": "终端与工具集权限",
    "App Settings": "应用设置",
    "Manage application settings.": "管理应用设置。",
    "Prevent Sleep": "防止休眠",
    "Prevent the computer from sleeping while the app is running.": "防止计算机在应用程序运行时进入休眠状态。",
    "Keep In Menu Bar": "常驻系统菜单栏/托盘",
    "The app will be accessible from the menu bar and will keep running in the background when all windows are closed.": "当所有窗口都关闭时，依然可以通过菜单栏/系统托盘访问应用程序，且保持后台运行。",
    "Browser Settings": "浏览器设置",
    "Configure browser subagent. It requires": "配置浏览器子代理。它需要安装 ",
    "Configure the browser subagent. It requires": "配置浏览器子代理。它需要安装 ",
    "Google Chrome": "Google Chrome",
    "to be installed.": "。",
    "to be installed": "",
    "It requires Google Chrome to be installed.": "它需要安装 Google Chrome。",
    "It requires Google Chrome to be installed": "它需要安装 Google Chrome",
    "requires Google Chrome to be installed.": "需要安装 Google Chrome。",
    "requires Google Chrome to be installed": "需要安装 Google Chrome",
    "to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "。您可以通过在对话框中输入 /browser 来调用浏览器子代理。",
    "The browser subagent can be invoked by typing /browser in the conversation input box.": "您可以通过在对话框中输入 /browser 来调用浏览器子代理。",
    "Configure browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "配置浏览器子代理。它需要安装 Google Chrome。您可以通过在对话框中输入 /browser 来调用浏览器子代理。",
    "Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "配置浏览器子代理。它需要安装 Google Chrome。您可以通过在对话框中输入 /browser 来调用浏览器子代理。",
    "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "控制智能体是否可以在浏览器中运行自定义 JavaScript 以自动执行复杂的浏览器操作。",
    "Actuation Permissions": "操作执行权限",
    "Browser Actuation Rules": "浏览器操作执行规则",
    "Configure allowed and denied URLs for browser actuation.": "配置允许和禁止浏览器执行操作的 URL 规则。",
    "Manage project folders, agent settings, and permissions.": "管理项目文件夹、智能体设置与权限。",
    "File Reads": "文件读取",
    "File Writes": "文件写入",
    "Allow/deny agent read access to specific files or directories.": "允许/拒绝智能体对特定文件或目录的读取访问。",
    "Allow/deny agent write access to specific files or directories.": "允许/拒绝智能体对特定文件或目录的写入访问。",
    "Read URLs": "读取 URL",
    "Allow/deny agent read access to specific URLs or domains.": "允许/拒绝智能体对特定 URL 或域名的读取访问。",
    "Allow/deny specific terminal commands.": "允许/拒绝特定的终端命令。",
    "Allow/deny agent command execution outside the sandbox.": "允许/拒绝智能体在沙箱外执行命令。",
    "External tools the agent can call via Model Context Protocol.": "智能体可通过模型上下文协议 (Model Context Protocol) 调用的外部工具。",
    "Allow": "允许",
    "Ask": "询问",
    "Add": "添加",
    "e.g., https://example.com": "例如：https://example.com",
    "e.g., npm test": "例如：npm test",
    "Enter tool name or server...": "输入工具名称或服务器...",
    "Configure AI models and view your quota.": "配置 AI 模型并查看您的配额。",
    "Default": "默认 (Default)",
    "Full Machine": "全机访问 (Full Machine)",
    "Turbo Mode": "极速模式 (Turbo Mode)",
    "Custom": "自定义 (Custom)",
    "Requires manual review for all terminal commands and file accesses outside of the working folders.": "需要对工作区文件夹外的所有终端命令和文件访问进行人工审查。",
    "All terminal commands require review. The agent can read or write to any file in the machine.": "所有终端命令均需审查。智能体可以读写机器上的任意文件。",
    "Disables all safety barriers for maximal iteration velocity.": "禁用所有安全屏障以获得最大迭代速度。",
    "Manually customize individual settings.": "手动自定义单项设置。",
    "Group By": "分组方式",
    "Project": "项目",
    "Status": "状态",
    "None": "无",
    "Sort Conversations": "排序会话",
    "Last Updated": "最近更新",
    "Alphabetical (A-Z)": "字母顺序 (A-Z)",
    "Date Added": "添加日期",
    "Subtitles": "副标题",
    "Worktree": "工作区树 (Worktree)",
    "No Subtitle": "无副标题",
    "Danger Zone": "危险区域",
    "Delete Project": "删除项目",
    "Permanently delete this project and all of its conversations.": "永久删除该项目及其所有会话记录。",
    "Outside of folders file access policy": "文件夹外文件访问策略",
    "Configures how the agent tries to access files outside of its working folders.": "配置智能体在尝试访问其工作文件夹外的文件时的策略。",
    "Require Review": "需要审查",
    "Enable Sandbox Mode (Preview)": "启用沙箱模式 (预览)",
    "Restricts agent tools to a secure, isolated local sandbox.": "限制智能体工具必须在安全、隔离的本地沙箱中运行。",
    "Block all browser JavaScript execution.": "禁用所有浏览器 JavaScript 执行。",
    "Prompt for approval before running browser scripts.": "在运行浏览器脚本前请求批准。",
    "Allow full browser script execution without prompting.": "始终允许执行浏览器脚本，无需提示。",
    "Browser Actuation Permissions": "浏览器操作执行权限",
    "Execute URLs": "执行 URL",
    "Allow/deny agent browser actuation access to specific URLs.": "允许/拒绝智能体访问特定 URL 执行浏览器操作。",
    "Keyboard shortcuts for quick navigation and control.": "用于快速导航和控制的键盘快捷键。",
    "RECOMMENDED": "推荐",
    "Open Conversation Picker": "打开会话选择器",
    "Open File Search": "打开文件搜索",
    "Focus Input": "聚焦输入框",
    "Go Forward": "前进",
    "File Picker": "文件选择器",
    "Select Previous Conversation": "选择上一个会话",
    "Select Next Conversation": "选择下一个会话",
    "Toggle Model Selector": "切换模型选择器",
    "Start Voice Recording": "开始录音",
    "Stop Voice Recording": "停止录音",
    "Toggle Voice Recording": "切换录音",
    "Find in Pane": "在面板中查找",
    "LAYOUT CONTROLS": "布局控制",
    "Toggle Auxiliary Pane": "切换辅助面板",
    "Catppuccin": "Catppuccin 猫咪",
    "Dracula": "Dracula 德古拉",
    "One Light": "One Light 浅色",
    "Solarized Light": "Solarized Light 浅色",
    "One Dark Pro": "One Dark Pro 深色",
    "Tokyo Night": "Tokyo Night 东京之夜",
    "Monokai": "Monokai",
    "Useful for typical development with an emphasis on security. It prioritizes safety over speed by requiring manual approval for all terminal commands and files outside the project directory.": "适用于以安全为重点的典型开发。它通过要求对项目目录外的所有终端命令和文件进行人工批准，将安全性置于速度之上。",
    "Useful for tasks that require file access across your full machine. The agent has full read and write access to all local files, but all proposed terminal commands require manual review and approval before running.": "适用于需要访问整机文件的任务。智能体对所有本地文件拥有完全的读写权限，但所有拟执行的终端命令在运行前均需人工审查和批准。",
    "A high-risk mode that disables all safety barriers. The agent operates with full system access, auto-executes all terminal commands, and reads or writes to all local files without review prompts.": "一种禁用所有安全屏障的高风险模式。智能体在拥有完全系统访问权限下运行，自动执行所有终端命令，读写所有本地文件且无需审查提示。",
    "Artifact Review Policy": "交付件审查策略",
    "Controls whether terminal commands require your approval before running.": "控制终端命令在运行前是否需要您的批准。",
    "Within each group, models share a weekly limit and a 5-hour limit. Quota is consumed proportionally to the cost of the tokens. Thus, limits will last longer with shorter tasks or using more cost-effective models. The 5-hour limit smooths out aggregate demand to fairly distribute global capacity across all users, while your weekly limit is tied directly to your individual tier.": "在每个群组内，模型共享每周限制和 5 小时限制。配额的消耗与 Token 的成本成正比。因此，通过较短的任务或使用更具性价比的模型，限制额度可以维持得更久。5 小时限制可以平滑总体需求，以便在所有用户之间公平分配全局容量，而您的每周限制则直接与您的个人层级挂钩。",
    "Gemini Models": "Gemini 模型",
    "Weekly Limit": "每周限制",
    "Five Hour Limit": "五小时限制",
    "Claude and GPT models": "Claude 和 GPT 模型",
    "Conversation Width": "会话宽度",
    "Configure the maximum width of the conversation panel.": "配置会话面板的最大宽度。",
    "Narrow": "窄",
    "Wide": "宽",
    "Execution": "执行",
    "Queued Messages": "队列消息",
    "Configure when follow-up messages are sent.": "配置后续消息的发送时机。",
    "Queue After Turn": "回合结束后排队",
    "Send Immediately": "立即发送",
    "Configure agent execution, queued message delivery, and permissions.": "配置智能体执行、队列消息发送与权限。",
    "Queue": "排队入列",
    "Application": "应用设置",
    "Manage Antigravity app settings.": "管理 Antigravity 应用程序设置。",
    "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "在所有窗口关闭时，保持应用程序可从菜单栏/托盘访问并在后台运行。",
    "Automatic Check for Updates": "自动检查更新",
    "Automatic check for updates": "自动检查更新",
    "Automatic Updates": "自动更新",
    "Automatic 检查更新": "自动检查更新",
    "Automatic 檢查更新": "自动检查更新",
    "Automatic": "自动",
    "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "当有新版本可用时，自动提示您重启应用。禁用后，您可以从应用菜单中手动检查更新。",
    "Remote Control": "远程控制",
    "Enable Remote Control": "启用远程控制",
    "Work with local agents from another device.": "从其他设备使用本地智能体。",
    "Models & Usage": "驱动模型与用量",
    "Manage your model quota and credits.": "管理您的模型配额与额度。",
    "Plan": "计划",
    "Your Plan:": "您的计划:",
    "Your Plan": "您的计划",
    "Weekly Limit Remaining": "剩余每周限制",
    "Five Hour Limit Remaining": "剩余五小时限制",
    "Previous Pane Tab": "上一个面板标签页",
    "Next Pane Tab": "下一个面板标签页",
    "← Previous Pane Tab": "← 上一个面板标签页",
    "→ Next Pane Tab": "→ 下一个面板标签页",
    "Inherit General": "继承通用设置",
    "Inherits your General settings when working in this project.": "在此项目中工作时继承您的通用设置。",
    "Add to Chat/Quote": "添加到会话/引用",
    "Toggle Terminal": "切换终端",
    "Queue until after the current turn.": "在当前回合结束后排队。",
    "Queue until after the current turn": "在当前回合结束后排队",
    "Interrupt the agent and send immediately.": "打断智能体并立即发送。",
    "Interrupt the agent and send immediately": "打断智能体并立即发送",
    "Enter Queues after the turn": "Enter 回合结束后排队",
    "Queues after the turn": "回合结束后排队",
    "Alt+Enter Sends immediately": "Alt+Enter 立即发送",
    "Sends immediately": "立即发送",
    "Alt+Enter On empty prompt, sends next in queue": "Alt+Enter 提示词为空时，发送队列中的下一条",
    "On empty prompt, sends next in queue": "提示词为空时，发送队列中的下一条",
    "On empty prompt, sends next in queue.": "提示词为空时，发送队列中的下一条。",
    "There are no customizations enabled.": "当前未启用任何个性化定制。",
    "No MCP servers installed": "未安装 MCP 服务器",
    "No MCP servers installed.": "未安装 MCP 服务器。",
    "Use Add MCP to browse the store, or add a custom server via the MCP config.": "使用“添加 MCP”浏览商店，或通过 MCP 配置添加自定义服务器。",
    "Browse and enable plugins from the Build with Google catalog.": "从“基于 Google 构建”目录中浏览并启用插件。",
    "Browse and enable plugins from the Build With Google catalog.": "从“基于 Google 构建”目录中浏览并启用插件。",
    "Permanently delete this project and all of its session history.": "永久删除该项目及其所有会话记录。",
    "Also includes Global Settings when working in this project.": "在此项目中工作时，还包括“全局设置”。",
    "Each project also includes Global Settings when working in this project.": "每个项目在此项目中工作时还包括“全局设置”。",
    "Also includes": "还包括",
    "when working in this project.": "（在此项目中工作时）",
    "Learn more about Inherit General": "了解更多关于继承通用设置的信息",
    "Learn more about Inherit common settings": "了解更多关于继承通用设置的信息",
    "active conversations.": "个活跃会话。",
    "active conversations": "个活跃会话",
    "active conversation.": "个活跃会话。",
    "active conversation": "个活跃会话",
    "Plan Review Policy": "计划审查策略",
    "Type / and select plan to have the agent generate a plan.": "输入 / 并选择 plan 让智能体生成计划。",
    "to have the agent generate a plan.": "让智能体生成计划。",
    "Proceed with Plan": "按计划继续",
    "Contrast": "对比度",
    "Strong": "高对比 (Strong)",
    "Browser settings have moved": "浏览器设置已迁移",
    "Browser settings have moved to the Browser section of General settings.": "浏览器设置已迁移至通用设置中的浏览器部分。",
    "Go to General settings": "前往通用设置",
    "Global Permissions": "全局权限",
    "Inherits your Global Permissions when working in this project.": "在此项目中工作时继承您的全局权限。",
    "Also includes Global Permissions when working in this project.": "在此项目中工作时还包括“全局权限”。",
    "Automations do not inherit Global Permissions.": "自动化任务不继承全局权限。",
    "Rules": "规则",
    "Hide breakdown": "收起细目",
    "Hide breakdowns": "收起细目",
    "Show breakdown": "显示细目",
    "Show breakdowns": "显示细目",
    "Hide tools": "收起工具",
    "(Optional)": "（可选）",
    "(Optional) Tell us more or type your reason...": "（可选）请补充更多信息或输入原因...",
    "(Optional) Tell us more...": "（可选）请补充更多信息...",
    "(Optional, defaults to main)": "（可选，默认为 main）",
    "(empty)": "（空）",
    "(subagent)": "（子智能体）",
    "/ 1M tokens": "/ 百万 Token",
    "Accept Step": "接受此步骤",
    "Cancel Step": "取消此步骤",
    "Reject Step": "拒绝此步骤",
    "Excluded Step": "已排除步骤",
    "Access": "访问权限",
    "Access grants": "权限授予",
    "Access rules": "访问规则",
    "Account connected.": "账户已连接。",
    "Actionable": "可执行",
    "Active Context Start": "活跃上下文起点",
    "Active Tasks & Conversations:": "活跃任务与对话：",
    "Active token streaming duration from the language model.": "语言模型流式输出 Token 的活跃耗时。",
    "Activity": "活动",
    "Add Hook Card": "添加 Hook 卡片",
    "Add MCP Server": "添加 MCP 服务器",
    "Add Workspace": "添加工作区",
    "Add inline comment": "添加行内评论",
    "Add recent remote workspace": "添加最近的远程工作区",
    "Add them to allow future interactions": "添加它们以允许后续交互",
    "Add to Chat": "添加到对话",
    "Add to allowlist": "添加到允许列表",
    "Added (Staged)": "已添加（已暂存）",
    "Added to allowlist": "已添加到允许列表",
    "Adding...": "正在添加...",
    "Address CLs needing attention": "处理需要关注的 CL",
    "Administrator access (UAC)": "管理员权限 (UAC)",
    "Agent Edits": "智能体编辑",
    "Agent Hooks Configuration": "智能体 Hook 配置",
    "Agent Host Address": "智能体主机地址",
    "Agent Market Search Results": "智能体市场搜索结果",
    "Agent Script": "智能体脚本",
    "Agent Script Command Configuration": "智能体脚本命令配置",
    "Agent can": "智能体可以",
    "Agent can run": "智能体可运行",
    "Agent cannot modify files outside of the workspace in strict mode.": "严格模式下，智能体无法修改工作区之外的文件。",
    "Agent security mode": "智能体安全模式",
    "Agent terminated due to error": "智能体因错误而终止",
    "Agent will always ask to review in strict mode.": "严格模式下，智能体始终会请求人工审核。",
    "All": "全部",
    "All Workspaces": "所有工作区",
    "All tools (*)": "所有工具 (*)",
    "Allow creating issues and grant access to specific issues.": "允许创建 Issue 并授予对特定 Issue 的访问权限。",
    "Allow opening pull requests and grant access to specific PRs.": "允许创建 PR 并授予对特定 PR 的访问权限。",
    "Allow reading workflow runs (list, view, watch) across the whole repository.": "允许读取整个仓库的工作流运行记录（列表、查看、监听）。",
    "Allow sandboxed commands to make network requests.": "允许沙盒内的命令发起网络请求。",
    "Allows the agent to access files outside of your current workspace.": "允许智能体访问当前工作区之外的文件。",
    "Alt text:": "替代文本：",
    "Amend": "追加提交 (Amend)",
    "Amend staged changes into the current commit": "将暂存的更改追加到当前提交中",
    "Amend succeeded": "追加提交成功",
    "An error occurred while submitting your feedback. Please try again.": "提交反馈时出错，请重试。",
    "An unexpected error occurred during creation": "创建过程中发生意外错误",
    "Analyzed": "已分析",
    "Analyzed content": "已分析内容",
    "Analyzing": "正在分析",
    "Analyzing content": "正在分析内容",
    "Antigravity Interactive HTML": "Antigravity 交互式 HTML",
    "Any error messages seen when trying to log in": "尝试登录时看到的任何错误提示",
    "App version": "应用版本",
    "Approval": "审批",
    "Approve?": "是否批准？",
    "Archive Environment": "归档环境",
    "Archive Workspace": "归档工作区",
    "Archive project": "归档项目",
    "Archive conversation": "归档对话",
    "Archive This Conversation": "归档此对话",
    "Archived Only": "仅已归档",
    "Are you sure you want to delete this conversation? This action cannot be undone.": "确定要删除此对话吗？此操作无法撤销。",
    "Arguments Schema": "参数模式 (Schema)",
    "Artifact Comments": "产物评论",
    "Artifacts like Google Docs, PDFs, Office documents (Word, Excel, PowerPoint), etc. Everything else the agent creates is under Artifacts.": "例如 Google Docs、PDF、Office 文档（Word、Excel、PowerPoint）等产物。智能体创建的其他所有内容均归类在“产物”下。",
    "Ask before sensitive operations.": "执行敏感操作前先询问。",
    "Asked": "已提问",
    "Asking": "正在提问",
    "Attach the trajectory ID to the feedback form": "将轨迹 ID 附加到反馈表单",
    "Authenticating...": "正在验证身份...",
    "Authorization Required": "需要授权",
    "Auto (Preview)": "自动（预览）",
    "Auto (detected)": "自动（已检测）",
    "Auto-proceeded with": "已自动继续：",
    "Automatically decide if commands run.": "自动决定是否运行命令。",
    "Automatically expand the Changes Overview toolbar when the agent finishes generating a response.": "当智能体完成回复生成时，自动展开“更改概览”工具栏。",
    "Automations": "自动化",
    "Autonomous Mode": "自主模式",
    "Autonomous mode active: the agent works independently and does not ask questions or request new permissions.": "自主模式已开启：智能体将独立工作，不会向您提问或请求新权限。",
    "Avatar URL": "头像 URL",
    "Back to licenses": "返回许可证列表",
    "Backoff": "退避重试",
    "Baseline model quota reached": "已达基础模型配额上限",
    "Battle Mode Infos": "对战模式信息",
    "Best of N": "Best of N 择优",
    "Best of N mode is not available": "Best of N 模式不可用",
    "Best of N settings have moved": "Best of N 设置已迁移",
    "Best of N settings have moved to the Advanced section of General settings.": "Best of N 设置已移至“常规设置”下的“高级”部分。",
    "Best-of-N Ended": "Best-of-N 已结束",
    "Best-of-N Started": "Best-of-N 已开始",
    "Binary file not shown": "二进制文件未显示",
    "Blocked, needs input": "已阻塞，等待输入",
    "Bookmarked": "已添加书签",
    "Bot Name": "机器人名称",
    "Branch Changes": "分支更改",
    "Browse": "浏览",
    "Browser tools (browser_.*)": "浏览器工具 (browser_.*)",
    "Built": "已构建",
    "Built In": "内置",
    "Building": "正在构建",
    "By kind": "按类别",
    "By phase": "按阶段",
    "By step type": "按步骤类型",
    "Bytes": "字节",
    "Cache:": "缓存：",
    "Cancel Render Page Failed": "取消页面渲染失败",
    "Cancel Render Thumbnail Failed": "取消缩略图渲染失败",
    "Canceled": "已取消",
    "Canceled bookmark of": "已取消添加书签：",
    "Canceled creation of": "已取消创建",
    "Canceled deletion of": "已取消删除",
    "Canceled edit to": "已取消编辑",
    "Canceled removal of bookmark": "已取消移除书签",
    "Cannot send message to subagent.": "无法向子智能体发送消息。",
    "Capture console logs": "捕获控制台日志",
    "Capture screenshot": "截取屏幕截图",
    "Capturing": "正在捕获",
    "Cascade Config": "Cascade 配置",
    "Cascade ID": "Cascade ID",
    "Cascade ID:": "Cascade ID：",
    "Change VCS in General settings, under Advanced": "可在“常规设置 -> 高级”中更改版本控制系统 (VCS)",
    "Check again": "重新检查",
    "Chief of Staff voice mode is active": "语音助手语音模式已启用",
    "Checked command status": "已检查命令状态",
    "Checking command status": "正在检查命令状态",
    "Checking...": "正在检查...",
    "Checkpoint": "检查点",
    "Choose Region": "选择区域",
    "Choose a license": "选择许可证",
    "Choose how technical the interface should be.": "选择界面的技术细节展示程度。",
    "Choose the product skin that fits how you work.": "选择适合您工作方式的产品外观。",
    "Choose whether to be notified when the agent needs your attention or completes a task.": "选择当智能体需要您处理或完成任务时是否发送通知。",
    "Clear Search": "清除搜索",
    "Clear search (Esc)": "清除搜索 (Esc)",
    "Cleared Count": "已清理数量",
    "Click to Open Docs": "点击打开文档",
    "Click to copy URL": "点击复制 URL",
    "Click to disable tool": "点击禁用工具",
    "Click to enable tool": "点击启用工具",
    "Click to go there, drag to select a range, drag an edge to resize": "点击跳转，拖拽选择范围，拖动边缘调整大小",
    "Click to respond to the question.": "点击回答问题。",
    "Click to respond to the questions.": "点击回答问题。",
    "Click to view more": "点击查看更多",
    "Clicked": "已点击",
    "Clicked in Browser": "已在浏览器中点击",
    "Clicking": "正在点击",
    "Clicking in Browser": "正在浏览器中点击",
    "Clone current workspace into a new independent workspace": "将当前工作区克隆为新的独立工作区",
    "Close (Escape)": "关闭 (Esc)",
    "Close Settings": "关闭设置",
    "Close Terminal Tab": "关闭终端标签页",
    "Close split view and go to forked conversation": "关闭分屏视图并前往分支对话",
    "Code Change Summary": "代码变更摘要",
    "Code Context Items": "代码上下文项",
    "Code search is not available.": "代码搜索不可用。",
    "Code snippet": "代码片段",
    "Collapse All": "全部折叠",
    "Collapse Diffs": "折叠差异视图",
    "Collapse idle": "折叠空闲区间",
    "Collapse queued messages": "折叠排队消息",
    "Collapse string": "折叠字符串",
    "Collapse subagents": "折叠子智能体",
    "Command Setup Script": "命令初始化脚本",
    "Command Spec (JSON)": "命令规范 (JSON)",
    "Command:": "命令：",
    "Commands and files these agents can use.": "这些智能体可以使用的命令与文件。",
    "Commands the agent can run outside the sandbox in this workspace.": "智能体在此工作区中可在沙盒外运行的命令。",
    "Comment on Selection": "对选中内容添加评论",
    "Commented on:": "评论于：",
    "Comments unavailable at this screen size": "当前屏幕尺寸下无法使用评论功能",
    "Commit staged changes": "提交暂存的更改",
    "Commit succeeded": "提交成功",
    "Compacting": "正在压缩上下文",
    "Complete Onboarding Step": "完成引导步骤",
    "Complete verification": "完成验证",
    "Concierge": "语音助手 (Concierge)",
    "Concierge voice message failed": "语音助手消息发送失败",
    "Concierge voice mode is active": "语音助手模式已开启",
    "Concierge voice mode stopped": "语音助手模式已停止",
    "Configure Branches": "配置分支",
    "Configure GitHub access policies.": "配置 GitHub 访问策略。",
    "Configure Worktree Branches": "配置工作树分支",
    "Configure editor-specific behaviors and shortcuts.": "配置编辑器专属行为与快捷键。",
    "Configure hooks that run on agent lifecycle events.": "配置在智能体生命周期事件触发时运行的 Hook。",
    "Configure tab completion, suggestions, and navigation behavior.": "配置 Tab 补全、代码建议与导航行为。",
    "Configure the agent": "配置智能体",
    "Configure the default width of markdown artifacts.": "配置 Markdown 产物的默认显示宽度。",
    "Configure workspace-specific permissions, resources, and customizations.": "配置工作区专属的权限、资源与自定义项。",
    "Configured servers": "已配置的服务器",
    "Confirm Selection": "确认选择",
    "Confirm Undo": "确认撤销",
    "Confirm Window Reload": "确认重新加载窗口",
    "Confirming this undo action will make the following changes:": "确认此撤销操作将执行以下更改：",
    "Connecting to terminal...": "正在连接终端...",
    "Console logs": "控制台日志",
    "Contact your administrator to set up Gemini Enterprise for this project": "请联系管理员为此项目配置 Gemini Enterprise",
    "Contents": "内容",
    "Context Menus": "右键菜单",
    "Context Summarization": "上下文摘要压缩",
    "Context Window": "上下文窗口",
    "Context usage": "上下文用量",
    "Continue": "继续",
    "Continue Response": "继续生成回复",
    "Continue with Google Cloud": "使用 Google Cloud 继续",
    "Continue your work from another device with Remote Control. Scan the QR code or open the link below.": "通过远程控制在其他设备上继续工作。请扫描二维码或打开下方链接。",
    "Conversation 1": "对话 1",
    "Conversation 2": "对话 2",
    "Conversation 3": "对话 3",
    "Conversation ID": "对话 ID",
    "Conversation Log": "对话记录",
    "对话 Log": "对话记录",
    "Conversation Name": "对话名称",
    "Conversation Sharing": "对话分享",
    "Conversation name": "对话名称",
    "Conversation unavailable": "对话不可用",
    "Copied error": "已复制错误信息",
    "Copied!": "已复制！",
    "Copy Config File Path": "复制配置文件路径",
    "Copy Image": "复制图片",
    "Copy Link": "复制链接",
    "Copy code": "复制代码",
    "Copy description": "复制描述",
    "Copy email address": "复制邮箱地址",
    "Copy error": "复制错误",
    "Copy error messages": "复制错误消息",
    "Copy error to clipboard": "复制错误到剪贴板",
    "Copy link": "复制链接",
    "Copy output": "复制输出",
    "Copy project": "复制项目",
    "Copy raw string value": "复制原始字符串值",
    "Copy response": "复制回复",
    "Copy schema JSON": "复制 Schema JSON",
    "Copy section content": "复制章节内容",
    "Copy thinking": "复制思考过程",
    "Copy this subtree JSON": "复制此子树 JSON",
    "Copy value": "复制值",
    "Copy workspace": "复制工作区",
    "Could not create project": "无法创建项目",
    "Create New": "新建",
    "Create a Plugin with the Agent": "使用智能体创建插件",
    "Create a token": "创建令牌",
    "Create fork in current workspace": "在当前工作区创建分支对话",
    "Create fork in new workspace": "在新工作区创建分支对话",
    "Create fork in shared workspace": "在共享工作区创建分支对话",
    "Create with Prompt": "通过提示词创建",
    "Created": "已创建",
    "Created a new branch on GitHub.": "已在 GitHub 上创建新分支。",
    "Created a new branch on Origin.": "已在远端 Origin 创建新分支。",
    "Created outline": "已生成大纲",
    "Creating": "正在创建",
    "Creating Chat Bot": "正在创建聊天机器人",
    "Creating Cloud Project": "正在创建云项目",
    "Creating Fork...": "正在创建分支...",
    "Creating Sidecar": "正在创建 Sidecar",
    "Creating projects for your conversations": "正在为您的对话创建项目",
    "Creating terminal...": "正在创建终端...",
    "Creating...": "正在创建...",
    "Cron expression e.g. 0 */6 * * *": "Cron 表达式，例如 0 */6 * * *",
    "Cumulative Total": "累计总计",
    "Current Workspace": "当前工作区",
    "Current workspace": "当前工作区",
    "Current parameter:": "当前参数：",
    "Custom Agent Error:": "自定义智能体错误：",
    "Custom Context Menus": "自定义右键菜单",
    "Custom Flags": "自定义实验标志 (Flags)",
    "Custom View": "自定义视图",
    "Custom agents are not available in Best of N mode.": "Best of N 模式下不可使用自定义智能体。",
    "Custom models are only supported on Linux machines.": "自定义模型仅在 Linux 设备上受支持。",
    "Customizations & Skills": "自定义与技能",
    "Customize sections": "自定义分区",
    "Cut": "剪切",
    "Dark preview": "深色预览",
    "Debug (Disabled)": "调试（已禁用）",
    "Debug (Enabled)": "调试（已启用）",
    "Debug Bundle": "调试信息包",
    "Debug Mode": "调试模式",
    "Debug bundle uploaded!": "调试信息包已上传！",
    "Decline": "拒绝",
    "Decorations": "装饰元素",
    "Default Customizations": "默认自定义项",
    "Default Workspace VCS": "默认工作区版本控制 (VCS)",
    "Definition:": "定义：",
    "Delete Data Directory": "删除数据目录",
    "Delete Handler": "删除处理器",
    "Delete Hook": "删除 Hook",
    "Delete MCP Server": "删除 MCP 服务器",
    "Delete Skill": "删除技能",
    "Delete Terminal": "删除终端",
    "Delete comment": "删除评论",
    "Delete workspace": "删除工作区",
    "Deleting": "正在删除",
    "Deleting...": "正在删除...",
    "Denied Sites": "已拒绝的站点",
    "Determines the markup language of the output.": "指定输出内容的标记语言格式。",
    "Details:": "详情：",
    "Dev mode: Localhost server automatically detected": "开发模式：已自动检测到本地服务器",
    "Developer": "开发者",
    "Developer-only tools. These settings are stored locally in this browser and do not affect other users.": "开发者专用工具。这些设置仅保存在本地，不会影响其他用户。",
    "Device Name": "设备名称",
    "Did restarting the desktop app help?": "重启桌面端应用是否解决了问题？",
    "Directories": "目录",
    "Disable Text Selection": "禁用文本选择",
    "Disabled in strict mode": "在严格模式下已禁用",
    "Discard": "放弃更改",
    "Discard unstaged changes": "放弃未暂存的更改",
    "Discover helpful skills & plugins": "发现实用的技能与插件",
    "Dismiss service announcement": "关闭服务公告",
    "Document Answers": "文档结果",
    "Documents": "文档",
    "Double-click to reset panel sizes": "双击重置面板尺寸",
    "Download PDF": "下载 PDF",
    "Download the bundle manually and share it instead:": "手动下载调试包并进行分享：",
    "Download this site as an app to get notified when the agent needs your attention or completes a task.": "将此站点安装为应用，以便在智能体需要您处理或完成任务时收到通知。",
    "Drag to resize the gutter; double-click to fit it automatically": "拖动调整分栏宽度；双击自动适应",
    "Drag to resize, double-click to reset": "拖动调整大小，双击重置",
    "Drag to select a region to comment": "拖动框选区域以添加评论",
    "Dragged in Browser": "已在浏览器中拖拽",
    "Dragging in Browser": "正在浏览器中拖拽",
    "Duration:": "耗时：",
    "Edit comment": "编辑评论",
    "Edited": "已编辑",
    "Editing": "正在编辑",
    "Embedded web preview": "内嵌网页预览",
    "Embedding Limitations": "内嵌预览限制",
    "Emphasize": "强调",
    "Empty directory": "空目录",
    "Empty log": "日志为空",
    "Empty message": "空消息",
    "Enable Best-of-2": "启用 Best-of-2 对比",
    "Enable Chat": "启用聊天",
    "Enable Notifications for Agent": "启用智能体通知",
    "Enable Overages": "启用超额使用",
    "Enable Recommended Skills": "启用推荐技能",
    "Enable Text Selection": "启用文本选择",
    "Enable fine-grained GitHub permissions and define the org, repository, and resource-level access the agent is allowed to use.": "启用细粒度 GitHub 权限，定义允许智能体访问的组织、仓库及资源级别。",
    "Enable telemetry in Settings before changing per-conversation telemetry.": "请先在“设置”中启用遥测，然后再更改单次对话的遥测选项。",
    "Encountered an error while running the plugin.": "运行插件时遇到错误。",
    "End": "结束",
    "End Snapshot": "结束快照",
    "Enlarged Mermaid diagram": "放大的 Mermaid 图表",
    "Enter Fullscreen": "进入全屏",
    "Enter Google Cloud Project Details": "输入 Google Cloud 项目详情",
    "Enter a prompt for the agent to run...": "输入要让智能体执行的提示词...",
    "Enter authorization code...": "输入授权码...",
    "Enter avatar URL (optional)": "输入头像 URL（可选）",
    "Enter bot name (optional)": "输入机器人名称（可选）",
    "Enter device name...": "输入设备名称...",
    "Enter directory path...": "输入目录路径...",
    "Enter project name...": "输入项目名称...",
    "Enter the SSO URL provided by your IT admin to connect your work account": "输入 IT 管理员提供的 SSO URL 以连接工作账户",
    "Enter workspace name (e.g., my-feature)": "输入工作区名称（例如 my-feature）",
    "Environment Actions": "环境操作",
    "Environment Status": "环境状态",
    "Equalize Split Panes": "均分拆分面板",
    "Error Details:": "错误详情：",
    "Error ID:": "错误 ID：",
    "Error Loading Models": "加载模型出错",
    "Error fetching MCP prompt": "获取 MCP 提示词出错",
    "Error loading Browser recording": "加载浏览器录屏出错",
    "Error occurred during import.": "导入过程中发生错误。",
    "Error rendering playback": "渲染回放出错",
    "Error while editing": "编辑时出错",
    "Error while editing notebook": "编辑 Notebook 时出错",
    "Error while reading notebook": "读取 Notebook 时出错",
    "Error while viewing": "查看时出错",
    "Error:": "错误：",
    "Errored": "执行出错",
    "Errors": "错误",
    "Europe": "欧洲",
    "Event:": "事件：",
    "Events": "事件",
    "Every command requires approval.": "每条命令都需要审批。",
    "Excluded": "已排除",
    "Exec": "执行",
    "Executed": "已执行",
    "Executing": "正在执行",
    "Execute JavaScript Policy": "JavaScript 执行策略",
    "Execution ID": "执行 ID",
    "Execution Metadata": "执行元数据",
    "Execution duration for this tool call (including pre/post-tool hooks and user approval prompts).": "此工具调用的执行总耗时（包括前后置 Hook 及等待用户审批的时间）。",
    "Exit Fullscreen": "退出全屏",
    "Expand All": "全部展开",
    "Expand Diffs": "展开差异视图",
    "Expand long string": "展开长字符串",
    "Expand queued messages": "展开排队消息",
    "Expand subagents": "展开子智能体",
    "Experimental model. Click to provide feedback or opt out.": "实验性模型。点击提供反馈或退出体验。",
    "Explore the plugin marketplace": "探索插件市场",
    "Explored": "已探索",
    "Exploring": "正在探索",
    "Export Artifact": "导出产物",
    "Extension Is Loading": "扩展正在加载",
    "External": "外部",
    "Extracted DOM elements": "已提取 DOM 元素",
    "Extracting DOM elements": "正在提取 DOM 元素",
    "Failed target:": "失败目标：",
    "Failed to Amend": "追加提交失败",
    "Failed to Commit": "提交失败",
    "Failed to Generate Commit Message": "生成提交信息失败",
    "Failed to Push": "推送失败",
    "Failed to approve execution": "批准执行失败",
    "Failed to approve file access": "批准文件访问失败",
    "Failed to archive workspace": "归档工作区失败",
    "Failed to build": "构建失败",
    "Failed to continue": "继续执行失败",
    "Failed to create terminal": "创建终端失败",
    "Failed to create workspace.": "创建工作区失败。",
    "Failed to create worktree": "创建工作树失败",
    "Failed to deny file access": "拒绝文件访问失败",
    "Failed to download Firebase skill.": "下载 Firebase 技能失败。",
    "Failed to edit": "编辑失败",
    "Failed to fetch diffs": "获取差异失败",
    "Failed to fork conversation": "分支对话失败",
    "Failed to get all annotations": "获取全部批注失败",
    "Failed to get annotations": "获取批注失败",
    "Failed to inspect license for this project": "检查此项目的许可证失败",
    "Failed to load comments": "加载评论失败",
    "Failed to load shared conversation": "加载分享的对话失败",
    "Failed to load some diffs": "部分差异加载失败",
    "Failed to load trajectory": "加载轨迹失败",
    "Failed to mark all as read": "全部标记为已读失败",
    "Failed to open created workspace": "打开新建的工作区失败",
    "Failed to parse settings. Fix and restart.": "解析设置失败，请修复后重启。",
    "Failed to proceed": "继续操作失败",
    "Failed to read": "读取失败",
    "Failed to read file content": "读取文件内容失败",
    "Failed to reject execution": "拒绝执行失败",
    "Failed to rename conversation": "重命名对话失败",
    "Failed to render diagram": "渲染图表失败",
    "Failed to render math": "渲染数学公式失败",
    "Failed to save project": "保存项目失败",
    "Failed to save token to ~/.env": "保存令牌至 ~/.env 失败",
    "Failed to start Best of N mode": "启动 Best of N 模式失败",
    "Failed to start conversation": "启动对话失败",
    "Failed to stop agent": "停止智能体失败",
    "Failed to stop conversation": "停止对话失败",
    "Fallback Summary Used": "已使用备用摘要",
    "Feature Environment Override": "功能环境覆盖",
    "Features": "功能特性",
    "Fetched network request": "已获取网络请求",
    "Fetched network request for page.": "已获取页面的网络请求。",
    "Fetched network requests": "已获取网络请求列表",
    "Fetched network requests for page.": "已获取页面的网络请求列表。",
    "Fetching network request": "正在获取网络请求",
    "Fetching network requests": "正在获取网络请求列表",
    "File Comments": "文件评论",
    "File Diff Comments": "文件差异评论",
    "File Tree Component is not loaded.": "文件树组件未加载。",
    "File location": "文件位置",
    "File not found": "未找到文件",
    "Files modified by the agent in this conversation": "智能体在本次对话中修改的文件",
    "Files to edit:": "待编辑文件：",
    "Finalizing transcription...": "正在完成语音转写...",
    "Find": "查找",
    "Find plugins - bundles of skills, agents, MCP servers, UI extensions and more, and install them in one click.": "查找插件（包含技能、智能体、MCP 服务器、界面扩展等组合包），并一键安装。",
    "Find skills, agents, and more in the Marketplace.": "在市场中查找技能、智能体等扩展。",
    "First Token": "首 Token (TTFT)",
    "Fit the whole trajectory": "缩放适应完整轨迹",
    "Fit to Page": "适应页面",
    "Fit to Width": "适应宽度",
    "Fold code block": "折叠代码块",
    "Folders these agents can access.": "这些智能体可以访问的文件夹。",
    "For Turn": "单轮耗时",
    "Fork Conversation": "创建对话分支 (Fork)",
    "Forked from": "分支自",
    "Forward": "前进",
    "Found references to": "已找到引用：",
    "Friday": "星期五",
    "Full Error": "完整错误信息",
    "Full access": "完整访问权限",
    "Full output written to": "完整输出已写入",
    "Generate personalized rules": "生成个性化规则",
    "Generated image preview": "生成图片预览",
    "Generations": "生成记录",
    "Generator Metadata": "生成器元数据",
    "GitHub Permissions": "GitHub 权限",
    "GitHub Personal Access Token": "GitHub 个人访问令牌 (PAT)",
    "GitHub Policies": "GitHub 策略",
    "Give each Best of N fork a full clone of your workspace, including its local commit history.": "为每个 Best of N 分支提供工作区的完整克隆（包含本地提交历史）。",
    "Give the agent awareness of lint errors created by its edits so it can fix them without explicit prompting.": "让智能体自动感知其编辑引发的 Lint 错误，无需额外提示即可自行修复。",
    "Go Back in Pane": "在面板中后退",
    "Go Forward in Pane": "在面板中前进",
    "Go to": "前往",
    "Go to Next Invocation": "前往下一次调用",
    "Go to global settings": "前往全局设置",
    "Go to the machine you are controlling and quit Antigravity. It installs pending updates the next time it starts.": "请前往受控设备并退出 Antigravity。待处理的更新将在下次启动时自动安装。",
    "Google Cloud Project ID": "Google Cloud 项目 ID",
    "Got it": "知道了",
    "Grand Total": "总计",
    "Grant create, update, or delete access to specific branches.": "授予对特定分支的创建、更新或删除权限。",
    "Grant read access to workflow runs and allow dispatching workflows on specific files and refs.": "授予工作流运行记录的读取权限，并允许在指定文件和分支上触发工作流。",
    "Group By Project": "按项目分组",
    "Group By Workspace": "按工作区分组",
    "Group name": "分组名称",
    "Hide Error": "隐藏错误",
    "Hide Thumbnail Sidebar": "隐藏缩略图侧边栏",
    "Hide Whitespace Changes": "隐藏空白字符更改",
    "Hide token": "隐藏令牌",
    "Hold": "按住",
    "Hook will only trigger if the tool name matches run_command or view_file.": "仅当工具名称匹配 run_command 或 view_file 时触发 Hook。",
    "Hook will only trigger if the tool name matches run_command.": "仅当工具名称匹配 run_command 时触发 Hook。",
    "Hook will only trigger if the tool name starts with browser_.": "仅当工具名称以 browser_ 开头时触发 Hook。",
    "Hook will trigger if any tool is executed.": "执行任何工具时均触发 Hook。",
    "Host Endpoint": "主机端点",
    "Host Environment": "宿主环境",
    "Hourly": "每小时",
    "How long a quiet interval must be before it collapses": "静默间隔达到多长时间后自动折叠",
    "How this feature would help you and other users": "此功能将如何帮助您和其他用户",
    "ID:": "ID：",
    "I prefer an immediate single response to prioritize productivity right now.": "我倾向于立即获得单个回复，以优先保障当前效率。",
    "Image Answers": "图片结果",
    "Image URL:": "图片 URL：",
    "Image attachment": "图片附件",
    "Image preview not available": "图片预览不可用",
    "Image rendering blocked (strict mode enabled)": "图片渲染已拦截（已启用严格模式）",
    "Images": "图片",
    "Importing shared conversation...": "正在导入分享的对话...",
    "In a rush": "赶时间",
    "Include default customizations, such as default skills.": "包含默认自定义项（如内置默认技能）。",
    "Include unstaged changes": "包含未暂存的更改",
    "Included by": "引入自",
    "Inherit Editor": "继承编辑器设置",
    "Inline Actions": "行内操作",
    "Inline PDF preview is not available in this environment.": "当前环境不支持内联 PDF 预览。",
    "Inline Widget": "内联小部件",
    "Initializing...": "正在初始化...",
    "Input required": "需要输入",
    "Input:": "输入：",
    "Insert in Terminal": "插入到终端",
    "Inspected commit": "已检查提交",
    "Install Antigravity IDE to run and edit your workspace scripts.": "安装 Antigravity IDE 以运行和编辑工作区脚本。",
    "Install this plugin to see the commands it adds, along with its skills, agents and MCP servers.": "安装此插件以查看其添加的命令、技能、智能体和 MCP 服务器。",
    "Installed in": "安装位置：",
    "Installing Chat Bot": "正在安装聊天机器人",
    "Instances": "实例",
    "Intent": "意图",
    "Inv": "调用",
    "Invalid Media": "无效媒体文件",
    "Invocation": "调用 (Invocation)",
    "Issue creation": "创建 Issue",
    "Issues": "Issues",
    "Italic": "斜体",
    "JavaScript Result": "JavaScript 执行结果",
    "Keeps working in this workspace. Nothing is copied.": "继续在此工作区中工作，不复制任何内容。",
    "Labs": "实验室 (Labs)",
    "Labs settings have moved": "实验室设置已迁移",
    "Labs settings have moved to the Advanced section of General settings.": "实验室设置已移至“常规设置”下的“高级”部分。",
    "Lanes": "泳道视图",
    "Last 7 days": "最近 7 天",
    "Last Prompt": "最后一次提示词",
    "Leave a comment": "留下评论",
    "Legal Help": "法律帮助",
    "Let the agent access past conversations to inform its responses.": "允许智能体访问历史对话记录以辅助生成更准确的回复。",
    "License Required": "需要许可证",
    "License:": "许可证：",
    "Light preview": "浅色预览",
    "List resources:": "列出资源：",
    "Load older messages": "加载更早的消息",
    "Loading Browser recording...": "正在加载浏览器录屏...",
    "Loading Notebook View...": "正在加载 Notebook 视图...",
    "Loading available plugins...": "正在加载可用插件...",
    "Loading customizations...": "正在加载自定义项...",
    "Loading events...": "正在加载事件...",
    "Loading hooks...": "正在加载 Hook...",
    "Loading installed plugins...": "正在加载已安装插件...",
    "Loading licenses...": "正在加载许可证...",
    "Loading logs...": "正在加载日志...",
    "Loading media...": "正在加载媒体...",
    "Loading plugin...": "正在加载插件...",
    "Loading plugins...": "正在加载插件...",
    "Loading token usage...": "正在加载 Token 用量...",
    "Loading trajectory...": "正在加载轨迹...",
    "Loading workspace customizations...": "正在加载工作区自定义项...",
    "Loading worktrees...": "正在加载工作树...",
    "Local Windows environment": "本地 Windows 环境",
    "Location:": "位置：",
    "Log in to use the agent": "登录以使用智能体",
    "Logs": "日志",
    "Lost connection to the language server. Agent features may not work.": "与语言服务器断开连接，智能体功能可能无法正常工作。",
    "Lost connection to the remote instance. Please wait a minute or refresh the page.": "与远程实例断开连接，请稍候或刷新页面。",
    "MCP Authentication Error:": "MCP 认证错误：",
    "MCP Install Error:": "MCP 安装错误：",
    "MCP Servers Disabled": "MCP 服务器已禁用",
    "MCP Tool:": "MCP 工具：",
    "MCP tool": "MCP 工具",
    "Manage Hooks": "管理 Hook",
    "Manage License": "管理许可证",
    "Manage Skills": "管理技能",
    "Manage fine-grained permissions for GitHub.": "管理 GitHub 细粒度权限。",
    "Manage your conversations from the companion website.": "从配套网页端管理您的对话。",
    "Manage your notification preferences.": "管理您的通知偏好设置。",
    "Managed by Enterprise Gateway": "由企业网关管理",
    "Managed by plugin": "由插件管理",
    "Manager Error": "管理器错误",
    "Manifest Changes": "清单 (Manifest) 更改",
    "Manually Captured": "手动捕获",
    "Manually Rejected": "手动拒绝",
    "Mark all as read": "全部标为已读",
    "Markdown Artifact Width": "Markdown 产物宽度",
    "Match Case (Aa)": "区分大小写 (Aa)",
    "Match Whole Word (ab)": "全字匹配 (ab)",
    "Matcher:": "匹配器：",
    "Max Tokens Until Compaction": "触发压缩的最大 Token 数",
    "Maximize Pane": "最大化面板",
    "Maximize Width": "最大化宽度",
    "Mention": "提及 (@)",
    "Mention Page": "提及页面",
    "Merge Conflict": "合并冲突",
    "Mermaid diagram": "Mermaid 图表",
    "Metadata": "元数据",
    "Migrate with Agent": "使用智能体迁移",
    "Minimize Width": "最小化宽度",
    "Mode": "模式",
    "Model Label": "模型标签",
    "Model Summarization Failed": "模型生成摘要失败",
    "Model URL": "模型 URL",
    "Modified": "已修改",
    "Modified Files": "已修改文件",
    "Modified files:": "已修改文件：",
    "Modified in": "修改于",
    "Monday": "星期一",
    "More": "更多",
    "More Actions": "更多操作",
    "More actions": "更多操作",
    "More options": "更多选项",
    "Mount Directory": "挂载目录",
    "Mouse button pressed": "已按下鼠标按键",
    "Mouse button released": "已释放鼠标按键",
    "Move to Group": "移动到分组",
    "Move to New Group": "移动到新分组",
    "Moved Mouse in Browser": "已在浏览器中移动鼠标",
    "Moving Mouse in Browser": "正在浏览器中移动鼠标",
    "Multi-conversation view is not available": "多对话视图不可用",
    "Multi-select": "多选",
    "Name workspace...": "命名工作区...",
    "Navigate to": "导航至",
    "Needs Attention": "需要处理",
    "New Agent Script": "新建智能体脚本",
    "New Group": "新建分组",
    "New Tab": "新建标签页",
    "New Terminal": "新建终端",
    "New hook name": "新 Hook 名称",
    "Next Page": "下一页",
    "Next match": "下一个匹配项",
    "Next match (Enter)": "下一个匹配项 (Enter)",
    "Next question": "下一个问题",
    "Next: Review Permissions": "下一步：审核权限",
    "Nickname": "昵称",
    "No Invocation Associated": "未关联调用记录",
    "No Invocation Metadata": "无调用元数据",
    "No Javascript Result Output": "无 JavaScript 结果输出",
    "No Plugins Available": "暂无可用插件",
    "No Prompt or Tools Data": "无提示词或工具数据",
    "No active terminals": "无活跃终端",
    "No active terminals. Click + to create one.": "暂无活跃终端，点击 + 创建一个。",
    "No background tasks": "无后台任务",
    "No browser pages open": "未打开任何浏览器页面",
    "No build files are updated.": "没有更新任何构建文件。",
    "No cascade ID provided": "未提供 Cascade ID",
    "No changes to review": "没有需要审核的更改",
    "No content available for this resource": "此资源暂无可用内容",
    "No conversations available": "暂无可用对话",
    "No custom flag matches your search.": "没有匹配搜索条件的自定义标志。",
    "No customizations match your search.": "没有匹配搜索条件的自定义项。",
    "No documents": "暂无文档",
    "No environments found": "未找到环境",
    "No events recorded": "未记录任何事件",
    "No events recorded.": "未记录任何事件。",
    "No execution metadata available for this step.": "此步骤暂无执行元数据。",
    "No file changes": "无文件更改",
    "No files or folders found": "未找到文件或文件夹",
    "No folders added yet.": "尚未添加文件夹。",
    "No groups yet": "暂无分组",
    "No internet. Agent features may not work.": "无网络连接，智能体功能可能无法使用。",
    "No matching customizations found.": "未找到匹配的自定义项。",
    "No matching flags": "未找到匹配的标志",
    "No matching plugins found.": "未找到匹配的插件。",
    "No matching project folders. Apply to use the custom URI.": "未找到匹配的项目文件夹。应用以使用自定义 URI。",
    "No model specified for Battle Mode, falling back to use current selected model": "未指定对战模式模型，将回退使用当前选中的模型",
    "No models are available for your current project or account. Please check your project settings and IAM permissions.": "当前项目或账户无可用模型，请检查项目设置与 IAM 权限。",
    "No more older messages": "没有更早的消息了",
    "No plugins available": "暂无可用插件",
    "No plugins available in the marketplace.": "插件市场中暂无可用插件。",
    "No plugins available.": "暂无可用插件。",
    "No plugins match your search.": "没有匹配搜索条件的插件。",
    "No previous worktrees": "无历史工作树",
    "No project selected": "未选择项目",
    "No project selected or project management not available.": "未选择项目或项目管理功能不可用。",
    "No projects created": "尚未创建项目",
    "No quota information available.": "暂无配额信息。",
    "No rate card for this model; showing comparable rates.": "此模型暂无费率表，当前显示参考费率。",
    "No recommended skills found in workspace": "工作区中未找到推荐技能",
    "No repositories found. Type to enter a custom path.": "未找到仓库，可直接输入自定义路径。",
    "No results": "无结果",
    "No results found.": "未找到结果。",
    "No skills available": "暂无可用技能",
    "No skills loaded.": "未加载任何技能。",
    "No skills or rules match this filter.": "没有匹配当前筛选条件的技能或规则。",
    "No skills or rules yet.": "暂无技能或规则。",
    "No steps with timestamps to place on a timeline.": "没有带时间戳的步骤可放置在时间轴上。",
    "No uploads": "暂无上传内容",
    "No workspaces found": "未找到工作区",
    "No workspaces open.": "未打开任何工作区。",
    "Non-model response token counts are estimations. The model API does not return per-message token counts.": "非模型回复的 Token 数量为估算值，模型 API 不会返回单条消息的精确 Token 计数。",
    "Not Found": "未找到",
    "Not available": "不可用",
    "Not scheduled": "未设排期",
    "Not suitable for Best-of-N": "不适合使用 Best-of-N",
    "Notebook": "Notebook",
    "Notebook cell output": "Notebook 单元格输出",
    "Notification Preferences": "通知偏好设置",
    "Number of responses": "生成回复数量",
    "One lane per kind of step, or one per step type": "按步骤大类或具体步骤类型划分泳道",
    "Only Unread": "仅未读",
    "Open Antigravity IDE": "打开 Antigravity IDE",
    "Open Commit Graph": "打开提交图谱",
    "Open Diff": "打开差异视图",
    "Open File": "打开文件",
    "Open Folder (Interactive)": "打开文件夹（交互式）",
    "Open Google Chrome on the machine running Antigravity.": "在运行 Antigravity 的设备上打开 Google Chrome。",
    "Open IDE": "打开 IDE",
    "Open MCP Config": "打开 MCP 配置",
    "Open Preview": "打开预览",
    "Open SSH connection in setup window. When finished, you will be able to select the workspace in the sidebar.": "在设置窗口中打开 SSH 连接。完成后即可在侧边栏中选择该工作区。",
    "Open Search": "打开搜索",
    "Open Trajectory Debug View": "打开轨迹调试视图",
    "Open allowlist": "打开允许列表",
    "Open extracted DOM in editor": "在编辑器中打开提取的 DOM",
    "Open files in the background if the agent creates or edits them": "当智能体创建或编辑文件时，在后台自动打开这些文件",
    "Open full view": "打开完整视图",
    "Open in Antigravity IDE": "在 Antigravity IDE 中打开",
    "Open in Browser": "在浏览器中打开",
    "Open in Built-in Browser": "在内置浏览器中打开",
    "Open in New Tab": "在新标签页中打开",
    "Open in Notebook View": "在 Notebook 视图中打开",
    "Open in Preview Pane": "在预览面板中打开",
    "Open in Preview Tab": "在预览标签页中打开",
    "Open in Remote Control": "在远程控制中打开",
    "Open in Tab": "在标签页中打开",
    "Open in Trajectory Dashboard": "在轨迹仪表中打开",
    "Open in external browser": "在外部浏览器中打开",
    "Open in new tab": "在新标签页中打开",
    "Open in new window": "在新窗口中打开",
    "Open side-by-side view": "打开并排对比视图",
    "Open the agent panel on window reload": "重新加载窗口时打开智能体面板",
    "Open with External Browser": "使用外部浏览器打开",
    "Operating System": "操作系统",
    "Organization Allowed Domains (Read-Only)": "组织允许的域名（只读）",
    "Organizations": "组织",
    "Other (write your answer)": "其他（自行输入答案）",
    "Other Customizations": "其他自定义项",
    "Other License": "其他许可证",
    "Outer App Version | Inner App Version": "外层应用版本 | 内核版本",
    "Override feature environment": "覆盖功能环境",
    "Page contents": "页面内容",
    "Page title:": "页面标题：",
    "Pages currently open in Antigravity's Browser instance are shown below.": "下方显示当前在 Antigravity 浏览器实例中打开的页面。",
    "Paste": "粘贴",
    "Paste auth code": "粘贴授权码",
    "Paste code here": "在此粘贴代码",
    "Path copied!": "路径已复制！",
    "Paths the agent can modify inside this workspace.": "智能体在此工作区内可以修改的路径。",
    "Paths the agent can read inside this workspace.": "智能体在此工作区内可以读取的路径。",
    "Pay as you go": "按量付费",
    "Payload:": "载荷 (Payload)：",
    "Permanently delete": "永久删除",
    "Permission Preset": "权限预设",
    "Permission Settings": "权限设置",
    "Pick a suggestion below to get started, or ask me anything.": "选择下方的建议快速开始，或者直接向我提问。",
    "Pin This Conversation": "固定此对话",
    "Pin conversation": "固定对话",
    "Unpin conversation": "取消固定对话",
    "Play": "播放",
    "Play a sound when the agent finishes generating a response.": "当智能体完成回复生成时播放提示音。",
    "Playback available": "可回放",
    "Please sign in using the Antigravity sidebar panel to view this page.": "请使用 Antigravity 侧边栏面板登录以查看此页面。",
    "Plugin Bundles Coming Soon": "插件组合包即将推出",
    "Plugin Operation Error:": "插件操作错误：",
    "Plugin:": "插件：",
    "Plugins are packaged collections of skills and MCPs to help the Agent": "插件是技能与 MCP 的打包集合，用于扩展智能体的能力",
    "Post": "发布",
    "Posting...": "正在发布...",
    "Predict the location of your next edit and navigate you there with a tab keypress.": "预测您下一次编辑的位置，按 Tab 键即可快速跳转。",
    "Pressed": "已按下",
    "Pressing": "正在按下",
    "Preview disabled (experiment off)": "预览已禁用（实验功能未开启）",
    "Preview unavailable": "预览不可用",
    "Previous Page": "上一页",
    "Previous match": "上一个匹配项",
    "Previous match (Shift+Enter)": "上一个匹配项 (Shift+Enter)",
    "Previous question": "上一个问题",
    "Pricing is based on public API pricing": "价格基于公开 API 定价计算",
    "Proceed Anyway": "仍然继续",
    "Proceeded with": "已继续执行",
    "Process Error": "进程错误",
    "Product Skin": "产品外观模式",
    "Project ID:": "项目 ID：",
    "Project Name": "项目名称",
    "Project Required": "需要选择项目",
    "Project options": "项目选项",
    "项目 options": "项目选项",
    "Prompt and tools metadata for this invocation has been cleared to save space. Full details are only preserved for the latest invocation.": "为节省存储空间，本次调用的提示词和工具元数据已被清理。完整详情仅保留在最新一次调用中。",
    "Prompt to execute on schedule...": "按计划定时执行的提示词...",
    "Prompt too simple": "提示词过于简单",
    "Provide Google Cloud Project": "提供 Google Cloud 项目",
    "Pull request creation": "创建拉取请求 (PR)",
    "Pull requests": "拉取请求 (PR)",
    "Push succeeded": "推送成功",
    "Python Coming Soon": "Python 支持即将推出",
    "Python Script": "Python 脚本",
    "Queue Wait": "排队等待耗时",
    "Queue message": "排队发送消息",
    "Queue message Enter": "排队发送消息 Enter",
    "Queue message ⏎": "排队发送消息 ⏎",
    "Quote": "引用",
    "Quote Selection": "引用选中内容",
    "Ran": "已运行",
    "Run": "运行",
    "Read Browser Page in Browser": "已在浏览器中读取页面",
    "Reading Browser Page in Browser": "正在浏览器中读取页面",
    "Read URL": "读取 URL",
    "Read URL content?": "是否读取此 URL 内容？",
    "Read URL rejected": "已拒绝读取 URL",
    "Read access": "读取权限",
    "Read access to code, refs, commits, and other repository contents.": "读取代码、分支引用、提交记录及其他仓库内容的权限。",
    "Read page": "读取页面",
    "Read resource:": "读取资源：",
    "Reading": "正在读取",
    "Recent Events": "最近事件",
    "Recommended Skills": "推荐技能",
    "Recording": "正在录制",
    "Refresh MCP servers": "刷新 MCP 服务器",
    "Refresh Skills": "刷新技能",
    "Refresh quota and credits data": "刷新配额与积分数据",
    "Refresh skills paths": "刷新技能路径",
    "Refreshed Browser page": "已刷新浏览器页面",
    "Refreshing Browser page": "正在刷新浏览器页面",
    "Refreshing...": "正在刷新...",
    "Regular": "常规",
    "Rejected": "已拒绝",
    "Reload": "重新加载",
    "Reload Window": "重新加载窗口",
    "Reload this window.": "重新加载此窗口。",
    "Remote branches": "远程分支",
    "Remove from Group": "从分组中移除",
    "Removed bookmark": "已移除书签",
    "Removing...": "正在移除...",
    "Rename Conversation": "重命名对话",
    "Rename Group": "重命名分组",
    "Rename This Conversation": "重命名此对话",
    "Renamed": "已重命名",
    "Render display math flush left.": "将块级数学公式左对齐渲染。",
    "Render display math in leqno style (left-justified tags).": "以 leqno 样式（公式编号居左）渲染块级数学公式。",
    "Render failed": "渲染失败",
    "Rendering playback": "正在渲染回放",
    "Renew": "续期",
    "Replace the default browser right-click menu with quick actions.": "使用快捷操作替换默认的浏览器右键菜单。",
    "Repositories": "代码仓库",
    "Requested changes": "请求修改",
    "Reset Onboarding": "重置新手引导",
    "Reset State": "重置状态",
    "Resized Browser window": "已调整浏览器窗口大小",
    "Resizing Browser window": "正在调整浏览器窗口大小",
    "Resolving permissions...": "正在解析权限...",
    "Resolving...": "正在解析...",
    "Restart Main Language Server": "重启主语言服务器 (Language Server)",
    "Restore Pane": "还原面板",
    "Retry": "重试",
    "Retrieved Browser Pages": "已获取浏览器页面列表",
    "Retrieved Console Logs from Browser": "已从浏览器获取控制台日志",
    "Retrieved findings for": "已获取排查结果：",
    "Retrieving Browser Pages": "正在获取浏览器页面列表",
    "Retrieving Console Logs from Browser": "正在从浏览器获取控制台日志",
    "Retrieving findings for": "正在获取排查结果：",
    "Revert file changes": "还原文件更改",
    "Review pending conversations": "查看待处理的对话",
    "Rewinds the conversation only. Files in this workspace stay as they are now.": "仅回退对话进度，工作区中的文件保持当前状态不变。",
    "Root Conversation": "根对话",
    "Run JS": "运行 JS",
    "Run all commands without restrictions.": "无限制运行所有命令。",
    "Run command": "运行命令",
    "Run in a new git worktree": "在新的 Git 工作树中运行",
    "Run in a new worktree": "在新工作树中运行",
    "Run in your current workspace": "在当前工作区中运行",
    "Run terminal commands with sandbox restrictions.": "在沙盒限制下运行终端命令。",
    "Run the app against a Linux environment. Connecting relaunches the app into the selected WSL distro.": "在 Linux 环境下运行应用。连接后将重启应用并进入所选的 WSL 发行版。",
    "Run visibility": "运行可见性",
    "Same Project": "同一项目",
    "Sandbox Allow Network": "允许沙盒访问网络",
    "Sandboxed": "沙盒运行",
    "Saturday": "星期六",
    "Save Comment": "保存评论",
    "Save Configuration": "保存配置",
    "Save Image": "保存图片",
    "Save Video": "保存视频",
    "Saved": "已保存",
    "Saved!": "已保存！",
    "Saves to your global ~/.gemini/antigravity/agents/ directory. This script will be available across all your workspaces.": "保存至全局 ~/.gemini/antigravity/agents/ 目录。此脚本将在您的所有工作区中可用。",
    "Saving...": "正在保存...",
    "Scanning skills config file...": "正在扫描技能配置文件...",
    "Scheduled": "已排期",
    "Scheduled Task": "定时任务",
    "Screen Recording": "屏幕录制",
    "Screenshot": "屏幕截图",
    "Screenshot must be under 10 MB": "截图大小必须小于 10 MB",
    "Scroll to Bottom": "滚动到底部",
    "Scrolled": "已滚动",
    "Scrolled down in Browser": "已在浏览器中向下滚动",
    "Scrolled in Browser": "已在浏览器中滚动",
    "Scrolled up in Browser": "已在浏览器中向上滚动",
    "Scrolling down in Browser": "正在浏览器中向下滚动",
    "Scrolling in Browser": "正在浏览器中滚动",
    "Scrolling up in Browser": "正在浏览器中向上滚动",
    "Search Conversations": "搜索对话",
    "Search Projects": "搜索项目",
    "Search Recent Workspaces": "搜索最近的工作区",
    "Search and discover customizations to extend your Agent's capabilities.": "搜索并发现自定义项，以扩展智能体的能力。",
    "Search customizations...": "搜索自定义项...",
    "Search file contents...": "搜索文件内容...",
    "Search files...": "搜索文件...",
    "Search flags": "搜索实验标志",
    "Search for conversations...": "搜索对话...",
    "Search projects...": "搜索项目...",
    "Search past workspaces...": "搜索历史工作区...",
    "Search past worktrees...": "搜索历史工作树...",
    "Search steps...": "搜索步骤...",
    "Search tabs, files, subagents, artifacts, tasks...": "搜索标签页、文件、子智能体、产物、任务...",
    "Search workspaces...": "搜索工作区...",
    "Search...": "搜索...",
    "Searching Agent Market...": "正在搜索智能体市场...",
    "Searching...": "正在搜索...",
    "Section header:": "章节标题：",
    "Security agent decides if commands run.": "由安全智能体决定是否允许运行命令。",
    "See Plans": "查看套餐方案",
    "See more results": "查看更多结果",
    "Select All": "全选",
    "Select License": "选择许可证",
    "Select Worktree": "选择工作树",
    "Select a model using the model selector in the input box": "使用输入框中的模型选择器选择一个模型",
    "Select a step in the timeline to inspect": "在时间轴中选择一个步骤进行检查",
    "Select an option...": "选择一个选项...",
    "Select another model": "选择其他模型",
    "Select billing model": "选择计费模式",
    "Select branch": "选择分支",
    "Select category to search...": "选择要搜索的类别...",
    "Select or enter a workspace URI": "选择或输入工作区 URI",
    "Select text in the artifact to add a comment": "在产物中选中文本以添加评论",
    "Select the workspace type that will be used for new conversations started with the New Workspace option.": "选择使用“新建工作区”发起新对话时默认采用的工作区类型。",
    "Select your license": "选择您的许可证",
    "Select...": "请选择...",
    "Selected Option in Browser": "已在浏览器中选择选项",
    "Selected region": "所选区域",
    "Selecting Option in Browser": "正在浏览器中选择选项",
    "Semantic searched": "已完成语义搜索",
    "Semantic searching": "正在执行语义搜索",
    "Send Now": "立即发送",
    "Send message": "发送消息",
    "Send message Enter": "发送消息 Enter",
    "Send message ⏎": "发送消息 ⏎",
    "Sender Agent": "发送方智能体",
    "Sending transcribed message...": "正在发送语音转写消息...",
    "Sends after agent finishes working": "待智能体完成当前工作后发送",
    "Sent Message": "已发送消息",
    "Sent to Concierge": "已发送至语音助手",
    "Sent!": "已发送！",
    "Session Summary": "会话摘要",
    "Settings Unavailable": "设置不可用",
    "Setup may take over 5 minutes. Please keep this screen open during setup.": "初始化设置可能需要 5 分钟以上，请在此过程中保持当前画面开启。",
    "Setup required": "需要初始设置",
    "Setup script failed.": "初始化脚本执行失败。",
    "Setup script ran successfully.": "初始化脚本执行成功。",
    "Share": "分享",
    "Share Conversation (Preview)": "分享对话（预览）",
    "Show Error": "显示错误",
    "Show Thumbnail Sidebar": "显示缩略图侧边栏",
    "Show Whitespace Changes": "显示空白字符更改",
    "Show all resources": "显示全部资源",
    "Show browser notifications when your action is needed or execution finishes.": "当需要您操作或执行完成时显示浏览器通知。",
    "Show details": "显示详情",
    "Show fewer resources": "收起部分资源",
    "Show settings anyway": "仍然显示设置",
    "Show token": "显示令牌",
    "Side Pane UI Available": "侧边面板界面可用",
    "Side Question:": "旁路提问：",
    "Side-by-Side": "并排对比",
    "Side-by-side layout": "并排布局",
    "Sidebar Updates": "侧边栏更新",
    "Sidebar grouped by project": "侧边栏已按项目分组",
    "Sidebar grouped by workspace": "侧边栏已按工作区分组",
    "Sidecar feature is not available.": "Sidecar 功能不可用。",
    "Sign in again": "重新登录",
    "Sign in with a different account": "使用其他账户登录",
    "Sign in with business account": "使用企业账户登录",
    "Signing Out...": "正在退出登录...",
    "Simplified": "精简模式",
    "Simplified interface without developer tooling.": "不含开发者工具的精简界面。",
    "Simulated Key Press in Browser": "已在浏览器中模拟按键",
    "Simulating Key Press in Browser": "正在浏览器中模拟按键",
    "Skill": "技能",
    "Skills & Rules": "技能与规则",
    "Skills Configuration Error:": "技能配置错误：",
    "Skills are instructions that extend what Agent can do.": "技能是用于扩展智能体能力的指令集。",
    "Skin": "界面外观",
    "Skipped": "已跳过",
    "Skipping...": "正在跳过...",
    "Some non-image binary content was truncated.": "部分非图片二进制内容已被截断。",
    "Source:": "来源：",
    "Sources": "来源",
    "Stacked": "堆叠对比",
    "Stacked layout": "堆叠布局",
    "Stage and amend all changes into the current commit": "暂存所有更改并追加到当前提交",
    "Stage and commit all changes": "暂存并提交所有更改",
    "Stage change": "暂存更改",
    "Staged Changes": "已暂存的更改",
    "Staged index changes and working tree changes": "暂存区更改与工作树更改",
    "Standalone": "独立模式",
    "Standalone Conversations": "独立对话",
    "Standalone Terminals": "独立终端",
    "Start Automation": "启动自动化任务",
    "Start Extension": "启动扩展",
    "Start Snapshot": "开始快照",
    "Start it again.": "重新启动。",
    "Starting": "正在启动",
    "Status:": "状态：",
    "Step": "步骤",
    "Step Details": "步骤详情",
    "Step Preview": "步骤预览",
    "Step Timing": "步骤耗时",
    "Step Type": "步骤类型",
    "Steps": "步骤",
    "Steps and containers shorter than this fade back": "耗时短于此阈值的步骤和容器将弱化显示",
    "Stop All Subagents": "停止所有子智能体",
    "Stop Subagent": "停止子智能体",
    "Stop execution": "停止执行",
    "Stopped after": "已停止，耗时",
    "Streaming Generation": "流式生成中",
    "Strict": "严格模式",
    "Submit comment": "提交评论",
    "Submitting...": "正在提交...",
    "Summarization": "摘要生成",
    "Sunday": "星期日",
    "Switch IDE Workspace": "切换 IDE 工作区",
    "Switch Roles": "切换角色",
    "Switch to Dark Mode": "切换到深色模式",
    "Switch to Light Mode": "切换到浅色模式",
    "System Instruction": "系统指令 (System Instruction)",
    "System Prompt": "系统提示词 (System Prompt)",
    "Table options": "表格选项",
    "Taking Screenshot": "正在截图",
    "Took Screenshot": "已截图",
    "Taking longer than usual to load": "加载时间比平时更长",
    "Target Tools:": "目标工具：",
    "Target text in PDF...": "PDF 中的目标文本...",
    "Task Logs": "任务日志",
    "Task not found": "未找到任务",
    "Team of subagents to do long running work": "组建子智能体团队以执行长周期任务",
    "Telemetry is disabled in Settings": "已在设置中禁用遥测",
    "Telemetry is off for all conversations.": "所有对话的遥测均已关闭。",
    "Telemetry is off for this conversation.": "当前对话的遥测已关闭。",
    "Tell us anything else here (optional)": "在此补充其他说明（可选）",
    "Terminal Disabled on Non-Corp Domains": "非企业域环境下已禁用终端",
    "Terminal commands always require review and the agent cannot access files outside of its given workspaces.": "终端命令始终需要人工审核，且智能体无法访问指定工作区之外的文件。",
    "Terminal commands the agent can execute in this workspace.": "智能体在此工作区中可执行的终端命令。",
    "Terminal: Add to Chat": "终端：添加到对话",
    "Terminals": "终端",
    "Termination": "终止",
    "Terms and Privacy:": "条款与隐私：",
    "Terms of Service & Data Use": "服务条款与数据使用",
    "Test failed": "测试失败",
    "Tested": "已测试",
    "Thank you! Your feedback has been submitted successfully.": "感谢您！您的反馈已成功提交。",
    "The Agent attempted to interact with some sites that are not allowlisted": "智能体尝试与部分未在允许列表中的站点交互",
    "The agent asks for permission before executing commands matched by a deny list entry.": "当命令匹配拒绝列表项时，智能体会在执行前请求权限。",
    "The agent auto-executes commands matched by an allow list entry.": "当命令匹配允许列表项时，智能体会自动执行。",
    "The agent has a question for you:": "智能体向您提出了一个问题：",
    "The agent has questions for you:": "智能体向您提出了几个问题：",
    "The agent was prevented from accessing some sites": "已阻止智能体访问部分站点",
    "The agent works with autonomy-enhancing features and does not ask questions or request new permissions.": "智能体使用增强自主特性工作，不会主动提问或请求新权限。",
    "The app is currently connected to a WSL distro. Reopening locally relaunches it directly on Windows.": "当前应用已连接到 WSL 发行版。在本地重新打开将直接在 Windows 上重启应用。",
    "The branch was pushed to GitLab.": "分支已推送至 GitLab。",
    "The change was pushed to Gerrit.": "更改已推送至 Gerrit。",
    "The conversation could not be loaded because its data was not found.": "无法加载该对话，因为未找到其数据。",
    "The conversation was compacted to fit within the context window.": "对话已压缩以适应上下文窗口。",
    "The current trigger rate is too high.": "当前触发频率过高。",
    "The debug view loads the trajectory in pages. Click the marker at either end of the overview, or keep panning past that end, to load more.": "调试视图分页加载轨迹。点击概览两端的标记，或继续向两端拖动即可加载更多。",
    "The full developer experience.": "完整的开发者体验。",
    "The remote shared a link for this push.": "远端返回了本次推送的链接。",
    "These MCP allowlist rules are enforced by your organization's administrator.": "这些 MCP 允许列表规则由您的组织管理员强制执行。",
    "These allowed domain rules are set by your organization's administrator and cannot be removed.": "这些允许域名规则由您的组织管理员设置，无法移除。",
    "These servers need you to sign in before the agent can use their tools.": "这些服务器需要您先登录，智能体才能使用其工具。",
    "These settings can only be changed on the computer running the app, not from a remote session.": "这些设置只能在运行该应用的本机上修改，无法在远程会话中修改。",
    "Thinking...": "正在思考...",
    "This cannot be undone.": "此操作无法撤销。",
    "This chat is archived.": "此对话已归档。",
    "This client was started with no custom flags.": "当前客户端启动时未携带任何自定义标志。",
    "This command ran in the sandbox.": "此命令在沙盒中运行。",
    "This conversation grew too large, so the history before this point may be missing or incomplete.": "此对话体积过大，因此该节点之前的历史记录可能缺失或不完整。",
    "This conversation is in a different workspace.": "此对话位于另一个工作区中。",
    "This conversation is not on disk. Delete it to remove it from your sidebar.": "此对话不在本地磁盘上。将其删除即可从侧边栏移除。",
    "This error is likely temporary. You can prompt the model to try again after some time.": "此错误通常是暂时的，您可以稍后让模型重试。",
    "This extension has no declared permissions requiring user input.": "此扩展没有需要用户确认的声明权限。",
    "This may take a few minutes": "这可能需要几分钟时间",
    "This migration may mess up your settings, chats, and sidebar.": "此迁移可能会影响您的设置、对话和侧边栏布局。",
    "This plugin requires authentication before the agent can use its tools.": "此插件需要完成认证后，智能体才能使用其工具。",
    "This project is associated with a different workspace.": "此项目关联了另一个工作区。",
    "This project uses Firebase. Do you want to download the Firebase skill?": "此项目使用了 Firebase，是否下载 Firebase 技能？",
    "This prompt is straightforward and does not need alternative comparisons.": "此提示词较为直接，无需进行多方案对比。",
    "This request is not well-suited for parallel Best-of-N generation.": "此请求不适合进行并行 Best-of-N 生成。",
    "This server needs you to sign in before the agent can use its tools.": "此服务器需要您先登录，智能体才能使用其工具。",
    "This skill came from the marketplace, so you can add it again whenever you need it.": "此技能来自技能市场，您可以随时重新添加。",
    "This step is not associated with an invocation.": "此步骤未关联任何模型调用。",
    "This step is visible in the standard conversation view, but was excluded from the messages sent to the model.": "此步骤在标准对话视图中可见，但未包含在发送给模型的上下文消息中。",
    "This subagent was killed and can no longer be messaged.": "此子智能体已被终止，无法再向其发送消息。",
    "This tool output was truncated (cut off) because it exceeded the single-step limits. Details are visible in the Inspector.": "由于超出单步输出限制，此工具输出已被截断。可在检查器 (Inspector) 中查看详情。",
    "This undo action will not make any code changes.": "此撤销操作不会修改任何代码。",
    "Thursday": "星期四",
    "Time spent by the language model generating and streaming the tool call.": "语言模型生成并流式传输该工具调用所花费的时间。",
    "Time spent deciding a checkpoint was needed and generating the context summary.": "判断是否需要检查点并生成上下文摘要所花费的时间。",
    "Time spent generating the initial user intent summary for this conversation.": "为此对话生成初始用户意图摘要所花费的时间。",
    "Time spent waiting in queue for previous tools to complete or move to background before execution began.": "开始执行前，在队列中等待前置工具完成或转入后台的时间。",
    "Time to First Token (TTFT)": "首 Token 响应时间 (TTFT)",
    "Time waiting before the first token was received.": "收到第一个 Token 前的等待时间。",
    "Timeline": "时间轴",
    "Timeout:": "超时：",
    "Tip: Complex tasks get better results with multiple responses.": "提示：复杂任务通过生成多个回复对比往往能获得更好效果。",
    "Title:": "标题：",
    "To provide feedback": "提供反馈",
    "To update:": "更新方式：",
    "To use the agent, please login": "请先登录以使用智能体",
    "Toggle File Viewer": "切换文件查看器",
    "Toggle Overview Panel": "切换概览面板",
    "Toggle Sidebar, conversations need attention": "切换侧边栏（有对话需要关注）",
    "Toggle Thumbnails": "切换缩略图",
    "Toggle this on to allow creating new issues.": "开启以允许创建新 Issue。",
    "Toggle this on to allow creating new pull requests.": "开启以允许创建新 PR。",
    "Toggle this on to enable read access on contents.": "开启以允许读取仓库内容。",
    "Tokens:": "Token：",
    "Too many requests, please try again in a bit!": "请求过于频繁，请稍后再试！",
    "Too many surveys": "问卷过于频繁",
    "Tool Call Generation": "工具调用生成",
    "Tool Call ID:": "工具调用 ID：",
    "Tool Call Ready": "工具调用就绪",
    "Tool Calls": "工具调用",
    "Tool Defs": "工具定义",
    "Tool Execution": "工具执行",
    "Tool Output": "工具输出",
    "Tool arguments": "工具参数",
    "Total:": "总计：",
    "Trajectory Debug View": "轨迹调试视图",
    "Trajectory ID": "轨迹 ID",
    "Trajectory ID:": "轨迹 ID：",
    "Trajectory Metadata": "轨迹元数据",
    "Trajectory Stats": "轨迹统计",
    "Trajectory Telemetry: Active (Uploading)": "轨迹遥测：活跃（上传中）",
    "Trajectory Telemetry: Redacted (User Content Stripped)": "轨迹遥测：已脱敏（已剥离用户内容）",
    "Trigger multiple response variants from the same prompt.": "针对同一提示词触发生成多个候选回复。",
    "Triggered": "已触发",
    "True changes vs the parent workspace": "相对于父工作区的实际更改",
    "Tuesday": "星期二",
    "Turbo": "极速 (Turbo)",
    "Turn Off Project Feature": "关闭项目功能",
    "Turn Off Projects": "关闭项目",
    "Turn On Project Feature": "开启项目功能",
    "Turn On Projects": "开启项目",
    "Turn off telemetry for this conversation": "关闭本次对话的遥测",
    "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.": "开启严格 / LaTeX 保真模式，若输入使用了不受支持的 LaTeX 特性则抛出错误。",
    "Turn on telemetry for this conversation": "开启本次对话的遥测",
    "Type absolute path or navigate folders...": "输入绝对路径或浏览文件夹...",
    "Type to search for code across your workspace.": "输入以在工作区中全局搜索代码。",
    "Typed into Browser": "已在浏览器中输入",
    "Typing into Browser": "正在浏览器中输入",
    "UI Actions": "界面操作",
    "UI Extensions": "界面扩展",
    "UI Plugins": "界面插件",
    "UI extensions": "界面扩展",
    "UI view does not exist.": "界面视图不存在。",
    "URLs the agent can actuate on in this workspace.": "智能体在此工作区中可执行浏览器操作的 URL。",
    "URLs the agent can read or open in this workspace.": "智能体在此工作区中可读取或打开的 URL。",
    "Unable to load PDF:": "无法加载 PDF：",
    "Unable to resolve PDF source URL": "无法解析 PDF 源 URL",
    "Unable to resolve audio source URL": "无法解析音频源 URL",
    "Uncommitted": "未提交",
    "Undo To Here": "撤销至此处",
    "Undo to this point": "回退到此节点",
    "Unfold code block": "展开代码块",
    "United States": "美国",
    "Unknown": "未知",
    "Unknown Notebook": "未知 Notebook",
    "Unknown error": "未知错误",
    "Unknown file edit": "未知文件编辑",
    "Unmount workspace": "卸载工作区",
    "Unpin This Conversation": "取消固定此对话",
    "Unstage change": "取消暂存更改",
    "Untracked (Unstaged)": "未跟踪（未暂存）",
    "Unused": "未使用",
    "Unused Capacity": "剩余可用容量",
    "Update Anyway": "仍然更新",
    "Updated sidebar grouping": "已更新侧边栏分组方式",
    "Updater": "更新程序",
    "Updates to your sidebar": "侧边栏更新说明",
    "Uploads": "上传内容",
    "Uploads logs, settings, and conversation summaries to your Drive.": "将日志、设置与对话摘要上传至您的 Google Drive。",
    "Uptime": "运行时长",
    "Usage": "使用量",
    "Use Add MCP to browse the store.": "点击“添加 MCP”浏览商店。",
    "Use Existing": "使用现有项",
    "Use Global Settings": "使用全局设置",
    "Use advanced SSO config": "使用高级 SSO 配置",
    "Use full Git clones for Best of N": "为 Best of N 使用完整 Git 克隆",
    "Use full VCS clones for Best of N": "为 Best of N 使用完整 VCS 克隆",
    "Use the IDE": "使用 IDE",
    "Use theme to be imported with settings": "使用随设置导入的主题",
    "Use this option if your administrator has provided you with advanced login configurations": "如果管理员为您提供了高级登录配置，请使用此选项",
    "User Data": "用户数据",
    "User Intent": "用户意图",
    "User Intent Generation": "用户意图生成",
    "User Type": "用户类型",
    "User cancelled agent execution.": "用户已取消智能体执行。",
    "User uploaded image": "用户上传的图片",
    "VCS used when creating a new workspace, including workspaces generated based off your initial prompt.": "创建新工作区（包括根据初始提示词自动生成的工作区）时使用的版本控制系统 (VCS)。",
    "Variant Name": "变体名称",
    "Verification required": "需要验证",
    "Vetted (Preview)": "已审验（预览）",
    "Video": "视频",
    "Video attachment": "视频附件",
    "View Diff": "查看差异 (Diff)",
    "View File": "查看文件",
    "View Logs": "查看日志",
    "View Page": "查看页面",
    "View Split Diff": "查看并排差异",
    "View Stacked Diff": "查看堆叠差异",
    "View child subagents": "查看子智能体",
    "View could not be opened": "无法打开视图",
    "View documentation": "查看文档",
    "View network request": "查看网络请求",
    "View network requests": "查看网络请求列表",
    "Viewing Diff": "正在查看差异",
    "Voice recording is unavailable while the Concierge mic is on": "语音助手麦克风开启时无法使用语音录制",
    "Voice recording is unavailable while the Chief of Staff mic is on": "语音助手麦克风开启时无法录音",
    "Waiting for user input": "正在等待用户输入",
    "We opened a popup for you to authorize adding the bot to your chat. Please copy the code from it and paste it below:": "已为您打开授权弹窗，请复制其中的授权码并粘贴到下方：",
    "We recommend attaching logs. Attaching logs will help the Antigravity team act on and prioritize your feedback.": "建议附带日志，这将帮助 Antigravity 团队更快定位并优先处理您的反馈。",
    "Web Preview": "网页预览",
    "Wednesday": "星期三",
    "Weekly": "每周",
    "Welcome back!": "欢迎回来！",
    "Welcome to the Concierge": "欢迎使用语音助手",
    "What did you like about this response?": "您喜欢这条回复的哪些方面？",
    "What did you like? Select any that apply (optional).": "您喜欢哪些方面？可多选（可选）。",
    "What functionality you expect your account tier to have available that is missing": "您期望当前账户等级拥有但实际缺失的功能",
    "What is missing in your workflow": "您的工作流中缺失了什么环节",
    "What quota or feature is being incorrectly limited": "哪些配额或功能受到了不合理的限制",
    "What the step bars are coloured by": "步骤条的颜色编码依据",
    "What was off? Select any that apply (optional).": "有哪些地方不够好？可多选（可选）。",
    "What you would like to see to address this gap in your workflow": "您希望增加什么功能来弥补工作流中的这一缺口",
    "When debug mode is on, you can see additional information about each steps in the conversation.": "开启调试模式后，您可以查看对话中每个步骤的详细附加信息。",
    "When enabled, Agent will use IDE": "启用后，智能体将使用 IDE",
    "When enabled, sandboxed commands are allowed to make network requests.": "启用后，允许沙盒内运行的命令发起网络请求。",
    "When enabled, the agent will include default customizations, including default skills.": "启用后，智能体将加载默认自定义项（包含内置默认技能）。",
    "When enabled, the values below replace the auto-detected OS, host, and user type used for feature gating.": "启用后，下方的值将覆盖自动检测的操作系统、宿主环境与用户类型。",
    "Whether it never connects or is intermittent/flaky": "是完全无法连接，还是连接不稳定/时断时续",
    "Why are you opting out of auto-triggered Best-of-N?": "您为什么退出自动触发的 Best-of-N 模式？",
    "Why are you opting out?": "您退出的原因是什么？",
    "Windows": "Windows",
    "Windows Subsystem for Linux": "适用于 Linux 的 Windows 子系统 (WSL)",
    "Worked for": "已工作",
    "Workflow runs": "工作流运行记录",
    "Workflows are being deprecated in favor of skills. You can use the agent to migrate your workflows.": "工作流 (Workflows) 即将弃用并由技能 (Skills) 替代。您可以使用智能体自动迁移现有的工作流。",
    "Working": "工作中",
    "Working Directory:": "工作目录：",
    "Workspace Actions": "工作区操作",
    "Workspace CL Status": "工作区 CL 状态",
    "Workspace Creation": "工作区创建",
    "Workspace Name": "工作区名称",
    "Workspace Settings": "工作区设置",
    "Workspace URI Switcher": "工作区 URI 切换器",
    "Workspace URI query parameter": "工作区 URI 查询参数",
    "Workspace Web Access": "工作区网页访问权限",
    "Workspace archived successfully": "工作区已成功归档",
    "Workspace settings have moved": "工作区设置已迁移",
    "Workspace settings have moved to the Advanced section of General settings.": "工作区设置已移至“常规设置”下的“高级”部分。",
    "Workspace setup warning": "工作区设置警告",
    "Worktrees": "工作树 (Worktrees)",
    "Worktrees are not available for this project": "此项目不支持工作树 (Worktrees)",
    "Write a comment...": "写下评论...",
    "You can prompt the model to try again or start a new conversation if the error persists.": "您可以让模型重试，若错误持续出现请新建一个对话。",
    "You don't have any projects created. Please create a project first.": "您尚未创建任何项目，请先创建一个项目。",
    "Your Antigravity use will be associated with provided project.": "您的 Antigravity 使用量将关联至所提供的项目。",
    "Your administrator has disabled MCP servers for this workspace.": "您的管理员已禁用此工作区的 MCP 服务器。",
    "Your changes were not saved. Please try again.": "您的更改未保存，请重试。",
    "Your environment is active, but you can renew it if needed.": "您的环境当前处于活跃状态，如有需要可手动续期。",
    "Your environment will expire soon. Please renew it to continue.": "您的环境即将过期，请续期以继续使用。",
    "Zoom": "缩放",
    "at ref": "位于分支/引用",
    "cumulative total for the conversation up to this point": "截至当前节点的对话累计总量",
    "for debugging.": "用于调试。",
    "image for artifact level comment": "产物评论图片",
    "image for comment": "评论图片",
    "quick pick": "快速选择",
    "to exit": "退出",
    "view full search results": "查看完整搜索结果",
    "A Google Cloud project is required to use Antigravity.": "使用 Antigravity 需要关联 Google Cloud 项目。",
    "A chunk is a section of the page. Long pages are chunked so that only the sections that are relevant to your query are read.": "分块 (Chunk) 是页面的一个章节。长页面会被自动分块，以便仅读取与您的查询相关的章节。",
    "A comma-separated list like org-a, org-b, or * for all.": "以逗号分隔的列表（如 org-a, org-b），或填 * 代表全部。",
    "A comma-separated list like repo-a, repo-b, or * for all.": "以逗号分隔的列表（如 repo-a, repo-b），或填 * 代表全部。",
    "A copy of the workspace snapshot recorded at this step.": "此步骤记录的工作区快照副本。",
    "A full copy of this workspace, uncommitted changes included.": "当前工作区的完整副本（包含未提交的更改）。",
    "A group with this name already exists.": "已存在同名分组。",
    "A label for this computer when you connect from another device. Changing it reconnects.": "从其他设备连接时此电脑显示的标签。修改后将重新连接。",
    "A license or project selection is required to use Antigravity.": "使用 Antigravity 需要选择许可证或项目。",
    "A new version is available.": "有新版本可用。",
    "A nickname for identifying this application in the companion website. Changing this will restart the connection.": "在配套网页端标识此应用的昵称。修改后将重启连接。",
    "A project with this name already exists.": "已存在同名项目。",
    "A shell setup script run before every command the agent executes in this project. Overrides the global script.": "智能体在此项目中执行每条命令前运行的 Shell 初始化脚本（覆盖全局脚本）。",
    "A shell setup script run before every command the agent executes.": "智能体执行每条命令前运行的 Shell 初始化脚本。",
    "A snapshot was saved before running. To restore your previous output:": "运行前已保存快照。如需恢复之前的输出：",
    "ABFS Workspace (Alpha)": "ABFS 工作区 (Alpha)",
    "ABFS workspace creation is not available in this environment.": "当前环境不支持创建 ABFS 工作区。",
    "Aborted due to condition callback returning false.": "由于条件回调返回 false，操作已中止。",
    "Active Browser page": "当前活跃浏览器页面",
    "Add Handler": "添加处理器",
    "Add New Handler to": "添加新处理器至",
    "Add Terminal": "添加终端",
    "Agent ID:": "智能体 ID：",
    "Agent can retrieve console logs from the browser and return it for further processing.": "智能体可以从浏览器获取控制台日志并返回以进行后续处理。",
    "Agent can scroll on browser pages to access more content.": "智能体可以在浏览器页面上滚动以查看更多内容。",
    "Agents created by": "创建者：",
    "AI Credits are used when you've exceeded your model quota. Keep track of your current AI Credits in the": "当超出模型配额时将使用 AI 积分。您可以在此查看当前的 AI 积分：",
    "Are you sure you want to archive the": "确定要归档",
    "Are you sure you want to delete": "确定要删除",
    "Are you sure you want to delete the": "确定要删除",
    "Are you sure you want to delete the workspace": "确定要删除工作区",
    "At Mention Code Block": "@ 引用代码块",
    "Attaching logs requires an email address": "附带日志需要提供邮箱地址",
    "Authenticated as": "已认证身份：",
    "Available for": "可用于",
    "Back to": "返回",
    "Can't open the Drive link?": "无法打开 Google Drive 链接？",
    "Captured DOM tree for": "已捕获 DOM 树：",
    "Chat anyways": "仍然继续对话",
    "CitC Clone": "CitC 克隆",
    "CitC Workspace": "CitC 工作区",
    "CitC Workspace Type": "CitC 工作区类型",
    "Cog Workspace": "Cog 工作区",
    "Cog workspace creation is not available in this environment.": "当前环境不支持创建 Cog 工作区。",
    "Configure a chat bot so you can use Jetski directly from Google Chat.": "配置聊天机器人，以便直接在 Google Chat 中使用。",
    "Couldn't fetch the Google Drive file's title. The link was kept as-is.": "无法获取 Google Drive 文件标题，已保留原始链接。",
    "Couldn't load Google Drive link title": "无法加载 Google Drive 链接标题",
    "Create a Fig shared workspace": "创建 Fig 共享工作区",
    "Create a JJ worktree": "创建 JJ 工作树",
    "Create or select a CitC workspace to use in this conversation": "创建或选择要在此对话中使用的 CitC 工作区",
    "DO NOT share": "请勿分享",
    "Default Cog Branch / Ref": "默认 Cog 分支 / 引用",
    "Default Cog Repository": "默认 Cog 仓库",
    "Delete ABFS Workspace": "删除 ABFS 工作区",
    "Displaying raw protobuf object (failed to format as JSON). Enums and timestamps are shown in their internal numeric/binary format.": "正在显示原始 Protobuf 对象（格式化为 JSON 失败）。枚举和时间戳以其内部数值/二进制格式显示。",
    "Don't enter corp passwords": "请勿输入企业密码",
    "Don't show this for 2 days": "2 天内不再提示",
    "Draws from your organization's pooled Gemini Enterprise usage.": "从您所属组织的 Gemini Enterprise 共享配额池中扣减。",
    "Enter workspace name (e.g., my-cog-feature)": "输入工作区名称（例如 my-cog-feature）",
    "Error: No artifact URI provided in URL parameters.": "错误：URL 参数中未提供产物 URI。",
    "Extension (Cider)": "扩展 (Cider)",
    "Extension (Eclipse)": "扩展 (Eclipse)",
    "Extension (VS Code)": "扩展 (VS Code)",
    "Extension (Visual Studio)": "扩展 (Visual Studio)",
    "Failed to create CitC clone workspace": "创建 CitC 克隆工作区失败",
    "Failed to unarchive project: project management feature not available": "取消归档项目失败：项目管理功能不可用",
    "Folder doesn't exist": "文件夹不存在",
    "Follow the guide at": "请参考指南：",
    "For Antigravity Business consumption options, see": "有关 Antigravity 商业版计费选项，请参阅",
    "For a full list of available locations and deployment endpoints, please refer to the": "有关可用区域和部署端点的完整列表，请参阅",
    "Generator metadata is present but does not contain ChatModelMetadata.": "存在生成器元数据，但未包含 ChatModelMetadata。",
    "Give each Best of N fork a full clone of your workspace, including its local commit history. Choosing a winner then gives your workspace that fork's state, so the commits it made are kept. Forks take longer to create than the default CitC clone. See go/jetski-best-of-n.": "为每个 Best of N 分支提供工作区的完整克隆（包含本地提交历史）。选出最佳方案后，工作区将直接采用该分支状态并保留其提交记录。",
    "Include Jetski Default Customizations": "包含默认自定义项",
    "Input disabled because": "输入已禁用，原因：",
    "Intended primarily for previewing local development servers (e.g.,": "主要用于预览本地开发服务器（例如",
    "Invalid embed:": "无效内嵌内容：",
    "Long pages like this one will be broken down into outlines and read as needed. Read more at our": "此类长页面将被拆分为大纲并按需读取。了解更多请访问",
    "Many external websites (such as Google Search, GitHub, or Wikipedia) restrict iframe embedding via": "许多外部网站（如 Google 搜索、GitHub 或维基百科）通过以下机制限制 iframe 内嵌：",
    "Need help? Reach out in the": "需要帮助？请联系",
    "New Fig Share?": "新建 Fig 共享？",
    "New Fig Workspace": "新建 Fig 工作区",
    "No handlers configured for": "尚未配置处理器：",
    "No matching": "无匹配项",
    "No plugin found for": "未找到对应插件：",
    "Open in Cider": "在 Cider 中打开",
    "Open in Critique": "在 Critique 中打开",
    "Open in Hub": "在 Hub 中打开",
    "Opens in the in-app preview pane. Some sites don't support iframe embedding and may not load.": "在应用内预览面板中打开。部分网站不支持 iframe 内嵌，可能无法加载。",
    "Please describe the feature you'd like to see. The more detailed the requirements, the easier it will be for our team to incorporate your ideas. Some helpful information includes:": "请描述您希望看到的功能。需求越详细，团队就越容易采纳您的想法。可参考补充以下信息：",
    "Please verify your account to continue using": "请先验证您的账户以继续使用",
    "Please verify your account, then sign in again to continue. Learn more by visiting our": "请验证您的账户后重新登录以继续使用。了解更多请访问",
    "Remote Control isn't active on this instance. Enable it in": "当前实例未启用远程控制。请在以下位置启用：",
    "Run the command in your workstation terminal, then reload this page:": "请在终端中运行以下命令，然后重新加载此页面：",
    "Scan the code to open this device in Remote Control, or": "扫描二维码以在远程控制中打开此设备，或",
    "Searched Moma for": "已在 Moma 中搜索",
    "Searching Moma for": "正在 Moma 中搜索",
    "See our": "查看我们的",
    "See our open roles": "查看开放职位",
    "Select CitC workspace": "选择 CitC 工作区",
    "Select one of the": "选择以下之一：",
    "Select the latest snapshot from the": "从以下位置选择最新快照：",
    "Settings for this session are managed by the CLI and can't be changed in the browser.": "当前会话的设置由 CLI 托管，无法在界面中修改。",
    "Sharing is a preview feature. It exports this conversation's history to your": "对话分享目前为预览功能，它会将本次对话历史导出至您的",
    "Simulate a different host (Electron, desktop or mobile Web, Extension, remote control, or installed PWA).": "模拟不同的宿主环境（Electron、桌面或移动网页端、扩展、远程控制或 PWA）。",
    "Simulate a different user cohort (Google, External, Enterprise).": "模拟不同的用户群体（Google 内部、外部用户、企业用户）。",
    "Simulate running on a different OS.": "模拟在不同的操作系统上运行。",
    "Sorry, this account is ineligible to use": "抱歉，当前账户无权使用",
    "Specifies the agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.": "指定智能体在请求审核产物（用于提供丰富对话体验的文档）时的行为。",
    "Stream and control": "流式传输与控制",
    "Successfully imported project:": "已成功导入项目：",
    "Switch to the": "切换至",
    "There was an error with your authentication. To log in, click": "身份认证出错。如需登录，请点击",
    "This Google Cloud project is not supported. Input a different project, or sign in with another account.": "不支持此 Google Cloud 项目。请输入其他项目，或切换账户登录。",
    "This is a preview of the plugin's source. Nothing below is active until you install it.": "以下是该插件的源码预览，安装前不会生效。",
    "This page is taking longer than expected to load, or it may be blocking embedded views (via X-Frame-Options or CSP). We'll keep waiting, or you can open it directly in a new tab.": "此页面加载时间超出预期，或因 X-Frame-Options / CSP 策略限制了内嵌显示。我们将继续等待，您也可以直接在新标签页中打开。",
    "This project was created for": "此项目创建于：",
    "This sign-in option is only available to invited teams.": "此登录方式仅对受邀团队开放。",
    "This skill is installed in your workspace": "此技能已安装在您的工作区中",
    "This will archive": "这将归档",
    "This will permanently delete": "这将永久删除",
    "Timed out fetching the Google Drive file's title. The link was kept as-is.": "获取 Google Drive 文件标题超时，已保留原始链接。",
    "To write effective feedback, see our": "如需了解如何撰写高质量反馈，请参阅我们的",
    "Turn on a flag you don't have": "开启尚未拥有的实验标志",
    "Typing your corp password here may trigger a Password Alert reset.": "在此输入企业密码可能会触发密码安全警报重置。",
    "Use the IDE's shell integration to detect and report terminal command execution. When disabled, the agent uses its own shell. Restart the application for this to take effect.": "使用 IDE 的 Shell 集成来检测并报告终端命令执行情况。禁用后，智能体将使用自带 Shell（需重启应用生效）。",
    "Validated with GitHub and stored, together with your username, in": "已通过 GitHub 验证，并与您的用户名一同保存在",
    "Visit": "访问",
    "Wait for": "等待",
    "Web search prioritized results from": "网页搜索已优先采用来自以下站点的结果：",
    "When Turbo mode is on, the agent will automatically capture screenshots in the Browser without explicit user input. You can toggle this setting in Antigravity's settings.": "开启极速 (Turbo) 模式后，智能体将在浏览器中自动截图而无需每次确认。您可以在 Antigravity 设置中切换此选项。",
    "When enabled, 'Explain and Fix' actions will continue in the current conversation instead of starting a new one.": "启用后，“解释并修复”操作将在当前对话中继续，而不会新建对话。",
    "When enabled, Agent will use IDE's shell integration to detect and report terminal command execution.": "启用后，智能体将使用 IDE 的 Shell 集成来检测并报告终端命令执行。",
    "Yes, I'd like to receive product updates, tips, and promotions from Google": "是的，我愿意接收来自 Google 的产品更新、使用技巧和优惠信息",
    "You can opt-out temporarily using": "您可以临时退出，方式为：",
    "You don't have access to this Google Drive file, so its title couldn't be added. The link was kept as-is.": "您无权访问此 Google Drive 文件，因此无法获取标题，已保留原始链接。",
    "You don't have any custom agents or plugins configured. Create agent scripts in the agents/ directory or add plugins to the plugins/ directory inside your Gemini configuration folder.": "您尚未配置任何自定义智能体或插件。可在 Gemini 配置文件夹下的 agents/ 目录中创建智能体脚本，或在 plugins/ 目录中添加插件。",
    "You have a conversation in progress. Updating will cancel it and you'll need to manually restart it.": "您当前有正在进行的对话。更新将中断该对话，完成后需手动重新开始。",
    "You've reached the maximum number of turns for this battle. End battle mode to continue.": "已达到本次对战模式的最大轮数上限，请结束对战模式以继续。",
    "Your feedback directly improves Gemini. See": "您的反馈将直接帮助改进 Gemini。请参阅",
    "Docs": "文档",
    "Checking for updates...": "正在检查更新...",
    "Download Update": "下载更新",
    "Downloading update...": "正在下载更新...",
    "Restart to Update": "重启以完成更新",
    "Redo": "重做",
    "Toggle Full Screen": "切换全屏",
    "Connect to WSL": "连接到 WSL",
    "Reopen Locally": "在本地重新打开",
    "Open Antigravity": "打开 Antigravity",
    "Add Automation": "添加自动化任务",
    "Add MCP": "添加 MCP",
    "Add Resource": "添加资源",
    "Advanced Command Access": "高级命令访问权限",
    "Advanced File Access": "高级文件访问权限",
    "Advanced Web Access": "高级网络访问权限",
    "Agent execution terminated due to error.": "智能体执行因错误而终止。",
    "All automations run as Flash.": "所有自动化任务均以 Flash 模型运行。",
    "All plugins run as Flash.": "所有插件均以 Flash 模型运行。",
    "All scheduled tasks run as Flash.": "所有计划任务均以 Flash 模型运行。",
    "Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.": "在全局和工作区配置中自动将旧版工作流（Workflows）迁移为现代技能（Skills）。自动扫描现有工作流、创建目标 SKILL.md 文件并安全归档旧工作流文件。",
    "Back to Automations": "返回自动化列表",
    "Blocked": "已阻止",
    "Build applications with the Gemini Interactions API and Live API, including text, image, video, and speech generation, managed agents, and real-time multimodal streaming.": "使用 Gemini Interactions API 和 Live API 构建应用，涵盖文本、图像、视频和语音生成、托管智能体以及实时多模态流式传输。",
    "Build on Google's developer platforms, including Android, Chrome, Gemini, and Google Cloud.": "基于 Google 开发者平台进行构建，包括 Android、Chrome、Gemini 和 Google Cloud。",
    "Build, package, run, and debug UI extensions for Antigravity: interactive web panels that render in the side pane, served by a Node.js sidecar using the built-in Sidecar SDK.": "构建、打包、运行和调试 Antigravity 的 UI 扩展：在侧边栏渲染交互式 Web 面板，由基于内置 Sidecar SDK 的 Node.js 伴生服务（Sidecar）驱动。",
    "Cancel Task": "取消任务",
    "Check availability, schedule events, and RSVP.": "查看空闲状态、安排日程活动及回复日程邀请。",
    "Choose between the Default and Project 4K experience.": "在默认体验与 Project 4K 体验之间选择。",
    "Choose the experience that fits how you work.": "选择适合您工作方式的使用体验。",
    "Close other tabs": "关闭其他标签页",
    "Close tabs to the right": "关闭右侧标签页",
    "Commands the agent can run outside the sandbox.": "智能体可以在沙箱之外运行的命令。",
    "Completed": "已完成",
    "Connect to Google Workspace, including Docs, Sheets, Slides, Drive, and Calendar.": "连接到 Google Workspace，包括 Docs、Sheets、Slides、Drive 和 Calendar。",
    "Conversation copied as Markdown to clipboard": "会话已作为 Markdown 复制到剪贴板",
    "Copy debug info": "复制调试信息",
    "Curated collection of agent skills for science tasks.": "专为科学研究任务精选的智能体技能集合。",
    "Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to analyze heapsnapshots or run memory leak detection tools like memlab.": "诊断并修复 JavaScript/Node.js 应用中的内存泄漏。当用户报告内存占用过高、OOM 错误，或需要分析堆快照、运行 memlab 等内存泄漏检测工具时使用。",
    "Direct candid AI photography through one coherent event, natural reactions, friend or partner POV, and believable camera, light, and material behavior. Use for lifestyle and travel snapshots, multi-person interactions, reference-guided identity preservation, and realistic character or cosplay photography.": "通过连贯的事件、自然的反应、朋友或伴侣视角以及可信的相机、光线与材质表现，生成真实自然的 AI 摄影。适用于生活方式与旅行快照、多人互动、参考图身份保持，以及逼真的人物或角色扮演摄影。",
    "Discover UI plugin panels relevant to the current task and surface a one-click pill in chat to open (toggle) them in the side pane. Use when a running UI plugin's panel would help with what the user is doing, or right after the user enables a new UI plugin pane and a shortcut to open it is handy.": "发现与当前任务相关的 UI 插件面板，并在聊天中提供一键胶囊按钮以在侧边栏打开（切换）它们。当正在运行的 UI 插件面板有助于当前操作或刚启用新面板时使用。",
    "Display": "显示",
    "Enter URL pattern...": "输入 URL 匹配规则...",
    "Enter automation name...": "输入自动化任务名称...",
    "Enter command (e.g., git, blaze)...": "输入命令（例如 git、python）...",
    "Enter file or directory path...": "输入文件或目录路径...",
    "Enter plugin name...": "输入插件名称...",
    "Enter scheduled task name...": "输入计划任务名称...",
    "Enter task name...": "输入任务名称...",
    "Extension": "扩展",
    "Failed to create automation.": "创建自动化任务失败。",
    "Failed to load more plugins. Please try again.": "加载更多插件失败，请重试。",
    "Failed to load plugin. Please try again.": "加载插件失败，请重试。",
    "Failed to load plugins. Please try again.": "加载插件失败，请重试。",
    "Folders": "文件夹",
    "Goals": "目标",
    "Google Cloud Developer": "Google Cloud 开发者套件",
    "Google Cloud guidance for coding agents: first-project onboarding, authentication and credential selection, and safety-critical validation for gcloud CLI commands. Includes the Google Developer Knowledge MCP server for grounded, up-to-date Google Cloud documentation.": "面向编程智能体的 Google Cloud 指南：涵盖首项目引导、身份验证与凭据选择，以及 gcloud CLI 命令的关键安全校验。内置 Google 开发者知识库 MCP 服务器，提供权威、最新的 Google Cloud 官方文档支持。",
    "Google Developer Knowledge": "Google 开发者知识库",
    "Google Maps Platform": "Google 地图平台",
    "Google Workspace": "Google Workspace 办公套件",
    "Google3 chats will be regrouped into their workspaces in the sidebar.": "Google3 对话将重新分组到侧边栏的各工作区。",
    "Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.": "与 GitHub 交互的操作指南，当命令因智能体环境限制而执行失败时，引导向用户申请相应权限。",
    "Hooks": "钩子",
    "How to manage and create plugins — namespaced bundles of skills, agents, rules, MCP servers and hooks that install, enable and disable as a single unit. Use this skill when the user wants to enable, disable, install or uninstall a plugin, when they want to create a new plugin, or when a new customization should be packaged into a plugin rather than left loose. Also triggered by the /plugin slash command. Don't use for the underlying customization system itself — discovery roots, loading priority, or authoring a standalone skill, agent, rule, hook or MCP server outside a plugin; see the customizations guide skill for those.": "管理和创建插件——将技能、智能体、规则、MCP 服务器和钩子打包为带命名空间的独立单元，支持整体安装、启用和禁用。当您需要启用、禁用、安装、卸载或创建新插件时使用此技能，也可通过 /plugin 斜杠命令触发。",
    "How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.": "在聊天窗口内嵌或作为独立工件（Artifact）渲染丰富的交互式 HTML 组件。适用于向用户展示图表、数据可视化、交互式控件、教学演示或超越纯文本与 Markdown 的富视觉内容。",
    "Inherit Global": "继承全局",
    "Integration skill and tools for Google Maps Platform APIs": "适用于 Google Maps Platform API 的集成技能与工具集。",
    "Interactive guide to design and create a scheduled background automation. Use this skill when the user wants to create an automated or recurring scheduled task (e.g. \"summarize my emails every morning\", \"every Monday send me a to-do list\"). Also triggered by the /automation slash command.": "用于设计和创建后台定时自动化任务的交互式指南。当您需要创建自动执行或周期性的计划任务（例如“每天早上汇总我的邮件”、“每周一发一份待办清单”）时使用此技能，也可通过 /automation 斜杠命令触发。",
    "Learn more about Inherit Global": "了解更多关于 继承全局 的信息",
    "Links": "链接",
    "New Automation": "新建自动化任务",
    "New Conversation in Workspace": "在工作区中新建会话",
    "No automations configured.": "暂未配置自动化任务。",
    "No conversations found": "未找到会话",
    "No resources added yet.": "暂未添加资源。",
    "Notice": "注意",
    "Official plugin for Dart and Flutter that installs Flutter/Dart Skills, Rules, Custom Agents, and Dart MCP server for building natively compiled, visually stunning applications for mobile, web, desktop, and embedded devices from a single codebase": "Dart 和 Flutter 官方插件，一键安装 Flutter/Dart 技能、规则、自定义智能体及 Dart MCP 服务器，助力从单一代码库构建面向移动端、Web、桌面和嵌入式设备的原生编译精美应用。",
    "Open in preview": "在预览中打开",
    "Open project settings": "打开项目设置",
    "Options": "选项",
    "Other Projects": "其他项目",
    "Paths the agent can modify.": "智能体可以修改的文件或目录路径。",
    "Paths the agent can read.": "智能体可以读取的文件或目录路径。",
    "Pinned Chats Only": "仅置顶会话",
    "Pinned Conversations": "置顶会话",
    "Preview": "预览",
    "Proceed in Sandbox": "在沙箱中继续",
    "Project + Worktree": "项目 + 工作区树",
    "Prompt to run when triggered...": "触发时要执行的提示词指令...",
    "Prototype, build & run modern apps that users love with Firebase's backend, AI, and operational infrastructure.": "利用 Firebase 的后端、AI 和运营基础设施，快速原型设计、构建和运行深受用户喜爱的现代化应用。",
    "Read Files": "读取文件",
    "Read, draft, and edit docs.": "读取、起草和编辑文档。",
    "Read, edit, and export presentations.": "读取、编辑和导出幻灯片演示文稿。",
    "Read, write, and format spreadsheets.": "读取、写入和格式化电子表格。",
    "Regroup Google3 Chats": "重新分组 Google3 对话",
    "Remote Control Issue": "远程控制问题",
    "Resources": "资源",
    "Restore": "恢复",
    "Search and retrieve official documentation across Google Cloud, Gemini, Android, Firebase, Flutter, and Web. Requires Google Cloud credentials (ADC) or an API key.": "跨 Google Cloud、Gemini、Android、Firebase、Flutter 和 Web 搜索并检索官方文档。需要配置 Google Cloud 凭据 (ADC) 或 API 密钥。",
    "Search automations...": "搜索自动化任务...",
    "Search conversations with in the top left.": "可通过左上角的快捷搜索框搜索对话。",
    "Search conversations, commands, and code...": "搜索会话、命令和代码...",
    "Search plugins...": "搜索插件...",
    "Search tabs, files, plugins, subagents, artifacts, tasks...": "搜索标签页、文件、插件、子智能体、工件、任务...",
    "Search, upload, download, and share files.": "搜索、上传、下载和分享文件。",
    "See more": "展开更多",
    "Select Project": "选择项目",
    "Send immediately": "立即发送",
    "Setup Jetski Chat": "设置 Jetski Chat",
    "Terminal commands the agent can execute.": "智能体可以执行的终端命令。",
    "This page is going away soon": "此页面即将下线",
    "This plugin provides a specialized suite of skills for data engineers and database practitioners working on Google Cloud. It acts as an expert assistant, allowing you to use natural language prompts in your preferred coding agent to architect complex data pipelines, transform data with dbt, write Spark and BigQuery SQL notebooks, and orchestrate end-to-end workflows across GCP's data ecosystem.": "此插件为在 Google Cloud 上工作的数据工程师和数据库从业者提供专用技能套件。它可作为专家助手，让您通过自然语言提示词构建复杂的数据流水线、使用 dbt 转换数据、编写 Spark 与 BigQuery SQL Notebook，并在 GCP 数据生态系统中编排端到端工作流。",
    "URLs the agent can actuate on using the browser.": "智能体可以使用浏览器执行交互操作的 URL 地址。",
    "URLs the agent can read or open in the browser.": "智能体可以读取或在浏览器中打开的 URL 地址。",
    "Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.": "使用 Chrome DevTools MCP 与官方文档排查连接和目标问题。当 list_pages、new_page 或 navigate_page 失败，或服务器初始化失败时触发此技能。",
    "Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.": "使用 Chrome DevTools MCP 依据 web.dev 指南进行无障碍（a11y）调试与审计。适用于测试语义化 HTML、ARIA 标签、焦点状态、键盘导航、触控目标与颜色对比度。",
    "Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).": "通过 MCP 使用 Chrome DevTools 进行高效调试、排障与浏览器自动化。适用于调试网页、自动化浏览器交互、分析性能或检查网络请求。此技能不适用于 `--slim` 模式（MCP 配置）。",
    "Using the Google Antigravity Python SDK to build AI agents": "使用 Google Antigravity Python SDK 构建 AI 智能体。",
    "View archived in the sidebar": "在侧边栏中查看已归档项",
    "Workspace + Worktree": "工作区 + 工作区树",
    "Workspace Command Access": "工作区命令访问权限",
    "Workspace File Access": "工作区文件访问权限",
    "Write Files": "写入文件",
    "You can upgrade to a Google AI Ultra plan to receive higher rate limits.": "您可以升级到 Google AI Ultra 计划以获取更高的速率限制。",
    "You can upgrade to the Google AI Ultra plan to receive higher rate limits.": "您可以升级到 Google AI Ultra 计划以获取更高的速率限制。",
    "automation": "自动化",
    "for more help.": "获取更多帮助。",
    "generative_ui": "生成式交互界面",
    "migrate-workflows": "工作流迁移工具",
    "permissioned-github": "GitHub 权限助手",
    "plugin": "插件管理与开发",
    "to ask for content changes for legal reasons.": "以出于法律原因请求更改内容。",
    "to back up your data and run the migration.": "以备份您的数据并运行迁移。",
    "ui-extension": "UI 侧边栏扩展开发",
    "ui-plugin-navigation": "UI 插件面板导航",
    "Loading conversation...": "正在加载对话...",
    "Failed to load conversation": "加载对话失败",
    "Failed to delete conversation": "删除对话失败",
    "Conversation History": "对话历史",
    "When enabled, this agent will be able to access past conversations to inform its responses.": "启用后，此智能体将能够访问过去的对话记录，以为其响应提供参考。"
}));
    const lowerMap = new Map();
    const LOWER_WORDS_EXCLUDE = new Set(['on', 'in', 'to', 'at', 'by', 'for', 'with', 'as', 'system', 'review', 'active', 'browser', 'global', 'including', 'and', 'or', 'file', 'files', 'help', 'app', 'plan', 'search']);
    for (const [k, v] of map.entries()) {
        const lowerK = k.toLowerCase();
        if (LOWER_WORDS_EXCLUDE.has(lowerK) && k !== lowerK) {
            continue;
        }
        lowerMap.set(lowerK, v);
    }
    
    const longEntries = [["The Wiz MCP Server connects multiple security data sources through a central host and server setup. This creates a single, contextual view of your security posture—simplifying investigations and speeding up incident response and remediation. Wiz MCP also gives users instant access to cloud inventory, configurations, and security issues, all through a single host with just a simple prompt. By using Wiz MCP, customers can enrich security investigations with precise business context. This allows security teams to prioritize responses based on relevance, drastically improving the accuracy and effectiveness of threat mitigation.","Wiz MCP 服务器通过中心化主机与服务器架构连接多种安全数据源，为您的安全状况提供统一的上下文全景视图，从而简化调查流程并加速安全事件的响应与修复。Wiz MCP 还让用户只需一条简单提示词即可通过单一主机即时访问云资产清册、配置和安全隐患。借助 Wiz MCP，安全团队能够利用精准的业务上下文丰富调查细节，根据相关度确定响应优先级，大幅提升威胁排查与缓解的准确度与效率。"],["How to manage and create plugins — namespaced bundles of skills, agents, rules, MCP servers and hooks that install, enable and disable as a single unit. Use this skill when the user wants to enable, disable, install or uninstall a plugin, when they want to create a new plugin, or when a new customization should be packaged into a plugin rather than left loose. Also triggered by the /plugin slash command. Don't use for the underlying customization system itself — discovery roots, loading priority, or authoring a standalone skill, agent, rule, hook or MCP server outside a plugin; see the customizations guide skill for those.","管理和创建插件——将技能、智能体、规则、MCP 服务器和钩子打包为带命名空间的独立单元，支持整体安装、启用和禁用。当您需要启用、禁用、安装、卸载或创建新插件时使用此技能，也可通过 /plugin 斜杠命令触发。"],["• Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command. • Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list). Note: A change to this setting will only apply to new messages sent to Agent. In-progress responses will use the previous setting value.","• 始终继续 - 执行终端命令前从不请求确认（黑名单除外）。这赋予了智能体最强免干预持续运行能力，但执行高危命令的风险也最高。 \n• 请求审查 - 执行终端命令之前总是请求确认（白名单除外）。 \n\n注意：对此项设置的更改，仅对之后新发送给智能体的消息生效。正在进行中的响应将沿用此前的设置规则。"],["Search and retrieve comprehensive financial and corporate data from S&P Global using natural language. This MCP server connects to S&P Global Market Intelligence (via Kensho) to query company profiles, identifiers (CUSIP, ISIN), financial statements (balance sheets, income statements, cash flows), historical stock prices, market capitalization, earnings call transcripts, M&A transactions, funding rounds, consensus analyst estimates, and executive profiles directly from your AI tools.","使用自然语言从标普全球 (S&P Global) 搜索并检索全面的金融与企业数据。该 MCP 服务器连接至标普全球市场情报（通过 Kensho），直接从 AI 工具中查询企业概况、证券标识符 (CUSIP、ISIN)、财务报表（资产负债表、利润表、现金流表）、历史股价、市值、财报会议纪要、并购交易、融资轮次、分析师一致预期及高管履历。"],["Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands in your editor. No SQL. No dashboards. No tabs full of charts you forgot you opened. Try things like: - \"How many unique users signed up in the last 7 days, broken down by day?\" - \"Create an A/B test for our pricing page that measures conversion to checkout.\" - \"What are the top 5 errors in my project this week?\"","提问，即得答案。\n该 MCP 是供您的编程智能体调用的服务器。用自然语言提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在您的编辑器中。无需编写 SQL，无需仪表盘，也无需打开一堆早已遗忘的图表标签页。\n\n试试输入类似以下内容：\n - \"过去 7 天内有多少独立用户注册，按天细分？\"\n - \"为我们的定价页面创建一个 A/B 测试，衡量结账转化率。\"\n - \"本周我的项目中排名前 5 的错误是什么？\""],["Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience. • Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content. • Agent Decides - Agent will decide when to ask for review based on task complexity and user preference. • Asks for Review - Agent always asks for review.","指定智能体在请求审查交付件时的行为。交付件(Artifact)是智能体为提供更丰富的对话体验而创建的文档。 \n• 始终继续 - 智能体从不请求审查。这能最大化自主性，但在不安全或被注入内容上运行的风险也最高。 \n• 智能体决策 - 智能体将根据任务复杂程度及用户偏好决定何时请求审查。 \n• 请求审查 - 智能体始终会请求审查。"],["Search and retrieve real-time financial and stock market data from Finnhub using natural language. This MCP server connects to your Finnhub account to access stock quotes, historical OHLCV candles, company profiles, standardized financial statements (balance sheets, income statements, cash flow), earnings call transcripts, analyst estimates and price targets, SEC filings, ETF and mutual fund holdings, forex, crypto, and economic indicators directly from your AI tools.","使用自然语言从 Finnhub 搜索并检索实时金融与股市数据。该 MCP 服务器连接至您的 Finnhub 账户，直接从 AI 工具中访问股票实时报价、历史 K 线 (OHLCV)、公司概况、标准化财务报表（资产负债表、利润表、现金流量表）、财报电话会议纪要、分析师预期与目标价、SEC 监管文件、ETF/共同基金持仓、外汇、加密货币及宏观经济指标。"],["Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to Lovable so you can create projects and workspaces, send build instructions to the Lovable agent, inspect generated code via diffs and file trees, read and write project knowledge, manage Postgres databases and connectors, and deploy apps directly from your AI tools.","使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至 Lovable，让您可以创建项目和工作区、向 Lovable 智能体发送构建指令、通过差异对比和文件树检查生成的代码、读写项目知识库、管理 Postgres 数据库与连接器，并直接从 AI 工具中部署应用程序。"],["The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve information for Google's products such as Firebase, Google Cloud, Android, Maps, and more. By connecting your AI application straight to our official library of documentation, it ensures the code and guidance you receive are up-to-date and based on authoritative context.","谷歌开发者知识库 MCP 服务器赋予 AI 开发工具检索 Google 官方开发者文档的能力，可查询 Firebase、Google Cloud、Android、Maps 等 Google 系列产品的官方资料。通过将 AI 应用直连官方文档库，确保您获取的代码与开发指导始终保持最新并具备权威上下文依据。"],["Explore deep global markets data and financial analytics from LSEG (London Stock Exchange Group). This MCP server connects your AI tools to LSEG Financial Analytics (LFA) to price bonds and bond futures, analyze yield and credit curves, evaluate FX spot and forward carry trades, value options with full Greeks, and access IBES consensus estimates, company fundamentals, historical pricing, and macroeconomic indicators.","探索来自伦敦证券交易所集团 (LSEG) 的深度全球金融市场数据与财务分析。该 MCP 服务器将您的 AI 工具连接至 LSEG 金融分析平台 (LFA)，用于对债券和国债期货统一定价、分析收益率与信用利差曲线、评估外汇即期与远期套息交易、计算期权完整希腊字母风控指标 (Greeks)，并调取 IBES 市场一致预期、公司基本面、历史行情与宏观经济指标。"],["Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.","提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行 (agy CLI)、Antigravity 2.0、IDE、Python SDK、斜杠命令、快捷键以及自定义配置（技能、规则、MCP、Sidecars 插件等）。当用户询问如何使用、配置或自定义 Antigravity 及其工具链时激活。"],["Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0","提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行 (agy CLI)、Antigravity 2.0、IDE、Python SDK、斜杠命令、快捷键以及自定义配置（技能、规则、MCP、Sidecars 插件等）。当用户询问如何使用、配置或自定义 Antigravity 及其工具链时激活"],["Intelligent DevSecOps automation for your development workflow, powered by natural language. Connects your AI coding agent (Antigravity) to 150+ integrated DevOps tools via MCP — security scanning, pipeline generation, compliance auditing, and documentation, all via plain-English commands without leaving the IDE. Source code analysis runs locally; only structured results are returned to the portal.","基于自然语言驱动的研发工作流智能化 DevSecOps 自动化套件。通过 MCP 将您的 AI 编程智能体 (Antigravity) 连接至 150+ 款集成 DevOps 工具——无需离开 IDE，仅凭纯自然语言指令即可完成安全扫描、流水线生成、合规审计与技术文档撰写。源码分析完全在本地运行，仅向门户回传结构化结果。"],["This plugin provides a specialized suite of skills for data engineers and database practitioners working on Google Cloud. It acts as an expert assistant, allowing you to use natural language prompts in your preferred coding agent to architect complex data pipelines, transform data with dbt, write Spark and BigQuery SQL notebooks, and orchestrate end-to-end workflows across GCP's data ecosystem.","此插件为在 Google Cloud 上工作的数据工程师和数据库从业者提供专用技能套件。它可作为专家助手，让您通过自然语言提示词构建复杂的数据流水线、使用 dbt 转换数据、编写 Spark 与 BigQuery SQL Notebook，并在 GCP 数据生态系统中编排端到端工作流。"],["Forge is an AI-powered platform that automates the earliest, most time-consuming phase of software development — the \"Day 0\" planning that typically takes weeks of meetings, documents, and back-and-forth. Exposes project/repo linking, PRD/BRD/architecture artifact retrieval, work-order management, commit/PR automation, and CI/CD pipeline tools directly to your AI coding agent.","Forge 是一款 AI 驱动的研发平台，致力于实现软件开发最早期、最耗时的阶段自动化——即通常需要耗费数周开会、撰写文档和反复沟通的 \"Day 0\" 规划阶段。直接向您的 AI 编程智能体开放项目/代码仓库关联、PRD/BRD/架构产物检索、工单管理、代码提交/PR 自动化以及 CI/CD 流水线工具。"],["Within each group, models share a weekly limit and a 5-hour limit. Quota is consumed proportionally to the cost of the tokens. Thus, limits will last longer with shorter tasks or using more cost-effective models. The 5-hour limit smooths out aggregate demand to fairly distribute global capacity across all users, while your weekly limit is tied directly to your individual tier.","在每个群组内，模型共享每周限制和 5 小时限制。配额的消耗与 Token 的成本成正比。因此，通过较短的任务或使用更具性价比的模型，限制额度可以维持得更久。5 小时限制可以平滑总体需求，以便在所有用户之间公平分配全局容量，而您的每周限制则直接与您的个人层级挂钩。"],["Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, Salesforce, Shopify, Stripe, BigQuery, Snowflake, and more) using natural language. Read live data and write changes back (pause or enable campaigns, set budgets, upload conversions) with no SQL and no custom integrations.","使用自然语言跨 325+ 种连接器（Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot、Salesforce、Shopify、Stripe、BigQuery、Snowflake 等）查询并处理您的营销、分析、CRM、电商及仓储数据。无需编写 SQL 或自定义集成，即可读取实时数据并回写变更（暂停或启用广告活动、设定预算、上传转化数据）。"],["Allow Agent to view and edit files outside of the current Workspace automatically. Use with caution: this provides the Agent access to additional potentially-relevant information, but also allows the Agent to access credential files, secrets, and other files outside of the Workspace that could be targeted in prompt injection attacks or other exploits by malicious actors.","允许智能体自动查看并编辑当前工作区之外的文件。请谨慎使用：这赋予了智能体访问额外潜在相关信息的权限，但也允许其访问凭证文件、机密私钥以及工作区之外的其他敏感文件，这些文件可能会成为恶意攻击者进行提示词注入攻击或其他漏洞利用的目标。"],["Allow Agent to view and edit files outside of the current workspace automatically. Use with caution: this provides the Agent access to additional potentially-relevant information, but also allows the Agent to access credential files, secrets, and other files outside of the workspace that could be targeted in prompt injection attacks or other exploits by malicious actors.","允许智能体自动查看和编辑当前工作区之外的文件。请谨慎使用：这使智能体能够访问更多可能相关的信息，但也可能让智能体接触到凭证文件、密钥和其他工作区外的文件，这些文件可能被恶意行为者利用进行提示注入攻击或其他形式的利用。"],["Connect to FactSet AI-Ready Data to search and read institutional-grade financial data using natural language. This MCP server provides unified access to company fundamentals, consensus estimates, global prices, ownership, M&A transactions, debt capital structure, supply chain relationships, funds/ETFs, and unstructured content directly from your AI tools.","连接至 FactSet AI-Ready Data，使用自然语言搜索并阅读机构级金融数据。该 MCP 服务器直接从您的 AI 工具中提供对公司基本面、分析师一致预期、全球行情报价、股权结构、并购交易、债务资本结构、供应链上下游关系、基金/ETF 以及非结构化研报内容的统一访问。"],["Bring Endor Labs security into your AI tools. With this MCP server, you can check dependency safety before adding a new package, scan your open source dependencies for vulnerabilities and malware, find leaked secrets accidentally committed in your Git history, run static analysis (SAST) on your code, and perform AI security reviews on your code changes.","将 Endor Labs 安全防护能力引入您的 AI 工具中。借助该 MCP 服务器，您可以在引入新依赖包之前检查其安全性、扫描开源依赖中的已知漏洞与恶意软件、发现意外提交到 Git 历史记录中的泄露机密、对代码执行静态应用安全测试 (SAST)，并对代码变更进行 AI 安全审查。"],["Stand up matters, shape workspace schema, govern access, and analyze usage in RelativityOne. This MCP server allows you to securely connect to your RelativityOne instance to search and locate content, create and edit matters, workspaces, and clients, manage user and group permissions, and generate usage reports using natural language.","在 RelativityOne 中建立案件、定制工作区结构、治理访问权限并分析使用情况。该 MCP 服务器允许您使用自然语言安全连接至 RelativityOne 实例以搜索定位内容、创建和编辑案件、工作区及客户信息、管理用户与用户组权限，并生成使用情况审计报告。"],["Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a single graph so agents can answer blast radius, onboarding, and dependency mapping questions by traversing real relationships instead of grepping across separate systems.","将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全扫描发现索引到统一知识图谱中，使智能体能够通过遍历真实关联关系来回答影响面分析、新人上手和依赖关系映射等问题，而无需在分散的系统中到处搜索。"],["Civil legal guidance for people navigating court without a lawyer. This MCP server provides educational guidance for self-represented litigants in U.S. civil legal matters across all 50 states, including case intake assessments, procedural deadline calculations, and prioritized next-step guidance directly from your AI tools.","为未聘请律师亲自出庭的当事人提供民事诉讼指导。该 MCP 服务器为全美 50 个州参与民事诉讼的无律师当事人提供指导，直接在您的 AI 工具中提供案件受理评估、诉讼程序期限计算以及按优先级排序的下一步诉讼行动指南。"],["Search Guidepoint's expert network for interview transcripts, browse curated event catalogs, and retrieve your personal event schedule. This MCP server also allows you to manage your event participation by registering for, requesting approval for, or canceling upcoming Guidepoint events directly from your AI tools.","在 Guidepoint 专家网络中搜索访谈纪要、浏览精选行业活动目录并获取您的个人活动日程。该 MCP 服务器还允许您直接从 AI 工具中管理活动参与事项，包括报名、申请审批或取消即将举行的 Guidepoint 专家会议。"],["Author, run, and maintain mabl end-to-end tests from your AI tools. Connect to your mabl workspaces to generate and edit tests, trigger cloud or local runs, diagnose failures with AI analysis, and query results across environments — with every run and its evidence retained in mabl for auditability and compliance.","直接从 AI 工具中编写、运行并维护 mabl 端到端测试。连接至您的 mabl 工作区即可生成并编辑测试用例、触发云端或本地运行、通过 AI 分析诊断失败原因并跨环境查询测试结果，所有运行记录和证据均留存在 mabl 中以满足审计与合规要求。"],["Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to Lovable, allowing your AI agent to interact with, create, and manage your Lovable projects directly from within your preferred AI editor or assistant.","使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至 Lovable，允许您的 AI 智能体直接在偏好的编辑器或助手中交互、创建和管理 Lovable 项目。"],["When enabled, Agent can use browser tools to open URLs, read web pages, and interact with browser content. This allows the Agent access to important (and often critical) knowledge and methods of validation, but any browser integration does increase exposure to external malicious parties for security exploits.","启用后可使用浏览器工具互动网页。提供验证知识途径，但也加大了遭遇外部网站页面挂马和网络越权等各路安全劫持风险口子。"],["Interact with your iManage Work platform using natural language. This MCP server connects to your iManage account to search workspaces, folders, and documents, inspect document profiles and version histories, read document contents, and manage legal and knowledge work workflows directly from your AI tools.","使用自然语言与您的 iManage Work 平台交互。该 MCP 服务器连接至您的 iManage 账户，直接从 AI 工具中搜索工作区、文件夹与文档、检查文档属性与版本历史记录、阅读文档内容并管理法律与知识工作流。"],["Bring Harvey's legal intelligence into your AI tools for general legal inquiries, Vault project analysis, and specialized knowledge source research. The Harvey MCP server lets you ask general legal questions, analyze documents in your Vault projects, and query specialized legal research knowledge sources.","将 Harvey 法律智能深度集成到您的 AI 工具中，用于日常法律咨询、Vault 项目分析及专业法律知识库检索。Harvey MCP 服务器允许您提出综合法律问题、分析 Vault 专案文档并检索专业法律研究知识源。"],["Direct candid AI photography through one coherent event, natural reactions, friend or partner POV, and believable camera, light, and material behavior. Use for lifestyle and travel snapshots, multi-person interactions, reference-guided identity preservation, and realistic character or cosplay photography.","通过连贯的事件、自然的反应、朋友或伴侣视角以及可信的相机、光线与材质表现，生成真实自然的 AI 摄影。适用于生活方式与旅行快照、多人互动、参考图身份保持，以及逼真的人物或角色扮演摄影。"],["Connect your Miro boards to AI assistants. This MCP server allows summarizing and searching boards, creating and updating board items (sticky notes, shapes, frames, connectors), generating Mermaid diagrams, and acting on board comments - all while respecting existing Miro permissions and access controls.","将您的 Miro 白板连接至 AI 智能体。该 MCP 服务器支持总结与搜索白板内容、创建和更新白板元素（便签、形状、框架、连线）、生成 Mermaid 流程图并处理白板批注评论，全程严格遵守 Miro 现有的权限与访问控制机制。"],["The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code samples, and best practices. By grounding your AI assistant in our official resources, it can generate more accurate, reliable, and useful code.","Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档、代码示例及最佳实践。通过以官方权威资源为依据，让 AI 助手能够生成更加准确、可靠且实用的地图代码。"],["Search and retrieve documents from your NetDocuments repository using natural language. This MCP server allows AI tools to securely search documents and emails, filter by metadata, and read document contents and details while respecting your existing NetDocuments permissions and governance controls.","使用自然语言在 NetDocuments 文档库中搜索并检索文档。该 MCP 服务器允许 AI 工具安全检索文档与电子邮件、按元数据筛选并阅读文档内容及详情，全程严格遵循您现有的 NetDocuments 权限与数据治理控制。"],["• Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command.","• 始终继续 - 智能体在执行终端命令前从不请求确认（黑名单中的命令除外）。这赋予了智能体最高效的免干预持续运转能力，但也极具风险，可能导致其执行高危系统命令。"],["Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative reports with causal graphs, retrieve observability artifacts (logs, traces, metrics), and apply remediations—directly from your AI tools.","利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题、读取带有因果图的排查报告、检索可观测性数据（日志、调用链、指标）并直接从 AI 工具中应用修复方案。"],["The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.","AlloyDB for PostgreSQL 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群与实例、管理用户权限、创建和恢复备份、导入导出数据以及执行 SQL 查询。"],["The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in your API hub instance - including creating, reading, updating, and deleting them - and search across resources, using natural language.","Apigee API hub 远程 MCP 服务器可让您使用自然语言管理注册在 API hub 实例中的 API、版本、规范、操作、部署、属性、外部 API 和依赖项（涵盖增删改查操作），并在各类资源之间进行全局搜索。"],["The Grafana Cloud MCP server is a remotely hosted Model Context Protocol (MCP) server that lets external AI agents connect directly to your Grafana Cloud data. MCP-compatible clients can query metrics, logs, and other observability data from your Grafana environment without any local installation.","Grafana Cloud MCP 服务器是一款远程托管的 MCP 服务器，允许外部 AI 智能体直连您的 Grafana Cloud 数据。兼容 MCP 的客户端无需任何本地安装，即可从 Grafana 环境中查询指标、日志及其他可观测性数据。"],["Always Proceed - Agent never asks for confirmation before executing terminal commands (except those in the Deny list). This provides the Agent with the maximum ability to operate over long periods without intervention, but also has the highest risk of an Agent executing an unsafe terminal command.","始终继续 - 执行终端命令前从不请求确认（黑名单除外）。提供最强免干预运行能力，但风险也最高。"],["Discover UI plugin panels relevant to the current task and surface a one-click pill in chat to open (toggle) them in the side pane. Use when a running UI plugin's panel would help with what the user is doing, or right after the user enables a new UI plugin pane and a shortcut to open it is handy.","发现与当前任务相关的 UI 插件面板，并在聊天中提供一键胶囊按钮以在侧边栏打开（切换）它们。当正在运行的 UI 插件面板有助于当前操作或刚启用新面板时使用。"],["When enabled, your UI will be slightly modified to ensure more consistent demos. This is only recommended for demo purposes. In most cases, you can run \"Antigravity: Start Demo Mode\" and \"Antigravity: Stop Demo Mode\" to control this switch and update your ~/.gemini/antigravity data directory.","启用后，您的 UI 将进行微调，以确保演示效果的一致性。仅建议用于演示目的。在大多数情况下，您可以运行 \"Antigravity: Start Demo Mode\" 和 \"Antigravity: Stop Demo Mode\" 命令来控制此开关并更新您的数据目录。"],["Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search for data assets, retrieve detailed metadata such as schemas and ownership, and explore aspect types across your distributed data.","将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器支持搜索数据资产、检索表结构和归属关系等详细元数据，并跨分布式数据探索切面类型，实现高效的数据发现与治理。"],["Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural language queries, run saved Looks, create and manage dashboards, and perform instance health checks within your Looker environment.","将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够在 Looker 环境中通过自然语言执行查询、运行已存报表 (Looks)、创建和管理仪表盘，并执行实例健康状况检查，实现数据探索与内容管理。"],["Interactive guide to design and create a scheduled background automation. Use this skill when the user wants to create an automated or recurring scheduled task (e.g. \"summarize my emails every morning\", \"every Monday send me a to-do list\"). Also triggered by the /automation slash command.","用于设计和创建后台定时自动化任务的交互式指南。当您需要创建自动执行或周期性的计划任务（例如“每天早上汇总我的邮件”、“每周一发一份待办清单”）时使用此技能，也可通过 /automation 斜杠命令触发。"],["Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table metadata, execute SQL queries, generate time-series forecasts, and perform contribution analysis directly from your AI tools.","使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集以搜索数据表、检查表元数据、执行 SQL 查询、生成时间序列预测，并直接从 AI 工具中进行归因贡献分析。"],["Connect with your Docusign account using natural language. This MCP server allows you to search and locate Docusign envelopes, templates, and documents, read item details and metadata, create and update envelopes, and trigger or cancel workflow instances directly from your AI tools.","使用自然语言连接至您的 Docusign 账户。该 MCP 服务器让您能够直接在 AI 工具中搜索并定位 Docusign 签署信封、合同模板与文档、读取详细信息与元数据、创建和更新签署信封，并触发或取消电子签署工作流实例。"],["The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view backup & billing details, allowing agentic tooling to leverage ClickHouse's high-performance analytical capabilities.","ClickHouse MCP 服务器允许智能体安全地与 ClickHouse 数据库交互。它提供了统一的接口以执行 SQL 查询、探索数据分布并查看备份与账单明细，使智能体工具能够充分发挥 ClickHouse 卓越的高性能分析能力。"],["Agent auto-executes commands matched by an allow list entry. For Unix shells, an allow list entry matches a command if its space-separated tokens form a prefix of the command's tokens. For PowerShell, the entry tokens may match any contiguous subsequence of the command's tokens.","智能体将自动执行与白名单条目相匹配的命令。对于 Unix 系统 Shell，如果白名单条目的空格分隔分段组成了命令分段的前缀，则视为匹配。对于 PowerShell，分段令牌可以匹配命令中任何连续的子序列。"],["Interact with your Harness account using natural language. This MCP server lets AI agents inspect and manage CI/CD pipelines, executions, services, environments, connectors, feature flags, cloud costs, security findings, chaos experiments, and other Harness platform resources.","使用自然语言与您的 Harness 账户交互。该 MCP 服务器让 AI 智能体能够检查并管理 CI/CD 流水线、任务执行、服务、运行环境、连接器、特性开关 (Feature Flags)、云成本、安全隐患、混沌工程实验等各类 Harness 平台资源。"],["Agent auto-executes commands matched by an allow list entry. For Unix shells, an allow list entry matches a command if its space-separated tokens form a prefix of the command's tokens. For PowerShell, the entry tokens may match any contiguous subsequence of the command tokens.","智能体会自动执行与允许列表条目匹配的命令。对于 Unix shell，如果命令的空格分隔标记形成允许列表条目标记的前缀，则视为匹配。对于 PowerShell，允许列表条目标记可以匹配命令标记中的任何连续子序列。"],["The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.","Cloud SQL 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复备份、导入导出数据以及执行 SQL 查询。"],["Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).","通过 MCP 使用 Chrome DevTools 进行高效调试、排障与浏览器自动化。适用于调试网页、自动化浏览器交互、分析性能或检查网络请求。此技能不适用于 `--slim` 模式（MCP 配置）。"],["How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.","在聊天窗口内嵌或作为独立工件（Artifact）渲染丰富的交互式 HTML 组件。适用于向用户展示图表、数据可视化、交互式控件、教学演示或超越纯文本与 Markdown 的富视觉内容。"],["Give your agent real-time web search and content retrieval. This MCP server connects to Exa's search API so you can run web searches, read full page content as clean markdown, and run multi-step research agents for list-building and enrichment directly from your AI tools.","为您的智能体赋予实时网络搜索与内容检索能力。该 MCP 服务器连接至 Exa 搜索 API，让您可以直接从 AI 工具中执行网络搜索、将完整网页内容作为纯净 Markdown 阅读，并运行多步骤研究智能体以构建清单和补充数据。"],["Give each Best of N fork a full clone of your workspace, including its local commit history. Choosing a winner then gives your workspace that fork's state, so the commits it made are kept. Forks take longer to create than the default CitC clone. See go/jetski-best-of-n.","为每个 Best of N 分支提供工作区的完整克隆（包含本地提交历史）。选出最佳方案后，工作区将直接采用该分支状态并保留其提交记录。"],["Google Cloud guidance for coding agents: first-project onboarding, authentication and credential selection, and safety-critical validation for gcloud CLI commands. Includes the Google Developer Knowledge MCP server for grounded, up-to-date Google Cloud documentation.","面向编程智能体的 Google Cloud 指南：涵盖首项目引导、身份验证与凭据选择，以及 gcloud CLI 命令的关键安全校验。内置 Google 开发者知识库 MCP 服务器，提供权威、最新的 Google Cloud 官方文档支持。"],["Use natural language to find hosts, review detections, search events, and perform other security operations across your Falcon environment. CrowdStrike MCP securely connects AI applications to Falcon platform capabilities through the Model Context Protocol (MCP).","使用自然语言在您的 Falcon 环境中查找主机、查看威胁检测、搜索安全事件并执行其他安全运维操作。CrowdStrike MCP 通过 MCP 协议将 AI 应用程序安全连接至 Falcon 平台能力。"],["Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries, inspecting table schemas, and troubleshooting database performance issues directly from your AI tools.","使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库，直接从 AI 工具中执行 SQL 查询、检查表结构并排查数据库性能问题。"],["Interact with your Neo4j graph database using natural language. This MCP server connects directly to your Neo4j instance to explore your graph schema, run read and write Cypher queries, and inspect nodes, relationships, and paths directly from your AI tools.","使用自然语言与您的 Neo4j 图数据库交互。该 MCP 服务器直接连接到您的 Neo4j 实例，以便从 AI 工具中探索图谱表结构、执行读写 Cypher 查询，并检查节点、关系和路径。"],["Search and manage Salesforce records from your Salesforce remote MCP server. Connect to your Salesforce instance to search across objects (SOSL), execute SOQL queries, inspect object schemas, traverse related records, and create, update, or delete records.","通过 Salesforce 远程 MCP 服务器搜索并管理 Salesforce 业务记录。连接至您的 Salesforce 实例以跨对象搜索 (SOSL)、执行 SOQL 结构化查询、检查对象表结构、遍历关联记录，并创建、更新或删除各类业务记录。"],["When enabled, the agent will be able to access its knowledge base to inform its responses and automatically generate knowledge items in the background. Disabling this will prevent the agent from accessing existing knowledge items, but will not delete them.","启用后，智能体将能够访问其知识库以辅助生成响应，并在后台自动创建知识条目。禁用此功能将阻止智能体访问现有知识条目，但不会将其删除。"],["Connect to Daloopa to discover companies, series, get company fundamentals, search financial documents, and get stock prices. Access verified financial data and KPIs from SEC filings, investor presentations, and earnings reports with source traceability.","连接至 Daloopa 以发现企业、分析时间序列、获取公司财务基本面、检索金融文档并获取股票行情。访问来自 SEC 监管申报、投资者推介材料及财报电话会议的可追溯源头的已验证财务指标与 KPI。"],["• Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser. This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.","• 始终继续 - 不会停下来征求在浏览器中执行 JS 的权限。这赋予了智能体执行复杂操作的最大自主性，但安全漏洞暴露风险也最高。"],["Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser. This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.","始终继续 - 智能体在浏览器中运行 Javascript 代码前不会停下来征求您的许可。这赋予了智能体执行复杂操作的最大自主性，但也使安全漏洞暴露风险最高。"],["AI coding agents are known to have certain security limitations. Users should be aware of potential risks, including data exfiltration and possible code execution. Avoid processing highly sensitive data and verify all the actions taken by the agent.","已知的 AI 编程智能体存在某些安全局限。用户应当意识到潜在的风险，包括数据外泄和可能的代码执行。请避免处理高度敏感的数据，并验证智能体所采取的所有操作。"],["Official plugin for Dart and Flutter that installs Flutter/Dart Skills, Rules, Custom Agents, and Dart MCP server for building natively compiled, visually stunning applications for mobile, web, desktop, and embedded devices from a single codebase","Dart 和 Flutter 官方插件，一键安装 Flutter/Dart 技能、规则、自定义智能体及 Dart MCP 服务器，助力从单一代码库构建面向移动端、Web、桌面和嵌入式设备的原生编译精美应用。"],["Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance templates, manage disks and snapshots, retrieve information about reservations and commitments.","执行一系列云基础设施管理任务，涵盖：管理虚拟机 (VM) 实例、管理实例组管理器与实例模板、管理磁盘和快照，以及检索资源预留与承诺使用折扣信息。"],["Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers.","Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制、加载优先级、发现机制，并指导技能、规则、插件、钩子及 MCP 服务器的创建。"],["This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE or LLM and get curated tracing examples, best practices and Arize support!","该 MCP 服务器为大语言模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 支持服务的通道。将其连接到您的 IDE 或大模型，即可获取精选调用链跟踪示例、最佳实践与 Arize 官方支持！"],["Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers","Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制、加载优先级、发现机制，并指导技能、规则、插件、钩子及 MCP 服务器的创建"],["Interact with your Vercel projects using natural language. Vercel MCP allows AI tools to search Vercel documentation, inspect projects and deployments, analyze deployment and build logs, and manage supported Vercel resources securely.","使用自然语言与您的 Vercel 项目交互。Vercel MCP 允许 AI 工具安全地检索 Vercel 文档、检查项目与部署状态、分析部署和构建日志，并管理受支持的 Vercel 云资源。"],["The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments, evaluate APIs, and automate workflows through natural language interactions.","Postman MCP 服务器将 Postman 与 AI 工具连接，让 AI 智能体能够通过自然语言交互访问工作区、管理接口集合与环境变量、评估 API 并在工作流中实现自动化。"],["The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen details. See https://stitch.withgoogle.com/docs for more details.","Stitch MCP 服务器允许 AI 智能体与 Stitch 进行感官 UI 设计交互：支持根据文本和图像生成界面原型，并访问项目与屏幕细节。详情请参阅 https://stitch.withgoogle.com/docs。"],["Useful for tasks that require file access across your full machine. The agent has full read and write access to all local files, but all proposed terminal commands require manual review and approval before running.","适用于需要访问整机文件的任务。智能体对所有本地文件拥有完全的读写权限，但所有拟执行的终端命令在运行前均需人工审查和批准。"],["Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.","使用 Chrome DevTools MCP 依据 web.dev 指南进行无障碍（a11y）调试与审计。适用于测试语义化 HTML、ARIA 标签、焦点状态、键盘导航、触控目标与颜色对比度。"],["Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and working with database schema in your Supabase projects.","将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置信息、执行 SQL 查询、管理边缘函数 (Edge Functions)，并对 Supabase 项目中的数据库表结构进行操作。"],["Let your agents talk to your Splunk data. Ask what broke, why, and what changed -- in plain English -- and agents search your events, surface the saved searches and lookups that matter, and write the SPL for you.","让您的智能体与 Splunk 数据对话。用自然语言询问发生了什么故障、原因何在以及有什么变动，智能体即可搜索您的事件、调出关键的已存搜索和查询表，并为您自动编写 SPL 查询语句。"],["Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to analyze heapsnapshots or run memory leak detection tools like memlab.","诊断并修复 JavaScript/Node.js 应用中的内存泄漏。当用户报告内存占用过高、OOM 错误，或需要分析堆快照、运行 memlab 等内存泄漏检测工具时使用。"],["Search the live web and extract content from URLs directly in Antigravity. Parallel provides relevant search results and readable page content for your agent. Free to get started, with no API key required.","直接在 Antigravity 中搜索实时网络并从网址提取页面内容。Parallel 为您的智能体提供相关的搜索结果与清晰可读的网页内容。无需 API 密钥，可直接免费上手体验。"],["The breakdown below shows token usage from customizations like rules, skills, and MCP. If a budget is exceeded, large rules are demoted to path pointers and large customizations are excluded automatically.","下方的细目展示了规则、技能预设和 MCP 等个性化定制项的 Token 占用情况。如果超出预算，大型规则将被降级为路径指针，大型自定义项将被自动排除。"],["Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device management data into broader automated workflows.","使用自然语言查询访问企业移动设备管理数据，包括设备机队状态、合规策略自动审计，并将设备管理数据无缝整合到更广泛的自动化工作流中。"],["When enabled, enforces settings that prevent the agent from autonomously running targeted exploits and requires human review for all agent actions. Visit antigravity.google/docs/strict-mode for details.","启用后，将强制执行相关设置，防止智能体自主运行针对性漏洞利用，并要求对所有操作进行人工审查。访问 antigravity.google/docs/strict-mode 了解详情。"],["Access institutional-grade financial data in your AI tools, delivering fundamentals, ratios, KPIs, segments, adjusted metrics, SEC filings, earnings calls, and market quotes within minutes of earnings.","在您的 AI 工具中访问机构级金融数据，在企业财报发布后数分钟内即可极速呈实体基本面、财务比率、关键 KPI、业务分部数据、调整后口径指标、SEC 监管申报文件、业绩电话会记录以及实时行情报价。"],["Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.","在全局和工作区配置中自动将旧版工作流（Workflows）迁移为现代技能（Skills）。自动扫描现有工作流、创建目标 SKILL.md 文件并安全归档旧工作流文件。"],["The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and interaction capabilities for developers and tools.","GitHub MCP 服务器提供与 GitHub API 的无缝集成，为开发者和工具赋予高级自动化与深度交互能力。"],["When enabled, Agent will use IDE's shell integration to detect and report terminal command execution. When disabled, the agent will use its own shell. Restart the application for this to take effect.","开启后，智能体将利用 IDE 的 Shell 集成来探测并上报终端命令的执行情况。禁用后，智能体将使用其自带的 Shell 环境。重新启动应用程序后方可生效。"],["Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.","使用 Chrome DevTools MCP 与官方文档排查连接和目标问题。当 list_pages、new_page 或 navigate_page 失败，或服务器初始化失败时触发此技能。"],["Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries, inspecting schemas, and managing tables.","使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库以执行 SQL 查询、检查表结构并管理数据表。"],["A high-risk mode that disables all safety barriers. The agent operates with full system access, auto-executes all terminal commands, and reads or writes to all local files without review prompts.","一种禁用所有安全屏障的高风险模式。智能体在拥有完全系统访问权限下运行，自动执行所有终端命令，读写所有本地文件且无需审查提示。"],["The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and upsert/search data in your Pinecone indexes.","Pinecone MCP 服务器允许 AI 工具检索 Pinecone 文档、配置向量索引、结合索引结构生成代码，并在 Pinecone 索引中执行数据插入/更新 (Upsert) 与相似度检索。"],["Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table schemas, and execute SQL queries.","使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集，执行数据表搜索、表结构检查与 SQL 查询。"],["Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative reports, and suggest fixes.","利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题、读取排查报告并给出修复建议。"],["Useful for typical development with an emphasis on security. It prioritizes safety over speed by requiring manual approval for all terminal commands and files outside the project directory.","适用于以安全为重点的典型开发。它通过要求对项目目录外的所有终端命令和文件进行人工批准，将安全性置于速度之上。"],["The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with different Stripe services.","Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用丰富的工具集与各类 Stripe 支付及账单服务进行交互。"],["LegalZoom's MCP connector gives users instant access to legal product information, business formation guidance, and on-demand attorney consultations, all without leaving the conversation.","LegalZoom MCP 连接器让用户无需离开对话，即可即时获取法律产品资讯、公司设立注册指导以及按需律师专业咨询服务。"],["When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.","开启后，当您的模型配额耗尽时，反重力智能编程将使用您的 AI 额度来满足模型请求。反重力智能编程始终会先使用您的模型配额，然后再使用 AI 额度。"],["Agent asks for permission before executing commands matched by a deny list entry. The deny list follows the same matching rules as the allow list and takes precedence over the allow list.","智能体在执行与黑名单条目匹配的命令前会先征得您的许可。黑名单遵循与白名单相同的匹配规则，且其优先级高于白名单。"],["Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search and inspect data assets.","将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器通过数据搜索与资产检查支持企业级数据治理与血缘检索。"],["Build applications with the Gemini Interactions API and Live API, including text generation, multi-turn chat, streaming, function calling, managed agents, and real-time audio and video.","使用 Gemini Interactions API 和 Live API 构建应用，涵盖文本生成、多轮对话、流式传输、函数调用、托管智能体以及实时音视频交互。"],["• Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content.","• 始终继续 - 智能体绝不主动请求审查。这能最大化智能体的工作效率和自主性，但也伴随着在不安全或被注入污染的交付件上运行的极高风险。"],["The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development environments and AI agent platforms.","Spanner 远程 MCP 服务器可让您从 AI 开发环境和智能体平台访问并运行 Spanner 工具，以创建、管理和查询 Spanner 分布式数据库资源。"],["Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and performance analysis.","赋予 Antigravity 控制并检查实时运行的 Chrome 浏览器的能力，全面调用 Chrome DevTools 的强大功能以实现高可靠的自动化、深度代码调试与页面性能分析。"],["The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in your Apigee API hub.","Apigee API hub 远程 MCP 服务器可让您管理注册在 Apigee API hub 中的 API、版本、规范、操作、部署、属性、外部 API 以及依赖项。"],["View your available model quota and AI credits. Model quota refreshes periodically based on your plan. Enable AI Credit Overages to continue using models when your quota is exhausted.","查看您可用的模型配额和 AI 额度。模型配额会根据您的计划定期刷新。启用 AI 额度超量使用，以便在配额耗尽时继续使用模型。"],["Always Proceeds - Agent never asks for review. This maximizes the autonomy of the Agent, but also has the highest risk of the Agent operating over unsafe or injected Artifact content.","始终继续 - 智能体从不请求审查。这能最大化自主性，但在不安全或被注入内容上运行的风险也最高。"],["You don't have any custom agents or plugins configured. Create agent scripts in the agents/ directory or add plugins to the plugins/ directory inside your Gemini configuration folder.","您尚未配置任何自定义智能体或插件。可在 Gemini 配置文件夹下的 agents/ 目录中创建智能体脚本，或在 plugins/ 目录中添加插件。"],["This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE to debug traces.","该 MCP 服务器为大模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 诊断追踪服务。"],["Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands in your editor.","提问，即得答案。该 MCP 是供您的编程智能体调用的服务器。用英语提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在您的编辑器中。"],["The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with Stripe resources.","Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用多种工具与支付及财务资源进行交互。"],["The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view table structures.","ClickHouse MCP 服务器让 AI 能够安全地与 ClickHouse 数据库交互，提供通用的 SQL 执行与表结构分析接口。"],["Please describe the feature you'd like to see. The more detailed the requirements, the easier it will be for our team to incorporate your ideas. Some helpful information includes:","请描述您希望看到的功能。需求越详细，团队就越容易采纳您的想法。可参考补充以下信息："],["Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and DOM inspection.","赋予 Antigravity 控制并检查实时 Chrome 浏览器的能力，充分利用 Chrome DevTools 的强大调试自动化分析功能。"],["The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add-ons, databases, and more.","Heroku 平台 MCP 服务器支持与 Heroku 云资源进行无缝交互，允许大语言模型读取、管理并运维应用程序、附加组件 (Add-ons)、数据库等资源。"],["This page is taking longer than expected to load, or it may be blocking embedded views (via X-Frame-Options or CSP). We'll keep waiting, or you can open it directly in a new tab.","此页面加载时间超出预期，或因 X-Frame-Options / CSP 策略限制了内嵌显示。我们将继续等待，您也可以直接在新标签页中打开。"],["Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural language queries.","将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够通过自然语言执行数据探索、大屏看板与分析管理。"],["The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code samples, and APIs.","Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档与代码示例。"],["Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and database schemas.","将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置、执行 SQL 查询及边缘函数。"],["Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a knowledge graph.","将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全问题索引到统一知识图谱中。"],["Use the IDE's shell integration to detect and report terminal command execution. When disabled, the agent uses its own shell. Restart the application for this to take effect.","使用 IDE 的 Shell 集成来检测并报告终端命令执行情况。禁用后，智能体将使用自带 Shell（需重启应用生效）。"],["Build, package, run, and debug UI extensions for Antigravity: interactive web panels that render in the side pane, served by a Node.js sidecar using the built-in Sidecar SDK.","构建、打包、运行和调试 Antigravity 的 UI 扩展：在侧边栏渲染交互式 Web 面板，由基于内置 Sidecar SDK 的 Node.js 伴生服务（Sidecar）驱动。"],["The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen prototypes.","Stitch MCP 服务器允许 AI 智能体与 Stitch 交互进行感官 UI 设计：从文本与图像生成原型 UI，并管理屏幕原型。"],["The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the europe-west1 region.","Cloud Audit Manager 远程 MCP 服务器允许您在 europe-west1 区域注册项目、生成审计与范围报告，并检查资源注册状态。"],["The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add-ons, and databases.","Heroku 平台 MCP 服务器提供与 Heroku 云资源的无缝交互，让大语言模型能够读取、管理并运维应用及插件。"],["The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the us-central1 region.","Cloud Audit Manager 远程 MCP 服务器允许您在 us-central1 区域注册项目、生成审计与范围报告，并检查资源注册状态。"],["The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma design files.","Dev Mode MCP 服务器将 Figma 深度引入您的工作流中，为根据 Figma 设计文件生成前端代码的 AI 智能体提供关键的设计信息与设计上下文。"],["The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and repository management.","GitHub MCP 服务器提供与 GitHub API 的无缝深度集成，支持高级自动化工作流与仓库全流程操作。"],["The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve reference guides.","谷歌开发者知识库 MCP 服务器赋予 AI 开发工具搜索 Google 官方开发者文档及参考指南的能力。"],["Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, Salesforce, etc.).","跨 325+ 数据连接器查询和处理您的营销、分析、CRM、电商及仓储数据（涵盖 Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot、Salesforce 等）。"],["The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments, and test APIs.","Postman MCP 服务器连接 Postman 与 AI 工具，赋予 AI 智能体访问工作空间、管理接口集合与环境及测试 API 的能力。"],["When Turbo mode is on, the agent will automatically capture screenshots in the Browser without explicit user input. You can toggle this setting in Antigravity's settings.","开启极速 (Turbo) 模式后，智能体将在浏览器中自动截图而无需每次确认。您可以在 Antigravity 设置中切换此选项。"],["Build applications with the Gemini Interactions API and Live API, including text, image, video, and speech generation, managed agents, and real-time multimodal streaming.","使用 Gemini Interactions API 和 Live API 构建应用，涵盖文本、图像、视频和语音生成、托管智能体以及实时多模态流式传输。"],["Plugins are packaged collections of skills and MCPs to help the Agent in Antigravity work with Google developer products. You can always change your choices in Settings.","插件是打包的技能与 MCP 集合，用于帮助反重力智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。"],["Manage Pub/Sub resources and publish messages. Create, list, get, update, and delete Pub/Sub topics, subscriptions, and snapshots, as well as publish messages to topics.","管理 Pub/Sub 消息订阅发布资源。支持创建、查询、更新和删除主题及订阅，并发布消息。"],["Plugins are packaged collections of skills and MCPs to help the Agent in 反重力智慧程式設計 work with Google developer products. You can always change your choices in Settings.","插件是打包的技能与 MCP 集合，用于帮助反重力智能编程中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。"],["Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands...","提问，即得答案。该 MCP 是供您的编程智能体调用的服务器。用英语提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在..."],["The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.","下方的细目展示了源自技能预设、规则和 MCP 等个性化定制的 Token 使用量。如果超出了预算额度，大型的定制组件将会被自动截断。"],["The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore backups.","AlloyDB for PostgreSQL 远程 MCP 服务器可让您访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群及实例、管理用户，以及创建和恢复数据备份。"],["The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer databases.","Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维。"],["This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE...","该 MCP 服务器为大模型提供使用 Arize AX 埋点 AI 应用程序的文档与示例，并提供接入 Arize 诊断追踪服务..."],["Plugins are packaged collections of skills and MCPs to help the Agent in 反重力智能编程 work with Google developer products. You can always change your choices in Settings.","插件是打包的技能与 MCP 集合，用于帮助反重力智能编程中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。"],["Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device telemetry.","使用自然语言查询访问企业移动设备管理数据、自动合规审计及设备数据遥测分析。"],["Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and...","赋予 Antigravity 控制并检查实时 Chrome 浏览器的能力，充分利用 Chrome DevTools 的强大调试自动化分析功能..."],["The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in...","Apigee API hub 远程 MCP 服务器可让您管理注册在平台中的 API、版本、规范、操作、部署、属性、外部 API 以及依赖项..."],["Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative...","利用 AI 驱动的根因分析调查并修复软件问题。该 MCP 服务器可连接至您的 Antimetal 账户以搜索问题并读取排查记录..."],["Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search...","将您的 AI 智能体连接至知识目录 Knowledge Catalog（原 Dataplex）。该 MCP 服务器通过数据搜索与资产检查支持企业级数据治理与血缘检索..."],["The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with...","Stripe MCP 服务器允许您通过函数调用轻松集成 Stripe API。支持使用多种工具与支付及财务资源进行交互..."],["The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and query vectors.","Pinecone MCP 服务器允许 AI 工具检索 Pinecone 官方文档、配置向量索引、基于索引结构生成代码并查询向量。"],["The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen...","Stitch MCP 服务器允许 AI 智能体与 Stitch 交互进行感官 UI 设计：从文本与图像生成原型 UI，并管理屏幕原型..."],["The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view...","ClickHouse MCP 服务器让 AI 能够安全地与 ClickHouse 数据库交互，提供通用的 SQL 执行与表结构分析接口..."],["Allow Tab to view and edit the files in .gitignore. Use with caution if your .gitignore lists files containing credentials, secrets, or other sensitive information.","允许使用 Tab 键查看和编辑 .gitignore 文件。如果您的 .gitignore 文件列出了包含凭证、密钥或其他敏感信息的文件，请谨慎使用"],["Build and prototype location-aware applications with Google Maps Platform. Integrate interactive maps, search and inspect Places details, calculate optimal routes.","使用 Google Maps Platform 构建和原型设计具备位置感知能力的应用。集成交互式地图、搜索并查看地点详情、计算最佳路线。"],["Manage Pub/Sub resources and publish messages. Create, list, get, update, and delete Pub/Sub topics, subscriptions, and snapshots, as well as publish messages t...","管理 Pub/Sub 消息订阅发布资源。支持创建、查询、更新和删除主题及订阅，并发布消息..."],["Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to...","使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至..."],["Search and retrieve official documentation across Google Cloud, Gemini, Android, Firebase, Flutter, and Web. Requires Google Cloud credentials (ADC) or an API key.","跨 Google Cloud、Gemini、Android、Firebase、Flutter 和 Web 搜索并检索官方文档。需要配置 Google Cloud 凭据 (ADC) 或 API 密钥。"],["Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table...","使用自然语言与您的 BigQuery 数据交互。该 MCP 服务器让您能够安全连接至数据集，执行数据表搜索、表结构检查与 SQL 查询..."],["Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural...","将您的 AI 智能体连接至 Looker 商业智能分析平台。该 MCP 服务器让您能够通过自然语言执行数据探索、大屏看板与分析管理..."],["The Oracle Database remote MCP server lets you access and run Oracle Database tools to create, manage, and query Oracle Database resources from your AI workflow.","Oracle Database 远程 MCP 服务器可让您访问并运行 Oracle 数据库工具，以创建、管理并查询 Oracle 数据库资源。"],["Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a...","将您的 GitLab 软件开发生命周期 (SDLC) 作为知识图谱进行查询。Orbit 可将群组、项目、源码、合并请求、流水线、工作项和安全扫描发现索引到图谱中..."],["The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore...","AlloyDB for PostgreSQL 远程 MCP 服务器可让您访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群及实例、管理用户，以及创建和恢复数据备份..."],["Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and...","将您的 Supabase 项目连接至 AI 智能体。该 MCP 服务器支持管理数据表、获取配置、执行 SQL 查询及边缘函数..."],["The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code...","Google Maps Platform Code Assist MCP 服务器为您喜爱的 AI 编程助手提供最新官方谷歌地图平台文档与代码示例..."],["Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.","配置浏览器子代理。它需要安装 Google Chrome。您可以通过在对话框中输入 /browser 来调用浏览器子代理。"],["The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Fig...","Dev Mode MCP 服务器将 Figma 深度集成到您的工作流中，为生成前端代码的 AI 智能体提供关键的设计信息与组件上下文..."],["The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma.","Dev Mode MCP 服务器将 Figma 深度集成到您的工作流中，为生成前端代码的 AI 智能体提供关键的设计信息与组件上下文。"],["This provides the Agent with maximum autonomy to perform complex actions and validation in the browser, but also has the highest exposure to security exploits.","这赋予了智能体执行复杂操作和验证的最强自主权，但也会增加安全漏洞风险。"],["Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries,...","使用自然语言与您的 Oracle 数据库数据交互。该 MCP 服务器让您能够安全连接至数据库以执行 SQL 查询..."],["The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments,...","Postman MCP 服务器连接 Postman 与 AI 工具，赋予 AI 智能体访问工作空间、管理接口集合与环境及测试 API 的能力..."],["The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer...","Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维..."],["The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development workflow.","Spanner 远程 MCP 服务器可让您从 AI 开发环境中访问并运行 Spanner 工具，以创建、管理和查询分布式数据库资源。"],["Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance template...","执行各类云基础设施管理任务，包括：管理虚拟机 (VM) 实例、管理实例组及实例模版..."],["Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device...","使用自然语言查询访问企业移动设备管理数据、自动合规审计及设备数据遥测分析..."],["The Firebase Model Context Protocol (MCP) Server gives AI-powered development tools the ability to work with your Firebase projects and your app's codebase.","Firebase MCP 服务器赋予 AI 开发工具与您的 Firebase 项目及应用代码库进行全方位开发与调试的能力。"],["The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administ...","Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维..."],["The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve...","谷歌开发者知识库 MCP 服务器赋予 AI 开发工具搜索 Google 官方开发者文档及参考指南的能力..."],["Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance templates.","执行各类云基础设施管理任务，包括：管理虚拟机 (VM) 实例、管理实例组及实例模版。"],["Configure browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.","配置浏览器子代理。它需要安装 Google Chrome。您可以通过在对话框中输入 /browser 来调用浏览器子代理。"],["Interact directly with the PostHog product analytics platform using natural language. Run queries, manage feature flags, track errors, and manage projects.","使用自然语言与 PostHog 产品分析平台直接交互。支持运行查询、管理特性开关 (Feature Flags)、追踪错误以及管理项目。"],["The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add...","Heroku 平台 MCP 服务器提供与 Heroku 云资源的无缝交互，让大语言模型能够读取、管理并运维应用及插件..."],["SonarQube MCP Server enables AI assistants to interact with SonarQube instances for code quality analysis, project management, and quality gate operations.","SonarQube MCP 服务器允许 AI 助手与 SonarQube 实例进行交互，用于代码质量分析、项目管理和质量闸口 (Quality Gate) 操作。"],["Netlify MCP Server enables AI assistants to interact with Netlify's platform for managing sites, deployments, domains, and other web development workflows.","Netlify MCP 服务器允许 AI 助手与 Netlify 平台进行交互，以管理站点、部署、域名及其他 Web 开发工作流。"],["Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot,...","跨 325+ 数据连接器查询和处理您的营销、分析、CRM、电商及仓储数据（涵盖 Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot 等）..."],["Please describe the issue in detail. The more actionable your feedback, the quicker our team can address your request. Some helpful information includes:","请详细描述您遇到的问题。您的反馈越具体，我们的团队就能越快处理您的请求。一些有帮助的信息包括："],["The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and...","Pinecone MCP 服务器允许 AI 工具检索 Pinecone 官方文档、配置向量索引、基于索引结构生成代码并查询向量..."],["The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and...","GitHub MCP 服务器提供与 GitHub API 的无缝深度集成，支持高级自动化工作流与仓库全流程操作..."],["The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development...","Spanner 远程 MCP 服务器可让您从 AI 开发环境中访问并运行 Spanner 工具，以创建、管理和查询分布式数据库资源..."],["The GKE remote MCP server provides read write access to your GKE Kubernetes resources. It allows an AI agent to inspect and observe your environment.","GKE 远程 MCP 服务器提供对 GKE Kubernetes 资源的读写权限。允许 AI 智能体检查并监控您的运行环境。"],["The MCP Toolbox for Databases is an open-source MCP server designed to simplify and secure the development of tools for interacting with databases.","数据库 MCP 工具箱 (MCP Toolbox for Databases) 是一款开源 MCP 服务器，旨在安全、高效地简化各类数据库交互工具的开发与操作。"],["The gopls Model Context Protocol (MCP) server provides tools for semantic code analysis, live diagnostics, and transformation of your Go codebase.","gopls MCP 服务器为您的 Go 语言代码库提供语义代码分析、实时错误诊断及代码重构转换的工具集。"],["The Oracle Database remote MCP server lets you access and run Oracle Database tools to create, manage, and query Oracle Database resources from...","Oracle Database 远程 MCP 服务器可让您访问并运行 Oracle 数据库工具，以创建、管理并查询 Oracle 数据库资源..."],["The Google Home Developer MCP server allows you to search through Google Home documentation, OpenThread and Matter specifications documentation.","Google Home Developer MCP 服务器支持检索 Google Home 文档、OpenThread 与 Matter 规范文档。"],["Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.","当有新版本可用时，自动提示您重启应用。禁用后，您可以从应用菜单中手动检查更新。"],["Specifies the agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.","指定智能体在请求审核产物（用于提供丰富对话体验的文档）时的行为。"],["Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.","与 GitHub 交互的操作指南，当命令因智能体环境限制而执行失败时，引导向用户申请相应权限。"],["Agent will always ask for your permission before running terminal commands locally and will always request for a review when making changes.","智能体在本地运行终端命令前总是会征求您的许可，并且在进行更改时总是会请求审查。"],["Rules and customization token budgets exceeded. Large rules are demoted to path pointers and large customizations are excluded from context.","规则与自定义项 Token 预算已超出。大型规则已降级为路径指针，大型自定义项已从上下文中排除。"],["The TypeScript Model Context Protocol (MCP) server provides tools for semantic code analysis and diagnostics for TypeScript and JavaScript.","TypeScript MCP 服务器为 TypeScript 及 JavaScript 代码库提供语义分析与诊断工具。"],["Official PayPal MCP Server that allows integration with PayPal APIs for payment processing, transaction management, and account operations.","官方 PayPal MCP 服务器，可集成 PayPal API 以进行支付处理、交易订单管理及账户相关业务操作。"],["The Genkit Model Context Protocol (MCP) Server gives AI-powered development tools the ability to build, debug and inspect your Genkit app.","Genkit MCP 服务器赋予 AI 开发工具构建、调试以及检查您的 Genkit AI 应用程序的能力。"],["Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.","指定智能体在请求审查交付件时的行为。交付件(Artifact)是智能体为了提供更丰富的交互体验而生成的文档。"],["The debug view loads the trajectory in pages. Click the marker at either end of the overview, or keep panning past that end, to load more.","调试视图分页加载轨迹。点击概览两端的标记，或继续向两端拖动即可加载更多。"],["Messages can be sent while the agent is still working. Your message will be queued and inserted at the next available break in reasoning.","在智能体工作时仍可发送消息。您的消息将进入队列，并在下一个可用的推理间隙插入。"],["Access Personalized Service Health events impacting Google Cloud products and services relevant to your projects using natural language.","使用自然语言访问与您的项目直接相关的 Google Cloud 产品和服务健康事件 (Personalized Service Health)。"],["The Unified Maintenance MCP server allows you to discover and query planned disruptive maintenance events across Google Cloud resources.","Unified Maintenance MCP 服务器允许您发现并查询 Google Cloud 各项云资源计划内的中断性维护事件。"],["Note: A change to this setting will only apply to new messages sent to Agent. In-progress responses will use the previous setting value.","注意：对于此项设置的更改，仅对之后新发送给智能体的消息起效。正在进行的响应将沿用此前的设置规则。"],["Artifacts like Google Docs, PDFs, Office documents (Word, Excel, PowerPoint), etc. Everything else the agent creates is under Artifacts.","例如 Google Docs、PDF、Office 文档（Word、Excel、PowerPoint）等产物。智能体创建的其他所有内容均归类在“产物”下。"],["Prompt and tools metadata for this invocation has been cleared to save space. Full details are only preserved for the latest invocation.","为节省存储空间，本次调用的提示词和工具元数据已被清理。完整详情仅保留在最新一次调用中。"],["Changes the base URL for marketplace search results. You must restart Antigravity to use the new marketplace after changing this value.","更改市场搜索结果的基础 URL。更改此值后，您必须重启 Antigravity 才能使用新的市场。"],["The Pyright Model Context Protocol (MCP) server provides tools for semantic Python code analysis, live type checking, and diagnostics.","Pyright MCP 服务器提供 Python 语义代码分析、实时类型检查及问题诊断工具。"],["The Cloud Quotas MCP server allows you to view quota allocations, request quota increases, and manage Quota Adjuster configurations.","Cloud Quotas MCP 服务器支持查看配额分配、申请提升配额以及管理 Quota Adjuster 自动调整配置。"],["Interact with Google Kubernetes Engine (GKE) clusters using natural language. Manage clusters, workloads, and Kubernetes resources.","使用自然语言与 Google Kubernetes Engine (GKE) 集群交互。轻松管理集群、工作负载和 Kubernetes 资源。"],["Discover, manage, and audit organization policies and custom constraints across your Google Cloud resources using natural language.","使用自然语言在您的 Google Cloud 资源中发现、管理和审计组织策略及自定义约束条件。"],["Displaying raw protobuf object (failed to format as JSON). Enums and timestamps are shown in their internal numeric/binary format.","正在显示原始 Protobuf 对象（格式化为 JSON 失败）。枚举和时间戳以其内部数值/二进制格式显示。"],["Search and reference over 600,000 real-world app screens, user flows, and UI patterns from Mobbin directly within your AI tools.","直接在您的 AI 工具中搜索并参考 Mobbin 提供的 600,000+ 款真实应用界面、用户流程与 UI 设计模式。"],["Interact with Google Cloud Spanner databases using natural language. Inspect schemas, query data, and manage Spanner instances.","使用自然语言与 Google Cloud Spanner 分布式数据库交互。检查表结构、查询数据并管理 Spanner 实例。"],["Changes the base URL on each extension page. You must restart Antigravity to use the new marketplace after changing this value.","更改每个扩展页面的基础 URL。更改此值后，您必须重启 Antigravity 才能使用新的市场。"],["Manage your Neon backend with the Neon MCP Server: Lakebase Postgres, branching, Object Storage, Functions, and the AI Gateway","借助 Neon MCP 服务器管理您的 Neon 后端：支持 Lakebase Postgres、分支管理、对象存储、函数计算以及 AI 网关"],["Official Notion MCP Server that allows interaction with Notion workspaces, pages, databases, and comments via the Notion API.","官方 Notion MCP 服务器，支持通过 Notion API 访问和交互 Notion 工作空间、页面、数据库以及评论。"],["Enable fine-grained GitHub permissions and define the org, repository, and resource-level access the agent is allowed to use.","启用细粒度 GitHub 权限，定义允许智能体访问的组织、仓库及资源级别。"],["When enabled, agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.","启用后，智能体将能够感知其编辑所产生的 Lint 错误，并可在未经用户明确提示的情况下尝试修复它们。"],["When enabled, Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.","开启后，智能体将能感知到其修改产生的代码检查(Lint)错误，并可能在不询问用户的情况下自动修复它们。"],["A chunk is a section of the page. Long pages are chunked so that only the sections that are relevant to your query are read.","分块 (Chunk) 是页面的一个章节。长页面会被自动分块，以便仅读取与您的查询相关的章节。"],["An MCP server implementation that integrates the Perplexity Sonar API to provide real-time, web-wide research capabilities.","集成 Perplexity Sonar API 的 MCP 服务器，为 AI 智能体提供实时、全网深度的智能研究与问答检索能力。"],["In addition to the custom skills folder, Antigravity will search the following paths in order to find skills for the agent.","除了自定义技能文件夹之外，反重力智能引擎还将按照顺序搜索以下路径，以为智能体加载查找相应的技能组件。"],["Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.","开启严格 / LaTeX 保真模式，若输入使用了不受支持的 LaTeX 特性则抛出错误。"],["Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, the...","Antigravity 个性化定制系统的综合指南与参考手册。用于说明定制组件的工作机制等…"],["• Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list).","• 请求审查 - 只要不在您设定的白名单中，智能体在执行任何终端命令之前都会始终请求您的明确许可。"],["This tool output was truncated (cut off) because it exceeded the single-step limits. Details are visible in the Inspector.","由于超出单步输出限制，此工具输出已被截断。可在检查器 (Inspector) 中查看详情。"],["Request Review - Agent always asks for confirmation before executing terminal commands (except those in the Allow list).","请求审查 - 执行终端命令之前总是请求确认（白名单除外）。"],["Choose a predefined security preset for the agent. This controls terminal auto-execution policy, and file access policy.","为智能体选择预定义的安全预设。这控制了终端自动执行策略和文件访问策略。"],["The Dart and Flutter MCP server exposes Dart (and Flutter) development tool actions to compatible AI-assistant clients.","该 Dart 与 Flutter MCP 服务器为兼容的 AI 客户端提供 Dart（及 Flutter）开发工具操作能力。"],["Saves to your global ~/.gemini/antigravity/agents/ directory. This script will be available across all your workspaces.","保存至全局 ~/.gemini/antigravity/agents/ 目录。此脚本将在您的所有工作区中可用。"],["The rust-analyzer Model Context Protocol (MCP) server provides tools for semantic Rust code analysis and diagnostics.","rust-analyzer MCP 服务器提供 Rust 语义代码分析与诊断功能。"],["Create, inspect, restrict, and manage the lifecycle of API keys in your Google Cloud projects using natural language.","使用自然语言在您的 Google Cloud 项目中创建、检查、设置限制条件并管理 API 密钥的生命周期。"],["Neon MCP Server is an open-source tool that lets you interact with your Neon Postgres databases in natural language.","Neon MCP 服务器是一款开源工具，让您能够使用自然语言直接与 Neon Postgres 云数据库进行交互。"],["Custom path for the browser user profile directory. Leave empty for default (~/.gemini/antigravity-browser-profile).","自定义浏览器用户配置文件目录的路径。留空则使用默认路径 (~/.gemini/antigravity-browser-profile)。"],["No models are available for your current project or account. Please check your project settings and IAM permissions.","当前项目或账户无可用模型，请检查项目设置与 IAM 权限。"],["We opened a popup for you to authorize adding the bot to your chat. Please copy the code from it and paste it below:","已为您打开授权弹窗，请复制其中的授权码并粘贴到下方："],["The Prisma MCP Server enables AI tools to interact with Prisma for creating and managing Postgres databases easily.","Prisma MCP 服务器可让 AI 工具通过 Prisma 轻松创建、操作并管理 Postgres 数据库。"],["A Model Context Protocol server that provides structured thinking and reasoning capabilities for LLM conversations.","为大语言模型会话提供结构化思考与递进推理能力的 MCP 服务器。"],["The app will be accessible from the menu bar and will keep running in the background when all windows are closed.","当所有窗口都关闭时，依然可以通过菜单栏/系统托盘访问应用程序，且保持后台运行。"],["When enabled, \"Explain and Fix\" actions will continue in the current conversation instead of starting a new one.","启用后，\"解释并修复\"操作将在当前对话中继续，而不是开启一个新的对话。"],["Go to the machine you are controlling and quit Antigravity. It installs pending updates the next time it starts.","请前往受控设备并退出 Antigravity。待处理的更新将在下次启动时自动安装。"],["A nickname for identifying this application in the companion website. Changing this will restart the connection.","在配套网页端标识此应用的昵称。修改后将重启连接。"],["When enabled, 'Explain and Fix' actions will continue in the current conversation instead of starting a new one.","启用后，“解释并修复”操作将在当前对话中继续，而不会新建对话。"],["Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer","利用 Chrome DevTools 和 Puppeteer，在 Chrome 中进行可靠的自动化、深度调试和性能分析。"],["When enabled, the Changes Overview toolbar will automatically expand when Agent finishes generating a response.","启用后，当 Agent 完成生成响应时，更改概览工具栏将自动展开。"],["We recommend attaching logs. Attaching logs will help the Antigravity team act on and prioritize your feedback.","建议附带日志，这将帮助 Antigravity 团队更快定位并优先处理您的反馈。"],["Prototype, build & run modern apps that users love with Firebase's backend, AI, and operational infrastructure.","利用 Firebase 的后端、AI 和运营基础设施，快速原型设计、构建和运行深受用户喜爱的现代化应用。"],["Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.","智能体将能感知到其修改产生的代码检查(Lint)错误，并可能在不询问用户的情况下自动修复它们。"],["A shell setup script run before every command the agent executes in this project. Overrides the global script.","智能体在此项目中执行每条命令前运行的 Shell 初始化脚本（覆盖全局脚本）。"],["Find plugins - bundles of skills, agents, MCP servers, UI extensions and more, and install them in one click.","查找插件（包含技能、智能体、MCP 服务器、界面扩展等组合包），并一键安装。"],["This step is visible in the standard conversation view, but was excluded from the messages sent to the model.","此步骤在标准对话视图中可见，但未包含在发送给模型的上下文消息中。"],["Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the ...","提供 Google Antigravity (AGY) 的综合指南、快速参考与全景导航，涵盖 Antigravity 命令行等 ..."],["Autonomous mode active: the agent works independently and does not ask questions or request new permissions.","自主模式已开启：智能体将独立工作，不会向您提问或请求新权限。"],["Open SSH connection in setup window. When finished, you will be able to select the workspace in the sidebar.","在设置窗口中打开 SSH 连接。完成后即可在侧边栏中选择该工作区。"],["Give the agent awareness of lint errors created by its edits so it can fix them without explicit prompting.","让智能体自动感知其编辑引发的 Lint 错误，无需额外提示即可自行修复。"],["Prototype, build & run modern apps users love with Firebase's backend, AI, and operational infrastructure.","利用 Firebase 的后端、AI 和运营基础设施，快速原型设计、构建和运行深受用户喜爱的现代化应用。"],["Terminal commands always require review and the agent cannot access files outside of its given workspaces.","终端命令始终需要人工审核，且智能体无法访问指定工作区之外的文件。"],["When enabled, the values below replace the auto-detected OS, host, and user type used for feature gating.","启用后，下方的值将覆盖自动检测的操作系统、宿主环境与用户类型。"],["Simulate a different host (Electron, desktop or mobile Web, Extension, remote control, or installed PWA).","模拟不同的宿主环境（Electron、桌面或移动网页端、扩展、远程控制或 PWA）。"],["You don't have access to this Google Drive file, so its title couldn't be added. The link was kept as-is.","您无权访问此 Google Drive 文件，因此无法获取标题，已保留原始链接。"],["Artifacts are created when the agent performs more complex, longer running tasks while in Planning mode.","当智能体在规划模式下执行更复杂、耗时更长的任务时，会创建交付件 (Artifacts)。"],["• Agent Decides - Agent will decide when to ask for review based on task complexity and user preference.","• 智能体决策 - 智能体将根据任务的复杂程度及用户偏好，自行判断并决定何时请求审查。"],["Non-model response token counts are estimations. The model API does not return per-message token counts.","非模型回复的 Token 数量为估算值，模型 API 不会返回单条消息的精确 Token 计数。"],["Select the workspace type that will be used for new conversations started with the New Workspace option.","选择使用“新建工作区”发起新对话时默认采用的工作区类型。"],["Time spent waiting in queue for previous tools to complete or move to background before execution began.","开始执行前，在队列中等待前置工具完成或转入后台的时间。"],["This will permanently delete the project and all conversations within it. This action cannot be undone.","这将永久删除该项目及其包含的所有会话。此操作无法撤销。"],["The agent works with autonomy-enhancing features and does not ask questions or request new permissions.","智能体使用增强自主特性工作，不会主动提问或请求新权限。"],["AI Credits are used when you've exceeded your model quota. Keep track of your current AI Credits in the","当超出模型配额时将使用 AI 积分。您可以在此查看当前的 AI 积分："],["This Google Cloud project is not supported. Input a different project, or sign in with another account.","不支持此 Google Cloud 项目。请输入其他项目，或切换账户登录。"],["Interact with Supabase projects, inspect database schemas, run SQL queries, and manage edge functions.","与 Supabase 项目交互，查看数据库表结构，执行 SQL 查询并管理边缘函数 (Edge Functions)。"],["Sonatype MCP server for interacting with our dependency management and security intelligence platform.","用于与 Sonatype 依赖关系管理和安全情报平台进行交互的 MCP 服务器。"],["Agent Decides - Agent will decide when to ask for review based on task complexity and user preference.","智能体决策 - 智能体将根据任务复杂程度及用户偏好决定何时请求审查。"],["• Request Review - Agent will always stop to ask for permission to run Javascript code in the browser.","• 请求审查 - 智能体在浏览器中运行 Javascript 代码前，始终会停下来征求您的许可。"],["to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.","。您可以通过在对话框中输入 /browser 来调用浏览器子代理。"],["Developer-only tools. These settings are stored locally in this browser and do not affect other users.","开发者专用工具。这些设置仅保存在本地，不会影响其他用户。"],["Cloud CLI MCP Server provides tools to run gcloud and bq CLI commands in a remote sandbox environment","Cloud CLI MCP 服务器提供在远程沙箱环境中运行 gcloud 与 bq CLI 命令的工具集。"],["Download this site as an app to get notified when the agent needs your attention or completes a task.","将此站点安装为应用，以便在智能体需要您处理或完成任务时收到通知。"],["VCS used when creating a new workspace, including workspaces generated based off your initial prompt.","创建新工作区（包括根据初始提示词自动生成的工作区）时使用的版本控制系统 (VCS)。"],["When enabled, Agent will use IDE's shell integration to detect and report terminal command execution.","启用后，智能体将使用 IDE 的 Shell 集成来检测并报告终端命令执行。"],["Cloud CLI MCP Server provides tools to run gcloud and bq CLIcommands in a remote sandbox environment","Cloud CLI MCP 服务器提供在远程沙箱环境中运行 gcloud 与 bq CLI 命令的工具集。"],["Request Review - Agent will always stop to ask for permission to run Javascript code in the browser.","请求审查 - 智能体在浏览器中运行 Javascript 代码前，始终会停下来征求您的许可。"],["Keep the app accessible from the menu bar and running in the background when all windows are closed.","在所有窗口关闭时，保持应用程序可从菜单栏/托盘访问并在后台运行。"],["Continue your work from another device with Remote Control. Scan the QR code or open the link below.","通过远程控制在其他设备上继续工作。请扫描二维码或打开下方链接。"],["Run the app against a Linux environment. Connecting relaunches the app into the selected WSL distro.","在 Linux 环境下运行应用。连接后将重启应用并进入所选的 WSL 发行版。"],["The app is currently connected to a WSL distro. Reopening locally relaunches it directly on Windows.","当前应用已连接到 WSL 发行版。在本地重新打开将直接在 Windows 上重启应用。"],["You have a conversation in progress. Updating will cancel it and you'll need to manually restart it.","您当前有正在进行的对话。更新将中断该对话，完成后需手动重新开始。"],["Modify scoped permissions, folders, and agent settings like Sandbox and Terminal Command Execution.","修改特定范围的权限、文件夹和智能体设置，如沙箱以及终端命令执行。"],["Workflows are being deprecated in favor of skills. You can use the agent to migrate your workflows.","工作流 (Workflows) 即将弃用并由技能 (Skills) 替代。您可以使用智能体自动迁移现有的工作流。"],["Requires manual review for all terminal commands and file accesses outside of the working folders.","需要对工作区文件夹外的所有终端命令和文件访问进行人工审查。"],["Many external websites (such as Google Search, GitHub, or Wikipedia) restrict iframe embedding via","许多外部网站（如 Google 搜索、GitHub 或维基百科）通过以下机制限制 iframe 内嵌："],["When toggled on, Antigravity collects usage data to help Google enhance performance and features.","开启后，反重力智能编程将收集使用数据，以帮助 Google 改进性能和功能。"],["Automatically expand the Changes Overview toolbar when the agent finishes generating a response.","当智能体完成回复生成时，自动展开“更改概览”工具栏。"],["Execution duration for this tool call (including pre/post-tool hooks and user approval prompts).","此工具调用的执行总耗时（包括前后置 Hook 及等待用户审批的时间）。"],["This conversation grew too large, so the history before this point may be missing or incomplete.","此对话体积过大，因此该节点之前的历史记录可能缺失或不完整。"],["Install this plugin to see the commands it adds, along with its skills, agents and MCP servers.","安装此插件以查看其添加的命令、技能、智能体和 MCP 服务器。"],["When debug mode is on, you can see additional information about each steps in the conversation.","开启调试模式后，您可以查看对话中每个步骤的详细附加信息。"],["Long pages like this one will be broken down into outlines and read as needed. Read more at our","此类长页面将被拆分为大纲并按需读取。了解更多请访问"],["Manage clusters for Managed Service for Apache Kafka and Kafka Connect using natural language.","使用自然语言管理 Google Managed Service for Apache Kafka 及 Kafka Connect 消息集群。"],["Grant read access to workflow runs and allow dispatching workflows on specific files and refs.","授予工作流运行记录的读取权限，并允许在指定文件和分支上触发工作流。"],["These allowed domain rules are set by your organization's administrator and cannot be removed.","这些允许域名规则由您的组织管理员设置，无法移除。"],["These settings can only be changed on the computer running the app, not from a remote session.","这些设置只能在运行该应用的本机上修改，无法在远程会话中修改。"],["Skills providing tailored instructions for happy path Dart and Flutter development workflows.","为 Dart 和 Flutter 开发流程的顺畅路径提供定制化指引的技能集。"],["The agent manager is a new window allowing you to manage and create agents across workspaces.","智能体管理器是一个全新的窗口，允许您在不同工作区中跨平台管理和创建智能体。"],["All terminal commands require review. The agent can read or write to any file in the machine.","所有终端命令均需审查。智能体可以读写机器上的任意文件。"],["Opens in the in-app preview pane. Some sites don't support iframe embedding and may not load.","在应用内预览面板中打开。部分网站不支持 iframe 内嵌，可能无法加载。"],["Always Proceed - Agent will not stop to ask for permission to run Javascript in the browser.","始终继续 - 智能体在浏览器中运行 Javascript 代码前，不会停下来征求您的许可。"],["Give each Best of N fork a full clone of your workspace, including its local commit history.","为每个 Best of N 分支提供工作区的完整克隆（包含本地提交历史）。"],["Official Linear.app MCP Server for interacting with Linear projects, issues, and workflows.","官方 Linear.app MCP 服务器，用于访问和管理 Linear 项目、工单及研发迭代工作流。"],["Build on Google's developer platforms, including Android, Chrome, Gemini, and Google Cloud.","基于 Google 开发者平台进行构建，包括 Android、Chrome、Gemini 和 Google Cloud。"],["When enabled, this agent will be able to access past conversations to inform its responses.","启用后，此智能体将能够访问过去的对话记录，以为其响应提供参考。"],["Customization token budget exceeded. Large customizations will be truncated automatically.","自定义设置 Token 预算超限。过大的自定义内容将被自动截断。"],["Manage Google Cloud resources with gcloud and bq CLI tools in a remote sandbox environment","在远程沙箱环境中借助 gcloud 和 bq 命令行工具管理 Google Cloud 资源"],["When enabled, the agent will be able to access past conversations to inform its responses.","启用后，智能体将能够访问过去的对话记录，以为其响应提供参考。"],["Port number for Chrome DevTools Protocol remote debugging. Leave empty for default (9222).","用于 Chrome DevTools Protocol 远程调试的端口号。留空则使用默认值 (9222)。"],["Specialized suite of skills for data engineers and database practitioners on Google Cloud","专为 Google Cloud 上的数据工程师和数据库从业人员打造的专业技能套件。"],["The Locofy MCP Server enables Locofy.ai code to be integrated and extended with your IDE.","Locofy MCP 服务器可将 Locofy.ai 代码无缝集成并扩展到您的 IDE 中。"],["Controls whether the agent can run custom JavaScript to automate complex browser actions.","控制智能体是否可以在浏览器中运行自定义 JavaScript 以自动执行复杂的浏览器操作。"],["Use this option if your administrator has provided you with advanced login configurations","如果管理员为您提供了高级登录配置，请使用此选项"],["You can prompt the model to try again or start a new conversation if the error persists.","您可以让模型重试，若错误持续出现请新建一个对话。"],["You've reached the maximum number of turns for this battle. End battle mode to continue.","已达到本次对战模式的最大轮数上限，请结束对战模式以继续。"],["Inspect, debug, and control Google Chrome browser pages using Chrome DevTools Protocol.","使用 Chrome DevTools 协议检查、调试和控制 Google Chrome 浏览器网页。"],["A label for this computer when you connect from another device. Changing it reconnects.","从其他设备连接时此电脑显示的标签。修改后将重新连接。"],["This is a preview of the plugin's source. Nothing below is active until you install it.","以下是该插件的源码预览，安装前不会生效。"],["Connect to GitHub to search repositories, manage issues, pull requests, and workflows.","连接至 GitHub 以搜索代码仓库、管理 Issue、合并请求 (PR) 及工作流。"],["Query Google Cloud Monitoring metrics, inspect dashboards, and analyze alert policies.","查询 Google Cloud 监控指标、查看仪表盘并分析告警策略。"],["Agent will decide when to ask for review based on task complexity and user preference.","智能体将根据任务复杂性和用户偏好自主决定何时请求审查。"],["When enabled, Antigravity will play a sound when Agent finishes generating a response.","启用后，当 Agent 完成生成响应时，Antigravity 会播放声音。"],["Choose whether to be notified when the agent needs your attention or completes a task.","选择当智能体需要您处理或完成任务时是否发送通知。"],["This error is likely temporary. You can prompt the model to try again after some time.","此错误通常是暂时的，您可以稍后让模型重试。"],["When enabled, the agent will include default customizations, including default skills.","启用后，智能体将加载默认自定义项（包含内置默认技能）。"],["Agent can retrieve console logs from the browser and return it for further processing.","智能体可以从浏览器获取控制台日志并返回以进行后续处理。"],["Please verify your account, then sign in again to continue. Learn more by visiting our","请验证您的账户后重新登录以继续使用。了解更多请访问"],["Deploy, manage, and inspect Google Kubernetes Engine (GKE) clusters and applications.","部署、管理并检查 Google Kubernetes Engine (GKE) 集群与应用程序。"],["Interact with Amazon Web Services (AWS) resources including S3, EC2, Lambda, and IAM.","与 AWS 云服务资源交互，涵盖 S3 存储桶、EC2 实例、Lambda 函数及 IAM 权限。"],["Search and analyze Google Cloud logs across your GCP projects using natural language.","使用自然语言跨 GCP 项目搜索和分析 Google Cloud 运行日志。"],["Control which URLs the browser can access. Add domains or full URLs to the allowlist.","控制浏览器可以访问的 URL。将域名或完整 URL 加入允许列表。"],["You have used some of your weekly limit, it will fully refresh in less than a minute.","您已使用部分每周额度限制，将在不到 1 分钟后完全刷新。"],["The browser subagent can be invoked by typing /browser in the conversation input box.","您可以通过在对话框中输入 /browser 来调用浏览器子代理。"],["The agent asks for permission before executing commands matched by a deny list entry.","当命令匹配拒绝列表项时，智能体会在执行前请求权限。"],["Settings for this session are managed by the CLI and can't be changed in the browser.","当前会话的设置由 CLI 托管，无法在界面中修改。"],["work with Google developer products. You can always change your choices in Settings.","中的智能体与 Google 开发者产品协同工作。您随时可以在设置中更改您的选择。"],["Query Datadog metrics, inspect logs, and monitor application performance and traces.","查询 Datadog 监控指标、分析日志并监控应用程序性能与链路追踪。"],["Query and manage Pinecone vector indexes for similarity search and RAG applications.","查询并管理 Pinecone 向量索引，助力相似度搜索与 RAG 应用。"],["Agent will execute tasks directly. Use for simple tasks that can be completed faster","智能体将直接执行任务。适用于可以更快完成的简单任务。"],["You have used all of your weekly limit, it will fully refresh in less than a minute.","您已用尽每周额度限制，将在不到 1 分钟后完全刷新。"],["Customization token budget exceeded. Large customizations are excluded from context.","自定义项 Token 预算已超出。大型自定义项已从上下文中排除。"],["For a full list of available locations and deployment endpoints, please refer to the","有关可用区域和部署端点的完整列表，请参阅"],["Predict the location of your next edit and navigates you there with a tab keypress.","预测您下一次编辑的位置，并按 Tab 键导航至该处。"],["This skill came from the marketplace, so you can add it again whenever you need it.","此技能来自技能市场，您可以随时重新添加。"],["Manage Vercel deployments, inspect project logs, and manage environment variables.","管理 Vercel 部署项目，查看构建运行日志并配置环境变量。"],["Connect to MongoDB clusters, inspect collections, and execute aggregation queries.","连接至 MongoDB 集群，检查集合文档结构并执行聚合查询。"],["Predict the location of your next edit and navigate you there with a tab keypress.","预测您下一次编辑的位置，按 Tab 键即可快速跳转。"],["by allowing Google to collect and use my Interactions data, subject to the Google","，允许 Google 收集并使用我的交互数据，并遵守 Google "],["To modify notification settings, open your operating system's system preferences.","要修改通知设置，请打开基于操作系统的系统偏好设置。"],["View your available model quota. Quota refreshes periodically based on your plan.","查看您可用的模型配额。配额将根据您的计划定期刷新。"],["Lost connection to the remote instance. Please wait a minute or refresh the page.","与远程实例断开连接，请稍候或刷新页面。"],["What functionality you expect your account tier to have available that is missing","您期望当前账户等级拥有但实际缺失的功能"],["Connect to Google Workspace, including Docs, Sheets, Slides, Drive, and Calendar.","连接到 Google Workspace，包括 Docs、Sheets、Slides、Drive 和 Calendar。"],["Connect to MySQL database instances to query schemas and execute SQL statements.","连接至 MySQL 数据库实例以查询表结构并执行 SQL 命令。"],["Receive product updates, tips, and promotions from Google Antigravity via email.","通过电子邮件接收来自 Google 反重力智能编程的产品更新、提示和促销信息。"],["You have reached your weekly limit, it will fully refresh in less than a minute.","您已达到每周额度限制，将在不到 1 分钟后完全刷新。"],["Are you sure you want to delete this conversation? This action cannot be undone.","确定要删除此对话吗？此操作无法撤销。"],["Reflect on recent successes or corrections to capture reusable skills or rules.","反思近期成功的解决经验或用户的纠正提示，将其总结为可复用的技能或规则。"],["Search Confluence spaces, read knowledge base pages, and publish documentation.","搜索 Confluence 空间、阅读知识库页面并发布技术文档。"],["Interact with Raycast extensions and trigger local system automation workflows.","调用 Raycast 扩展插件并触发本地系统快捷自动化工作流。"],["You can upgrade to the Google AI Ultra plan to receive the highest rate limits.","您可以升级到 Google AI Ultra 计划以获得最高的速率限制。"],["Time spent deciding a checkpoint was needed and generating the context summary.","判断是否需要检查点并生成上下文摘要所花费的时间。"],["Reflect on recent successes or corrections to capture reusable skills or rules","反思近期成功的解决经验或用户的纠正提示，将其总结为可复用的技能或规则"],["Interact with Google Cloud Storage buckets and objects using natural language.","使用自然语言与 Google Cloud Storage 存储桶和对象进行交互。"],["Interact with documents stored in a Firestore database using natural language.","使用自然语言与 Firestore 云数据库中文档资源直接交互。"],["Configures how the agent tries to access files outside of its working folders.","配置智能体在尝试访问其工作文件夹外的文件时的策略。"],["No model specified for Battle Mode, falling back to use current selected model","未指定对战模式模型，将回退使用当前选中的模型"],[". I understand I can choose to opt out later whenever I want via my settings.","。我理解我随时可以根据需要通过设置选择退出。"],["You can upgrade to a Google AI Ultra plan to receive the highest rate limits.","您可以升级到 Google AI Ultra 计划以获取最高的速率限制。"],["Customization token budget exceeded. Large customizations will be truncated.","自定义设置 Token 预算超限。过大的自定义内容将被自动截断。"],["Allow reading workflow runs (list, view, watch) across the whole repository.","允许读取整个仓库的工作流运行记录（列表、查看、监听）。"],["Rewinds the conversation only. Files in this workspace stay as they are now.","仅回退对话进度，工作区中的文件保持当前状态不变。"],["Show browser notifications when your action is needed or execution finishes.","当需要您操作或执行完成时显示浏览器通知。"],["These MCP allowlist rules are enforced by your organization's administrator.","这些 MCP 允许列表规则由您的组织管理员强制执行。"],["Time spent generating the initial user intent summary for this conversation.","为此对话生成初始用户意图摘要所花费的时间。"],["Sharing is a preview feature. It exports this conversation's history to your","对话分享目前为预览功能，它会将本次对话历史导出至您的"],["I understand I can choose to opt out later whenever I want via my settings.","。我理解我随时可以根据需要通过设置选择退出。"],["Search Jira issues, create tickets, and manage agile sprints and workflows.","搜索 Jira 问题单、创建工单，并管理敏捷开发 Sprint 迭代与工作流。"],["You currently don't have any MCP Servers installed. Add an MCP server above","您当前尚未安装任何 MCP 服务器。请在上方添加一个 MCP 服务器。"],["Use Add MCP to browse the store, or add a custom server via the MCP config.","使用“添加 MCP”浏览商店，或通过 MCP 配置添加自定义服务器。"],["I prefer an immediate single response to prioritize productivity right now.","我倾向于立即获得单个回复，以优先保障当前效率。"],["This conversation is not on disk. Delete it to remove it from your sidebar.","此对话不在本地磁盘上。将其删除即可从侧边栏移除。"],["Tasks can be done either in your agent manager or in an AI-powered editor.","您可以在智能体管理器中或在 AI 驱动的编辑器中完成任务。"],["Fetch web pages and convert HTML content into clean markdown for analysis.","抓取网页并将 HTML 内容转换为清晰的 Markdown 格式以便分析。"],["Best of N settings have moved to the Advanced section of General settings.","Best of N 设置已移至“常规设置”下的“高级”部分。"],["Workspace settings have moved to the Advanced section of General settings.","工作区设置已移至“常规设置”下的“高级”部分。"],["Timed out fetching the Google Drive file's title. The link was kept as-is.","获取 Google Drive 文件标题超时，已保留原始链接。"],["Yes, I'd like to receive product updates, tips, and promotions from Google","是的，我愿意接收来自 Google 的产品更新、使用技巧和优惠信息"],["You can upgrade to the Google AI Ultra plan to receive higher rate limits.","您可以升级到 Google AI Ultra 计划以获取更高的速率限制。"],["Automate browser interactions, take screenshots, and extract web content.","自动化浏览器交互、截取网页屏幕截图并提取网页内容。"],["Perform web searches and retrieve information using the Brave Search API.","使用 Brave Search API 执行网络搜索并检索相关信息。"],["Interact with Redis key-value stores to inspect keys, hashes, and queues.","连接 Redis 内存缓存，查看键值、哈希表与消息队列缓存数据。"],["Access resources in the Cloud Monitoring platform using natural language.","使用自然语言直接访问 Cloud Monitoring 监控平台中的监控指标与告警资源。"],["Hook will only trigger if the tool name matches run_command or view_file.","仅当工具名称匹配 run_command 或 view_file 时触发 Hook。"],["Setup may take over 5 minutes. Please keep this screen open during setup.","初始化设置可能需要 5 分钟以上，请在此过程中保持当前画面开启。"],["This prompt is straightforward and does not need alternative comparisons.","此提示词较为直接，无需进行多方案对比。"],["Plugins are packaged collections of skills and MCPs to help the Agent in","插件是打包的技能与 MCP 集合，用于帮助"],["Connect to a PostgreSQL database to inspect schemas and execute queries.","连接至 PostgreSQL 数据库以检查表结构并执行 SQL 查询。"],["Store and retrieve persistent memory and knowledge across conversations.","跨会话存储与检索持久化记忆和知识图谱。"],["Search Notion pages, read databases, and create or update documentation.","搜索 Notion 页面、查询数据库，并创建或更新文档内容。"],["Query Grafana dashboards, inspect data sources, and analyze alert rules.","查询 Grafana 监控仪表盘、查看数据源并分析告警规则。"],["The Bigtable Admin remote MCP server lets you manage Bigtable resources.","Bigtable Admin 远程 MCP 服务器可让您管理 Google Cloud Bigtable 资源及表实例。"],["Controls whether terminal commands require your approval before running.","控制终端命令在运行前是否需要您的批准。"],["Each project also includes Global Settings when working in this project.","每个项目在此项目中工作时还包括“全局设置”。"],["Configure workspace-specific permissions, resources, and customizations.","配置工作区专属的权限、资源与自定义项。"],["Enable telemetry in Settings before changing per-conversation telemetry.","请先在“设置”中启用遥测，然后再更改单次对话的遥测选项。"],["Enter the SSO URL provided by your IT admin to connect your work account","输入 IT 管理员提供的 SSO URL 以连接工作账户"],["The Agent attempted to interact with some sites that are not allowlisted","智能体尝试与部分未在允许列表中的站点交互"],["Time spent by the language model generating and streaming the tool call.","语言模型生成并流式传输该工具调用所花费的时间。"],["You can upgrade to a Google AI Ultra plan to receive higher rate limits.","您可以升级到 Google AI Ultra 计划以获取更高的速率限制。"],["Query events, create meetings, and manage schedules on Google Calendar.","在 Google 日历中查询日程活动、创建会议预约并管理排期。"],["Path to the Chrome/Chromium executable. Leave empty for auto-detection.","Chrome/Chromium 可执行文件的路径。留空则启用自动检测。"],["Browser settings have moved to the Browser section of General settings.","浏览器设置已迁移至通用设置中的浏览器部分。"],["Contact your administrator to set up Gemini Enterprise for this project","请联系管理员为此项目配置 Gemini Enterprise"],["Pages currently open in Antigravity's Browser instance are shown below.","下方显示当前在 Antigravity 浏览器实例中打开的页面。"],["Search and discover customizations to extend your Agent's capabilities.","搜索并发现自定义项，以扩展智能体的能力。"],["These servers need you to sign in before the agent can use their tools.","这些服务器需要您先登录，智能体才能使用其工具。"],["This plugin requires authentication before the agent can use its tools.","此插件需要完成认证后，智能体才能使用其工具。"],["This project uses Firebase. Do you want to download the Firebase skill?","此项目使用了 Firebase，是否下载 Firebase 技能？"],["Access resources in the Cloud Logging platform using natural language.","使用自然语言直接访问并检索 Cloud Logging 日志平台中的资源。"],["Inherits from global settings. Local permissions have higher priority.","继承自全局设置。本地权限具有更高的优先级。"],["Rules token budget exceeded. Large rules are demoted to path pointers.","规则 Token 预算已超出。大型规则已降级为路径指针。"],["When enabled, sandboxed commands are allowed to make network requests.","启用后，允许沙盒内运行的命令发起网络请求。"],["Couldn't fetch the Google Drive file's title. The link was kept as-is.","无法获取 Google Drive 文件标题，已保留原始链接。"],["Keep your coding agent up to date with the latest web best practices.","让您的编程智能体紧跟最新的 Web 最佳实践。"],["Search error logs, inspect stack traces, and manage issues in Sentry.","在 Sentry 中搜索错误日志、检查堆栈跟踪并管理异常问题。"],["Provide read and write access to directories on the local filesystem.","提供对本地文件系统目录的读取和写入权限。"],["Query Stripe customers, subscriptions, invoices, and payment intents.","查询 Stripe 客户列表、订阅计划、账单明细及支付流水记录。"],["Read and write Obsidian markdown notes and explore local vault links.","读取和写入 Obsidian 笔记文档并探索本地知识库双链关联。"],["Get notified when the agent needs your attention or completes a task.","当智能体需要您的注意或完成任务时获得通知。"],["Agent settings and permissions for conversations outside of projects.","配置项目之外会话的智能体设置与权限。"],["Labs settings have moved to the Advanced section of General settings.","实验室设置已移至“常规设置”下的“高级”部分。"],["Please sign in using the Antigravity sidebar panel to view this page.","请使用 Antigravity 侧边栏面板登录以查看此页面。"],["Plugins are packaged collections of skills and MCPs to help the Agent","插件是技能与 MCP 的打包集合，用于扩展智能体的能力"],["A snapshot was saved before running. To restore your previous output:","运行前已保存快照。如需恢复之前的输出："],["Configure a chat bot so you can use Jetski directly from Google Chat.","配置聊天机器人，以便直接在 Google Chat 中使用。"],["Failed to unarchive project: project management feature not available","取消归档项目失败：项目管理功能不可用"],["Generator metadata is present but does not contain ChatModelMetadata.","存在生成器元数据，但未包含 ChatModelMetadata。"],["Google3 chats will be regrouped into their workspaces in the sidebar.","Google3 对话将重新分组到侧边栏的各工作区。"],["Interact with Google Cloud Vertex AI models, prompts, and pipelines.","与 Google Cloud Vertex AI 模型、提示工程和机器学习流水线进行交互。"],["Configure agent execution, queued message delivery, and permissions.","配置智能体执行、队列消息发送与权限。"],["Lost connection to the language server. Agent features may not work.","与语言服务器断开连接，智能体功能可能无法正常工作。"],["The conversation could not be loaded because its data was not found.","无法加载该对话，因为未找到其数据。"],["This server needs you to sign in before the agent can use its tools.","此服务器需要您先登录，智能体才能使用其工具。"],["Run the command in your workstation terminal, then reload this page:","请在终端中运行以下命令，然后重新加载此页面："],["Send messages, search history, and interact with channels in Slack.","在 Slack 中发送消息、搜索聊天记录并与频道互动。"],["Enable Antigravity to interact with Google Kubernetes Engine (GKE).","让 Antigravity 能够与 Google Kubernetes Engine (GKE) 进行交互并管理集群。"],["A Model Context Protocol server for interacting with MongoDB Atlas.","用于与 MongoDB Atlas 云数据库进行交互的 MCP 服务器。"],["Allows the agent to access files outside of your current workspace.","允许智能体访问当前工作区之外的文件。"],["An error occurred while submitting your feedback. Please try again.","提交反馈时出错，请重试。"],["You don't have any projects created. Please create a project first.","您尚未创建任何项目，请先创建一个项目。"],["To start using the agent, please sign in with your Google account.","要开始使用智能体，请登录您的 Google 账号。"],["Create, search, and manage issues, projects, and cycles in Linear.","在 Linear 中创建、搜索并管理任务、项目及研发迭代周期。"],["Interact with local SQLite database files to read and modify data.","与本地 SQLite 数据库文件交互以读取和修改数据。"],["To modify editor settings, open Settings within the editor window.","要修改编辑器设置，请在编辑器窗口中打开设置。"],["Agent cannot modify files outside of the workspace in strict mode.","严格模式下，智能体无法修改工作区之外的文件。"],["Read access to code, refs, commits, and other repository contents.","读取代码、分支引用、提交记录及其他仓库内容的权限。"],["This request is not well-suited for parallel Best-of-N generation.","此请求不适合进行并行 Best-of-N 生成。"],["Intended primarily for previewing local development servers (e.g.,","主要用于预览本地开发服务器（例如"],["Typing your corp password here may trigger a Password Alert reset.","在此输入企业密码可能会触发密码安全警报重置。"],["Run an instruction on a recurring schedule or as a one-time timer","按周期计划或作为一次性定时器运行指令"],["• Disabled - Agent will never run Javascript code in the browser.","• 已禁用 - 智能体绝不会在浏览器中运行 Javascript 代码。"],["Show \"Edit\" and \"Chat\" buttons when selecting text in the editor.","在编辑器中选择文本时，显示“编辑”和“聊天”按钮。"],["Click to go there, drag to select a range, drag an edge to resize","点击跳转，拖拽选择范围，拖动边缘调整大小"],["Commands the agent can run outside the sandbox in this workspace.","智能体在此工作区中可在沙盒外运行的命令。"],["Uploads logs, settings, and conversation summaries to your Drive.","将日志、设置与对话摘要上传至您的 Google Drive。"],["Voice recording is unavailable while the Chief of Staff mic is on","语音助手麦克风开启时无法录音"],["A shell setup script run before every command the agent executes.","智能体执行每条命令前运行的 Shell 初始化脚本。"],["Validated with GitHub and stored, together with your username, in","已通过 GitHub 验证，并与您的用户名一同保存在"],["Build applications with the Gemini Interactions API and Live API","使用 Gemini Interactions API 和 Live API 构建应用"],["Ask a quick question without interrupting the main conversation.","在不打断当前主对话流程的情况下快速提问。"],["Manage Docker containers, inspect images, volumes, and networks.","管理 Docker 容器，查看镜像、存储卷与虚拟网络配置。"],["Let the agent access past conversations to inform its responses.","允许智能体访问历史对话记录以辅助生成更准确的回复。"],["Replace the default browser right-click menu with quick actions.","使用快捷操作替换默认的浏览器右键菜单。"],["The agent auto-executes commands matched by an allow list entry.","当命令匹配允许列表项时，智能体会自动执行。"],["The conversation was compacted to fit within the context window.","对话已压缩以适应上下文窗口。"],["This extension has no declared permissions requiring user input.","此扩展没有需要用户确认的声明权限。"],["Simulate a different user cohort (Google, External, Enterprise).","模拟不同的用户群体（Google 内部、外部用户、企业用户）。"],["Ask a quick question without interrupting the main conversation","在不打断当前主对话流程的情况下快速提问"],["Disabled - Agent will never run Javascript code in the browser.","已禁用 - 智能体绝不会在浏览器中运行 Javascript 代码。"],["Highlight newly inserted text after accepting a Tab completion.","高亮接受 Tab 补全后新插入的文本"],["Allow/deny agent write access to specific files or directories.","允许/拒绝智能体对特定文件或目录的写入访问。"],["Permanently delete this project and all of its session history.","永久删除该项目及其所有会话记录。"],["Configure tab completion, suggestions, and navigation behavior.","配置 Tab 补全、代码建议与导航行为。"],["Drag to resize the gutter; double-click to fit it automatically","拖动调整分栏宽度；双击自动适应"],["Install Antigravity IDE to run and edit your workspace scripts.","安装 Antigravity IDE 以运行和编辑工作区脚本。"],["Open files in the background if the agent creates or edits them","当智能体创建或编辑文件时，在后台自动打开这些文件"],["What you would like to see to address this gap in your workflow","您希望增加什么功能来弥补工作流中的这一缺口"],["Your administrator has disabled MCP servers for this workspace.","您的管理员已禁用此工作区的 MCP 服务器。"],["Your environment will expire soon. Please renew it to continue.","您的环境即将过期，请续期以继续使用。"],["Perform searches on ingested data in Google-owned data stores.","基于 Google 数据存储库中的数据执行智能检索与问答搜索。"],["Allow/deny agent read access to specific files or directories.","允许/拒绝智能体对特定文件或目录的读取访问。"],["Inherits your Global Permissions when working in this project.","在此项目中工作时继承您的全局权限。"],["Also includes Global Permissions when working in this project.","在此项目中工作时还包括“全局权限”。"],["Tip: Complex tasks get better results with multiple responses.","提示：复杂任务通过生成多个回复对比往往能获得更好效果。"],["Your Antigravity use will be associated with provided project.","您的 Antigravity 使用量将关联至所提供的项目。"],["A license or project selection is required to use Antigravity.","使用 Antigravity 需要选择许可证或项目。"],["Draws from your organization's pooled Gemini Enterprise usage.","从您所属组织的 Gemini Enterprise 共享配额池中扣减。"],["Invoke a team of agents to autonomously tackle large projects","调用智能体团队自主应对大型项目"],["Create a new project. You can add folders to it now or later.","创建一个新项目。您现在或稍后都可以为其添加文件夹。"],["Atlassian MCP Server for interacting with Atlassian products.","用于与 Atlassian 系列产品进行交互的 Atlassian MCP 服务器。"],["Configure allowed and denied paths for file reads and writes.","配置允许和禁止的读写文件路径。"],["External tools the agent can call via Model Context Protocol.","智能体可通过模型上下文协议 (Model Context Protocol) 调用的外部工具。"],["Permanently delete this project and all of its conversations.","永久删除该项目及其所有会话记录。"],["Browse and enable plugins from the Build with Google catalog.","从“基于 Google 构建”目录中浏览并启用插件。"],["Browse and enable plugins from the Build With Google catalog.","从“基于 Google 构建”目录中浏览并启用插件。"],["Allow opening pull requests and grant access to specific PRs.","允许创建 PR 并授予对特定 PR 的访问权限。"],["Hook will only trigger if the tool name starts with browser_.","仅当工具名称以 browser_ 开头时触发 Hook。"],["This migration may mess up your settings, chats, and sidebar.","此迁移可能会影响您的设置、对话和侧边栏布局。"],["ABFS workspace creation is not available in this environment.","当前环境不支持创建 ABFS 工作区。"],["Create or select a CitC workspace to use in this conversation","创建或选择要在此对话中使用的 CitC 工作区"],["There was an error with your authentication. To log in, click","身份认证出错。如需登录，请点击"],["Instantly create a new project and folder to start building.","立即创建新项目和文件夹以开始构建。"],["Invoke the Boost multi-agent orchestrator for complex tasks.","调用 Boost 多智能体编排器以应对复杂任务。"],["Prevent the computer from sleeping while the app is running.","防止计算机在应用程序运行时进入休眠状态。"],["Disables all safety barriers for maximal iteration velocity.","禁用所有安全屏障以获得最大迭代速度。"],["Inherits your General settings when working in this project.","在此项目中工作时继承您的通用设置。"],["Confirming this undo action will make the following changes:","确认此撤销操作将执行以下更改："],["Grant create, update, or delete access to specific branches.","授予对特定分支的创建、更新或删除权限。"],["Hook will only trigger if the tool name matches run_command.","仅当工具名称匹配 run_command 时触发 Hook。"],["Voice recording is unavailable while the Concierge mic is on","语音助手麦克风开启时无法使用语音录制"],["A full copy of this workspace, uncommitted changes included.","当前工作区的完整副本（包含未提交的更改）。"],["Cog workspace creation is not available in this environment.","当前环境不支持创建 Cog 工作区。"],["Invoke the Boost multi-agent orchestrator for complex tasks","调用 Boost 多智能体编排器以应对复杂任务"],["Open files in the background if agent creates or edits them","如果智能体创建或编辑了文件，则在后台自动打开它们"],["Open files in the background if Agent creates or edits them","如果智能体创建或编辑了文件，则在后台自动打开它们。"],["Configure the agent's visual theme and display preferences.","配置智能体的视觉主题与显示偏好设置。"],["Allow/deny agent browser actuation access to specific URLs.","允许/拒绝智能体访问特定 URL 执行浏览器操作。"],["Also includes Global Settings when working in this project.","在此项目中工作时，还包括“全局设置”。"],["Pick a suggestion below to get started, or ask me anything.","选择下方的建议快速开始，或者直接向我提问。"],["Play a sound when the agent finishes generating a response.","当智能体完成回复生成时播放提示音。"],["Your environment is active, but you can renew it if needed.","您的环境当前处于活跃状态，如有需要可手动续期。"],["Search tabs, files, plugins, subagents, artifacts, tasks...","搜索标签页、文件、插件、子智能体、工件、任务..."],["Restricts agent tools to a secure, isolated local sandbox.","限制智能体工具必须在安全、隔离的本地沙箱中运行。"],["Allow creating issues and grant access to specific issues.","允许创建 Issue 并授予对特定 Issue 的访问权限。"],["Terminal commands the agent can execute in this workspace.","智能体在此工作区中可执行的终端命令。"],["Remote Control isn't active on this instance. Enable it in","当前实例未启用远程控制。请在以下位置启用："],["Using the Google Antigravity Python SDK to build AI agents","使用 Google Antigravity Python SDK 构建 AI 智能体。"],["Search your Google Cloud projects using natural language.","使用自然语言轻松搜索和管理您的 Google Cloud 云项目。"],["Configure global allowed and denied resource permissions.","配置全局允许和禁止的资源访问权限。"],["Allow/deny agent read access to specific URLs or domains.","允许/拒绝智能体对特定 URL 或域名的读取访问。"],["Type / and select plan to have the agent generate a plan.","输入 / 并选择 plan 让智能体生成计划。"],["Experimental model. Click to provide feedback or opt out.","实验性模型。点击提供反馈或退出体验。"],["No matching project folders. Apply to use the custom URI.","未找到匹配的项目文件夹。应用以使用自定义 URI。"],["Render display math in leqno style (left-justified tags).","以 leqno 样式（公式编号居左）渲染块级数学公式。"],["Thank you! Your feedback has been submitted successfully.","感谢您！您的反馈已成功提交。"],["A comma-separated list like repo-a, repo-b, or * for all.","以逗号分隔的列表（如 repo-a, repo-b），或填 * 代表全部。"],["Agent can scroll on browser pages to access more content.","智能体可以在浏览器页面上滚动以查看更多内容。"],["Integration skill and tools for Google Maps Platform APIs","适用于 Google Maps Platform API 的集成技能与工具集。"],["Core tools and knowledge required to develop for Android","开发 Android 应用所需的内核工具及知识库。"],["Run SQL queries and analyze datasets in Google BigQuery.","在 Google BigQuery 中运行 SQL 查询并分析数据集。"],["Configure allowed and denied URLs for browser actuation.","配置允许和禁止浏览器执行操作的 URL 规则。"],["Manage project folders, agent settings, and permissions.","管理项目文件夹、智能体设置与权限。"],["Active token streaming duration from the language model.","语言模型流式输出 Token 的活跃耗时。"],["Clone current workspace into a new independent workspace","将当前工作区克隆为新的独立工作区"],["Inline PDF preview is not available in this environment.","当前环境不支持内联 PDF 预览。"],["No project selected or project management not available.","未选择项目或项目管理功能不可用。"],["Select a model using the model selector in the input box","使用输入框中的模型选择器选择一个模型"],["Trigger multiple response variants from the same prompt.","针对同一提示词触发生成多个候选回复。"],["Inspect and manage Google Cloud SQL database instances.","检查并管理 Google Cloud SQL 数据库实例。"],["Manage your plan, credentials, and general preferences.","管理您的订阅计划、凭证及常规偏好设置。"],["Allow/deny agent command execution outside the sandbox.","允许/拒绝智能体在沙箱外执行命令。"],["Include default customizations, such as default skills.","包含默认自定义项（如内置默认技能）。"],["This subagent was killed and can no longer be messaged.","此子智能体已被终止，无法再向其发送消息。"],["A comma-separated list like org-a, org-b, or * for all.","以逗号分隔的列表（如 org-a, org-b），或填 * 代表全部。"],["A copy of the workspace snapshot recorded at this step.","此步骤记录的工作区快照副本。"],["Scan the code to open this device in Remote Control, or","扫描二维码以在远程控制中打开此设备，或"],["This sign-in option is only available to invited teams.","此登录方式仅对受邀团队开放。"],["There was an unexpected issue setting up your account.","设置您的账号时遇到了意外问题。"],["Enable Antigravity to deploy apps to Google Cloud Run.","让 Antigravity 能够将应用程序部署到 Google Cloud Run。"],["Allow full browser script execution without prompting.","始终允许执行浏览器脚本，无需提示。"],["Configure the maximum width of the conversation panel.","配置会话面板的最大宽度。"],["No rate card for this model; showing comparable rates.","此模型暂无费率表，当前显示参考费率。"],["Open Google Chrome on the machine running Antigravity.","在运行 Antigravity 的设备上打开 Google Chrome。"],["Skills are instructions that extend what Agent can do.","技能是用于扩展智能体能力的指令集。"],["This project is associated with a different workspace.","此项目关联了另一个工作区。"],["Trajectory Telemetry: Redacted (User Content Stripped)","轨迹遥测：已脱敏（已剥离用户内容）"],["cumulative total for the conversation up to this point","截至当前节点的对话累计总量"],["A Google Cloud project is required to use Antigravity.","使用 Antigravity 需要关联 Google Cloud 项目。"],["Large customizations will be truncated automatically.","过大的自定义内容将被自动截断。"],["Modify permissions for file, terminal, and MCP tools.","修改文件、终端和 MCP 工具的权限。"],["Configure default behaviors, skills, and MCP servers.","配置默认行为、技能预设和 MCP 服务器。"],["How long a quiet interval must be before it collapses","静默间隔达到多长时间后自动折叠"],["Manage your conversations from the companion website.","从配套网页端管理您的对话。"],["Choose between the Default and Project 4K experience.","在默认体验与 Project 4K 体验之间选择。"],["Curated collection of agent skills for science tasks.","专为科学研究任务精选的智能体技能集合。"],["Actions the agent may always perform without asking.","智能体始终可以执行的操作，无需询问。"],["Actions the agent must always ask before performing.","智能体在执行前必须始终询问的操作。"],["Configure external tools via Model Context Protocol.","通过模型上下文协议 (Model Context Protocol) 配置外部工具。"],["Keyboard shortcuts for quick navigation and control.","用于快速导航和控制的键盘快捷键。"],["What did you like? Select any that apply (optional).","您喜欢哪些方面？可多选（可选）。"],["Using the Antigravity Python SDK to build AI agents","使用 Antigravity Python SDK 构建 AI 智能体。"],["Run until the specified goal is completely finished","持续运行，直到指定的目标完全完成"],["Search for MCP servers to add to your configuration","搜索要添加到配置中的 MCP 服务器"],["Choose your preferred terminal and review policies.","选择您偏好的终端和审查策略。"],["Quickly add and update imports with a tab keypress.","通过 Tab 键快速添加和更新导入。"],["Whether the agent asks you to review its documents.","智能体是否要求您审查其文档。"],["You currently don't have any MCP Servers installed.","您当前尚未安装任何 MCP 服务器。"],["Prompt for approval before running browser scripts.","在运行浏览器脚本前请求批准。"],["Configure hooks that run on agent lifecycle events.","配置在智能体生命周期事件触发时运行的 Hook。"],["Custom models are only supported on Linux machines.","自定义模型仅在 Linux 设备上受支持。"],["Keeps working in this workspace. Nothing is copied.","继续在此工作区中工作，不复制任何内容。"],["No repositories found. Type to enter a custom path.","未找到仓库，可直接输入自定义路径。"],["Stage and amend all changes into the current commit","暂存所有更改并追加到当前提交"],["Toggle this on to allow creating new pull requests.","开启以允许创建新 PR。"],["Why are you opting out of auto-triggered Best-of-N?","您为什么退出自动触发的 Best-of-N 模式？"],["Read, search, and edit Google Docs text documents.","读取、搜索并在 Google Docs 中在线编辑文本文档。"],["Choose your preferred terminal and review policies","选择您偏好的终端和审查策略"],["Allow sandboxed commands to make network requests.","允许沙盒内的命令发起网络请求。"],["Configure editor-specific behaviors and shortcuts.","配置编辑器专属行为与快捷键。"],["Configure the default width of markdown artifacts.","配置 Markdown 产物的默认显示宽度。"],["Custom agents are not available in Best of N mode.","Best of N 模式下不可使用自定义智能体。"],["Download the bundle manually and share it instead:","手动下载调试包并进行分享："],["Search tabs, files, subagents, artifacts, tasks...","搜索标签页、文件、子智能体、产物、任务..."],["URLs the agent can read or open in this workspace.","智能体在此工作区中可读取或打开的 URL。"],["What quota or feature is being incorrectly limited","哪些配额或功能受到了不合理的限制"],["Whether it never connects or is intermittent/flaky","是完全无法连接，还是连接不稳定/时断时续"],["Aborted due to condition callback returning false.","由于条件回调返回 false，操作已中止。"],["Error: No artifact URI provided in URL parameters.","错误：URL 参数中未提供产物 URI。"],["New standalone conversation, outside of projects.","新建独立对话，不属于任何项目。"],["Customize keyboard shortcuts for various actions.","为各种操作自定义键盘快捷键。"],["• Asks for Review - Agent always asks for review.","• 请求审查 - 智能体始终会在下一步操作前，严格向您请求审查与确认。"],["Dev mode: Localhost server automatically detected","开发模式：已自动检测到本地服务器"],["Find skills, agents, and more in the Marketplace.","在市场中查找技能、智能体等扩展。"],["Paths the agent can modify inside this workspace.","智能体在此工作区内可以修改的路径。"],["The agent was prevented from accessing some sites","已阻止智能体访问部分站点"],["Time waiting before the first token was received.","收到第一个 Token 前的等待时间。"],["Toggle this on to enable read access on contents.","开启以允许读取仓库内容。"],["For Antigravity Business consumption options, see","有关 Antigravity 商业版计费选项，请参阅"],["100.0% of the customization budget is available.","100.0% 的个性化定制预算额度可用。"],["Display and preserve intermediate thinking steps","显示并保留中间思维过程步骤"],["Files modified by the agent in this conversation","智能体在本次对话中修改的文件"],["No steps with timestamps to place on a timeline.","没有带时间戳的步骤可放置在时间轴上。"],["Run terminal commands with sandbox restrictions.","在沙盒限制下运行终端命令。"],["Steps and containers shorter than this fade back","耗时短于此阈值的步骤和容器将弱化显示"],["This undo action will not make any code changes.","此撤销操作不会修改任何代码。"],["URLs the agent can actuate on in this workspace.","智能体在此工作区中可执行浏览器操作的 URL。"],["URLs the agent can actuate on using the browser.","智能体可以使用浏览器执行交互操作的 URL 地址。"],["Curated collection of agent skills for science.","专为科学研究领域精选的智能体技能集合。"],["Asks for Review - Agent always asks for review.","请求审查 - 智能体始终会请求审查。"],["Absolute path to the Chrome/Chromium executable","Chrome/Chromium 可执行文件的绝对路径"],["Configure allowed commands outside the sandbox.","配置允许在沙箱之外执行的命令。"],["Select light, dark, or inherit system settings.","选择浅色、深色或继承系统偏好设置。"],["Agent will always ask to review in strict mode.","严格模式下，智能体始终会请求人工审核。"],["Choose the product skin that fits how you work.","选择适合您工作方式的产品外观。"],["How this feature would help you and other users","此功能将如何帮助您和其他用户"],["One lane per kind of step, or one per step type","按步骤大类或具体步骤类型划分泳道"],["Paths the agent can read inside this workspace.","智能体在此工作区内可以读取的路径。"],["Simplified interface without developer tooling.","不含开发者工具的精简界面。"],["This step is not associated with an invocation.","此步骤未关联任何模型调用。"],["What was off? Select any that apply (optional).","有哪些地方不够好？可多选（可选）。"],["Commands the agent can run outside the sandbox.","智能体可以在沙箱之外运行的命令。"],["URLs the agent can read or open in the browser.","智能体可以读取或在浏览器中打开的 URL 地址。"],["Configure allowed and denied URLs for reading.","配置允许和禁止访问的读取 URL 地址。"],["Alt+Enter On empty prompt, sends next in queue","Alt+Enter 提示词为空时，发送队列中的下一条"],["Automations do not inherit Global Permissions.","自动化任务不继承全局权限。"],["(Optional) Tell us more or type your reason...","（可选）请补充更多信息或输入原因..."],["Change VCS in General settings, under Advanced","可在“常规设置 -> 高级”中更改版本控制系统 (VCS)"],["Close split view and go to forked conversation","关闭分屏视图并前往分支对话"],["Encountered an error while running the plugin.","运行插件时遇到错误。"],["No execution metadata available for this step.","此步骤暂无执行元数据。"],["This conversation is in a different workspace.","此对话位于另一个工作区中。"],["Type to search for code across your workspace.","输入以在工作区中全局搜索代码。"],["Your changes were not saved. Please try again.","您的更改未保存，请重试。"],["Check availability, schedule events, and RSVP.","查看空闲状态、安排日程活动及回复日程邀请。"],["Failed to load more plugins. Please try again.","加载更多插件失败，请重试。"],["Any error messages seen when trying to log in","尝试登录时看到的任何错误提示"],["Attach the trajectory ID to the feedback form","将轨迹 ID 附加到反馈表单"],["Choose how technical the interface should be.","选择界面的技术细节展示程度。"],["Determines the markup language of the output.","指定输出内容的标记语言格式。"],["Image rendering blocked (strict mode enabled)","图片渲染已拦截（已启用严格模式）"],["Staged index changes and working tree changes","暂存区更改与工作树更改"],["This client was started with no custom flags.","当前客户端启动时未携带任何自定义标志。"],["Too many requests, please try again in a bit!","请求过于频繁，请稍后再试！"],["Are you sure you want to delete the workspace","确定要删除工作区"],["Choose the experience that fits how you work.","选择适合您工作方式的使用体验。"],["to ask for content changes for legal reasons.","以出于法律原因请求更改内容。"],["Please list the steps to reproduce the issue","请列出重现该问题的步骤"],["Worktrees are available for Git repositories","工作区树仅适用于 Git 仓库"],["This will permanently delete the project and","这将永久删除该项目及其包含的"],["Search conversations (by name or Cascade ID)","搜索对话（按名称或 Cascade ID）"],["Amend staged changes into the current commit","将暂存的更改追加到当前提交中"],["An unexpected error occurred during creation","创建过程中发生意外错误"],["Select text in the artifact to add a comment","在产物中选中文本以添加评论"],["Some non-image binary content was truncated.","部分非图片二进制内容已被截断。"],["Toggle Sidebar, conversations need attention","切换侧边栏（有对话需要关注）"],["Toggle this on to allow creating new issues.","开启以允许创建新 Issue。"],["Worktrees are not available for this project","此项目不支持工作树 (Worktrees)"],["Please verify your account to continue using","请先验证您的账户以继续使用"],["Conversation copied as Markdown to clipboard","会话已作为 Markdown 复制到剪贴板"],["Are you sure you want to delete the project","您确定要删除项目 "],["Set up your workspace in the Agent Manager.","在智能体管理器中设置您的工作区。"],["No customizations found for this workspace.","当前工作区未找到个性化定制。"],["Configure the browser subagent. It requires","配置浏览器子代理。它需要安装 "],["Configure when follow-up messages are sent.","配置后续消息的发送时机。"],["Work with local agents from another device.","从其他设备使用本地智能体。"],["Manage fine-grained permissions for GitHub.","管理 GitHub 细粒度权限。"],["No active terminals. Click + to create one.","暂无活跃终端，点击 + 创建一个。"],["Enter workspace name (e.g., my-cog-feature)","输入工作区名称（例如 my-cog-feature）"],["Your feedback directly improves Gemini. See","您的反馈将直接帮助改进 Gemini。请参阅"],["Search conversations, commands, and code...","搜索会话、命令和代码..."],["to back up your data and run the migration.","以备份您的数据并运行迁移。"],["Show suggestions when typing in the editor","在编辑器中键入时显示建议"],["It requires Google Chrome to be installed.","它需要安装 Google Chrome。"],["Failed to inspect license for this project","检查此项目的许可证失败"],["Failed to parse settings. Fix and restart.","解析设置失败，请修复后重启。"],["Hook will trigger if any tool is executed.","执行任何工具时均触发 Hook。"],["Search conversations with in the top left.","可通过左上角的快捷搜索框搜索对话。"],["Search, upload, download, and share files.","搜索、上传、下载和分享文件。"],["Ask anything, @ to mention, / for actions","提问任何问题，使用 @ 提及，/ 执行操作"],["of the customization budget is available.","的个性化定制预算额度可用。"],[". Local permissions have higher priority.","。本地权限具有更高的优先级。"],["It requires Google Chrome to be installed","它需要安装 Google Chrome"],["Interrupt the agent and send immediately.","打断智能体并立即发送。"],["No internet. Agent features may not work.","无网络连接，智能体功能可能无法使用。"],["Team of subagents to do long running work","组建子智能体团队以执行长周期任务"],["Type absolute path or navigate folders...","输入绝对路径或浏览文件夹..."],["This skill is installed in your workspace","此技能已安装在您的工作区中"],["Failed to load plugins. Please try again.","加载插件失败，请重试。"],["within it. This action cannot be undone.","。此操作无法撤销。"],["Controls the actions the agent can take.","控制智能体可以执行的操作。"],["Configure AI models and view your quota.","配置 AI 模型并查看您的配额。"],["Interrupt the agent and send immediately","打断智能体并立即发送"],["Learn more about Inherit common settings","了解更多关于继承通用设置的信息"],["Commands and files these agents can use.","这些智能体可以使用的命令与文件。"],["Comments unavailable at this screen size","当前屏幕尺寸下无法使用评论功能"],["Creating projects for your conversations","正在为您的对话创建项目"],["Multi-conversation view is not available","多对话视图不可用"],["No plugins available in the marketplace.","插件市场中暂无可用插件。"],["No recommended skills found in workspace","工作区中未找到推荐技能"],["Organization Allowed Domains (Read-Only)","组织允许的域名（只读）"],["Select a step in the timeline to inspect","在时间轴中选择一个步骤进行检查"],["Trajectory Telemetry: Active (Uploading)","轨迹遥测：活跃（上传中）"],["Turn off telemetry for this conversation","关闭本次对话的遥测"],["A project with this name already exists.","已存在同名项目。"],["Attaching logs requires an email address","附带日志需要提供邮箱地址"],["Sorry, this account is ineligible to use","抱歉，当前账户无权使用"],["Agent execution terminated due to error.","智能体执行因错误而终止。"],["Failed to load plugin. Please try again.","加载插件失败，请重试。"],["Terminal commands the agent can execute.","智能体可以执行的终端命令。"],["Create project with existing folder(s).","从现有文件夹创建项目。"],["Large customizations will be truncated.","过大的自定义内容将被截断。"],["Explain and Fix in Current Conversation","解释并修复当前对话"],["GCP Project ID for enterprise features.","用于连接 Google Cloud Platform 企业级特性的项目 ID。"],["Configure browser subagent. It requires","配置浏览器子代理。它需要安装 "],["requires Google Chrome to be installed.","需要安装 Google Chrome。"],["Manually customize individual settings.","手动自定义单项设置。"],["Block all browser JavaScript execution.","禁用所有浏览器 JavaScript 执行。"],["Enter workspace name (e.g., my-feature)","输入工作区名称（例如 my-feature）"],["Security agent decides if commands run.","由安全智能体决定是否允许运行命令。"],["Telemetry is off for all conversations.","所有对话的遥测均已关闭。"],["Telemetry is off for this conversation.","当前对话的遥测已关闭。"],["The remote shared a link for this push.","远端返回了本次推送的链接。"],["Turn on telemetry for this conversation","开启本次对话的遥测"],["No (tell the agent what to do instead)","否（告知智能体其他操作）"],["Large customizations will be truncated","过大的自定义内容将被截断"],["Predict the location of your next edit","预测下一次编辑的位置"],["requires Google Chrome to be installed","需要安装 Google Chrome"],["Allow/deny specific terminal commands.","允许/拒绝特定的终端命令。"],["Enter a prompt for the agent to run...","输入要让智能体执行的提示词..."],["No content available for this resource","此资源暂无可用内容"],["Pricing is based on public API pricing","价格基于公开 API 定价计算"],["Run all commands without restrictions.","无限制运行所有命令。"],["Use theme to be imported with settings","使用随设置导入的主题"],["What did you like about this response?","您喜欢这条回复的哪些方面？"],["A group with this name already exists.","已存在同名分组。"],["Allow read/write access to this path?","是否允许读写此路径？"],["Yes, and always allow in this project","是，且在此项目中始终允许"],["Configure your editor settings below.","在下方配置您的编辑器设置。"],["~/.gemini/antigravity-browser-profile","~/.gemini/antigravity-browser-profile"],["Outside of folders file access policy","文件夹外文件访问策略"],["On empty prompt, sends next in queue.","提示词为空时，发送队列中的下一条。"],["Add them to allow future interactions","添加它们以允许后续交互"],["Automatically decide if commands run.","自动决定是否运行命令。"],["Drag to resize, double-click to reset","拖动调整大小，双击重置"],["Manage your notification preferences.","管理您的通知偏好设置。"],["No skills or rules match this filter.","没有匹配当前筛选条件的技能或规则。"],["Open the agent panel on window reload","重新加载窗口时打开智能体面板"],["Outer App Version | Inner App Version","外层应用版本 | 内核版本"],["Tell us anything else here (optional)","在此补充其他说明（可选）"],["Terminal Disabled on Non-Corp Domains","非企业域环境下已禁用终端"],["The current trigger rate is too high.","当前触发频率过高。"],["Couldn't load Google Drive link title","无法加载 Google Drive 链接标题"],["Failed to create CitC clone workspace","创建 CitC 克隆工作区失败"],["Include Jetski Default Customizations","包含默认自定义项"],["Read, edit, and export presentations.","读取、编辑和导出幻灯片演示文稿。"],["Read, write, and format spreadsheets.","读取、写入和格式化电子表格。"],["Invoke a browser agent for web tasks","调用浏览器代理执行网页任务"],["Customization token budget exceeded.","自定义设置 Token 预算已超限。"],["Airweave lets agents search any app.","Airweave 允许智能体搜索任何应用程序。"],["Interact with Redis key-value stores","与 Redis 键值存储进行交互"],["Actions the agent may never perform.","智能体绝不可执行的操作。"],["Configure allowed terminal commands.","配置允许的终端命令。"],["Manage your model quota and credits.","管理您的模型配额与额度。"],["On empty prompt, sends next in queue","提示词为空时，发送队列中的下一条"],["There are no customizations enabled.","当前未启用任何个性化定制。"],["Did restarting the desktop app help?","重启桌面端应用是否解决了问题？"],["No customizations match your search.","没有匹配搜索条件的自定义项。"],["Retrieving Console Logs from Browser","正在从浏览器获取控制台日志"],["True changes vs the parent workspace","相对于父工作区的实际更改"],["Are you sure you want to archive the","确定要归档"],["To write effective feedback, see our","如需了解如何撰写高质量反馈，请参阅我们的"],["Describe the bug you encountered...","描述您遇到的缺陷..."],["Customization token budget exceeded","自定义设置 Token 预算已超限"],["Browser Javascript Execution Policy","浏览器 JS 执行策略"],["By using this app, you agree to its","使用本应用即表示您同意其"],["Queue until after the current turn.","在当前回合结束后排队。"],["Chief of Staff voice mode is active","语音助手语音模式已启用"],["Loading workspace customizations...","正在加载工作区自定义项..."],["No custom flag matches your search.","没有匹配搜索条件的自定义标志。"],["Retrieved Console Logs from Browser","已从浏览器获取控制台日志"],["Are you sure you want to delete the","确定要删除"],["Select the latest snapshot from the","从以下位置选择最新快照："],["Simulate running on a different OS.","模拟在不同的操作系统上运行。"],["Web search prioritized results from","网页搜索已优先采用来自以下站点的结果："],["Enter command (e.g., git, blaze)...","输入命令（例如 git、python）..."],["Search for files in the project...","在项目中搜索文件..."],["Queue until after the current turn","在当前回合结束后排队"],["to have the agent generate a plan.","让智能体生成计划。"],["Agent Script Command Configuration","智能体脚本命令配置"],["Click to respond to the questions.","点击回答问题。"],["Drag to select a region to comment","拖动框选区域以添加评论"],["Enter Google Cloud Project Details","输入 Google Cloud 项目详情"],["Failed to download Firebase skill.","下载 Firebase 技能失败。"],["Failed to load shared conversation","加载分享的对话失败"],["Fetched network requests for page.","已获取页面的网络请求列表。"],["File Tree Component is not loaded.","文件树组件未加载。"],["Sends after agent finishes working","待智能体完成当前工作后发送"],["Unable to resolve audio source URL","无法解析音频源 URL"],["What the step bars are coloured by","步骤条的颜色编码依据"],["Allow network access to this URL?","是否允许访问此 URL？"],["Search or create a new project...","搜索或创建新项目..."],["Open Agent panel on window reload","窗口重新加载时自动打开智能体面板。"],["Click to respond to the question.","点击回答问题。"],["Configure GitHub access policies.","配置 GitHub 访问策略。"],["Discover helpful skills & plugins","发现实用的技能与插件"],["Double-click to reset panel sizes","双击重置面板尺寸"],["Failed to Generate Commit Message","生成提交信息失败"],["Fetched network request for page.","已获取页面的网络请求。"],["No matching customizations found.","未找到匹配的自定义项。"],["Preview disabled (experiment off)","预览已禁用（实验功能未开启）"],["Sidecar feature is not available.","Sidecar 功能不可用。"],["Telemetry is disabled in Settings","已在设置中禁用遥测"],["The agent has a question for you:","智能体向您提出了一个问题："],["Use full Git clones for Best of N","为 Best of N 使用完整 Git 克隆"],["Use full VCS clones for Best of N","为 Best of N 使用完整 VCS 克隆"],["You can opt-out temporarily using","您可以临时退出，方式为："],["All scheduled tasks run as Flash.","所有计划任务均以 Flash 模型运行。"],["Use Google Cloud project instead","改用 Google Cloud 项目"],["Allow write access to this path?","是否允许写入此路径？"],["Toggle Between Light/Dark Themes","切换浅色/深色主题"],["Set the speed of tab suggestions","设置 Tab 建议的速度"],["Refreshes in less than a minute.","不到 1 分钟后刷新。"],["Manage Antigravity app settings.","管理 Antigravity 应用程序设置。"],["Learn more about Inherit General","了解更多关于继承通用设置的信息"],["Ask before sensitive operations.","执行敏感操作前先询问。"],["Cannot send message to subagent.","无法向子智能体发送消息。"],["Create fork in current workspace","在当前工作区创建分支对话"],["Cron expression e.g. 0 */6 * * *","Cron 表达式，例如 0 */6 * * *"],["Every command requires approval.","每条命令都需要审批。"],["Failed to open created workspace","打开新建的工作区失败"],["Folders these agents can access.","这些智能体可以访问的文件夹。"],["Importing shared conversation...","正在导入分享的对话..."],["Prompt to execute on schedule...","按计划定时执行的提示词..."],["Sign in with a different account","使用其他账户登录"],["Taking longer than usual to load","加载时间比平时更长"],["The agent has questions for you:","智能体向您提出了几个问题："],["The branch was pushed to GitLab.","分支已推送至 GitLab。"],["The change was pushed to Gerrit.","更改已推送至 Gerrit。"],["This command ran in the sandbox.","此命令在沙盒中运行。"],["Unable to resolve PDF source URL","无法解析 PDF 源 URL"],["Use Add MCP to browse the store.","点击“添加 MCP”浏览商店。"],["What is missing in your workflow","您的工作流中缺失了什么环节"],["When enabled, Agent will use IDE","启用后，智能体将使用 IDE"],["image for artifact level comment","产物评论图片"],["Search by name or Cascade ID...","按名称或 Cascade ID 搜索..."],["Allow read access to this path?","是否允许读取此路径？"],["Continue with different account","使用其他账号继续"],["Interview me to align on a plan","通过访谈与我对齐方案"],["Split Conversation Horizontally","水平拆分会话"],["Agent Non-Workspace File Access","智能体非工作区文件访问权限"],["Terminal Command Auto Execution","终端命令行自动执行"],["Refreshes in less than a minute","不到 1 分钟后刷新"],["Best of N mode is not available","Best of N 模式不可用"],["Create fork in shared workspace","在共享工作区创建分支对话"],["Created a new branch on GitHub.","已在 GitHub 上创建新分支。"],["Created a new branch on Origin.","已在远端 Origin 创建新分支。"],["Error loading Browser recording","加载浏览器录屏出错"],["No quota information available.","暂无配额信息。"],["Reading Browser Page in Browser","正在浏览器中读取页面"],["Render display math flush left.","将块级数学公式左对齐渲染。"],["Select or enter a workspace URI","选择或输入工作区 URI"],["Simulating Key Press in Browser","正在浏览器中模拟按键"],["User cancelled agent execution.","用户已取消智能体执行。"],["Workspace archived successfully","工作区已成功归档"],["Are you sure you want to delete","确定要删除"],["Enter file or directory path...","输入文件或目录路径..."],["Learn more about Inherit Global","了解更多关于 继承全局 的信息"],["Prompt to run when triggered...","触发时要执行的提示词指令..."],["Build with Antigravity Plugins","基于反重力插件构建"],["Build With Antigravity Plugins","基于反重力插件构建"],["Attach a screenshot (optional)","上传屏幕截图（可选）"],["Attach Antigravity server logs","附带 Antigravity 服务器日志"],["No scheduled tasks configured.","未配置计划任务。"],["Customization budget exceeded.","自定义设置预算已超限。"],["Terminal & Tooling Permissions","终端与工具集权限"],["Cancel Render Thumbnail Failed","取消缩略图渲染失败"],["Concierge voice message failed","语音助手消息发送失败"],["Concierge voice mode is active","语音助手模式已开启"],["Create a Plugin with the Agent","使用智能体创建插件"],["Enable Notifications for Agent","启用智能体通知"],["Explore the plugin marketplace","探索插件市场"],["Failed to save token to ~/.env","保存令牌至 ~/.env 失败"],["Failed to start Best of N mode","启动 Best of N 模式失败"],["Refresh quota and credits data","刷新配额与积分数据"],["Scanning skills config file...","正在扫描技能配置文件..."],["Screenshot must be under 10 MB","截图大小必须小于 10 MB"],["Sending transcribed message...","正在发送语音转写消息..."],["Setup script ran successfully.","初始化脚本执行成功。"],["Simulated Key Press in Browser","已在浏览器中模拟按键"],["The full developer experience.","完整的开发者体验。"],["To use the agent, please login","请先登录以使用智能体"],["Successfully imported project:","已成功导入项目："],["Allow executing this command?","是否允许执行此命令？"],["Undo changes up to this point","撤销截至此处的更改"],["Customization budget exceeded","自定义设置预算已超限"],["Split Conversation Vertically","垂直拆分会话"],["Agent always asks for review.","智能体始终会要求您进行审查。"],["Learn more about Full Machine","了解关于全机访问 (Full Machine) 的更多信息"],["Enable Sandbox Mode (Preview)","启用沙箱模式 (预览)"],["Browser Actuation Permissions","浏览器操作执行权限"],["when working in this project.","（在此项目中工作时）"],["Active Tasks & Conversations:","活跃任务与对话："],["Address CLs needing attention","处理需要关注的 CL"],["Agent terminated due to error","智能体因错误而终止"],["Best of N settings have moved","Best of N 设置已迁移"],["Code search is not available.","代码搜索不可用。"],["Error occurred during import.","导入过程中发生错误。"],["Failed to approve file access","批准文件访问失败"],["Failed to get all annotations","获取全部批注失败"],["Failed to rename conversation","重命名对话失败"],["Managed by Enterprise Gateway","由企业网关管理"],["No plugins match your search.","没有匹配搜索条件的插件。"],["Run in your current workspace","在当前工作区中运行"],["Sign in with business account","使用企业账户登录"],["Workspace URI query parameter","工作区 URI 查询参数"],["Workspace settings have moved","工作区设置已迁移"],["Create a Fig shared workspace","创建 Fig 共享工作区"],["Turn on a flag you don't have","开启尚未拥有的实验标志"],["All automations run as Flash.","所有自动化任务均以 Flash 模型运行。"],["New Conversation in Workspace","在工作区中新建会话"],["Failed to delete conversation","删除对话失败"],["Yes, I agree to help improve","是的，我同意协助改进"],["Steps to reproduce the issue","重现问题的步骤"],["Enter a prompt for the agent","为智能体输入提示词"],["Welcome to the Agent Manager","欢迎使用智能体管理器"],["No message prompts available","无消息提示可用"],["Allow List Terminal Commands","终端命令白名单"],["Auto-Expand Changes Overview","自动展开更改概览"],["Manage application settings.","管理应用设置。"],["Enter tool name or server...","输入工具名称或服务器..."],["Select Previous Conversation","选择上一个会话"],["(Optional, defaults to main)","（可选，默认为 main）"],["Antigravity Interactive HTML","Antigravity 交互式 HTML"],["Baseline model quota reached","已达基础模型配额上限"],["Canceled removal of bookmark","已取消移除书签"],["Concierge voice mode stopped","语音助手模式已停止"],["Create fork in new workspace","在新工作区创建分支对话"],["Dismiss service announcement","关闭服务公告"],["Error while editing notebook","编辑 Notebook 时出错"],["Error while reading notebook","读取 Notebook 时出错"],["Failed to start conversation","启动对话失败"],["Feature Environment Override","功能环境覆盖"],["GitHub Personal Access Token","GitHub 个人访问令牌 (PAT)"],["Loading Browser recording...","正在加载浏览器录屏..."],["Loading available plugins...","正在加载可用插件..."],["Loading installed plugins...","正在加载已安装插件..."],["Open extracted DOM in editor","在编辑器中打开提取的 DOM"],["Open in Trajectory Dashboard","在轨迹仪表中打开"],["Override feature environment","覆盖功能环境"],["Previous match (Shift+Enter)","上一个匹配项 (Shift+Enter)"],["Provide Google Cloud Project","提供 Google Cloud 项目"],["Read Browser Page in Browser","已在浏览器中读取页面"],["Restart Main Language Server","重启主语言服务器 (Language Server)"],["Review pending conversations","查看待处理的对话"],["Select category to search...","选择要搜索的类别..."],["Share Conversation (Preview)","分享对话（预览）"],["Sidebar grouped by workspace","侧边栏已按工作区分组"],["Stage and commit all changes","暂存并提交所有更改"],["This project was created for","此项目创建于："],["This will permanently delete","这将永久删除"],["Enter scheduled task name...","输入计划任务名称..."],["Failed to create automation.","创建自动化任务失败。"],["This page is going away soon","此页面即将下线"],["View archived in the sidebar","在侧边栏中查看已归档项"],["Allow running this command?","是否允许运行此命令？"],["Having trouble? Let us know","遇到问题？告诉我们"],["Sign in to use Antigravity!","登录以使用 Antigravity！"],["New Conversation in Project","在此项目中新建对话"],["Connect to Remote Workspace","连接到远程工作区"],["Toggle Environment Selector","切换环境选择器"],["No Custom Agents or Plugins","暂无自定义智能体或插件"],["Deny List Terminal Commands","终端命令黑名单"],["Learn more about Turbo Mode","了解关于极速模式 (Turbo Mode) 的更多信息"],["Automatic Check for Updates","自动检查更新"],["Automatic check for updates","自动检查更新"],["Enter Queues after the turn","Enter 回合结束后排队"],["Alt+Enter Sends immediately","Alt+Enter 立即发送"],["Browser settings have moved","浏览器设置已迁移"],["Add recent remote workspace","添加最近的远程工作区"],["Agent Market Search Results","智能体市场搜索结果"],["Configure Worktree Branches","配置工作树分支"],["Enter authorization code...","输入授权码..."],["Enter avatar URL (optional)","输入头像 URL（可选）"],["Failed to approve execution","批准执行失败"],["Failed to archive workspace","归档工作区失败"],["Failed to create workspace.","创建工作区失败。"],["Failed to fork conversation","分支对话失败"],["Failed to read file content","读取文件内容失败"],["Failed to stop conversation","停止对话失败"],["Finalizing transcription...","正在完成语音转写..."],["Generate personalized rules","生成个性化规则"],["Image preview not available","图片预览不可用"],["Max Tokens Until Compaction","触发压缩的最大 Token 数"],["No Javascript Result Output","无 JavaScript 结果输出"],["No build files are updated.","没有更新任何构建文件。"],["Search for conversations...","搜索对话..."],["Selecting Option in Browser","正在浏览器中选择选项"],["Skills Configuration Error:","技能配置错误："],["Terms of Service & Data Use","服务条款与数据使用"],["This may take a few minutes","这可能需要几分钟时间"],["Windows Subsystem for Linux","适用于 Linux 的 Windows 子系统 (WSL)"],["A new version is available.","有新版本可用。"],["Need help? Reach out in the","需要帮助？请联系"],["Paths the agent can modify.","智能体可以修改的文件或目录路径。"],["Read, draft, and edit docs.","读取、起草和编辑文档。"],["Failed to load conversation","加载对话失败"],["Security Notice & Data Use","安全告示与数据使用"],["Awaiting Authentication...","正在等待身份验证..."],["Customization token budget","自定义设置 Token 预算"],["Customization Token Budget","自定义设置 Token 预算"],["Copy conversation markdown","复制会话 Markdown"],["Loading knowledge items...","正在加载知识库..."],["Search MCP servers by name","按名称搜索 MCP 服务器"],["(Optional) Tell us more...","（可选）请补充更多信息..."],["Administrator access (UAC)","管理员权限 (UAC)"],["Browser tools (browser_.*)","浏览器工具 (browser_.*)"],["Continue with Google Cloud","使用 Google Cloud 继续"],["Failed to deny file access","拒绝文件访问失败"],["Failed to mark all as read","全部标记为已读失败"],["Failed to reject execution","拒绝执行失败"],["Model Summarization Failed","模型生成摘要失败"],["No conversations available","暂无可用对话"],["No matching plugins found.","未找到匹配的插件。"],["Not suitable for Best-of-N","不适合使用 Best-of-N"],["Open Trajectory Debug View","打开轨迹调试视图"],["Open with External Browser","使用外部浏览器打开"],["Plugin Bundles Coming Soon","插件组合包即将推出"],["Selected Option in Browser","已在浏览器中选择选项"],["Sidebar grouped by project","侧边栏已按项目分组"],["Time to First Token (TTFT)","首 Token 响应时间 (TTFT)"],["Can't open the Drive link?","无法打开 Google Drive 链接？"],["Don't enter corp passwords","请勿输入企业密码"],["Don't show this for 2 days","2 天内不再提示"],["No handlers configured for","尚未配置处理器："],["Google Developer Knowledge","Google 开发者知识库"],["No automations configured.","暂未配置自动化任务。"],["Open Conversation History","打开会话历史"],["Skills and Customizations","技能与自定义"],["Terminal execution policy","终端执行策略"],["Browser user profile path","浏览器用户配置文件路径"],["Secure mode enabled state","安全模式启用状态"],["Enable AI Credit Overages","启用 AI 额度超量使用"],["Browser User Profile Path","浏览器用户配置路径"],["Settings - Customizations","设置 - 个性化定制"],["Build With Google Plugins","基于 Google 插件构建"],["Project-Specific Settings","特定项目设置"],["e.g., https://example.com","例如：https://example.com"],["Five Hour Limit Remaining","剩余五小时限制"],["No MCP servers installed.","未安装 MCP 服务器。"],["Agent Hooks Configuration","智能体 Hook 配置"],["Archive This Conversation","归档此对话"],["Cancel Render Page Failed","取消页面渲染失败"],["Connecting to terminal...","正在连接终端..."],["Enable Recommended Skills","启用推荐技能"],["Enter bot name (optional)","输入机器人名称（可选）"],["Error fetching MCP prompt","获取 MCP 提示词出错"],["Execute JavaScript Policy","JavaScript 执行策略"],["Failed to create terminal","创建终端失败"],["Failed to create worktree","创建工作树失败"],["Failed to get annotations","获取批注失败"],["Failed to load some diffs","部分差异加载失败"],["Failed to load trajectory","加载轨迹失败"],["Fetching network requests","正在获取网络请求列表"],["Loading customizations...","正在加载自定义项..."],["Local Windows environment","本地 Windows 环境"],["MCP Authentication Error:","MCP 认证错误："],["No files or folders found","未找到文件或文件夹"],["Open Folder (Interactive)","打开文件夹（交互式）"],["Other (write your answer)","其他（自行输入答案）"],["Run in a new git worktree","在新的 Git 工作树中运行"],["Scrolling down in Browser","正在浏览器中向下滚动"],["Search past workspaces...","搜索历史工作区..."],["Searching Agent Market...","正在搜索智能体市场..."],["Extension (Visual Studio)","扩展 (Visual Studio)"],["All plugins run as Flash.","所有插件均以 Flash 模型运行。"],["Paths the agent can read.","智能体可以读取的文件或目录路径。"],["Select Antigravity Theme","选择反重力主题"],["No token data available.","没有 Token 使用数据。"],["Any relevant information","任何相关信息"],["Agent-driven development","智能体驱动开发"],["Recent Remote Workspaces","最近的远程工作区"],["MCP Configuration Error:","MCP 配置错误："],["Loading custom agents...","正在加载自定义智能体..."],["Enable Shell Integration","启用 Shell 集成"],["Your Plan: Google AI Pro","您的计划：Google AI Pro"],["Settings - Notifications","设置 - 通知设置"],["Learn more about Default","了解关于 Default 的更多信息"],["Commands Outside Sandbox","沙箱外执行命令"],["Add an MCP server above.","请在上方添加一个 MCP 服务器。"],["Open Conversation Picker","打开会话选择器"],["Select Next Conversation","选择下一个会话"],["No MCP servers installed","未安装 MCP 服务器"],["Collapse queued messages","折叠排队消息"],["Complete Onboarding Step","完成引导步骤"],["Conversation unavailable","对话不可用"],["Could not create project","无法创建项目"],["Discard unstaged changes","放弃未暂存的更改"],["Enlarged Mermaid diagram","放大的 Mermaid 图表"],["Error rendering playback","渲染回放出错"],["Failed to render diagram","渲染图表失败"],["Fetched network requests","已获取网络请求列表"],["Fetching network request","正在获取网络请求"],["Fit the whole trajectory","缩放适应完整轨迹"],["Include unstaged changes","包含未暂存的更改"],["Labs settings have moved","实验室设置已迁移"],["Loading Notebook View...","正在加载 Notebook 视图..."],["Next: Review Permissions","下一步：审核权限"],["No Invocation Associated","未关联调用记录"],["Notification Preferences","通知偏好设置"],["Open in Built-in Browser","在内置浏览器中打开"],["Open in external browser","在外部浏览器中打开"],["Rename This Conversation","重命名此对话"],["Resolving permissions...","正在解析权限..."],["Retrieving Browser Pages","正在获取浏览器页面列表"],["Scrolled down in Browser","已在浏览器中向下滚动"],["Search Recent Workspaces","搜索最近的工作区"],["Search customizations...","搜索自定义项..."],["Search past worktrees...","搜索历史工作树..."],["Standalone Conversations","独立对话"],["Turn Off Project Feature","关闭项目功能"],["Updated sidebar grouping","已更新侧边栏分组方式"],["View could not be opened","无法打开视图"],["Welcome to the Concierge","欢迎使用语音助手"],["view full search results","查看完整搜索结果"],["Default Cog Branch / Ref","默认 Cog 分支 / 引用"],["Enter automation name...","输入自动化任务名称..."],["Workspace Command Access","工作区命令访问权限"],["Authentication Required","需要身份验证"],["Search conversations...","搜索会话..."],["All tasks run as Flash.","所有任务均以 Flash 模型运行。"],["Stop Recording and Send","停止录音并发送"],["Open Workspace Selector","打开工作区选择器"],["Open Keyboard Shortcuts","打开键盘快捷键"],["← Previous Aux Pane Tab","← 上一个辅助面板标签页"],["Toggle Project Selector","切换项目选择器"],["Enable Terminal Sandbox","启用终端沙箱"],["Allow This Conversation","允许本次对话"],["Enable Demo Mode (Beta)","启用演示模式 (Beta)"],["Insufficient AI Credits","AI 额度不足"],["Open System Preferences","打开系统偏好设置"],["Customize Global Skills","自定义全局技能"],["Enable Sounds for Agent","启用智能体的声音通知"],["Marketplace Gallery URL","市场展示厅 URL"],["Settings - Autocomplete","设置 - Tab 键补全"],["Learn more about Custom","了解关于自定义 (Custom) 的更多信息"],["Add an MCP server above","请在上方添加一个 MCP 服务器。"],["Manage project folders,","管理项目文件夹，"],["Browser Actuation Rules","浏览器操作执行规则"],["Checking command status","正在检查命令状态"],["Copy error to clipboard","复制错误到剪贴板"],["Customizations & Skills","自定义与技能"],["Disabled in strict mode","在严格模式下已禁用"],["Enter directory path...","输入目录路径..."],["Extracting DOM elements","正在提取 DOM 元素"],["Failed to load comments","加载评论失败"],["Fetched network request","已获取网络请求"],["Generated image preview","生成图片预览"],["Google Cloud Project ID","Google Cloud 项目 ID"],["Hide Whitespace Changes","隐藏空白字符更改"],["Log in to use the agent","登录以使用智能体"],["Markdown Artifact Width","Markdown 产物宽度"],["Moving Mouse in Browser","正在浏览器中移动鼠标"],["No Prompt or Tools Data","无提示词或工具数据"],["No skills or rules yet.","暂无技能或规则。"],["Open in Antigravity IDE","在 Antigravity IDE 中打开"],["Plugin Operation Error:","插件操作错误："],["Refreshing Browser page","正在刷新浏览器页面"],["Resizing Browser window","正在调整浏览器窗口大小"],["Retrieved Browser Pages","已获取浏览器页面列表"],["Retrieving findings for","正在获取排查结果："],["Scrolling up in Browser","正在浏览器中向上滚动"],["Search file contents...","搜索文件内容..."],["Show Whitespace Changes","显示空白字符更改"],["Turn On Project Feature","开启项目功能"],["UI view does not exist.","界面视图不存在。"],["Unpin This Conversation","取消固定此对话"],["Updates to your sidebar","侧边栏更新说明"],["Use advanced SSO config","使用高级 SSO 配置"],["Why are you opting out?","您退出的原因是什么？"],["Workspace setup warning","工作区设置警告"],["Checking for updates...","正在检查更新..."],["Advanced Command Access","高级命令访问权限"],["Close tabs to the right","关闭右侧标签页"],["No resources added yet.","暂未添加资源。"],["Loading conversation...","正在加载对话..."],["Loading Antigravity...","反重力引擎已启动，正在摆脱地心引力..."],["Google Antigravity SDK","Google 反重力 SDK"],["Success, Continuing...","登录成功，正在跳转..."],["Unarchive Conversation","取消归档会话"],["Copy Conversation Name","复制会话名称"],["Token budget exceeded.","Token 预算已超限。"],["Toggle Developer Tools","切换开发者工具"],["Search for commands...","搜索命令..."],["Loading MCP servers...","正在加载 MCP 服务器..."],["No resources available","无可用的资源"],["Search for MCP servers","搜索 MCP 服务器"],["Command Auto Execution","命令自动执行"],["Highlight After Accept","接受后高亮"],["Auto-Open Edited Files","自动打开编辑过的文件"],["Show Selection Actions","显示选择操作"],["in less than a minute.","不到 1 分钟后刷新。"],["Toggle Voice Recording","切换录音"],["Artifact Review Policy","交付件审查策略"],["Weekly Limit Remaining","剩余每周限制"],["Go to General settings","前往通用设置"],["Authorization Required","需要授权"],["Checked command status","已检查命令状态"],["Copy this subtree JSON","复制此子树 JSON"],["Creating Cloud Project","正在创建云项目"],["Debug bundle uploaded!","调试信息包已上传！"],["Default Customizations","默认自定义项"],["Disable Text Selection","禁用文本选择"],["Expand queued messages","展开排队消息"],["Extracted DOM elements","已提取 DOM 元素"],["Failed to save project","保存项目失败"],["Full output written to","完整输出已写入"],["Hide Thumbnail Sidebar","隐藏缩略图侧边栏"],["Loading token usage...","正在加载 Token 用量..."],["Moved Mouse in Browser","已在浏览器中移动鼠标"],["No Invocation Metadata","无调用元数据"],["No cascade ID provided","未提供 Cascade ID"],["No more older messages","没有更早的消息了"],["Open in Remote Control","在远程控制中打开"],["Open side-by-side view","打开并排对比视图"],["Refreshed Browser page","已刷新浏览器页面"],["Resized Browser window","已调整浏览器窗口大小"],["Retrieved findings for","已获取排查结果："],["Scrolled up in Browser","已在浏览器中向上滚动"],["Show Thumbnail Sidebar","显示缩略图侧边栏"],["Side Pane UI Available","侧边面板界面可用"],["This cannot be undone.","此操作无法撤销。"],["This chat is archived.","此对话已归档。"],["User Intent Generation","用户意图生成"],["Waiting for user input","正在等待用户输入"],["Workspace URI Switcher","工作区 URI 切换器"],["ABFS Workspace (Alpha)","ABFS 工作区 (Alpha)"],["Default Cog Repository","默认 Cog 仓库"],["Input disabled because","输入已禁用，原因："],["Google Cloud Developer","Google Cloud 开发者套件"],["No conversations found","未找到会话"],["Something went wrong!","出错了！"],["Blocked on Your Input","等待您的输入"],["Google Privacy Policy","Google 隐私政策"],["Allow network access?","是否允许访问网络？"],["Yes, and always allow","是，且始终允许"],["Conversation archived","会话已归档"],["Downloading Update...","正在下载更新..."],["Token budget exceeded","Token 预算已超限"],["Show in File Explorer","在文件资源管理器中显示"],["Select a conversation","选择一个会话"],["Previous Aux Pane Tab","上一个辅助面板标签页"],["Installed MCP Servers","已安装的 MCP 服务器"],["Browser URL Allowlist","浏览器 URL 白名单"],["Notification Settings","通知设置"],["Configure Your Editor","配置您的编辑器"],["Troubleshooting guide","故障检测与排查指南"],["Suggestions in Editor","编辑器内建议"],["in less than a minute","不到 1 分钟后刷新"],["Actuation Permissions","操作执行权限"],["Toggle Model Selector","切换模型选择器"],["Start Voice Recording","开始录音"],["Toggle Auxiliary Pane","切换辅助面板"],["Claude and GPT models","Claude 和 GPT 模型"],["Enable Remote Control","启用远程控制"],["Queues after the turn","回合结束后排队"],["active conversations.","个活跃会话。"],["Binary file not shown","二进制文件未显示"],["Click to disable tool","点击禁用工具"],["Commit staged changes","提交暂存的更改"],["Complete verification","完成验证"],["Confirm Window Reload","确认重新加载窗口"],["Context Summarization","上下文摘要压缩"],["Copy Config File Path","复制配置文件路径"],["Copy raw string value","复制原始字符串值"],["Default Workspace VCS","默认工作区版本控制 (VCS)"],["Delete Data Directory","删除数据目录"],["Embedding Limitations","内嵌预览限制"],["Enable Text Selection","启用文本选择"],["Enter project name...","输入项目名称..."],["Failed to fetch diffs","获取差异失败"],["Failed to render math","渲染数学公式失败"],["Fallback Summary Used","已使用备用摘要"],["Go to Next Invocation","前往下一次调用"],["Go to global settings","前往全局设置"],["Loading trajectory...","正在加载轨迹..."],["Match Whole Word (ab)","全字匹配 (ab)"],["Mouse button released","已释放鼠标按键"],["No browser pages open","未打开任何浏览器页面"],["No environments found","未找到环境"],["No folders added yet.","尚未添加文件夹。"],["No plugins available.","暂无可用插件。"],["No previous worktrees","无历史工作树"],["Open in Notebook View","在 Notebook 视图中打开"],["Pin This Conversation","固定此对话"],["Pull request creation","创建拉取请求 (PR)"],["Run in a new worktree","在新工作树中运行"],["Sandbox Allow Network","允许沙盒访问网络"],["Target text in PDF...","PDF 中的目标文本..."],["Terminal: Add to Chat","终端：添加到对话"],["Toggle Overview Panel","切换概览面板"],["Trajectory Debug View","轨迹调试视图"],["Verification required","需要验证"],["View network requests","查看网络请求列表"],["At Mention Code Block","@ 引用代码块"],["Captured DOM tree for","已捕获 DOM 树："],["Delete ABFS Workspace","删除 ABFS 工作区"],["Select CitC workspace","选择 CitC 工作区"],["Downloading update...","正在下载更新..."],["Open project settings","打开项目设置"],["Regroup Google3 Chats","重新分组 Google3 对话"],["Search automations...","搜索自动化任务..."],["Workspace File Access","工作区文件访问权限"],["Something went wrong","出错了"],["Encountered an error","遇到错误"],["An error was thrown.","抛出了一个错误。"],["Failed to load image","加载图片失败"],["Continue with Google","通过 Google 继续"],["Yes, allow this time","是，仅允许本次执行"],["No conversations yet","暂无会话"],["No updates available","暂无可用更新"],["Archive Conversation","归档会话"],["Copy Conversation ID","复制会话 ID"],["Restore Conversation","恢复会话"],["Show in File Manager","在文件管理器中显示"],["Marketplace Item URL","市场项目 URL"],["Open Command Palette","打开命令面板"],["Collapse All Folders","折叠所有文件夹"],["Download Diagnostics","下载诊断信息"],["Find in conversation","在会话中查找"],["Agent Auto-Fix Lints","智能体自动修复 Lint"],["Knowledge Generation","知识生成"],["Enable Browser Tools","启用浏览器工具"],["Enable Notifications","启用通知"],["Enable Workspace API","启用工作区 API"],["Available AI credits","可用 AI 额度"],["Tab Gitignore Access","Tab 访问 .gitignore"],["Open Agent on Reload","重新加载时打开智能体"],["[Dev] GCP Project ID","[开发] GCP 项目 ID"],["Open Editor Settings","打开编辑器设置"],["Network Access Rules","网络访问规则"],["Stop Voice Recording","停止录音"],["active conversations","个活跃会话"],["active conversation.","个活跃会话。"],["Active Context Start","活跃上下文起点"],["Archive conversation","归档对话"],["Blocked, needs input","已阻塞，等待输入"],["Canceled bookmark of","已取消添加书签："],["Canceled creation of","已取消创建"],["Canceled deletion of","已取消删除"],["Capture console logs","捕获控制台日志"],["Click to enable tool","点击启用工具"],["Command Setup Script","命令初始化脚本"],["Comment on Selection","对选中内容添加评论"],["Conversation Sharing","对话分享"],["Copy section content","复制章节内容"],["Creating terminal...","正在创建终端..."],["Custom Context Menus","自定义右键菜单"],["Embedded web preview","内嵌网页预览"],["Enter device name...","输入设备名称..."],["Equalize Split Panes","均分拆分面板"],["Error Loading Models","加载模型出错"],["Extension Is Loading","扩展正在加载"],["Failed to stop agent","停止智能体失败"],["Loading worktrees...","正在加载工作树..."],["MCP Servers Disabled","MCP 服务器已禁用"],["Mouse button pressed","已按下鼠标按键"],["No Plugins Available","暂无可用插件"],["No changes to review","没有需要审核的更改"],["No plugins available","暂无可用插件"],["Notebook cell output","Notebook 单元格输出"],["Open Antigravity IDE","打开 Antigravity IDE"],["Open in Preview Pane","在预览面板中打开"],["Other Customizations","其他自定义项"],["Refresh skills paths","刷新技能路径"],["Scrolling in Browser","正在浏览器中滚动"],["Search Conversations","搜索对话"],["Search workspaces...","搜索工作区..."],["Select another model","选择其他模型"],["Select billing model","选择计费模式"],["Settings Unavailable","设置不可用"],["Setup script failed.","初始化脚本执行失败。"],["Show fewer resources","收起部分资源"],["Show settings anyway","仍然显示设置"],["Standalone Terminals","独立终端"],["Streaming Generation","流式生成中"],["Switch IDE Workspace","切换 IDE 工作区"],["Switch to Light Mode","切换到浅色模式"],["Tool Call Generation","工具调用生成"],["Untracked (Unstaged)","未跟踪（未暂存）"],["View child subagents","查看子智能体"],["View network request","查看网络请求"],["Workspace Web Access","工作区网页访问权限"],["Create a JJ worktree","创建 JJ 工作树"],["Folder doesn't exist","文件夹不存在"],["Advanced File Access","高级文件访问权限"],["Enter URL pattern...","输入 URL 匹配规则..."],["Enter plugin name...","输入插件名称..."],["Google Maps Platform","Google 地图平台"],["Pinned Conversations","置顶会话"],["Remote Control Issue","远程控制问题"],["Workspace + Worktree","工作区 + 工作区树"],["ui-plugin-navigation","UI 插件面板导航"],["Conversation History","对话历史"],["Loading Antigravity","反重力引擎已启动，正在摆脱地心引力..."],["No matching results","没有匹配的结果"],["Open in Code Search","在代码搜索中打开"],["Modern Web Guidance","现代 Web 指南"],["Allow write access?","是否允许写入权限？"],["No models available","没有可用的模型"],["e.g., /path/to/file","例如：/path/to/file"],["Get More AI Credits","获取更多 AI 额度"],["Copy Workspace Name","复制工作区名称"],["Update Available ->","更新可用 ->"],["Delete Conversation","删除对话"],["Other Conversations","其他对话"],["Open Project Picker","打开项目选择器"],["→ Next Aux Pane Tab","→ 下一个辅助面板标签页"],["Search for commands","搜索命令"],["Chat Model Metadata","聊天模型元数据"],["Model quota reached","模型配额已用完"],["an MCP server above","在上方添加一个 MCP 服务器"],["Network Permissions","网络权限"],["← Previous Pane Tab","← 上一个面板标签页"],["active conversation","个活跃会话"],["Agent security mode","智能体安全模式"],["Archive Environment","归档环境"],["Auto-proceeded with","已自动继续："],["Clicking in Browser","正在浏览器中点击"],["Code Change Summary","代码变更摘要"],["Command Spec (JSON)","命令规范 (JSON)"],["Configure the agent","配置智能体"],["Copy error messages","复制错误消息"],["Custom Agent Error:","自定义智能体错误："],["Dragging in Browser","正在浏览器中拖拽"],["Environment Actions","环境操作"],["Error while editing","编辑时出错"],["Error while viewing","查看时出错"],["Found references to","已找到引用："],["Installing Chat Bot","正在安装聊天机器人"],["Load older messages","加载更早的消息"],["Loading licenses...","正在加载许可证..."],["No active terminals","无活跃终端"],["No background tasks","无后台任务"],["No events recorded.","未记录任何事件。"],["No project selected","未选择项目"],["No projects created","尚未创建项目"],["No skills available","暂无可用技能"],["No workspaces found","未找到工作区"],["No workspaces open.","未打开任何工作区。"],["Number of responses","生成回复数量"],["Open in Preview Tab","在预览标签页中打开"],["Permission Settings","权限设置"],["Preview unavailable","预览不可用"],["Queue message Enter","排队发送消息 Enter"],["Refresh MCP servers","刷新 MCP 服务器"],["Reload this window.","重新加载此窗口。"],["Rename Conversation","重命名对话"],["Revert file changes","还原文件更改"],["Scrolled in Browser","已在浏览器中滚动"],["Select an option...","选择一个选项..."],["Select your license","选择您的许可证"],["Side-by-side layout","并排布局"],["Switch to Dark Mode","切换到深色模式"],["To provide feedback","提供反馈"],["Trajectory Metadata","轨迹元数据"],["Typing into Browser","正在浏览器中输入"],["Unable to load PDF:","无法加载 PDF："],["Use Global Settings","使用全局设置"],["User uploaded image","用户上传的图片"],["Workspace CL Status","工作区 CL 状态"],["Active Browser page","当前活跃浏览器页面"],["CitC Workspace Type","CitC 工作区类型"],["Extension (Eclipse)","扩展 (Eclipse)"],["Extension (VS Code)","扩展 (VS Code)"],["Follow the guide at","请参考指南："],["No plugin found for","未找到对应插件："],["Advanced Web Access","高级网络访问权限"],["Back to Automations","返回自动化列表"],["permissioned-github","GitHub 权限助手"],["Getting scripts...","正在获取脚本..."],["Allow read access?","是否允许读取权限？"],["Any error messages","任何错误信息"],["Create New Project","创建新项目"],["Unpin Conversation","取消置顶会话"],["Delete Permanently","彻底删除"],["New Scheduled Task","新建计划任务"],["Add Scheduled Task","添加计划任务"],["agy-customizations","定制系统指南"],["Select Environment","选择环境"],["Update Available →","更新可用 →"],["Downloading Update","正在下载更新"],["Downloading update","正在下载更新"],["Custom Keybindings","自定义按键绑定"],["Workspace and Chat","工作区与会话"],["Expand All Folders","展开所有文件夹"],["Loading metrics...","正在加载指标数据..."],["Steps to Reproduce","重现步骤"],["Keyboard Shortcuts","键盘快捷键"],["Skill Custom Paths","技能自定义路径"],["Chrome Binary Path","Chrome 程序路径"],["Settings - Account","设置 - 账户"],["Settings - Browser","设置 - 浏览器"],["Verbose agent chat","详细智能体输出"],["Sort Conversations","排序会话"],["Alphabetical (A-Z)","字母顺序 (A-Z)"],["Conversation Width","会话宽度"],["Plan Review Policy","计划审查策略"],["Global Permissions","全局权限"],["Account connected.","账户已连接。"],["Add inline comment","添加行内评论"],["Added to allowlist","已添加到允许列表"],["Agent Host Address","智能体主机地址"],["Capture screenshot","截取屏幕截图"],["Clear search (Esc)","清除搜索 (Esc)"],["Click to Open Docs","点击打开文档"],["Click to view more","点击查看更多"],["Clicked in Browser","已在浏览器中点击"],["Close Terminal Tab","关闭终端标签页"],["Code Context Items","代码上下文项"],["Collapse subagents","折叠子智能体"],["Configure Branches","配置分支"],["Configured servers","已配置的服务器"],["Copy email address","复制邮箱地址"],["Create with Prompt","通过提示词创建"],["Current parameter:","当前参数："],["Customize sections","自定义分区"],["Dragged in Browser","已在浏览器中拖拽"],["Environment Status","环境状态"],["Execution Metadata","执行元数据"],["Expand long string","展开长字符串"],["Failed to continue","继续执行失败"],["File Diff Comments","文件差异评论"],["Generator Metadata","生成器元数据"],["GitHub Permissions","GitHub 权限"],["Go Forward in Pane","在面板中前进"],["Group By Workspace","按工作区分组"],["Insert in Terminal","插入到终端"],["Loading plugins...","正在加载插件..."],["MCP Install Error:","MCP 安装错误："],["Migrate with Agent","使用智能体迁移"],["Next match (Enter)","下一个匹配项 (Enter)"],["No events recorded","未记录任何事件"],["Open in new window","在新窗口中打开"],["Permanently delete","永久删除"],["Unpin conversation","取消固定对话"],["Playback available","可回放"],["Python Coming Soon","Python 支持即将推出"],["Recommended Skills","推荐技能"],["Rendering playback","正在渲染回放"],["Save Configuration","保存配置"],["Search projects...","搜索项目..."],["Semantic searching","正在执行语义搜索"],["Send message Enter","发送消息 Enter"],["Show all resources","显示全部资源"],["Stop All Subagents","停止所有子智能体"],["System Instruction","系统指令 (System Instruction)"],["Terms and Privacy:","条款与隐私："],["Toggle File Viewer","切换文件查看器"],["Typed into Browser","已在浏览器中输入"],["Undo to this point","回退到此节点"],["View documentation","查看文档"],["Working Directory:","工作目录："],["Workspace Creation","工作区创建"],["Workspace Settings","工作区设置"],["Write a comment...","写下评论..."],["Add New Handler to","添加新处理器至"],["Searching Moma for","正在 Moma 中搜索"],["See our open roles","查看开放职位"],["Stream and control","流式传输与控制"],["Toggle Full Screen","切换全屏"],["Enter task name...","输入任务名称..."],["Proceed in Sandbox","在沙箱中继续"],["Project + Worktree","项目 + 工作区树"],["Toggle Fullscreen","切换全屏"],["Type to search...","输入以搜索..."],["Build with Google","基于 Google 构建"],["Build With Google","基于 Google 构建"],["Check for Updates","检查更新"],["Copy Project Name","复制项目名称"],["antigravity-guide","官方指南"],["all conversations","所有会话"],["Remove From Split","退出拆分"],["No workspaces yet","暂无工作区"],["New Editor Window","新建编辑器窗口"],["Next Aux Pane Tab","下一个辅助面板标签页"],["Loading models...","正在加载驱动模型..."],["Loading skills...","正在加载技能..."],["Advanced settings","高级设置"],["Expected behavior","预期行为"],["Choose your theme","选择您的主题"],["Shell Integration","Shell 集成"],["my-gcp-project-id","我的-GCP-项目-ID"],["Advanced Settings","高级设置"],["SELECTION ACTIONS","选择操作"],["Settings - Models","设置 - 驱动模型"],["Settings - Editor","设置 - 编辑器"],["Local Permissions","本地权限"],["File Access Rules","文件访问规则"],["Terminal Commands","终端命令"],["Automatic Updates","自动更新"],["Previous Pane Tab","上一个面板标签页"],["Add to Chat/Quote","添加到会话/引用"],["Sends immediately","立即发送"],["Proceed with Plan","按计划继续"],["Analyzing content","正在分析内容"],["Archive Workspace","归档工作区"],["Artifact Comments","产物评论"],["Authenticating...","正在验证身份..."],["Battle Mode Infos","对战模式信息"],["Best-of-N Started","Best-of-N 已开始"],["Click to copy URL","点击复制 URL"],["Confirm Selection","确认选择"],["Continue Response","继续生成回复"],["Conversation Name","对话名称"],["Conversation name","对话名称"],["Creating Chat Bot","正在创建聊天机器人"],["Current Workspace","当前工作区"],["Current workspace","当前工作区"],["Delete MCP Server","删除 MCP 服务器"],["Failed to proceed","继续操作失败"],["Fork Conversation","创建对话分支 (Fork)"],["JavaScript Result","JavaScript 执行结果"],["Loading events...","正在加载事件..."],["Loading plugin...","正在加载插件..."],["Managed by plugin","由插件管理"],["Manually Captured","手动捕获"],["Manually Rejected","手动拒绝"],["Move to New Group","移动到新分组"],["Name workspace...","命名工作区..."],["No matching flags","未找到匹配的标志"],["No results found.","未找到结果。"],["No skills loaded.","未加载任何技能。"],["Open Commit Graph","打开提交图谱"],["Permission Preset","权限预设"],["Previous question","上一个问题"],["Prompt too simple","提示词过于简单"],["Read URL content?","是否读取此 URL 内容？"],["Read URL rejected","已拒绝读取 URL"],["Remove from Group","从分组中移除"],["Requested changes","请求修改"],["Root Conversation","根对话"],["Semantic searched","已完成语义搜索"],["Sent to Concierge","已发送至语音助手"],["Taking Screenshot","正在截图"],["Toggle Thumbnails","切换缩略图"],["Turn Off Projects","关闭项目"],["Unfold code block","展开代码块"],["Unknown file edit","未知文件编辑"],["Unmount workspace","卸载工作区"],["View Stacked Diff","查看堆叠差异"],["Workspace Actions","工作区操作"],["image for comment","评论图片"],["Agents created by","创建者："],["Extension (Cider)","扩展 (Cider)"],["New Fig Workspace","新建 Fig 工作区"],["Searched Moma for","已在 Moma 中搜索"],["Select one of the","选择以下之一："],["This will archive","这将归档"],["Restart to Update","重启以完成更新"],["Pinned Chats Only","仅置顶会话"],["Search plugins...","搜索插件..."],["Setup Jetski Chat","设置 Jetski Chat"],["migrate-workflows","工作流迁移工具"],["No results found","未找到结果"],["Dart and Flutter","Dart 和 Flutter"],["Auth and Billing","身份验证与计费"],["General Feedback","常规反馈"],["Select folder(s)","选择文件夹"],["Project Settings","项目设置"],["Pin Conversation","置顶会话"],["teamwork-preview","团队协作预览"],["Pending messages","等待中的消息"],["Update Available","更新可用"],["Send feedback as","以该身份发送反馈"],["Open Marketplace","打开市场"],["Replace With New","替换为新会话"],["Reveal in Finder","在访达中显示"],["Select workspace","选择工作区"],["New Conversation","新建对话"],["Background Tasks","后台任务"],["New Terminal Tab","新建终端标签页"],["Defined subagent","已定义的子代理"],["Installed Skills","已安装技能"],["No active skills","暂无活跃技能"],["Enable Telemetry","启用遥测"],["Demo Mode (Beta)","演示模式 (Beta)"],["Purchase Credits","购买额度"],["Marketing Emails","营销邮件"],["Browser CDP Port","浏览器 CDP 端口"],["Terms of Service","服务条款"],["Provide Feedback","提供反馈"],["Settings - Agent","设置 - 智能体"],["Learn more about","了解更多关于"],["Tool Permissions","工具权限"],["and permissions.","与权限。"],["File Permissions","文件权限"],["Keep In Menu Bar","常驻系统菜单栏/托盘"],["Browser Settings","浏览器设置"],["to be installed.","。"],["Open File Search","打开文件搜索"],["Queue After Turn","回合结束后排队"],["Send Immediately","立即发送"],["Add to allowlist","添加到允许列表"],["Analyzed content","已分析内容"],["Arguments Schema","参数模式 (Schema)"],["Back to licenses","返回许可证列表"],["Canceled edit to","已取消编辑"],["Choose a license","选择许可证"],["Commit succeeded","提交成功"],["Conversation Log","对话记录"],["Copy description","复制描述"],["Copy schema JSON","复制 Schema JSON"],["Creating Fork...","正在创建分支..."],["Creating Sidecar","正在创建 Sidecar"],["Cumulative Total","累计总计"],["Debug (Disabled)","调试（已禁用）"],["Delete workspace","删除工作区"],["Document Answers","文档结果"],["Enable Best-of-2","启用 Best-of-2 对比"],["Enter Fullscreen","进入全屏"],["Expand subagents","展开子智能体"],["Failed to Commit","提交失败"],["Group By Project","按项目分组"],["Host Environment","宿主环境"],["Image attachment","图片附件"],["Inspected commit","已检查提交"],["License Required","需要许可证"],["Loading hooks...","正在加载 Hook..."],["Loading media...","正在加载媒体..."],["Manifest Changes","清单 (Manifest) 更改"],["Mark all as read","全部标为已读"],["New Agent Script","新建智能体脚本"],["Operating System","操作系统"],["Pin conversation","固定对话"],["Project Required","需要选择项目"],["Removed bookmark","已移除书签"],["Reset Onboarding","重置新手引导"],["Screen Recording","屏幕录制"],["Scroll to Bottom","滚动到底部"],["See more results","查看更多结果"],["Start Automation","启动自动化任务"],["Too many surveys","问卷过于频繁"],["Trajectory Stats","轨迹统计"],["Turn On Projects","开启项目"],["Unknown Notebook","未知 Notebook"],["Vetted (Preview)","已审验（预览）"],["Video attachment","视频附件"],["Authenticated as","已认证身份："],["Open in Critique","在 Critique 中打开"],["Open Antigravity","打开 Antigravity"],["Close other tabs","关闭其他标签页"],["Google Workspace","Google Workspace 办公套件"],["Send immediately","立即发送"],["Thought Process","思维过程"],["Action required","需要操作"],["Chrome DevTools","Chrome 开发者工具"],["Feature Request","功能建议"],["Display Options","显示选项"],["Search tasks...","搜索任务..."],["Enter task name","输入任务名称"],["Uninstalling...","正在卸载..."],["Scheduled Tasks","计划任务"],["Command Palette","命令面板"],["Toggle Aux Pane","切换辅助面板"],["Add MCP Servers","添加 MCP 服务器"],["Actual behavior","实际行为"],["Priority action","优先级操作"],["Asks for Review","请求审查"],["Always Proceeds","始终继续"],["Editor Settings","编辑器设置"],["Security Preset","安全预设"],["agent settings,","智能体设置，"],["global settings","全局设置"],["to be installed",""],["LAYOUT CONTROLS","布局控制"],["Solarized Light","Solarized Light 浅色"],["Five Hour Limit","五小时限制"],["Queued Messages","队列消息"],["→ Next Pane Tab","→ 下一个面板标签页"],["Inherit General","继承通用设置"],["Toggle Terminal","切换终端"],["Hide breakdowns","收起细目"],["Show breakdowns","显示细目"],["Amend succeeded","追加提交成功"],["Archive project","归档项目"],["Auto (detected)","自动（已检测）"],["Autonomous Mode","自主模式"],["Best-of-N Ended","Best-of-N 已结束"],["Collapse string","折叠字符串"],["Conversation ID","对话 ID"],["Created outline","已生成大纲"],["Debug (Enabled)","调试（已启用）"],["Delete Terminal","删除终端"],["Empty directory","空目录"],["Enable Overages","启用超额使用"],["Exit Fullscreen","退出全屏"],["Export Artifact","导出产物"],["Failed to Amend","追加提交失败"],["Failed to build","构建失败"],["Fold code block","折叠代码块"],["GitHub Policies","GitHub 策略"],["Go Back in Pane","在面板中后退"],["Initializing...","正在初始化..."],["Leave a comment","留下评论"],["List resources:","列出资源："],["Loading logs...","正在加载日志..."],["Match Case (Aa)","区分大小写 (Aa)"],["Mermaid diagram","Mermaid 图表"],["Modified files:","已修改文件："],["Mount Directory","挂载目录"],["Needs Attention","需要处理"],["No file changes","无文件更改"],["Open MCP Config","打开 MCP 配置"],["Open in Browser","在浏览器中打开"],["Open in New Tab","在新标签页中打开"],["Open in new tab","在新标签页中打开"],["Paste auth code","粘贴授权码"],["Paste code here","在此粘贴代码"],["Project options","项目选项"],["Queue message ⏎","排队发送消息 ⏎"],["Quote Selection","引用选中内容"],["Remote branches","远程分支"],["Search Projects","搜索项目"],["Search files...","搜索文件..."],["Search steps...","搜索步骤..."],["Section header:","章节标题："],["Select Worktree","选择工作树"],["Selected region","所选区域"],["Session Summary","会话摘要"],["Sidebar Updates","侧边栏更新"],["Start Extension","启动扩展"],["Start it again.","重新启动。"],["Took Screenshot","已截图"],["Tool Call Ready","工具调用就绪"],["Unused Capacity","剩余可用容量"],["View Split Diff","查看并排差异"],["Download Update","下载更新"],["Copy debug info","复制调试信息"],["Open in preview","在预览中打开"],["No items found","未找到项"],["Search by name","按名称搜索"],["Files Modified","文件已修改"],["Review Changes","评审更改"],["Data Agent Kit","数据智能体套件 (Data Agent Kit)"],["Stop Execution","停止执行"],["Stop Recording","停止录音"],["Downloading...","正在下载..."],["Mark as Unread","标记为未读"],["Mark as unread","标记为未读"],["Open in Editor","在编辑器中打开"],["Command Center","控制中心"],["Open Workspace","打开工作区"],["Toggle Sidebar","切换侧边栏"],["Recent actions","最近操作"],["Create Project","创建项目"],["Open Launchpad","打开启动台"],["Split Terminal","拆分终端"],["No MCP Servers","暂无 MCP 服务器"],["Agent Settings","智能体设置"],["Model Settings","模型设置"],["Ask every time","每次都询问"],["Allow Globally","全局允许"],["Customizations","个性化定制"],["Always Proceed","始终继续"],["Request Review","请求审查"],["customizations","个性化定制"],["CUSTOMIZATIONS","个性化定制"],["Auto Execution","自动执行"],["Not in Project","不在项目中"],["Inherit System","继承系统"],["Agent Behavior","智能体行为"],["Go To Projects","前往项目列表"],["e.g., npm test","例如：npm test"],["Delete Project","删除项目"],["Require Review","需要审查"],["Automatic 检查更新","自动检查更新"],["Automatic 檢查更新","自动检查更新"],["Remote Control","远程控制"],["Models & Usage","驱动模型与用量"],["Hide breakdown","收起细目"],["Show breakdown","显示细目"],["Add MCP Server","添加 MCP 服务器"],["Added (Staged)","已添加（已暂存）"],["All Workspaces","所有工作区"],["Auto (Preview)","自动（预览）"],["Branch Changes","分支更改"],["Cascade Config","Cascade 配置"],["Close (Escape)","关闭 (Esc)"],["Close Settings","关闭设置"],["Collapse Diffs","折叠差异视图"],["Context Window","上下文窗口"],["Conversation 1","对话 1"],["Conversation 2","对话 2"],["Conversation 3","对话 3"],["Copy workspace","复制工作区"],["Create a token","创建令牌"],["Delete Handler","删除处理器"],["Delete comment","删除评论"],["Error Details:","错误详情："],["Failed target:","失败目标："],["Failed to Push","推送失败"],["Failed to edit","编辑失败"],["Failed to read","读取失败"],["File not found","未找到文件"],["Files to edit:","待编辑文件："],["Inherit Editor","继承编辑器设置"],["Inline Actions","行内操作"],["Input required","需要输入"],["Issue creation","创建 Issue"],["Manage License","管理许可证"],["Maximize Width","最大化宽度"],["Merge Conflict","合并冲突"],["Minimize Width","最小化宽度"],["Modified Files","已修改文件"],["Open allowlist","打开允许列表"],["Open full view","打开完整视图"],["Previous match","上一个匹配项"],["Proceed Anyway","仍然继续"],["Proceeded with","已继续执行"],["Push succeeded","推送成功"],["Read resource:","读取资源："],["Refresh Skills","刷新技能"],["Run visibility","运行可见性"],["Scheduled Task","定时任务"],["Select License","选择许可证"],["Send message ⏎","发送消息 ⏎"],["Setup required","需要初始设置"],["Side Question:","旁路提问："],["Signing Out...","正在退出登录..."],["Skills & Rules","技能与规则"],["Stacked layout","堆叠布局"],["Staged Changes","已暂存的更改"],["Start Snapshot","开始快照"],["Stop execution","停止执行"],["Submit comment","提交评论"],["Task not found","未找到任务"],["Tool Execution","工具执行"],["Tool arguments","工具参数"],["Trajectory ID:","轨迹 ID："],["Unstage change","取消暂存更改"],["Workspace Name","工作区名称"],["for debugging.","用于调试。"],["CitC Workspace","CitC 工作区"],["Invalid embed:","无效内嵌内容："],["New Fig Share?","新建 Fig 共享？"],["Connect to WSL","连接到 WSL"],["Reopen Locally","在本地重新打开"],["Add Automation","添加自动化任务"],["Inherit Global","继承全局"],["New Automation","新建自动化任务"],["Other Projects","其他项目"],["Select Project","选择项目"],["for more help.","获取更多帮助。"],["Export as PDF","导出为 PDF"],["Editor Window","编辑器窗口"],["Toggle Editor","切换编辑器"],["Files Changed","文件已更改"],["Artifact Name","交付件名称"],["Error Details","错误详情"],["Open Settings","打开设置"],["Not Signed In","未登录"],["Good response","回答得好"],["Finalizing...","正在收尾..."],["Installing...","正在安装..."],["Send feedback","发送反馈"],["Choose folder","选择文件夹"],["Documentation","文档"],["Agent Manager","智能体管理器"],["Conversations","会话列表"],["Agent Details","智能体详细信息"],["Custom Agents","自定义智能体"],["Agent Decides","智能体决策"],["Review Policy","审查策略"],["Feedback Type","反馈类型"],["Workspace API","工作区 API"],["Model Credits","模型额度"],["Notifications","通知设置"],["Tab to Import","通过 Tab 快速导入"],["notifications","通知设置"],["NOTIFICATIONS","通知设置"],["Chat Settings","会话设置"],["Default Light","默认浅色"],["Inherits from","继承自 "],["Prevent Sleep","防止休眠"],["Google Chrome","Google Chrome"],["Gemini Models","Gemini 模型"],["Next Pane Tab","下一个面板标签页"],["Also includes","还包括"],["Excluded Step","已排除步骤"],["Access grants","权限授予"],["Add Hook Card","添加 Hook 卡片"],["Add Workspace","添加工作区"],["Agent can run","智能体可运行"],["All tools (*)","所有工具 (*)"],["Archived Only","仅已归档"],["Choose Region","选择区域"],["Cleared Count","已清理数量"],["Collapse idle","折叠空闲区间"],["Commented on:","评论于："],["Context Menus","右键菜单"],["Context usage","上下文用量"],["Copy response","复制回复"],["Copy thinking","复制思考过程"],["Empty message","空消息"],["File Comments","文件评论"],["File location","文件位置"],["Host Endpoint","主机端点"],["Image Answers","图片结果"],["Inline Widget","内联小部件"],["Invalid Media","无效媒体文件"],["Light preview","浅色预览"],["Manage Skills","管理技能"],["Manager Error","管理器错误"],["Maximize Pane","最大化面板"],["Move to Group","移动到分组"],["New hook name","新 Hook 名称"],["Next question","下一个问题"],["No groups yet","暂无分组"],["Not available","不可用"],["Not scheduled","未设排期"],["Organizations","组织"],["Other License","其他许可证"],["Page contents","页面内容"],["Pay as you go","按量付费"],["Previous Page","上一页"],["Process Error","进程错误"],["Pull requests","拉取请求 (PR)"],["Python Script","Python 脚本"],["Queue message","排队发送消息"],["Recent Events","最近事件"],["Refreshing...","正在刷新..."],["Reload Window","重新加载窗口"],["Render failed","渲染失败"],["Select branch","选择分支"],["Sign in again","重新登录"],["Stop Subagent","停止子智能体"],["Stopped after","已停止，耗时"],["Submitting...","正在提交..."],["Summarization","摘要生成"],["System Prompt","系统提示词 (System Prompt)"],["Table options","表格选项"],["Target Tools:","目标工具："],["Tool Call ID:","工具调用 ID："],["Trajectory ID","轨迹 ID"],["UI Extensions","界面扩展"],["UI extensions","界面扩展"],["United States","美国"],["Unknown error","未知错误"],["Update Anyway","仍然更新"],["Welcome back!","欢迎回来！"],["Workflow runs","工作流运行记录"],["Available for","可用于"],["Cog Workspace","Cog 工作区"],["Open in Cider","在 Cider 中打开"],["Switch to the","切换至"],["generative_ui","生成式交互界面"],["Copy Content","复制内容"],["Description:","描述："],["Recent Files","最近的文件"],["See Activity","查看活动"],["+ Add Folder","+ 添加文件夹"],["Bad response","回答得不好"],["New Worktree","新建工作区树"],["Record Audio","录制语音"],["Uninstalling","正在卸载"],["Mark as Read","标记为已读"],["Mark as read","标记为已读"],["Quick Search","快速搜索"],["Select Theme","选择主题"],["No chats yet","暂无聊天记录"],["Conversation","会话"],["Chat History","聊天历史"],["Show more...","显示更多..."],["Show less...","收起..."],["Create Agent","创建智能体"],["Delete Agent","删除智能体"],["No subagents","暂无子代理"],["Select Model","选择模型"],["Always Allow","总是允许"],["Refreshes in","刷新倒计时："],["Autocomplete","Tab 键补全"],["autocomplete","Tab 键补全"],["AUTOCOMPLETE","Tab 键补全"],["AI Shortcuts","AI 快捷键"],["Default Dark","默认深色"],["App Settings","应用设置"],["Full Machine","全机访问 (Full Machine)"],["Last Updated","最近更新"],["Execute URLs","执行 URL"],["Find in Pane","在面板中查找"],["One Dark Pro","One Dark Pro 深色"],["Weekly Limit","每周限制"],["Access rules","访问规则"],["Agent Script","智能体脚本"],["By step type","按步骤类型"],["Clear Search","清除搜索"],["Code snippet","代码片段"],["Collapse All","全部折叠"],["Confirm Undo","确认撤销"],["Console logs","控制台日志"],["Copied error","已复制错误信息"],["Copy project","复制项目"],["Custom Flags","自定义实验标志 (Flags)"],["Dark preview","深色预览"],["Debug Bundle","调试信息包"],["Delete Skill","删除技能"],["Denied Sites","已拒绝的站点"],["Download PDF","下载 PDF"],["Edit comment","编辑评论"],["End Snapshot","结束快照"],["Execution ID","执行 ID"],["Expand Diffs","展开差异视图"],["Fit to Width","适应宽度"],["Installed in","安装位置："],["Manage Hooks","管理 Hook"],["Mention Page","提及页面"],["More Actions","更多操作"],["More actions","更多操作"],["More options","更多选项"],["Multi-select","多选"],["New Terminal","新建终端"],["No documents","暂无文档"],["Open Preview","打开预览"],["Path copied!","路径已复制！"],["Product Skin","产品外观模式"],["Project Name","项目名称"],["Rename Group","重命名分组"],["Repositories","代码仓库"],["Resolving...","正在解析..."],["Restore Pane","还原面板"],["Same Project","同一项目"],["Save Comment","保存评论"],["Search flags","搜索实验标志"],["Searching...","正在搜索..."],["Send message","发送消息"],["Sender Agent","发送方智能体"],["Sent Message","已发送消息"],["Show details","显示详情"],["Side-by-Side","并排对比"],["Stage change","暂存更改"],["Step Details","步骤详情"],["Step Preview","步骤预览"],["Switch Roles","切换角色"],["Undo To Here","撤销至此处"],["Use Existing","使用现有项"],["Variant Name","变体名称"],["Viewing Diff","正在查看差异"],["Add Terminal","添加终端"],["Chat anyways","仍然继续对话"],["DO NOT share","请勿分享"],["Add Resource","添加资源"],["ui-extension","UI 侧边栏扩展开发"],["Open Editor","打开编辑器"],["Learn more.","了解更多。"],["Code Search","代码搜索"],["Needs input","需要输入"],["Description","描述"],["Install IDE","安装 IDE"],["to navigate","进行导航"],["New Project","新建项目"],["Quick Start","快速开始"],["Add Context","添加上下文"],["Downloading","正在下载"],["Uninstalled","已卸载"],["Updating...","正在更新..."],["Mark Unread","标记为未读"],["Marketplace","市场"],["Split Right","向右拆分"],["Open Folder","打开文件夹"],["In Progress","处理中"],["MCP Servers","MCP 服务器"],["Model Name:","模型名称："],["Token Usage","Token 使用量"],["Strict Mode","严格模式"],["Always Deny","总是拒绝"],["Keybindings","键位绑定"],["MODEL QUOTA","模型配额"],["SUGGESTIONS","建议"],["Tab to Jump","按 Tab 键实现快速跳转"],["File Access","设备文件访问权"],["Permissions","权限"],["Model Quota","模型配额"],["Light Theme","浅色主题"],["File Writes","文件写入"],["No Subtitle","无副标题"],["Danger Zone","危险区域"],["RECOMMENDED","推荐"],["Focus Input","聚焦输入框"],["File Picker","文件选择器"],["Tokyo Night","Tokyo Night 东京之夜"],["Application","应用设置"],["/ 1M tokens","/ 百万 Token"],["Accept Step","接受此步骤"],["Cancel Step","取消此步骤"],["Reject Step","拒绝此步骤"],["Add to Chat","添加到对话"],["Agent Edits","智能体编辑"],["App version","应用版本"],["Automations","自动化"],["Cascade ID:","Cascade ID："],["Check again","重新检查"],["Checking...","正在检查..."],["Copy output","复制输出"],["Creating...","正在创建..."],["Custom View","自定义视图"],["Decorations","装饰元素"],["Definition:","定义："],["Delete Hook","删除 Hook"],["Deleting...","正在删除..."],["Device Name","设备名称"],["Directories","目录"],["Enable Chat","启用聊天"],["First Token","首 Token (TTFT)"],["Fit to Page","适应页面"],["Forked from","分支自"],["Full access","完整访问权限"],["Generations","生成记录"],["Grand Total","总计"],["Included by","引入自"],["Last 7 days","最近 7 天"],["Last Prompt","最后一次提示词"],["Model Label","模型标签"],["Modified in","修改于"],["Navigate to","导航至"],["Only Unread","仅未读"],["Open Search","打开搜索"],["Open in Tab","在标签页中打开"],["Page title:","页面标题："],["Project ID:","项目 ID："],["Read access","读取权限"],["Removing...","正在移除..."],["Reset State","重置状态"],["Run command","运行命令"],["Skipping...","正在跳过..."],["Step Timing","步骤耗时"],["Termination","终止"],["Test failed","测试失败"],["Thinking...","正在思考..."],["Tool Output","工具输出"],["Uncommitted","未提交"],["Use the IDE","使用 IDE"],["User Intent","用户意图"],["Web Preview","网页预览"],["Add Handler","添加处理器"],["No matching","无匹配项"],["Open in Hub","在 Hub 中打开"],["Cancel Task","取消任务"],["Write Files","写入文件"],["Loading...","加载中..."],["Learn more","了解更多"],["Accept all","全部接受"],["Reject all","全部驳回"],["Welcome to","欢迎使用"],["Bug Report","缺陷报告"],["Add Folder","添加文件夹"],["No Project","无项目"],["Downloaded","已下载"],["Installing","正在安装"],["Workspaces","工作区列表"],["Split Down","向下拆分"],["Reset Zoom","重置缩放"],["New Window","新建窗口"],["View Usage","查看用量"],["Stop Agent","停止智能体"],["Automation","自动化"],["Models Tab","模型选项卡"],["Max Tokens","最大 Token 数"],["Always Ask","总是询问"],["Always run","始终运行"],["Allow Once","允许一次"],["Extensions","扩展"],["NAVIGATION","导航"],["AUTOMATION","自动化"],["AI Credits","AI 额度"],["Theme Mode","主题模式"],["Settings -","设置 - "],["Appearance","外观"],["Dark Theme","深色主题"],["Background","背景颜色"],["Foreground","前景颜色"],["File Reads","文件读取"],["Turbo Mode","极速模式 (Turbo Mode)"],["Date Added","添加日期"],["Go Forward","前进"],["Catppuccin","Catppuccin 猫咪"],["Your Plan:","您的计划:"],["Hide tools","收起工具"],["(Optional)","（可选）"],["(subagent)","（子智能体）"],["Actionable","可执行"],["Avatar URL","头像 URL"],["Bookmarked","已添加书签"],["Cascade ID","Cascade ID"],["Checkpoint","检查点"],["Compacting","正在压缩上下文"],["Copy Image","复制图片"],["Copy error","复制错误"],["Copy value","复制值"],["Create New","新建"],["Debug Mode","调试模式"],["Expand All","全部展开"],["Full Error","完整错误信息"],["Group name","分组名称"],["Hide Error","隐藏错误"],["Hide token","隐藏令牌"],["Image URL:","图片 URL："],["Invocation","调用 (Invocation)"],["Legal Help","法律帮助"],["Next match","下一个匹配项"],["No results","无结果"],["No uploads","暂无上传内容"],["Posting...","正在发布..."],["项目 options","项目选项"],["Queue Wait","排队等待耗时"],["Save Image","保存图片"],["Save Video","保存视频"],["Screenshot","屏幕截图"],["Select All","全选"],["Show Error","显示错误"],["Show token","显示令牌"],["Simplified","精简模式"],["Standalone","独立模式"],["To update:","更新方式："],["Tool Calls","工具调用"],["UI Actions","界面操作"],["UI Plugins","界面插件"],["Worked for","已工作"],["quick pick","快速选择"],["CitC Clone","CitC 克隆"],["Read Files","读取文件"],["automation","自动化"],["Try Again","重试"],["Configure","配置"],["Copy Path","复制路径"],["Artifacts","交付件列表(Artifacts)"],["Add MCP +","添加 MCP +"],["to select","进行选择"],["Installed","已安装"],["Uninstall","卸载"],["Mark Read","标记为已读"],["Workspace","工作区"],["workspace","工作区"],["Close Tab","关闭标签页"],["Show more","显示更多"],["Show less","收起"],["New Agent","新建智能体"],["Run Agent","运行智能体"],["Subagents","子代理"],["Knowledge","知识库"],["by Google","Google 官方"],["Ask first","先询问"],["Never run","永不运行"],["Telemetry","遥测数据"],["Tab Speed","Tab 建议速度"],["AI Credit","AI 额度"],["Settings-","设置-"],["MCP Tools","MCP 工具"],["Customize","自定义"],["Shortcuts","快捷键"],["Read URLs","读取 URL"],["Subtitles","副标题"],["One Light","One Light 浅色"],["Execution","执行"],["Automatic","自动"],["Your Plan","您的计划"],["Adding...","正在添加..."],["Agent can","智能体可以"],["Alt text:","替代文本："],["Analyzing","正在分析"],["Best of N","Best of N 择优"],["Capturing","正在捕获"],["Concierge","语音助手 (Concierge)"],["Copy Link","复制链接"],["Copy code","复制代码"],["Copy link","复制链接"],["Developer","开发者"],["Documents","文档"],["Duration:","耗时："],["Emphasize","强调"],["Empty log","日志为空"],["Error ID:","错误 ID："],["Executing","正在执行"],["Exploring","正在探索"],["In a rush","赶时间"],["Instances","实例"],["Location:","位置："],["MCP Tool:","MCP 工具："],["Model URL","模型 URL"],["New Group","新建分组"],["Next Page","下一页"],["Not Found","未找到"],["Open Diff","打开差异视图"],["Open File","打开文件"],["Read page","读取页面"],["Recording","正在录制"],["Sandboxed","沙盒运行"],["Saving...","正在保存..."],["Scheduled","已排期"],["Search...","搜索..."],["See Plans","查看套餐方案"],["Select...","请选择..."],["Step Type","步骤类型"],["Task Logs","任务日志"],["Terminals","终端"],["Tool Defs","工具定义"],["Triggered","已触发"],["User Data","用户数据"],["User Type","用户类型"],["View Diff","查看差异 (Diff)"],["View File","查看文件"],["View Logs","查看日志"],["View Page","查看页面"],["Wednesday","星期三"],["Worktrees","工作树 (Worktrees)"],["Agent ID:","智能体 ID："],["Completed","已完成"],["Extension","扩展"],["Resources","资源"],["Projects","项目列表"],["Terminal","终端"],["Artifact","交付件(Artifact)"],["Comments","注释/评论"],["Thinking","思考中"],["Overview","概览"],["Previous","上一步"],["Show all","显示全部"],["Commands","命令"],["Schedule","触发计划"],["See less","收起"],["Mentions","提及"],["Complete","已完成"],["Archived","已归档"],["grill-me","访谈对齐"],["Download","下载"],["Updating","正在更新"],["Settings","设置"],["Feedback","反馈"],["Minimize","最小化"],["Maximize","最大化"],["Zoom Out","缩小"],["Disabled","已禁用"],["Advanced","高级"],["Security","安全"],["Sign out","退出登录"],["Group By","分组方式"],["Worktree","工作区树 (Worktree)"],["Contrast","对比度"],["Activity","活动"],["Analyzed","已分析"],["Approval","审批"],["Approve?","是否批准？"],["Bot Name","机器人名称"],["Built In","内置"],["Building","正在构建"],["By phase","按阶段"],["Canceled","已取消"],["Clicking","正在点击"],["Command:","命令："],["Contents","内容"],["Continue","继续"],["Creating","正在创建"],["Deleting","正在删除"],["Details:","详情："],["Excluded","已排除"],["Executed","已执行"],["Explored","已探索"],["External","外部"],["Features","功能特性"],["For Turn","单轮耗时"],["License:","许可证："],["MCP tool","MCP 工具"],["Matcher:","匹配器："],["Metadata","元数据"],["Modified","已修改"],["Nickname","昵称"],["Notebook","Notebook"],["Open IDE","打开 IDE"],["Payload:","载荷 (Payload)："],["Pressing","正在按下"],["Read URL","读取 URL"],["Rejected","已拒绝"],["Saturday","星期六"],["Scrolled","已滚动"],["Send Now","立即发送"],["Starting","正在启动"],["Thursday","星期四"],["Timeline","时间轴"],["Timeout:","超时："],["Wait for","等待"],["See more","展开更多"],["Confirm","确认"],["Refresh","刷新"],["Dismiss","忽略"],["Proceed","继续"],["Approve","批准"],["Go Back","后退"],["Browser","浏览器"],["Output:","输出："],["Context","上下文"],["Science","科学研究"],["Sign In","登录"],["Version","版本"],["Archive","归档"],["Actions","操作"],["See all","显示全部"],["Install","安装"],["Updated","已更新"],["Plugins","插件"],["History","历史记录"],["License","许可证"],["Account","账户"],["Zoom In","放大"],["Running","运行中"],["Stopped","已停止"],["General","通用常规"],["ACCOUNT","账户"],["Upgrade","升级"],["minutes","分钟"],["HISTORY","历史记录"],["account","账户"],["Demoted","已降级"],["Default","默认 (Default)"],["Project","项目"],["Dracula","Dracula 德古拉"],["Monokai","Monokai"],["(empty)","（空）"],["Backoff","退避重试"],["By kind","按类别"],["Clicked","已点击"],["Copied!","已复制！"],["Created","已创建"],["Decline","拒绝"],["Discard","放弃更改"],["Editing","正在编辑"],["Errored","执行出错"],["Forward","前进"],["Mention","提及 (@)"],["New Tab","新建标签页"],["Plugin:","插件："],["Pressed","已按下"],["Reading","正在读取"],["Regular","常规"],["Renamed","已重命名"],["Skipped","已跳过"],["Source:","来源："],["Sources","来源"],["Stacked","堆叠对比"],["Status:","状态："],["Tokens:","Token："],["Tuesday","星期二"],["Unknown","未知"],["Updater","更新程序"],["Uploads","上传内容"],["Windows","Windows"],["Working","工作中"],["to exit","退出"],["Back to","返回"],["See our","查看我们的"],["Add MCP","添加 MCP"],["Blocked","已阻止"],["Display","显示"],["Folders","文件夹"],["Options","选项"],["Preview","预览"],["Restore","恢复"],["Cancel","取消"],["Delete","删除"],["Rename","重命名"],["Submit","提交"],["Filter","筛选"],["Reject","驳回"],["Accept","接受"],["Copied","已复制"],["Search","搜索"],["Editor","编辑器"],["Prompt","提示词"],["Review","评审"],["System","系统默认"],["Finish","完成"],["around","在"],["Update","更新"],["Recent","最近项"],["Window","窗口"],["Agents","智能体列表"],["Skills","技能预设"],["Active","活跃"],["Tokens","Token 消耗"],["GLOBAL","全局应用"],["Models","驱动模型"],["minute","分钟"],["Global","全局应用"],["models","驱动模型"],["MODELS","驱动模型"],["editor","编辑器"],["EDITOR","编辑器"],["Manage","管理"],["Snooze","暂停提点"],["Preset","主题预设"],["Accent","强调颜色"],["Custom","自定义 (Custom)"],["Status","状态"],["Narrow","窄"],["Strong","高对比 (Strong)"],["Access","访问权限"],["Asking","正在提问"],["Browse","浏览"],["Cache:","缓存："],["对话 Log","对话记录"],["Edited","已编辑"],["Error:","错误："],["Errors","错误"],["Europe","欧洲"],["Event:","事件："],["Events","事件"],["Friday","星期五"],["Got it","知道了"],["Hourly","每小时"],["Images","图片"],["Input:","输入："],["Intent","意图"],["Issues","Issues"],["Italic","斜体"],["Monday","星期一"],["Reload","重新加载"],["Run JS","运行 JS"],["Saved!","已保存！"],["Strict","严格模式"],["Sunday","星期日"],["Tested","已测试"],["Title:","标题："],["Total:","总计："],["Unused","未使用"],["Uptime","运行时长"],["Weekly","每周"],["at ref","位于分支/引用"],["Notice","注意"],["plugin","插件管理与开发"],["Close","关闭"],["Files","文件"],["Clear","清除"],["+ New","+ 新建"],["Unpin","取消置顶"],["Daily","每天"],["Media","媒体"],["learn","经验反思"],["boost","深度增效"],["Local","本地"],["Split","拆分"],["Setup","初始设置"],["About","关于"],["Agent","智能体"],["Model","模型"],["Theme","主题"],["hours","小时"],["+ Add","+ 添加"],["agent","智能体"],["AGENT","智能体"],["Start","开始"],["Light","浅色"],["Email","电子邮箱"],["Allow","允许"],["Queue","排队入列"],["Rules","规则"],["Amend","追加提交 (Amend)"],["Asked","已提问"],["Built","已构建"],["Bytes","字节"],["Go to","前往"],["Lanes","泳道视图"],["Paste","粘贴"],["Quote","引用"],["Renew","续期"],["Retry","重试"],["Saved","已保存"],["Sent!","已发送！"],["Share","分享"],["Skill","技能"],["Steps","步骤"],["Turbo","极速 (Turbo)"],["Usage","使用量"],["Video","视频"],["Visit","访问"],["Goals","目标"],["Hooks","钩子"],["Links","链接"],["9222","9222"],["Save","保存"],["Edit","编辑"],["Back","返回"],["Skip","跳过"],["Copy","复制"],["File","文件"],["Next","下一步"],["Undo","撤销"],["Name","名称"],["goal","目标"],["Stop","停止"],["Send","发送"],["Help","帮助"],["View","视图"],["Idle","空闲"],["Deny","拒绝"],["hour","小时"],["Fast","快"],["Slow","慢"],["days","天"],["Dark","深色"],["Open","打开"],["None","无"],["Wide","宽"],["Plan","计划"],["Exec","执行"],["Find","查找"],["Hold","按住"],["Labs","实验室 (Labs)"],["Logs","日志"],["Mode","模式"],["More","更多"],["Play","播放"],["Post","发布"],["Skin","界面外观"],["Step","步骤"],["Zoom","缩放"],["Docs","文档"],["Redo","重做"],["App","应用设置"],["Pin","置顶"],["New","新建"],["btw","顺便提问"],["Tab","Tab 键补全"],["day","天"],["Off","关闭"],["Ask","询问"],["Add","添加"],["All","全部"],["Cut","剪切"],["End","结束"],["ID:","ID："],["Inv","调用"],["Ran","已运行"],["Run","运行"],["On","开启"]];
    const translatedValues = new WeakMap();

    // 轻量级安全隔离：跳过脚本、样式、代码块(pre/code)
    const SKIP_TAGS = ['SCRIPT', 'STYLE', 'PRE', 'CODE'];

    // 代码、富文本输入框及对话内容隔离选择器：排除 Lexical 输入框、用户消息、AI 响应正文、思考内容、代码块、终端及文件路径
    const CODE_ISOLATION_SELECTOR = 'pre, code, .monaco-editor, .cm-editor, .cm-line, [contenteditable="true"], [contenteditable="plaintext-only"], [contenteditable=""], [data-lexical-editor], .terminal, .xterm, .code-line, .code-block, .line-content, [aria-label="File Viewer"], [data-file-uri], [data-uri], [class*="diffEditor"], .token, .hljs, [class*="mtk"], .font-mono, [data-quotable-inline="true"], .context-scope-mention, [data-testid="file-title-name"], [data-testid="entity-pill"], [data-project-card="true"], [data-testid="conversation-row-sidebar"] span.truncate, [translate="no"], .notranslate, .md-divider-spacing, .cursor-edit, [data-testid="user-input-step"] [data-quotable="true"], [data-testid="user-input-step"] .whitespace-pre-wrap, [data-testid="planner-response-text"], [data-testid="thinking-collapsible-trigger"] + div, [data-testid="thinking-collapsible-trigger"] ~ div';

    function isCodeOrEditor(node) {
        try {
            if (!node) return false;
            let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
            if (!el) return false;
            if (el.isContentEditable) return true;
            const active = document.activeElement;
            if (active && (active.isContentEditable || active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || (active.getAttribute && active.getAttribute('data-lexical-editor') === 'true')) && (active === el || active.contains(el))) {
                return true;
            }
            while (el) {
                if (el.isContentEditable) return true;
                if (typeof el.closest === 'function' && el.closest(CODE_ISOLATION_SELECTOR)) {
                    return true;
                }
                const root = typeof el.getRootNode === 'function' ? el.getRootNode() : null;
                el = (root && root.host) ? root.host : null;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    function norm(s) {
        if (!s) return '';
        return s.replace(/\s+/g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/…/g, '...').trim();
    }

    function translateWithShortcut(val) {
        if (!val) return null;
        const match = val.match(/^(.+?)\s*\((Ctrl|Cmd|Alt|Shift|⌘|⌥|⇧|⌃)\+?([^)]*)\)$/i);
        if (match) {
            const prefix = match[1].trim();
            const normPref = norm(prefix);
            const lowerPref = normPref.toLowerCase();
            let transPref = null;
            if (map.has(normPref)) {
                transPref = map.get(normPref);
            } else if (lowerMap.has(lowerPref)) {
                transPref = lowerMap.get(lowerPref);
            }
            if (transPref) {
                return transPref + " (" + match[2] + (match[3] ? "+" + match[3] : "") + ")";
            }
        }
        return null;
    }

    function isFilePathOrUri(s) {
        if (!s) return false;
        return /^[a-zA-Z]:[\\/]/.test(s) || /^[\\/~].*[\\/]/.test(s) || /[\\/]SKILL\.md/i.test(s) || /[\\/]\.gemini[\\/]/i.test(s) || /^file:\/\//i.test(s);
    }

    function translateNode(node) {
        try {
            if (!node) return;
            
            if (node.nodeType === Node.ELEMENT_NODE) {
                const tag = node.tagName.toUpperCase();
                if (SKIP_TAGS.includes(tag)) return;

                // 翻译属性：placeholder, title, aria-label
                for (const attr of ['placeholder', 'title', 'aria-label']) {
                    const v = node.getAttribute(attr);
                    if (v) {
                        const t = norm(v);
                        if (isFilePathOrUri(t)) continue;
                        const shortcutTrans = translateWithShortcut(t);
                        if (shortcutTrans) node.setAttribute(attr, shortcutTrans);
                        else if (map.has(t)) node.setAttribute(attr, map.get(t));
                        else if (lowerMap.has(t.toLowerCase())) node.setAttribute(attr, lowerMap.get(t.toLowerCase()));
                        else if (/^Show\s+(\d+)\s+more/i.test(t)) {
                            const trans = t.replace(/^Show\s+(\d+)\s+more(\s+(results?|items?|commands?|options?))?(\.\.\.|…)?$/i, (m, num, p2, type) => {
                                if (type) {
                                    if (/result/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個結果...") : ("显示另外 " + num + " 个结果...");
                                    if (/command/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個命令...") : ("显示另外 " + num + " 个命令...");
                                    if (/item/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個項目...") : ("显示另外 " + num + " 个项目...");
                                    if (/option/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個選項...") : ("显示另外 " + num + " 个选项...");
                                }
                                return USE_TW ? ("顯示另外 " + num + " 個...") : ("显示另外 " + num + " 个...");
                            });
                            node.setAttribute(attr, trans);
                        } else if (/^Show\s+(\d+)\s+breakdown(s)?$/i.test(t)) {
                            const trans = t.replace(/^Show\s+(\d+)\s+breakdown(s)?$/i, (m, num) => {
                                return USE_TW ? ("顯示 " + num + " 項明細") : ("显示 " + num + " 项细目");
                            });
                            node.setAttribute(attr, trans);
                        } else if (/^Hide\s+breakdown(s)?$/i.test(t)) {
                            node.setAttribute(attr, USE_TW ? "收起明細" : "收起细目");
                        } else if (/^See\s+(\d+)\s+more(?:\s+(.+))?$/i.test(t)) {
                            const trans = t.replace(/^See\s+(\d+)\s+more(?:\s+(.+))?$/i, (m, num) => {
                                return USE_TW ? ("展開另外 " + num + " 項") : ("展开另外 " + num + " 项");
                            });
                            node.setAttribute(attr, trans);
                        } else if (/^See\s+more\s+in\s+(.+)$/i.test(t)) {
                            const trans = t.replace(/^See\s+more\s+in\s+(.+)$/i, (m, name) => {
                                return USE_TW ? ("在 " + name + " 中展開更多") : ("在 " + name + " 中展开更多");
                            });
                            node.setAttribute(attr, trans);
                        } else if (/^(?:(Permanently delete)\s+)?(.+?)\s+including\s+(\d+)\s+active conversations?([.。])?$/i.test(t)) {
                            const trans = t.replace(/^(?:(Permanently delete)\s+)?(.+?)\s+including\s+(\d+)\s+active conversations?([.。])?$/i, (match, del, name, count, dot) => {
                                const delPrefix = del ? (USE_TW ? "永久刪除 " : "永久删除 ") : "";
                                const suffix = dot ? "。" : "";
                                return delPrefix + name + (USE_TW ? ("（包含 " + count + " 個活躍對話）") : ("（包含 " + count + " 个活跃会话）")) + suffix;
                            });
                            node.setAttribute(attr, trans);
                        }
                    }
                }

                if (isCodeOrEditor(node)) return;
                if (node.isContentEditable) return;
                if (node.classList && (node.classList.contains('monaco-editor') || node.classList.contains('terminal') || node.classList.contains('xterm'))) return;

                // 处理 FastPick / 列表底部的 "Show <N> more..." 复合节点
                const elText = node.textContent ? node.textContent.trim() : '';
                if (/^Show\s+\d+\s+more(?:\.\.\.|…)?$/i.test(elText)) {
                    const textChildren = Array.from(node.childNodes).filter(c => c.nodeType === Node.TEXT_NODE);
                    if (textChildren.length >= 2) {
                        for (const tc of textChildren) {
                            const v = tc.nodeValue;
                            if (v === 'Show ' || norm(v) === 'Show') {
                                tc.nodeValue = USE_TW ? '顯示另外 ' : '显示另外 ';
                                translatedValues.set(tc, tc.nodeValue);
                            } else if (v === ' more...' || v === ' more…' || norm(v) === 'more...') {
                                tc.nodeValue = USE_TW ? ' 個...' : ' 个...';
                                translatedValues.set(tc, tc.nodeValue);
                            }
                        }
                    } else if (textChildren.length === 1) {
                        const m = elText.match(/^Show\s+(\d+)\s+more(?:\.\.\.|…)?$/i);
                        if (m) {
                            textChildren[0].nodeValue = USE_TW ? ('顯示另外 ' + m[1] + ' 個...') : ('显示另外 ' + m[1] + ' 个...');
                            translatedValues.set(textChildren[0], textChildren[0].nodeValue);
                        }
                    }
                }

                if (node.shadowRoot) translateNode(node.shadowRoot);
                for (const child of node.childNodes) translateNode(child);

            } else if (node.nodeType === Node.TEXT_NODE) {
                if (isCodeOrEditor(node)) return;

                let originalVal = node.nodeValue;
                if (!originalVal || originalVal.trim().length < 1) return;

                // 处理 FastPick / 列表底部由于 React 节点拆分导致的 "Show ", num, " more..." 分段文本
                const parentText = node.parentElement && node.parentElement.textContent ? node.parentElement.textContent.trim() : '';
                if (isFilePathOrUri(originalVal.trim()) || isFilePathOrUri(parentText)) return;
                if (parentText && (
                    /^(?:Show|显示另外|顯示另外)\s+\d+\s+(?:more|个|個)(?:\.\.\.|…)?$/i.test(parentText) ||
                    (node.parentElement.getAttribute && node.parentElement.getAttribute('value')?.startsWith('fastpick-show-more:'))
                )) {
                    if (originalVal === 'Show ' || norm(originalVal) === 'Show') {
                        node.nodeValue = USE_TW ? '顯示另外 ' : '显示另外 ';
                        translatedValues.set(node, node.nodeValue);
                        return;
                    }
                    if (originalVal === ' more...' || originalVal === ' more…' || norm(originalVal) === 'more...') {
                        node.nodeValue = USE_TW ? ' 個...' : ' 个...';
                        translatedValues.set(node, node.nodeValue);
                        return;
                    }
                }

                // 核心：如果是 skeleton 骨架占位文本，强制打上不翻译标记，防止自动翻译（例如 Google Translate 网页翻译）将其翻译为“装。资料。包装。资料。”
                if (originalVal.toLowerCase().includes('pack.info')) {
                    const parent = node.parentElement;
                    if (parent) {
                        if (parent.getAttribute('translate') !== 'no') {
                            parent.setAttribute('translate', 'no');
                        }
                        try {
                            if (!parent.classList.contains('notranslate')) {
                                parent.classList.add('notranslate');
                            }
                        } catch (e) {}
                    }
                    return;
                }

                if (translatedValues.get(node) === originalVal) return;

                let newVal = originalVal;
                const valNorm = norm(originalVal);
                const valLower = valNorm.toLowerCase();
                
                // 1. 精确匹配（含大小写自动纠正与快捷键检测）
                const shortcutTrans = translateWithShortcut(valNorm);
                if (shortcutTrans) {
                    newVal = shortcutTrans;
                } else if (map.has(valNorm)) {
                    newVal = map.get(valNorm);
                } else if (lowerMap.has(valLower)) {
                    newVal = lowerMap.get(valLower);
                } else if (/^Send message\s+(Enter|⏎|\u23ce)$/i.test(valNorm)) {
                    newVal = (USE_TW ? "發送消息 " : "发送消息 ") + valNorm.replace(/^Send message\s+/i, '');
                } else if (/^Queue message\s+(Enter|⏎|\u23ce)$/i.test(valNorm)) {
                    newVal = (USE_TW ? "排隊發送消息 " : "排队发送消息 ") + valNorm.replace(/^Queue message\s+/i, '');
                } else if (/^to have the agent generate a plan\.?$/i.test(valNorm)) {
                    newVal = USE_TW ? "讓代理生成計劃。" : "让智能体生成计划。";
                } else if ((valNorm === 'Type' || valNorm === 'and select') && node.parentElement && (
                    (typeof node.parentElement.closest === 'function' && node.parentElement.closest('[data-testid="plan-command-fyi-alert"]')) ||
                    (node.parentElement.textContent && node.parentElement.textContent.includes('generate a plan'))
                )) {
                    if (valNorm === 'Type') newVal = USE_TW ? "輸入" : "输入";
                    else if (valNorm === 'and select') newVal = USE_TW ? "並選取" : "并选择";
                } else if (valNorm === 'and' && node.parentElement && (
                    node.parentElement.textContent && (
                        node.parentElement.textContent.includes('Privacy Policy') ||
                        node.parentElement.textContent.includes('Terms of Service') ||
                        node.parentElement.textContent.includes('隐私政策') ||
                        node.parentElement.textContent.includes('隱私權政策')
                    )
                )) {
                    newVal = USE_TW ? "以及" : "以及";
                } else if ((valNorm === 'Search conversations with' || valNorm === 'in the top left.') && node.parentElement && (
                    node.parentElement.textContent && node.parentElement.textContent.includes('in the top left')
                )) {
                    newVal = (valNorm === 'Search conversations with')
                        ? (USE_TW ? "使用左上角的" : "可通过左上角的")
                        : (USE_TW ? "搜尋對話。" : "搜索对话。");
                } else if ((valNorm === 'View archived in the sidebar' || valNorm === 'menu)') && node.parentElement && (
                    node.parentElement.textContent && node.parentElement.textContent.includes('View archived in the sidebar')
                )) {
                    newVal = (valNorm === 'View archived in the sidebar')
                        ? (USE_TW ? "已歸檔對話可在側邊欄" : "已归档对话可在侧边栏")
                        : (USE_TW ? "選單中查看。" : "菜单中查看。");
                } else if ((valNorm === 'For help, visit' || valNorm === 'or join the' || valNorm === 'chat space') && node.parentElement && (
                    node.parentElement.textContent && node.parentElement.textContent.includes('chat space')
                )) {
                    if (valNorm === 'For help, visit') newVal = USE_TW ? "如需協助，請造訪" : "如需帮助，请访问";
                    else if (valNorm === 'or join the') newVal = USE_TW ? "或加入" : "或加入";
                    else if (valNorm === 'chat space') newVal = USE_TW ? "聊天空間" : "聊天空间";
                } else if (/^The AlloyDB for PostgreSQL remote/i.test(valNorm)) {
                    newVal = USE_TW ? "AlloyDB for PostgreSQL 遠端 MCP 伺服器可讓您存取並執行 AlloyDB 工具，用於管理 AlloyDB 叢集及執行個體、管理使用者，以及建立和復原資料備份。" : "AlloyDB for PostgreSQL 远程 MCP 服务器可让您访问并运行 AlloyDB 工具，用于管理 AlloyDB 集群及实例、管理用户，以及创建和恢复数据备份。";
                } else if (/^The Cloud SQL remote/i.test(valNorm)) {
                    newVal = USE_TW ? "Cloud SQL 遠端 MCP 伺服器可讓您存取並執行 Cloud SQL 工具，用於管理 Cloud SQL 執行個體、管理使用者、建立和復原資料備份及資料庫維運。" : "Cloud SQL 远程 MCP 服务器可让您访问并运行 Cloud SQL 工具，用于管理 Cloud SQL 实例、管理用户、创建和恢复数据备份及数据库运维。";
                } else if (/^The Spanner remote/i.test(valNorm)) {
                    newVal = USE_TW ? "Spanner 遠端 MCP 伺服器可讓您從 AI 開發環境中存取並執行 Spanner 工具，以建立、管理和查詢分散式資料庫資源。" : "Spanner 远程 MCP 服务器可让您从 AI 开发环境中访问并运行 Spanner 工具，以创建、管理和查询分布式数据库资源。";
                } else if (/^Ask questions.s*Get answers./i.test(valNorm) || /PostHog data/i.test(valNorm)) {
                    newVal = USE_TW ? "提問，即得答案。該 MCP 是供您的程式設計代理呼叫的伺服器。用英語提出問題，它會針對您的 PostHog 資料執行查詢，結果將直接呈現在您的編輯器中。" : "提问，即得答案。该 MCP 是供您的编程智能体调用的服务器。用英语提出问题，它会针对您的 PostHog 数据运行查询，结果将直接呈现在您的编辑器中。";
                } else if (/^The GKE remote MCP server/i.test(valNorm)) {
                    newVal = USE_TW ? "GKE 遠端 MCP 伺服器提供對 GKE Kubernetes 資源的讀寫存取權限。允許 AI 代理檢查並監控您的執行環境。" : "GKE 远程 MCP 服务器提供对 GKE Kubernetes 资源的读写权限。允许 AI 智能体检查并监控您的运行环境。";
                } else if (/^Cloud CLI MCP Server/i.test(valNorm)) {
                    newVal = USE_TW ? "Cloud CLI MCP 伺服器提供在遠端沙箱環境中執行 gcloud 與 bq CLI 指令的工具集。" : "Cloud CLI MCP 服务器提供在远程沙箱环境中运行 gcloud 与 bq CLI 命令的工具集。";
                } else if (/^The Apigee API hub remote MCP server/i.test(valNorm)) {
                    newVal = USE_TW ? "Apigee API hub 遠端 MCP 伺服器可讓您管理註冊在 Apigee API hub 中的 API、版本、規格、操作、部署、屬性、外部 API 以及相依性。" : "Apigee API hub 远程 MCP 服务器可让您管理注册在 Apigee API hub 中的 API、版本、规范、操作、部署、属性、外部 API 以及依赖项。";
                } else if (/^The Google Home Developer MCP server/i.test(valNorm)) {
                    newVal = USE_TW ? "Google Home Developer MCP 伺服器支援檢索 Google Home 文件、OpenThread 與 Matter 規格文件。" : "Google Home Developer MCP 服务器支持检索 Google Home 文档、OpenThread 与 Matter 规范文档。";
                } else if (/^The Cloud Quotas MCP server/i.test(valNorm)) {
                    newVal = USE_TW ? "Cloud Quotas MCP 伺服器支援檢視配額分配、申請提升配額以及管理 Quota Adjuster 自動調整設定。" : "Cloud Quotas MCP 服务器支持查看配额分配、申请提升配额以及管理 Quota Adjuster 自动调整配置。";
                } else if (/^Build, edit, deploy, and manage full-stack web apps with Lovable/i.test(valNorm)) {
                    newVal = USE_TW ? "使用自然語言，藉助 AI 應用程式建構工具 Lovable 建構、編輯、部署和管理全端 Web 應用程式。該 MCP 伺服器將您的 AI 用戶端連接至 Lovable，允許您的 AI 代理直接在偏好的編輯器或助手內互動、建立和管理 Lovable 專案。" : "使用自然语言，借助 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。该 MCP 服务器将您的 AI 客户端连接至 Lovable，允许您的 AI 智能体直接在偏好的编辑器或助手中交互、创建和管理 Lovable 项目。";
                } else if (/^Build applications with the Gemini Interactions API and Live API/i.test(valNorm)) {
                    newVal = USE_TW ? "使用 Gemini Interactions API 與 Live API 建構應用程式，涵蓋文字生成、多輪對話、串流、函式呼叫、託管代理及即時音訊與視訊互動。" : "使用 Gemini Interactions API 和 Live API 构建应用，涵盖文本生成、多轮对话、流式传输、函数调用、托管智能体以及实时音视频交互。";
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) days?, (\d+) hours?\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) days?, (\d+) hours?\.?$/i, (match, d, h) => {
                        return USE_TW ? (d + " 天 " + h + " 小時後更新") : (d + " 天 " + h + " 小时后刷新");
                    });
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) hours?, (\d+) minutes?\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) hours?, (\d+) minutes?\.?$/i, (match, h, m) => {
                        return USE_TW ? (h + " 小時 " + m + " 分鐘後更新") : (h + " 小时 " + m + " 分钟后刷新");
                    });
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) days?\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) days?\.?$/i, (match, d) => {
                        return USE_TW ? (d + " 天後更新") : (d + " 天后刷新");
                    });
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) hours?\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) hours?\.?$/i, (match, h) => {
                        return USE_TW ? (h + " 小時後更新") : (h + " 小时后刷新");
                    });
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) minutes?\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in (\d+) minutes?\.?$/i, (match, m) => {
                        return USE_TW ? (m + " 分鐘後更新") : (m + " 分钟后刷新");
                    });
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in less than a minute\.?$/i.test(valNorm)) {
                    newVal = USE_TW ? "不到 1 分鐘後更新" : "不到 1 分钟后刷新";
                } else if (/^(?:Refreshes|You have (?:used (?:some|all) of|reached) your (?:weekly|5-hour) limit, it will fully refresh) in a few seconds\.?$/i.test(valNorm)) {
                    newVal = USE_TW ? "幾秒後更新" : "几秒后刷新";
                } else if (/^Learn more about$/i.test(valNorm)) {
                    newVal = USE_TW ? "瞭解更多關於" : "了解更多关于";
                } else if (/^Learn more about (.+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Learn more about (.+)$/i, (match, p) => {
                        let translatedPreset = p;
                        const pLow = p.toLowerCase();
                        if (pLow === 'default' || pLow.includes('默认') || pLow.includes('預設')) translatedPreset = USE_TW ? "預設 (Default)" : "默认 (Default)";
                        else if (pLow === 'inherit global' || pLow.includes('继承全局') || pLow.includes('繼承全域')) translatedPreset = USE_TW ? "繼承全域 (Inherit Global)" : "继承全局 (Inherit Global)";
                        else if (pLow === 'full machine' || pLow.includes('全机') || pLow.includes('全機')) translatedPreset = USE_TW ? "全機存取 (Full Machine)" : "全机访问 (Full Machine)";
                        else if (pLow === 'turbo mode' || pLow.includes('极速') || pLow.includes('極速')) translatedPreset = USE_TW ? "極速模式 (Turbo Mode)" : "极速模式 (Turbo Mode)";
                        else if (pLow === 'custom' || pLow.includes('自定义') || pLow.includes('自訂')) translatedPreset = USE_TW ? "自訂 (Custom)" : "自定义 (Custom)";
                        return USE_TW ? ("瞭解更多關於 " + translatedPreset + " 的詳細資訊") : ("了解更多关于 " + translatedPreset + " 的信息");
                    });
                } else if (/^Yes, and always allow '(.+)' in this project$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Yes, and always allow '(.+)' in this project$/i, (match, cmd) => {
                        return USE_TW ? ("是，且在此專案中一律允許執行 '" + cmd + "'") : ("是，且在此项目中始终允许运行 '" + cmd + "'");
                    });
                } else if (/^Yes, and always allow '(.+)'$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Yes, and always allow '(.+)'$/i, (match, cmd) => {
                        return USE_TW ? ("是，且一律允許執行 '" + cmd + "'") : ("是，且始终允许运行 '" + cmd + "'");
                    });
                } else if (/^(\d+) tools? enabled$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+) tools? enabled$/i, (match, num) => {
                        return USE_TW ? (num + " 個工具已啟用") : (num + " 个工具已启用");
                    });
                } else if (/^Show\s+(\d+)\s+more(\s+(results?|items?|commands?|options?))?(\.\.\.|…)?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Show\s+(\d+)\s+more(\s+(results?|items?|commands?|options?))?(\.\.\.|…)?$/i, (match, num, p2, type) => {
                        if (type) {
                            if (/result/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個結果...") : ("显示另外 " + num + " 个结果...");
                            if (/command/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個指令...") : ("显示另外 " + num + " 个命令...");
                            if (/item/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個項目...") : ("显示另外 " + num + " 个项目...");
                            if (/option/i.test(type)) return USE_TW ? ("顯示另外 " + num + " 個選項...") : ("显示另外 " + num + " 个选项...");
                        }
                        return USE_TW ? ("顯示另外 " + num + " 個...") : ("显示另外 " + num + " 个...");
                    });
                } else if (/^Show\s+(\d+)\s+breakdown(s)?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Show\s+(\d+)\s+breakdown(s)?$/i, (match, num) => {
                        return USE_TW ? ("顯示 " + num + " 項明細") : ("显示 " + num + " 项细目");
                    });
                } else if (/^Hide\s+breakdown(s)?$/i.test(valNorm)) {
                    newVal = USE_TW ? "收起明細" : "收起细目";
                } else if (/^Show\s+breakdown(s)?$/i.test(valNorm)) {
                    newVal = USE_TW ? "顯示明細" : "显示细目";
                } else if (/^Hide\s+tools$/i.test(valNorm)) {
                    newVal = USE_TW ? "收起工具" : "收起工具";
                } else if (/^(\d+)\s+tools$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)\s+tools$/i, (match, num) => {
                        return num + (USE_TW ? " 個工具" : " 个工具");
                    });
                } else if (/^(\d+)\s+tools?\s+excluded$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)\s+tools?\s+excluded$/i, (match, num) => {
                        return num + (USE_TW ? " 個工具已排除" : " 个工具已排除");
                    });
                } else if (/^Exceeded the rules token budget\.\s+Full rule content\s+\(([\d,]+)\s+tokens?\)\s+was replaced with a lightweight file-path pointer in context\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Exceeded the rules token budget\.\s+Full rule content\s+\(([\d,]+)\s+tokens?\)\s+was replaced with a lightweight file-path pointer in context\.$/i, (match, num) => {
                        return USE_TW ? ("已超出規則 Token 預算。完整規則內容 (" + num + " 個 Token) 已在上下文中替換為輕量級檔案路徑指標。") : ("已超出规则 Token 预算。完整规则内容 (" + num + " 个 Token) 已在上下文中替换为轻量级文件路径指针。");
                    });
                } else if (/^All tools in this MCP server\s+\(([\d,]+)\s+tokens?\)\s+exceeded the customization budget and were excluded from context\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^All tools in this MCP server\s+\(([\d,]+)\s+tokens?\)\s+exceeded the customization budget and were excluded from context\.$/i, (match, num) => {
                        return USE_TW ? ("此 MCP 伺服器中的所有工具 (" + num + " 個 Token) 均已超出自訂項預算，並已從上下文中排除。") : ("此 MCP 服务器中的所有工具 (" + num + " 个 Token) 均已超出自定义项预算，并已从上下文中排除。");
                    });
                } else if (/^(\d+)\s+tools?\s+in this MCP server\s+\(([\d,]+)\s+tokens?\)\s+exceeded the customization budget and were excluded from context\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)\s+tools?\s+in this MCP server\s+\(([\d,]+)\s+tokens?\)\s+exceeded the customization budget and were excluded from context\.$/i, (match, tCount, num) => {
                        return USE_TW ? ("此 MCP 伺服器中有 " + tCount + " 個工具 (" + num + " 個 Token) 超出自訂項預算，並已從上下文中排除。") : ("此 MCP 服务器中有 " + tCount + " 个工具 (" + num + " 个 Token) 超出自定义项预算，并已从上下文中排除。");
                    });
                } else if (/^Exceeded the customization token budget\s+\(([\d,]+)\s+tokens?\)\s+and was excluded from context\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Exceeded the customization token budget\s+\(([\d,]+)\s+tokens?\)\s+and was excluded from context\.$/i, (match, num) => {
                        return USE_TW ? ("超出自訂項 Token 預算 (" + num + " 個 Token)，已從上下文中排除。") : ("超出自定义项 Token 预算 (" + num + " 个 Token)，已从上下文中排除。");
                    });
                } else if (/^See all\s*\((\d+)\)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^See all\s*\((\d+)\)$/i, (match, num) => {
                        return USE_TW ? ("顯示全部 (" + num + ")") : ("显示全部 (" + num + ")");
                    });
                } else if (/^(?:\+\s*)?See\s+(\d+)\s+more(?:\s+(.+))?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:\+\s*)?See\s+(\d+)\s+more(?:\s+(.+))?$/i, (match, num) => {
                        const hasPlus = /^\+/.test(valNorm);
                        return (hasPlus ? "+ " : "") + (USE_TW ? ("展開另外 " + num + " 項") : ("展开另外 " + num + " 项"));
                    });
                } else if (/^Available AI Credits: (\d+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Available AI Credits: (\d+)$/i, (match, num) => {
                        return USE_TW ? ("可用 AI 額度: " + num) : ("可用 AI 额度: " + num);
                    });
                } else if (/^Version\s+([\d\.]+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Version\s+([\d\.]+)$/i, (match, v) => {
                        return "版本 " + v;
                    });
                } else if (/^(\d+)(s|m|h|d|w|mo|yr)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)(s|m|h|d|w|mo|yr)$/i, (match, num, unit) => {
                        const unitLower = unit.toLowerCase();
                        let unitStr = "";
                        if (unitLower === "s") unitStr = USE_TW ? "秒前" : "秒前";
                        else if (unitLower === "m") unitStr = USE_TW ? "分鐘前" : "分钟前";
                        else if (unitLower === "h") unitStr = USE_TW ? "小時前" : "小时前";
                        else if (unitLower === "d") unitStr = USE_TW ? "天前" : "天前";
                        else if (unitLower === "w") unitStr = USE_TW ? "週前" : "周前";
                        else if (unitLower === "mo") unitStr = USE_TW ? "個月前" : "个月前";
                        else if (unitLower === "yr") unitStr = USE_TW ? "年前" : "年前";
                        return num + unitStr;
                    });
                } else if (/^just now$/i.test(valNorm)) {
                    newVal = USE_TW ? "剛剛" : "刚刚";
                } else if (/^(\d+)(s|m|h|d|w|mo|yr)\s+ago$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)(s|m|h|d|w|mo|yr)\s+ago$/i, (match, num, unit) => {
                        const unitLower = unit.toLowerCase();
                        let unitStr = "";
                        if (unitLower === "s") unitStr = USE_TW ? "秒前" : "秒前";
                        else if (unitLower === "m") unitStr = USE_TW ? "分鐘前" : "分钟前";
                        else if (unitLower === "h") unitStr = USE_TW ? "小時前" : "小时前";
                        else if (unitLower === "d") unitStr = USE_TW ? "天前" : "天前";
                        else if (unitLower === "w") unitStr = USE_TW ? "週前" : "周前";
                        else if (unitLower === "mo") unitStr = USE_TW ? "個月前" : "个月前";
                        else if (unitLower === "yr") unitStr = USE_TW ? "年前" : "年前";
                        return num + unitStr;
                    });
                } else if (/^(.+?): context deadline exceeded$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(.+?): context deadline exceeded$/i, (match, prefix) => {
                        return prefix + (USE_TW ? ": 要求逾時 (context deadline exceeded)" : ": 请求超时 (context deadline exceeded)");
                    });
                } else if (/^(.+?): i\/o timeout$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(.+?): i\/o timeout$/i, (match, prefix) => {
                        return prefix + (USE_TW ? ": I/O 逾時 (i/o timeout)" : ": I/O 超时 (i/o timeout)");
                    });
                } else if (/^Your plan's baseline quota will refresh on (.+?)\.?\s*To continue using this model now, enable AI Credit overages\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Your plan's baseline quota will refresh on (.+?)\.?\s*To continue using this model now, enable AI Credit overages\.?$/i, (match, when) => {
                        return USE_TW ? ("您方案的基準配額將於 " + when + " 刷新。如需立即繼續使用此模型，請啟用 AI 點數超額使用。") : ("您方案的基础配额将于 " + when + " 刷新。如需立即继续使用此模型，请启用 AI 额度超量使用。");
                    });
                } else if (/^You have hit your weekly limit, it refreshes in (.+?)\. If on a supported paid plan, you can use AI credits in the interim or upgrade to a higher tier\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^You have hit your weekly limit, it refreshes in (.+?)\. If on a supported paid plan, you can use AI credits in the interim or upgrade to a higher tier\.$/i, (match, when) => {
                        return USE_TW ? ("您已達到每週額度限制，將於 " + when + " 刷新。若您使用受支援的付費方案，可在此期間使用 AI 點數，或升級至更高層級。") : ("您已达到每周额度限制，将于 " + when + " 刷新。若您使用受支持的付费计划，可在此期间使用 AI 额度，或升级至更高层级。");
                    });
                } else if (/^You have hit your weekly limit, the (\d+)-hour limit does not currently apply\. Your weekly limit will fully refresh in (.+?)\.$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^You have hit your weekly limit, the (\d+)-hour limit does not currently apply\. Your weekly limit will fully refresh in (.+?)\.$/i, (match, h, when) => {
                        return USE_TW ? ("您已達到每週額度限制，" + h + " 小時限制目前不適用。您的每週額度限制將於 " + when + " 完全更新。") : ("您已达到每周额度限制，" + h + " 小时限制目前不适用。您的每周额度限制将于 " + when + " 完全刷新。");
                    });
                } else if (/^(Rules|Skills|Mcp Tools): ([\d,]+) tokens$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(Rules|Skills|Mcp Tools): ([\d,]+) tokens$/i, (match, kind, num) => {
                        const kindMap = { "Rules": USE_TW ? "規則" : "规则", "Skills": "技能", "Mcp Tools": "MCP 工具" };
                        return (kindMap[kind] || kind) + "：" + num + " Token";
                    });
                } else if (/^Are you sure you want to delete (the |this )?project (.+?)\??$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Are you sure you want to delete (the |this )?project (.+?)\??$/i, (match, article, name) => {
                        return USE_TW ? ("您確定要刪除專案 " + name + " 嗎？") : ("您确定要删除项目 " + name + " 吗？");
                    });
                } else if (/^(?:(Permanently delete)\s+)?(.+?)\s+including\s+(\d+)\s+active conversations?([.。])?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(?:(Permanently delete)\s+)?(.+?)\s+including\s+(\d+)\s+active conversations?([.。])?$/i, (match, del, name, count, dot) => {
                        const delPrefix = del ? (USE_TW ? "永久刪除 " : "永久删除 ") : "";
                        const suffix = dot ? "。" : "";
                        return delPrefix + name + (USE_TW ? ("（包含 " + count + " 個活躍對話）") : ("（包含 " + count + " 个活跃会话）")) + suffix;
                    });
                } else if (/^including\s+(\d+)\s+active conversations?([.。])?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^including\s+(\d+)\s+active conversations?([.。])?$/i, (match, count, dot) => {
                        const suffix = dot ? "。" : "";
                        return (USE_TW ? ("包含 " + count + " 個活躍對話") : ("包含 " + count + " 个活跃会话")) + suffix;
                    });
                } else if (/^(\d+)\s+active conversations?([.。])?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(\d+)\s+active conversations?([.。])?$/i, (match, count, dot) => {
                        const suffix = dot ? "。" : "";
                        return (USE_TW ? (count + " 個活躍對話") : (count + " 个活跃会话")) + suffix;
                    });
                } else if (/^The (.+?) remote MCP server lets you access and run (.+?) tools to (.+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^The (.+?) remote MCP server lets you access and run (.+?) tools to (.+)$/i, (match, name, tools, action) => {
                        return name + (USE_TW ? " 遠端 MCP 伺服器可讓您存取並執行 " : " 远程 MCP 服务器可让您访问并运行 ") + tools + (USE_TW ? " 工具以進行管理與操作。" : " 工具以进行管理与操作。");
                    });
                } else if (/^The (.+?) remote MCP server lets you manage (.+) resources\.?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^The (.+?) remote MCP server lets you manage (.+) resources\.?$/i, (match, name, res) => {
                        return name + (USE_TW ? " 遠端 MCP 伺服器可讓您管理 " : " 远程 MCP 服务器可让您管理 ") + res + (USE_TW ? " 資源。" : " 资源。");
                    });
                } else if (/^The (.+?) remote MCP server (allows you to|lets you) (.+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^The (.+?) remote MCP server (allows you to|lets you) (.+)$/i, (match, name, verb, rest) => {
                        let text = rest;
                        text = text.replace(/enroll projects/gi, USE_TW ? "註冊專案" : "注册项目")
                                   .replace(/generate audit and scope reports/gi, USE_TW ? "產生稽核與範圍報告" : "生成审计与范围报告")
                                   .replace(/check resource enrollment statuses/gi, USE_TW ? "檢查資源註冊狀態" : "检查资源注册状态")
                                   .replace(/in the (.+?) region/gi, (m, r) => (USE_TW ? "在 " + r + " 區域" : "在 " + r + " 区域"));
                        return name + (USE_TW ? " 遠端 MCP 伺服器允許您 " : " 远程 MCP 服务器允许您 ") + text;
                    });
                } else if (/^Send feedback as(\s+(.+))?$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^Send feedback as(\s+(.+))?$/i, (match, p1, email) => {
                        if (email) {
                            return "以 " + email + (USE_TW ? " 身分傳送意見回饋" : " 身份发送反馈");
                        }
                        return USE_TW ? "以此身分傳送意見回饋：" : "以如下身份发送反馈：";
                    });
                } else if (/^(Thought|Thinking|Worked) for\s+(.+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^(Thought|Thinking|Worked) for\s+(.+)$/i, (match, verb, dur) => {
                        const vZh = /^Thought/i.test(verb) ? "已思考 " : (/^Thinking/i.test(verb) ? "正在思考 " : "已工作 ");
                        const dZh = dur.trim().replace(/(\d+)\s*h(?:ours?|r)?/gi, USE_TW ? "$1 小時" : "$1 小时").replace(/(\d+)\s*m(?:inutes?|in)?/gi, USE_TW ? "$1 分鐘" : "$1 分钟").replace(/(\d+)\s*s(?:econds?|ec)?/gi, "$1 秒");
                        return vZh + dZh;
                    });
                } else if (/^No more older messages,\s*showing\s+(\d+)\s+of\s+(\d+)$/i.test(valNorm)) {
                    newVal = valNorm.replace(/^No more older messages,\s*showing\s+(\d+)\s+of\s+(\d+)$/i, (match, a, b) => {
                        return USE_TW ? ("沒有更多歷史訊息，目前顯示 " + a + " / " + b + " 則") : ("没有更多历史消息，当前显示 " + a + " / " + b + " 条");
                    });
                } else if (/^(?:(Exploring|Explored|Editing|Edited|Running|Ran)\s+)?(\d+)\s+(files?|folders?|searches?|commands?|tasks?|pages?|browsers?|images?|actions?|artifacts?)(?:,\s*(?:(Exploring|Explored|Editing|Edited|Running|Ran)\s+)?(\d+)\s+(files?|folders?|searches?|commands?|tasks?|pages?|browsers?|images?|actions?|artifacts?))*$/i.test(valNorm)) {
                    const verbMap = USE_TW
                        ? { exploring: '正在探索', explored: '已探索', editing: '正在編輯', edited: '已編輯', running: '正在執行', ran: '已執行' }
                        : { exploring: '正在探索', explored: '已探索', editing: '正在编辑', edited: '已编辑', running: '正在运行', ran: '已运行' };
                    const nounMap = USE_TW
                        ? { file: '個檔案', files: '個檔案', folder: '個資料夾', folders: '個資料夾', search: '次搜尋', searches: '次搜尋', command: '個指令', commands: '個指令', task: '個任務', tasks: '個任務', page: '個網頁', pages: '個網頁', browser: '次瀏覽器操作', browsers: '次瀏覽器操作', image: '張圖片', images: '張圖片', action: '項操作', actions: '項操作', artifact: '個產物', artifacts: '個產物' }
                        : { file: '个文件', files: '个文件', folder: '个文件夹', folders: '个文件夹', search: '次搜索', searches: '次搜索', command: '个命令', commands: '个命令', task: '个任务', tasks: '个任务', page: '个网页', pages: '个网页', browser: '次浏览器操作', browsers: '次浏览器操作', image: '张图片', images: '张图片', action: '项操作', actions: '项操作', artifact: '个工件', artifacts: '个工件' };
                    newVal = valNorm.split(/\s*,\s*/).map(part => {
                        const pm = part.match(/^(?:(Exploring|Explored|Editing|Edited|Running|Ran)\s+)?(\d+)\s+(files?|folders?|searches?|commands?|tasks?|pages?|browsers?|images?|actions?|artifacts?)$/i);
                        if (!pm) return part;
                        const v = pm[1] ? (verbMap[pm[1].toLowerCase()] || pm[1]) + ' ' : '';
                        const n = nounMap[pm[3].toLowerCase()] || pm[3];
                        return v + pm[2] + ' ' + n;
                    }).join('，');
                } else {
                    // 2. 长句子串滑动替换与末尾截断智能匹配 (仅当原句带有省略号截断时，才允许基于长前缀匹配；不含空格的标识符不进行子串替换)
                    for (const [key, translated] of longEntries) {
                        if (key.length > 15 && key.includes(' ') && valNorm.includes(key)) {
                            newVal = newVal.split(key).join(translated);
                            break;
                        } else if ((valNorm.endsWith('...') || valNorm.endsWith('…')) && valNorm.length >= 35) {
                            const cleanVal = valNorm.replace(/(...|…)$/, '').trim().toLowerCase();
                            if (cleanVal.length >= 30 && key.toLowerCase().startsWith(cleanVal)) {
                                newVal = translated;
                                break;
                            }
                        }
                    }
                }

                if (newVal !== originalVal) {
                    translatedValues.set(node, newVal);
                    node.nodeValue = newVal;
                }
            }
        } catch (e) {}
    }

    let mcpSnifferTimer = null;
    let lastCapturedCount = 0;
    function scheduleMcpSniffer() {
        if (mcpSnifferTimer) clearTimeout(mcpSnifferTimer);
        mcpSnifferTimer = setTimeout(runMcpSniffer, 600);
    }

    function extractMcpCatalog(screen) {
        if (!screen) return null;
        let templates = null;
        try {
            const findFiber = (dom) => {
                if (!dom) return null;
                const k = Object.keys(dom).find(key => key.startsWith('__reactFiber$') || key.startsWith('__reactInternalInstance$'));
                return k ? dom[k] : null;
            };

            const candidates = [
                screen,
                screen.querySelector('.divide-y'),
                screen.querySelector('.divide-y > div')
            ].filter(Boolean);

            for (const dom of candidates) {
                let fiber = findFiber(dom);
                let queue = [fiber];
                let visited = new Set();
                let depth = 0;
                while (queue.length > 0 && depth < 300) {
                    depth++;
                    const cur = queue.shift();
                    if (!cur || visited.has(cur)) continue;
                    visited.add(cur);

                    if (cur.memoizedProps && Array.isArray(cur.memoizedProps.mcpTemplates) && cur.memoizedProps.mcpTemplates.length > 0) {
                        templates = cur.memoizedProps.mcpTemplates;
                        break;
                    }
                    if (cur.child) queue.push(cur.child);
                    if (cur.sibling) queue.push(cur.sibling);
                    if (cur.return) queue.push(cur.return);
                }
                if (templates) break;
            }
        } catch (e) {}

        if (!templates || templates.length === 0) {
            try {
                const rows = screen.querySelectorAll('.divide-y > div');
                if (rows && rows.length > 0) {
                    const domItems = [];
                    for (const row of rows) {
                        const titleEl = row.querySelector('a, span.font-medium, .text-sm.font-medium');
                        const descEl = row.querySelector('.line-clamp-2, .text-xs.text-muted-foreground.mt-1');
                        const title = titleEl ? (titleEl.childNodes[0]?.textContent || titleEl.textContent || '').trim() : '';
                        const desc = descEl ? (descEl.textContent || '').trim() : '';
                        if (title || desc) {
                            domItems.push({
                                id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                                title: title,
                                description: desc
                            });
                        }
                    }
                    if (domItems.length > 0) {
                        templates = domItems;
                    }
                }
            } catch (e) {}
        }

        return templates;
    }

    function renderBadge(screen, catalog) {
        try {
            if (!screen) return;
            let badge = document.getElementById('__antigravity_mcp_badge__');
            const searchRow = screen.querySelector('.relative.flex.items-center');
            if (!badge && searchRow && searchRow.parentNode) {
                badge = document.createElement('div');
                badge.id = '__antigravity_mcp_badge__';
                badge.className = 'text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded flex items-center justify-between cursor-pointer select-none transition-all';
                badge.style.marginTop = '6px';
                badge.style.marginBottom = '2px';
                searchRow.parentNode.insertBefore(badge, searchRow.nextSibling);
            }
            if (badge) {
                const scText = '✓ 已自动捕获 ' + catalog.length + ' 个 MCP 服务器（点击复制 JSON）';
                const tcText = '✓ 已自動捕獲 ' + catalog.length + ' 個 MCP 伺服器（點擊複製 JSON）';
                badge.innerHTML = '<span>' + (USE_TW ? tcText : scText) + '</span><span style="opacity:0.75; font-size:11px;">' + (USE_TW ? '點擊複製' : '点击复制') + '</span>';
                badge.onclick = () => {
                    try {
                        navigator.clipboard.writeText(JSON.stringify(catalog, null, 2));
                        badge.innerHTML = '<span>' + (USE_TW ? '✓ 已複製 JSON 到剪貼簿！' : '✓ 已复制 JSON 到剪贴板！') + '</span>';
                        setTimeout(() => {
                            if (badge) badge.innerHTML = '<span>' + (USE_TW ? tcText : scText) + '</span><span style="opacity:0.75; font-size:11px;">' + (USE_TW ? '點擊複製' : '点击复制') + '</span>';
                        }, 2000);
                    } catch (err) {}
                };
            }
        } catch (e) {}
    }

    function runMcpSniffer(retryCount = 0) {
        try {
            const screen = document.querySelector('[data-testid="add-mcp-screen"]');
            if (!screen) return;
            const items = extractMcpCatalog(screen);
            if (!items || items.length === 0) {
                if (retryCount < 12) {
                    setTimeout(() => runMcpSniffer(retryCount + 1), 500);
                }
                return;
            }

            const catalog = items.map(item => ({
                id: item.id || '',
                title: item.title || '',
                description: item.description || '',
                link: item.link || '',
                trustLevel: item.trustLevel || ''
            }));

            if (catalog.length === lastCapturedCount) {
                renderBadge(screen, catalog);
                return;
            }
            lastCapturedCount = catalog.length;

            const dumpStr = JSON.stringify(catalog, null, 2);

            try {
                localStorage.setItem('__antigravity_mcp_dump__', dumpStr);
            } catch (e) {}

            window.__antigravity_mcp_dump__ = catalog;
            window.__exportMcpCatalog = function() {
                console.log(dumpStr);
                return catalog;
            };

            try {
                const req = typeof require === 'function' ? require : null;
                if (req) {
                    const fs = req('fs');
                    const path = req('path');
                    const os = req('os');
                    if (fs && path) {
                        const filePaths = [
                            'e:/OneDrive/Me/antigravity2-cn/scratch/mcp_catalog_dump.json',
                            os ? path.join(os.homedir(), '.gemini', 'antigravity', 'mcp_catalog_dump.json') : null
                        ].filter(Boolean);
                        for (const fp of filePaths) {
                            try {
                                const dir = path.dirname(fp);
                                if (fs.existsSync(dir)) {
                                    fs.writeFileSync(fp, dumpStr, 'utf-8');
                                    console.log('[Antigravity CN] MCP Catalog saved to: ' + fp);
                                }
                            } catch (err) {}
                        }
                    }
                }
            } catch (e) {}

            console.log('%c[Antigravity CN] 已自动捕获 ' + catalog.length + ' 个 MCP 服务器！', 'color: #10b981; font-weight: bold;', catalog);
            console.log('[Antigravity CN] 如需查看/导出 JSON，可在控制台执行: copy(window.__exportMcpCatalog())');

            renderBadge(screen, catalog);
        } catch (e) {}
    }

    const observer = new MutationObserver(mutations => {
        let hasMcpModal = false;
        for (const m of mutations) {
            if (m.type === 'childList') {
                for (const n of m.addedNodes) {
                    translateNode(n);
                    if (!hasMcpModal && n.nodeType === 1) {
                        if (n.getAttribute && n.getAttribute('data-testid') === 'add-mcp-screen') {
                            hasMcpModal = true;
                        } else if (n.querySelector && n.querySelector('[data-testid="add-mcp-screen"]')) {
                            hasMcpModal = true;
                        }
                    }
                }
            } else if (m.type === 'characterData') {
                translateNode(m.target);
            }
        }
        if (hasMcpModal) scheduleMcpSniffer();
    });

    const obsOpts = { childList: true, subtree: true, characterData: true };

    const startEngine = () => {
        const target = document.body || document.documentElement;
        if (target) {
            try {
                observer.observe(target, obsOpts);
                translateNode(target);
                if (document.querySelector('[data-testid="add-mcp-screen"]')) {
                    scheduleMcpSniffer();
                }
            } catch (e) {}
        }
    };

    const origAttachShadow = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function() {
        const sr = origAttachShadow.apply(this, arguments);
        try { observer.observe(sr, obsOpts); } catch(e) {}
        return sr;
    };

    // 强力多阶段触发绑定
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startEngine);
    } else {
        startEngine();
    }
    window.addEventListener('load', startEngine);
    setTimeout(startEngine, 100);
    setTimeout(startEngine, 300);
    setTimeout(startEngine, 1000);
    setTimeout(startEngine, 3000);
    setTimeout(startEngine, 6000);
})();
/* --- ANTIGRAVITY CHINESE LOCALIZATION END --- 