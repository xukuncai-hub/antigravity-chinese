#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Google Antigravity 跨平台中文汉化一键安装/还原脚本
项目地址: https://github.com/xukuncai-hub/antigravity-chinese
"""

import os
import sys
import json
import shutil
import platform
import subprocess
import argparse
from pathlib import Path

# 确保 Windows 下终端输出 UTF-8，防止 GBK 编码崩溃
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

VERSION = "1.0.9"

# ANSI 颜色定义
COLOR_RESET = "\033[0m"
COLOR_GREEN = "\033[32m"
COLOR_YELLOW = "\033[33m"
COLOR_RED = "\033[31m"
COLOR_CYAN = "\033[36m"
COLOR_BOLD = "\033[1m"


def print_info(msg):
    print(f"{COLOR_CYAN}[信息]{COLOR_RESET} {msg}")


def print_success(msg):
    print(f"{COLOR_GREEN}{COLOR_BOLD}[成功]{COLOR_RESET} {msg}")


def print_warn(msg):
    print(f"{COLOR_YELLOW}[警告]{COLOR_RESET} {msg}")


def print_error(msg):
    print(f"{COLOR_RED}{COLOR_BOLD}[错误]{COLOR_RESET} {msg}")


def is_antigravity_running():
    """检查 Antigravity 进程是否在运行"""
    try:
        if platform.system() == "Windows":
            out = subprocess.check_output(
                ["tasklist", "/fi", "imagename eq Antigravity.exe", "/fo", "csv"],
                text=True,
                stderr=subprocess.DEVNULL,
            )
            return "Antigravity.exe" in out
        else:
            out = subprocess.check_output(
                ["pgrep", "-i", "antigravity"],
                text=True,
                stderr=subprocess.DEVNULL,
            )
            return bool(out.strip())
    except Exception:
        return False


def detect_asar_path():
    """根据操作系统自动探测 Antigravity resources/app.asar 路径"""
    os_name = platform.system()
    home = Path.home()
    candidates = []

    if os_name == "Linux":
        candidates = [
            home / ".local/share/Antigravity/resources/app.asar",
            Path("/opt/antigravity/resources/app.asar"),
            Path("/opt/Antigravity/resources/app.asar"),
            Path("/usr/lib/antigravity/resources/app.asar"),
        ]
    elif os_name == "Darwin":  # macOS
        candidates = [
            Path("/Applications/Antigravity.app/Contents/Resources/app.asar"),
            home / "Applications/Antigravity.app/Contents/Resources/app.asar",
        ]
    elif os_name == "Windows":
        local_app_data = os.environ.get("LOCALAPPDATA")
        program_files = os.environ.get("ProgramFiles")
        if local_app_data:
            candidates.append(
                Path(local_app_data) / "Programs/Antigravity/resources/app.asar"
            )
            candidates.append(
                Path(local_app_data) / "Programs/antigravity/resources/app.asar"
            )
        if program_files:
            candidates.append(
                Path(program_files) / "Antigravity/resources/app.asar"
            )
            candidates.append(
                Path(program_files) / "antigravity/resources/app.asar"
            )

    for p in candidates:
        if p.is_file():
            return p

    return None


def check_tool(tool_name):
    """检查系统命令是否存在"""
    return shutil.which(tool_name) is not None


def ensure_asar_cli():
    """确保 asar 工具可用（兼容 Windows .cmd 扩展与 UNIX）"""
    asar = shutil.which("asar")
    if asar:
        return [asar]
    npx = shutil.which("npx")
    if npx:
        return [npx, "--yes", "asar"]
    return None


def run_cmd(cmd, cwd=None):
    res = subprocess.run(
        cmd,
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if res.returncode != 0:
        raise RuntimeError(f"命令执行失败: {' '.join(cmd)}\n{res.stderr}")
    return res.stdout


def patch_files(extract_dir, src_dir):
    """修改解包后的 JS 文件"""
    # 1. 注入 preload.js（支持全量初装、无损升级与修复覆盖）
    preload_file = extract_dir / "dist/preload.js"
    patch_file = src_dir / "preload_patch.js"

    if not preload_file.is_file():
        raise FileNotFoundError(f"未找到 {preload_file}")
    if not patch_file.is_file():
        raise FileNotFoundError(f"未找到补丁文件 {patch_file}")

    preload_code = preload_file.read_text(encoding="utf-8")
    start_marker = "/* --- ANTIGRAVITY CHINESE LOCALIZATION START --- */"
    end_marker = "/* --- ANTIGRAVITY CHINESE LOCALIZATION END --- */"
    patch_code = patch_file.read_text(encoding="utf-8").strip()

    if start_marker in preload_code and end_marker in preload_code:
        before = preload_code.split(start_marker)[0].rstrip()
        after = preload_code.split(end_marker)[1].lstrip()
        new_code = before + "\n\n" + patch_code + "\n\n" + after
        preload_file.write_text(new_code.strip() + "\n", encoding="utf-8")
        print_info("已更新 Web 界面物理隔离汉化引擎 (dist/preload.js)")
    elif start_marker in preload_code:
        # 处理历史版本未闭合或损坏的补丁残余
        before = preload_code.split(start_marker)[0].rstrip()
        new_code = before + "\n\n" + patch_code + "\n"
        preload_file.write_text(new_code, encoding="utf-8")
        print_info("已修复并重新注入 Web 界面物理隔离汉化引擎 (dist/preload.js)")
    else:
        preload_file.write_text(
            preload_code.rstrip() + "\n\n" + patch_code + "\n",
            encoding="utf-8",
        )
        print_info("已注入 Web 界面物理隔离汉化引擎 (dist/preload.js)")

    # 2. 注入 menu.js
    menu_file = extract_dir / "dist/menu.js"
    menu_patch_file = src_dir / "menu_patch.js"
    if menu_file.is_file() and menu_patch_file.is_file():
        menu_code = menu_file.read_text(encoding="utf-8")
        target = "    // Re-apply the menu so the change takes effect.\n    electron_1.Menu.setApplicationMenu(menu);"
        if "Antigravity Native Menu Chinese Translation" not in menu_code and target in menu_code:
            patch_path_json = json.dumps(menu_patch_file.resolve().as_posix())
            menu_path_json = json.dumps(menu_file.resolve().as_posix())
            script = f"""
