// PlainHubアプリで以下をコンソールで実行してください：

console.log('=== 詳細位置診断 ===');

// 1. まず¶ボタンを強制的にONにする
if (window.app) {
    window.app.showWhitespace = true;
    const toggle = document.getElementById('whitespaceToggle');
    toggle?.classList.add('active');
    
    const overlay = document.getElementById('whitespaceOverlay');
    overlay?.classList.remove('hidden');
    overlay.style.display = 'block';
    overlay.style.visibility = 'visible';
    overlay.style.zIndex = '10';
    
    window.app.updateWhitespaceOverlay();
}

// 2. エディタとオーバーレイの詳細情報を取得
const editor = document.getElementById('editor');
const overlay = document.getElementById('whitespaceOverlay');
const wrapper = document.querySelector('.editor-wrapper');

console.log('Editor details:', {
    position: editor.getBoundingClientRect(),
    styles: {
        padding: getComputedStyle(editor).padding,
        margin: getComputedStyle(editor).margin,
        border: getComputedStyle(editor).border,
        fontSize: getComputedStyle(editor).fontSize,
        lineHeight: getComputedStyle(editor).lineHeight
    }
});

console.log('Overlay details:', {
    position: overlay.getBoundingClientRect(),
    styles: {
        padding: getComputedStyle(overlay).padding,
        margin: getComputedStyle(overlay).margin,
        top: getComputedStyle(overlay).top,
        left: getComputedStyle(overlay).left,
        fontSize: getComputedStyle(overlay).fontSize,
        lineHeight: getComputedStyle(overlay).lineHeight
    }
});

console.log('Wrapper details:', {
    position: wrapper.getBoundingClientRect(),
    styles: {
        padding: getComputedStyle(wrapper).padding,
        margin: getComputedStyle(wrapper).margin
    }
});

// 3. エディタの内容の最初の数文字を確認
console.log('Editor content preview:', editor.value.substring(0, 50));
console.log('Overlay content preview:', overlay.textContent.substring(0, 50));

// 4. スクロール位置を確認
console.log('Scroll positions:', {
    editor: { top: editor.scrollTop, left: editor.scrollLeft },
    overlay: { top: overlay.scrollTop, left: overlay.scrollLeft }
});
EOF < /dev/null
