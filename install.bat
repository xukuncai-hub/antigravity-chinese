@echo off
chcp 65001 >nul
echo ========================================================
echo   Google Antigravity 跨平台中文汉化助手
echo ========================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    where python3 >nul 2>nul
    if %ERRORLEVEL% NEQ 0 (
        echo [错误] 未检测到 Python，请先安装 Python 3 (https://www.python.org/)
        pause
        exit /b 1
    ) else (
        set PYCMD=python3
    )
) else (
    set PYCMD=python
)

%PYCMD% "%~dp0install.py" %*
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [提示] 汉化执行遇到问题，请检查终端报错信息。
    pause
    exit /b %ERRORLEVEL%
) else (
    echo.
    pause
)
