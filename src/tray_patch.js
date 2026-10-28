// Antigravity Tray Menu & Interaction Patch
module.exports = {
  apply(trayCode) {
    let patched = trayCode;

    // 1. Translations
    const t1 = 'function createTray(actions, onClick) {';
    const r1 = `function createTray(actions, onClick) {
    /* --- TRAY TRANSLATION START --- */
    const translations = {
        'No agents running': '无运行中的智能体',
        'Open Antigravity': '打开 Antigravity',
        'Quit': '退出'
    };
    for (const item of actions) {
        if (!item || !item.label) continue;
        if (translations[item.label]) {
            item.label = translations[item.label];
        } else if (item.label.startsWith('Open ')) {
            item.label = '打开 ' + item.label.slice(5);
        } else if (item.label === 'Quit') {
            item.label = '退出';
        }
    }
    /* --- TRAY TRANSLATION END --- */`;
    if (!patched.includes(t1)) {
      throw new Error('Tray patch anchor 1 not found in dist/tray.js');
    }
    patched = patched.replace(t1, r1);

    // 2. Double click restore
    const t2 = '    tray.setContextMenu(contextMenu);';
    const r2 = `    tray.setContextMenu(contextMenu);
    /* --- TRAY DOUBLE CLICK START --- */
    const openAction = actions.find(item => item && typeof item.click === 'function' && !['Quit', '退出', '結束'].includes(item.label));
    if (openAction) {
        tray.on('double-click', () => {
            const wins = electron_1.BrowserWindow.getAllWindows();
            if (wins.length > 0 && wins[0].isMinimized()) {
                wins[0].restore();
            }
            openAction.click();
        });
    }
    /* --- TRAY DOUBLE CLICK END --- */`;
    if (!patched.includes(t2)) {
      throw new Error('Tray patch anchor 2 not found in dist/tray.js');
    }
    patched = patched.replace(t2, r2);

    // 3. Agent count text
    const t3 = `            countItem.label =
                (count > 0 ? \`\${count}\` : 'No') +
                    ' agent' +
                    (count === 1 ? '' : 's') +
                    ' running';`;
    const r3 = "            countItem.label = count > 0 ? `${count} 个智能体运行中` : '无运行中的智能体';";
    if (patched.includes(t3)) {
      patched = patched.replace(t3, r3);
    }

    return patched;
  }
};
