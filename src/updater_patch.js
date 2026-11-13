// Antigravity Updater Dialogs Localization Patch
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
    // 关闭静默后台自动下载与覆盖
    if (patched.includes('electron_updater_1.autoUpdater.autoDownload = true;')) {
      patched = patched.replace('electron_updater_1.autoUpdater.autoDownload = true;', 'electron_updater_1.autoUpdater.autoDownload = false;');
    }
    return patched;
  }
};