const fs = require('fs');
const patch = require({patch_path_json});
let code = fs.readFileSync({menu_path_json}, 'utf8');
code = patch.apply(code);
fs.writeFileSync({menu_path_json}, code, 'utf8');
"""
            subprocess.run(["node", "-e", script], check=True)
            print_info("已注入原生菜单栏汉化 (dist/menu.js)")
        else:
            print_info("dist/menu.js 原生菜单栏汉化已就绪")

    # 3. 注入 tray.js
    tray_file = extract_dir / "dist/tray.js"
    tray_patch_file = src_dir / "tray_patch.js"
    if tray_file.is_file() and tray_patch_file.is_file():
        tray_code = tray_file.read_text(encoding="utf-8")
        if "TRAY TRANSLATION START" not in tray_code:
            patch_path_json = json.dumps(tray_patch_file.resolve().as_posix())
            tray_path_json = json.dumps(tray_file.resolve().as_posix())
            script = f"""
const fs = require('fs');
const patch = require({patch_path_json});
let code = fs.readFileSync({tray_path_json}, 'utf8');
code = patch.apply(code);
fs.writeFileSync({tray_path_json}, code, 'utf8');
"""
            subprocess.run(["node", "-e", script], check=True)
            print_info("已注入系统托盘汉化 (dist/tray.js)")
        else:
            print_info("dist/tray.js 系统托盘汉化已就绪")

    # 4. 注入 updater.js
    updater_file = extract_dir / "dist/updater.js"
    updater_patch_file = src_dir / "updater_patch.js"
    if updater_file.is_file() and updater_patch_file.is_file():
        updater_code = updater_file.read_text(encoding="utf-8")
        if "暂无可用更新" not in updater_code:
            patch_path_json = json.dumps(updater_patch_file.resolve().as_posix())
            updater_path_json = json.dumps(updater_file.resolve().as_posix())
            script = f"""
