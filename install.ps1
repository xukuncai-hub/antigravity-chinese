# Google Antigravity 中文汉化 Windows PowerShell 一键安装脚本
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "🚀 开始执行 Google Antigravity 中文汉化..." -ForegroundColor Cyan

if (-not (Get-Command python -ErrorAction SilentlyContinue) -and -not (Get-Command python3 -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未检测到 Python，请先安装 Python 3 (https://www.python.org/)" -ForegroundColor Red
    Exit 1
}

if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未检测到 npx / Node.js，请先安装 Node.js (https://nodejs.org/)" -ForegroundColor Red
    Exit 1
}

$PyCmd = if (Get-Command python3 -ErrorAction SilentlyContinue) { "python3" } else { "python" }
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

& $PyCmd "$ScriptDir\install.py" $args
