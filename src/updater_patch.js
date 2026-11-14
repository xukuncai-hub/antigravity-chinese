// Antigravity Updater Dialogs Localization Patch & Anti-Overwrite Protection
module.exports = {
  apply(updaterCode) {
    let patched = updaterCode;
    const t = `                type: 'info',
                title: 'Check for Updates',
                message: 'No updates available',
                buttons: ['OK'],`;
    const r = `                type: 'info',
                title: '检查更新',
                message: '暂无可用更新',
                buttons: ['确定'],`;
    if (patched.includes(t)) {
      patched = patched.replace(t, r);
    }

    // 1. 关闭后台静默自动下载
    if (patched.includes('electron_updater_1.autoUpdater.autoDownload = true;')) {
      patched = patched.replace('electron_updater_1.autoUpdater.autoDownload = true;', 'electron_updater_1.autoUpdater.autoDownload = false;');
    }

    // 2. 关闭软件退出时静默安装更新
    if (patched.includes('electron_updater_1.autoUpdater.autoInstallOnAppQuit = electron_1.app.isPackaged;')) {
      patched = patched.replace('electron_updater_1.autoUpdater.autoInstallOnAppQuit = electron_1.app.isPackaged;', 'electron_updater_1.autoUpdater.autoInstallOnAppQuit = false;');
    }

    // 3. 拦截后台静默定时轮询，仅在用户手动点击菜单「检查更新」时允许检查
    if (patched.includes('function checkForUpdates(isManual = false) {')) {
      patched = patched.replace(
        'function checkForUpdates(isManual = false) {',
        'function checkForUpdates(isManual = false) {\n    if (!isManual) return;'
      );
    }

    // 4. 拦截后台核心进程触发的静默更新
    if (patched.includes('function applyHostUpdate() {')) {
      patched = patched.replace(
        'function applyHostUpdate() {',
        'function applyHostUpdate() {\n    return false;'
      );
    }

    return patched;
  }
};