const fs = require('fs');
const patch = require({patch_path_json});
let code = fs.readFileSync({updater_path_json}, 'utf8');
code = patch.apply(code);
fs.writeFileSync({updater_path_json}, code, 'utf8');
"""
            subprocess.run(["node", "-e", script], check=True)
            print_info("已注入更新弹窗汉化 (dist/updater.js)")
        else:
            print_info("dist/updater.js 更新弹窗汉化已就绪")


def patch_builtin_skills(script_dir):
    """汉化内置技能 (builtin skills)"""
    skills_zh_dir = script_dir / "builtin_skills_zh"
    if not skills_zh_dir.exists():
        return
    home = Path.home()
    target_skills_dir = home / ".gemini/antigravity/builtin/skills"
    if not target_skills_dir.exists():
        return
    count = 0
    for skill_path in skills_zh_dir.iterdir():
        if skill_path.is_dir() and (skill_path / "SKILL.md").exists():
            dest = target_skills_dir / skill_path.name
            if dest.exists():
                shutil.copy2(skill_path / "SKILL.md", dest / "SKILL.md")
                count += 1
    if count > 0:
        print_info(f"已同步汉化内置技能 ({count} 项)")


def install(asar_path):
    print_info(f"目标 app.asar 路径: {asar_path}")
    asar_cmd = ensure_asar_cli()
    if not asar_cmd:
        print_error("未检测到 asar 或 npx 工具！请确保已安装 Node.js。")
        print_info("安装方法: https://nodejs.org/")
        sys.exit(1)

    if is_antigravity_running():
        print_warn("⚠️  检测到 Antigravity 正在运行。")
        print_warn("建议在安装完成后【完全退出并重启软件】（含右下角系统托盘）以使汉化生效！")

    resources_dir = asar_path.parent
    backup_path = resources_dir / "app.asar.bak"

    # 备份原文件
    if not backup_path.exists():
        print_info(f"正在备份原始文件到: {backup_path}")
        shutil.copy2(asar_path, backup_path)
    else:
        print_info(f"已检测到原版备份: {backup_path} (保留不变)")

    # 准备工作临时目录
    temp_dir = Path("/tmp/antigravity_zh_patch") if platform.system() != "Windows" else Path(os.environ.get("TEMP", ".")) / "antigravity_zh_patch"
    if temp_dir.exists():
        shutil.rmtree(temp_dir, ignore_errors=True)
    temp_dir.mkdir(parents=True, exist_ok=True)

    extracted_dir = temp_dir / "extracted"
    output_asar = temp_dir / "app.asar"

    script_dir = Path(__file__).resolve().parent
    src_dir = script_dir / "src"

    try:
        print_info("正在解包 app.asar...")
        run_cmd(asar_cmd + ["extract", str(asar_path), str(extracted_dir)])

        print_info("正在应用全套中文汉化补丁...")
        patch_files(extracted_dir, src_dir)

        print_info("正在重新打包 app.asar...")
        run_cmd(asar_cmd + ["pack", str(extracted_dir), str(output_asar), "--unpack-dir", "node_modules/chrome-devtools-mcp"])

        print_info("正在替换并应用新版本...")
        shutil.copy2(output_asar, asar_path)

        # 汉化内置技能
        patch_builtin_skills(script_dir)

        unpacked_src = temp_dir / "app.asar.unpacked"
        unpacked_dest = resources_dir / "app.asar.unpacked"
        if unpacked_src.exists() and unpacked_dest.exists():
            shutil.copytree(unpacked_src, unpacked_dest, dirs_exist_ok=True)

        print_success("汉化安装成功！🎉")
        print_info("请重新启动 Antigravity 体验纯正的中文开发环境。")
    finally:
        if temp_dir.exists():
            shutil.rmtree(temp_dir, ignore_errors=True)


def restore(asar_path):
    resources_dir = asar_path.parent
    backup_path = resources_dir / "app.asar.bak"
    if not backup_path.exists():
        print_error(f"未找到备份文件: {backup_path}，无法执行还原。")
        sys.exit(1)

    print_info(f"正在从备份文件还原: {backup_path} -> {asar_path}")
    shutil.copy2(backup_path, asar_path)
    print_success("已成功还原为官方英文原版！🎉")
    print_info("重启 Antigravity 即可生效。")


def main():
    print(f"\n{COLOR_CYAN}{COLOR_BOLD}=== Google Antigravity 中文汉化助手 v{VERSION} ==={COLOR_RESET}\n")

    parser = argparse.ArgumentParser(description="Antigravity 跨平台中文汉化安装脚本")
    parser.add_argument("--path", type=str, help="手动指定 app.asar 的文件绝对路径")
    parser.add_argument("--restore", action="store_true", help="还原为官方英文原版")
    args = parser.parse_args()

    asar_path = Path(args.path) if args.path else detect_asar_path()
    if not asar_path or not asar_path.is_file():
        print_error("未自动找到 Antigravity 的 app.asar 文件！")
        print_info("请使用 --path 参数手动指定路径，例如:")
        print_info("python3 install.py --path ~/.local/share/Antigravity/resources/app.asar")
        sys.exit(1)

    if args.restore:
        restore(asar_path)
    else:
        install(asar_path)


if __name__ == "__main__":
    main()
