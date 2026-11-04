---
name: run-workflow
description: >-
  如何使用 `run_workflow` 工具编写并运行动态工作流脚本：
  使用一个 Python 脚本通过 `agent`、`parallel`、`pipeline` 与 `phase` 编排多个智能体并发协同。
  当任务需要拆解为多个独立或分阶段的子任务（例如扇出并发审查文件/模块、汇总 Bug、多角度分析然后再聚合结果）时使用本技能。
---

# 基于 `run_workflow` 的动态工作流

工作流是指由 `run_workflow` 工具执行的一段 Python 脚本。该脚本决定启动哪些智能体、启动顺序以及如何汇总各智能体的产出。当编排逻辑本身可以用代码（遍历列表、扇出再聚合、管道流）高效表达时，使用动态工作流远优于手动连续调用多次子智能体。

## 执行步骤

1.  通过 `Script` 参数直接内联传递脚本，或将脚本保存至文件（如当前会话的 scratch 临时目录）并通过 `ScriptPath` 传递绝对路径。
2.  调用 `run_workflow(Script="...", Description="...")` 或 `run_workflow(ScriptPath="/abs/path/workflow.py", Description="...")`。
    -   `Description` 是显示在 UI 界面中的一句话任务目标。
    -   工作流在后台异步运行，完成时系统会自动通知。
    -   对于简短脚本，可设置 `WaitMsBeforeAsync`（最多 10000 毫秒）以便在同轮会话中同步拿到结果。
    -   若要传递入参，将 `Args` 设为一个 JSON 对象，脚本可通过 `args` 字典读取。
3.  读取工具执行结果：包含 `log()` 产生的日志 (`Logs:`) 以及脚本的控制台打印输出 (`Output:`)。
4.  若工具报错，根据行号修改脚本后重新执行。

## 核心脚本编写规则

脚本运行于独立的 `python3` 进程中（需要系统环境中存在 Python 3.8+）：

-   顶层作用域原生支持 `await`，可自由定义 `async def` 辅助函数。
-   脚本的标准输出（`print()`、`stderr`、子进程输出等）会统一在工具结果的 `Output:` 部分呈现。
-   未捕获的异常将终止工作流并精确定位出错的代码行。
-   全局注入变量：`CONVERSATION_ID`、`STEP_INDEX`、`WORKSPACES`（当前工作区目录元组）。

## 核心原语 (Primitives)

| 原语 | 功能与行为 |
| --- | --- |
| `log(*args)` | 向工作流输出及 UI 界面追加一行日志。 |
| `phase(name)` | 开启一个命名阶段；后续产生的日志和智能体卡片会自动归组于其下。 |
| `agent(...)` | 定义一个智能体任务（惰性，定义时暂不执行）。`await agent(prompt, schema)` 执行一次并返回结果。 |
| `parallel(items, fn)` | 遍历 `items` 并发调用 `fn(item)`，等待全部完成并按原顺序返回结果。若其中一个失败，其余自动取消。 |
| `pipeline(items, fn)` | 串行管道：逐个执行并等待 `fn(item)`，结果按列表原顺序返回。 |
| `trajectory(...)` | `await trajectory()` 可回溯当前会话在调用 `run_workflow` 之前的历史执行步骤。 |

主要参数说明：

-   `type_name`: 运行的智能体类型。默认为 `"self"`（继承当前智能体配置）。
-   `workspace`: `"inherit"`（继承当前工作区）、`"branch"`（创建隔离分支克隆，适用于并发写代码）或 `"share"`（共享底层代码仓）。
-   `schema`（必需）: 智能体输出结果的 JSON Schema 字典。智能体通过调用 `finish` 工具提交符合该 schema 的数据结构。自由文本可直接用 `{"type": "string"}`。
-   `role`: 可选的卡片简短标题，如 `"安全审查员"`。
-   `model`: 智能体模型等级：`"inherit"`（默认）、`"flash_lite"`、`"flash"` 或 `"pro"`。高并发简单任务建议使用更轻量的 flash 级别。

## 保持上下文的智能体实例

如果需要单个智能体进行多轮连续互动（例如先找 Bug，再复查修复结果），可将其实例化后连续调用：

```python
reviewer = agent("你负责审查 Go 代码的正确性。", role="代码审查员")
bugs = await reviewer("列出 foo.go 中的潜在 Bug。", {"type": "array", "items": {"type": "string"}})
fixes = await parallel(bugs, lambda b: agent(f"请修复: {b}", {"type": "string"}))
ok = await reviewer(f"修复完成: {fixes}。请确认所有 Bug 是否均已解决？", {"type": "boolean"})
del reviewer
```

## 完整示例：并发审查文件

```python
phase("发现阶段")
files = await agent(
    "列出 pkg/foo 目录下调用了 Bar() 的所有 Go 文件，仅输出路径列表。",
    schema={"type": "array", "items": {"type": "string"}},
)

phase("审查阶段")
reviews = await parallel(files, lambda f: agent(
    f"审查 {f} 中是否存在滥用 Bar() 的情况，用 3 个要点回复或返回 'OK'。",
    schema={"type": "string"},
    role=f"审查 {f}",
))

for r in reviews:
    log(r)
```
