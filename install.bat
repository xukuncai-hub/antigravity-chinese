@echo off
chcp 65001 >nul
title Google Antigravity 中文汉化助手

echo =======================================================
echo   Google Antigravity 跨平台中文汉化一键安装助手
echo   项目地址: https://github.com/xukuncai-hub/antigravity-chinese
echo =======================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    node "%~dp0install.js" %*
    goto end
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    python "%~dp0install.py" %*
    goto end
)

echo [错误] 未检测到 Node.js 或 Python 环境！
echo 请先安装 Node.js (推荐): https://nodejs.org/
echo 或安装 Python 3: https://www.python.org/
pause
exit /b 1

:end
echo.
echo 按任意键退出...
pause >nul
