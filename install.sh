#!/usr/bin/env bash
set -e

echo "🚀 开始执行 Google Antigravity 中文汉化..."

if ! command -v python3 &> /dev/null; then
    echo "❌ 错误: 未检测到 python3，请先安装 Python 3"
    exit 1
fi

if ! command -v node &> /dev/null && ! command -v npx &> /dev/null; then
    echo "❌ 错误: 未检测到 Node.js / npx，请先安装 Node.js (https://nodejs.org/)"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
python3 "${SCRIPT_DIR}/install.py" "$@"
