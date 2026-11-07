#!/usr/bin/env node
/**
 * Google Antigravity 跨平台中文汉化安装/还原脚本 (Node.js 原生版)
 * 项目地址: https://github.com/xukuncai-hub/antigravity-chinese
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync, spawnSync } = require('child_process');

const VERSION = '1.0.6';

// ANSI 颜色
const COLOR_RESET = '\x1b[0m';
const COLOR_GREEN = '\x1b[32m\x1b[1m';
const COLOR_YELLOW = '\x1b[33m';
const COLOR_RED = '\x1b[31m\x1b[1m';
const COLOR_CYAN = '\x1b[36m';

function printInfo(msg) { console.log(`${COLOR_CYAN}[信息]${COLOR_RESET} ${msg}`); }
function printSuccess(msg) { console.log(`${COLOR_GREEN}[成功]${COLOR_RESET} ${msg}`); }
function printWarn(msg) { console.log(`${COLOR_YELLOW}[警告]${COLOR_RESET} ${msg}`); }
function printError(msg) { console.log(`${COLOR_RED}[错误]${COLOR_RESET} ${msg}`); }

function detectAsarPath() {
    const platform = os.platform();
    const home = os.homedir();
    const candidates = [];

    if (platform === 'win32') {
        const local = process.env.LOCALAPPDATA;
        const prog = process.env.ProgramFiles;
        if (local) {
            candidates.push(path.join(local, 'Programs/Antigravity/resources/app.asar'));
            candidates.push(path.join(local, 'Programs/antigravity/resources/app.asar'));
        }
        if (prog) {
            candidates.push(path.join(prog, 'Antigravity/resources/app.asar'));
            candidates.push(path.join(prog, 'antigravity/resources/app.asar'));
        }
    } else if (platform === 'darwin') {
        candidates.push('/Applications/Antigravity.app/Contents/Resources/app.asar');
        candidates.push(path.join(home, 'Applications/Antigravity.app/Contents/Resources/app.asar'));
    } else {
        candidates.push(path.join(home, '.local/share/Antigravity/resources/app.asar'));
        candidates.push('/opt/antigravity/resources/app.asar');
        candidates.push('/opt/Antigravity/resources/app.asar');
        candidates.push('/usr/lib/antigravity/resources/app.asar');
    }

    for (const p of candidates) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
    }
    return null;
}

function patchFiles(extractDir, srcDir) {
    // 1. Preload
    const preloadPath = path.join(extractDir, 'dist/preload.js');
    const preloadPatch = fs.readFileSync(path.join(srcDir, 'preload_patch.js'), 'utf8');
    let preloadCode = fs.readFileSync(preloadPath, 'utf8');
    const startMarker = '/* --- ANTIGRAVITY CHINESE LOCALIZATION START --- */';
    const endMarker = '/* --- ANTIGRAVITY CHINESE LOCALIZATION END --- */';

    if (preloadCode.includes(startMarker) && preloadCode.includes(endMarker)) {
        const before = preloadCode.split(startMarker)[0].trimEnd();
        const after = preloadCode.split(endMarker)[1].trimStart();
        preloadCode = before + '\n\n' + preloadPatch + '\n\n' + after;
    } else if (preloadCode.includes(startMarker)) {
        const before = preloadCode.split(startMarker)[0].trimEnd();
        preloadCode = before + '\n\n' + preloadPatch + '\n';
    } else {
        preloadCode = preloadCode.trimEnd() + '\n\n' + preloadPatch + '\n';
    }
    fs.writeFileSync(preloadPath, preloadCode, 'utf8');
    printInfo('已注入 Web 界面物理隔离汉化引擎 (dist/preload.js)');

    // 2. Menu
    const menuPath = path.join(extractDir, 'dist/menu.js');
    const menuPatch = require(path.join(srcDir, 'menu_patch.js'));
    let menuCode = fs.readFileSync(menuPath, 'utf8');
    menuCode = menuPatch.apply(menuCode);
    fs.writeFileSync(menuPath, menuCode, 'utf8');
    printInfo('已注入原生菜单栏汉化 (dist/menu.js)');

    // 3. Tray
    const trayPath = path.join(extractDir, 'dist/tray.js');
    const trayPatch = require(path.join(srcDir, 'tray_patch.js'));
    let trayCode = fs.readFileSync(trayPath, 'utf8');
    trayCode = trayPatch.apply(trayCode);
    fs.writeFileSync(trayPath, trayCode, 'utf8');
    printInfo('已注入系统托盘汉化 (dist/tray.js)');

    // 4. Updater
    const updaterPath = path.join(extractDir, 'dist/updater.js');
    const updaterPatch = require(path.join(srcDir, 'updater_patch.js'));
    let updaterCode = fs.readFileSync(updaterPath, 'utf8');
    updaterCode = updaterPatch.apply(updaterCode);
    // 禁用后台静默覆盖 app.asar
    updaterCode = updaterCode.replace('electron_updater_1.autoUpdater.autoDownload = true;', 'electron_updater_1.autoUpdater.autoDownload = false;');
    fs.writeFileSync(updaterPath, updaterCode, 'utf8');
    printInfo('已注入更新弹窗汉化并关闭静默更新覆盖 (dist/updater.js)');
}

