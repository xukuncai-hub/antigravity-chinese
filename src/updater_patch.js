// Antigravity Updater Dialogs Localization Patch
module.exports = {
  apply(updaterCode) {
    const t = `                type: 'info',
                title: 'Check for Updates',
                message: 'No updates available',
                buttons: ['OK'],`;
    const r = `                type: 'info',
                title: '检查更新',
                message: '暂无可用更新',
                buttons: ['确定'],`;
    if (!updaterCode.includes(t)) {
      return updaterCode; // Optional patch
    }
    return updaterCode.replace(t, r);
  }
};
