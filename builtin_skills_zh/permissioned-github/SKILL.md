---
name: permissioned-github
description: 与 GitHub 交互的规范指南，以及当命令因智能体沙箱限制而执行失败时如何向用户申请权限。
---

# GitHub 操作与权限申请指南

本技能规定了智能体如何与 GitHub 进行交互，以及当遇到默认沙箱未授权的操作时，如何向用户申请明确授权。
本指南对 **gh** CLI 及 **git** 命令的使用具有最高指导效力。

默认情况下，智能体在 GitHub 上仅被允许执行受限的只读子集操作。

## 如何与 GitHub 交互

在 GitHub 上执行操作时：

*   使用 **gh** 命令行工具。始终显式传递 `-R ORG/REPO` 参数。
*   严禁使用诸如 curl 等裸网络请求命令。
*   严禁编写脚本直接调用 GitHub API 服务器。

执行分支操作（如推送代码）：

*   使用 **git** 命令。
*   必须使用基于 HTTPS 的 Git 传输协议，不支持 SSH。

## 权限申请格式

权限字符串格式如下：

```shell
<command-binary>.<action>(<resource_json>)
```

`resource_json` 包含以下字段：

-   `org`: 必填 GitHub 组织/用户名。使用 `'*'` 表示所有组织。
-   `repo`: 必填 GitHub 仓库名。使用 `'*'` 表示所有仓库。
-   `pr`: 可选 Pull Request 编号。使用 `'*'` 表示所有 PR。
    支持的 action 操作：
    -   `read`: 查看 PR 详情，执行 `gh search prs`。
    -   `create`: 创建 PR。
    -   `update`: 发表评论、提交评审、编辑、关闭、重新打开等。
    -   `approve`: 批准 PR。
    -   `merge`: 合并 PR。
-   `issue`: 可选 Issue 编号。使用 `'*'` 表示所有 Issue。
    支持的 action 操作：
    -   `read` / `create` / `update`
-   `contents`: 可选仓库内容（代码、提交历史、分支、标签、文件）。使用 `'*'`。
    支持的 action 操作：
    -   `read`: 用于 clone、pull、fetch、checkout 以及 `gh search commits` / `gh search code`。
-   `branch`: 可选分支名。
    支持的 action 操作：
    -   `create`: 推送新分支。
    -   `update`: 推送到已有远程分支（包含强推 force-push）。
    -   `delete`: 删除远程分支。
-   `path`: 可选工作流文件路径（如 `ci.yml`）。
    支持的 action 操作：
    -   `dispatch`: 手动触发工作流 (`gh workflow run`)，需要 `ref` 字段。
    -   `read`: 列出、查看或监听工作流运行实例 (`gh run list/view/watch`)。必须配合 `path: '*'` 与 `ref: '*'`。

**其他未列出的操作不受系统支持，对应的权限申请亦会被拒绝。若遇到不支持的操作，请立即停下并向用户说明原因。**

## 典型示例 (Examples)

### 示例 1：创建 Issue
命令：`gh issue create --title "Bug report" --body "Description" -R myorg/myrepo`  
权限：`gh.create({"org": "myorg", "repo": "myrepo", "issue": "*"})`

### 示例 2：在 PR 下发表评论
命令：`gh pr comment 123 --body "Looks good" -R myorg/myrepo`  
权限：`gh.update({"org": "myorg", "repo": "myrepo", "pr": "123"})`

### 示例 3：推送新分支
命令：`git push origin feature/my-feature`  
权限：`git.create({"org": "myorg", "repo": "myrepo", "branch": "feature/my-feature"})`

### 示例 4：克隆仓库
命令：`git clone https://github.com/myorg/myrepo.git`  
权限：`git.read({"org": "myorg", "repo": "myrepo", "contents": "*"})`

### 示例 5：手动触发 GitHub Actions 工作流
命令：`gh workflow run ci.yml --ref main -R myorg/myrepo`  
权限：`workflow.dispatch({"org": "myorg", "repo": "myrepo", "path": "ci.yml", "ref": "main"})`

## 何时向用户申请权限

**仅当命令确实因权限拦截而失败时，才可申请权限。每一次权限申请都会向用户弹窗确认，切勿滥用申请以免干扰用户体验。**

当确认需要申请权限时：
1. 按照上述规范构造对应的权限字符串；
2. 调用 `ask_custom_permission` 工具发起申请；
3. 获得批准后，重新执行先前被拦截的操作。