function patchBuiltinSkills(scriptDir) {
    const skillsZhDir = path.join(scriptDir, 'builtin_skills_zh');
    if (!fs.existsSync(skillsZhDir)) return;
    const targetDir = path.join(os.homedir(), '.gemini/antigravity/builtin/skills');
    if (!fs.existsSync(targetDir)) return;

    let count = 0;
    for (const skill of fs.readdirSync(skillsZhDir)) {
        const src = path.join(skillsZhDir, skill, 'SKILL.md');
        const dest = path.join(targetDir, skill, 'SKILL.md');
        if (fs.existsSync(src) && fs.existsSync(path.dirname(dest))) {
            fs.copyFileSync(src, dest);
            count++;
        }
    }
    if (count > 0) printInfo(`已同步汉化内置技能 (${count} 项)`);
}

function install(asarPath) {
    printInfo(`目标 app.asar 路径: ${asarPath}`);
    const resourcesDir = path.dirname(asarPath);
    const backupPath = path.join(resourcesDir, 'app.asar.bak');

    if (!fs.existsSync(backupPath)) {
        printInfo(`正在备份原始文件到: ${backupPath}`);
        fs.copyFileSync(asarPath, backupPath);
    } else {
        printInfo(`已检测到原版备份: ${backupPath} (保留不变)`);
    }

    const tempDir = path.join(os.tmpdir(), 'antigravity_zh_patch');
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    fs.mkdirSync(tempDir, { recursive: true });

    const extractedDir = path.join(tempDir, 'extracted');
    const outputAsar = path.join(tempDir, 'app.asar');
    const scriptDir = __dirname;
    const srcDir = path.join(scriptDir, 'src');

    try {
        printInfo('正在解包 app.asar...');
        execSync(`npx --yes @electron/asar extract "${asarPath}" "${extractedDir}"`, { stdio: 'inherit' });

        printInfo('正在应用全套中文汉化补丁...');
        patchFiles(extractedDir, srcDir);

        printInfo('正在重新打包 app.asar...');
        execSync(`npx --yes @electron/asar pack "${extractedDir}" "${outputAsar}" --unpack-dir "node_modules/chrome-devtools-mcp"`, { stdio: 'inherit' });

        printInfo('正在替换并应用新版本...');
        fs.copyFileSync(outputAsar, asarPath);

        patchBuiltinSkills(scriptDir);

        printSuccess('汉化安装成功！🎉');
        printInfo('请重新启动 Antigravity 体验纯正的中文开发环境。');
    } finally {
        if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    }
}

function restore(asarPath) {
    const resourcesDir = path.dirname(asarPath);
    const backupPath = path.join(resourcesDir, 'app.asar.bak');
    if (!fs.existsSync(backupPath)) {
        printError(`未找到备份文件: ${backupPath}，无法执行还原。`);
        process.exit(1);
    }
    printInfo(`正在从备份文件还原: ${backupPath} -> ${asarPath}`);
    fs.copyFileSync(backupPath, asarPath);
    printSuccess('已成功还原为官方英文原版！🎉');
    printInfo('重启 Antigravity 即可生效。');
}

function main() {
    console.log(`\n${COLOR_CYAN}=== Google Antigravity 中文汉化助手 v${VERSION} ===${COLOR_RESET}\n`);
    const args = process.argv.slice(2);
    let asarPath = null;
    let isRestore = false;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--restore') isRestore = true;
        if (args[i] === '--path' && args[i + 1]) asarPath = args[i + 1];
    }

    asarPath = asarPath || detectAsarPath();
    if (!asarPath || !fs.existsSync(asarPath)) {
        printError('未自动找到 Antigravity 的 app.asar 文件！');
        printInfo('请使用 --path 参数手动指定路径，例如:');
        printInfo('node install.js --path ~/.local/share/Antigravity/resources/app.asar');
        process.exit(1);
    }

    if (isRestore) restore(asarPath);
    else install(asarPath);
}

main();
