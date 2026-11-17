// Antigravity Updater Localization & Complete Update Freeze Patch
module.exports = {
  apply(updaterCode) {
    let patched = updaterCode;
    
    // 1. 完全切断 initAutoUpdater 内部的自动初始化与后台监听
    if (patched.includes('function initAutoUpdater(isHeadless, settingsService) {')) {
      patched = patched.replace(
        'function initAutoUpdater(isHeadless, settingsService) {',
        'function initAutoUpdater(isHeadless, settingsService) {\n    return;'
      );
    }

    // 2. 拦截所有 checkForUpdates 调用，手动触发时弹出友好中文提示，完全不请求远端
    const checkFunc = 'function checkForUpdates(isManual = false) {';
    if (patched.includes(checkFunc)) {
      patched = patched.replace(
        checkFunc,
        `function checkForUpdates(isManual = false) {
    if (isManual) {
        try {
            const win = (0, utils_1.getFocusedHubWindow)() ?? (0, utils_1.getHubWindows)()[0];
            const opts = {
                type: 'info',
                title: '检查更新',
                message: '当前已是稳定版本，自动更新已安全托管。',
                buttons: ['确定']
            };
            if (win) electron_1.dialog.showMessageBox(win, opts);
            else electron_1.dialog.showMessageBox(opts);
        } catch (_) {}
    }
    return;`
      );
    }

    // 3. 拦截语言服务器或任何后台发起的更新动作
    if (patched.includes('function applyHostUpdate() {')) {
      patched = patched.replace(
        'function applyHostUpdate() {',
        'function applyHostUpdate() {\n    return false;'
      );
    }

    // 4. 彻底禁用 autoDownload 和 autoInstallOnAppQuit
    if (patched.includes('electron_updater_1.autoUpdater.autoDownload = true;')) {
      patched = patched.replace('electron_updater_1.autoUpdater.autoDownload = true;', 'electron_updater_1.autoUpdater.autoDownload = false;');
    }
    if (patched.includes('electron_updater_1.autoUpdater.autoInstallOnAppQuit = electron_1.app.isPackaged;')) {
      patched = patched.replace('electron_updater_1.autoUpdater.autoInstallOnAppQuit = electron_1.app.isPackaged;', 'electron_updater_1.autoUpdater.autoInstallOnAppQuit = false;');
    }

    return patched;
  }
};
