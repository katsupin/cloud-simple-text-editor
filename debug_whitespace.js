// PlainHubアプリで以下をコンソールで実行してください：

// 1. 現在の不可視文字表示状態をチェック
console.log('=== 不可視文字表示状態 ===');
const toggle = document.getElementById('whitespaceToggle');
const overlay = document.getElementById('whitespaceOverlay');
const editor = document.getElementById('editor');

console.log('Toggle active:', toggle?.classList.contains('active'));
console.log('App showWhitespace:', window.app?.showWhitespace);

// 2. オーバーレイの位置情報をチェック
console.log('=== オーバーレイ位置情報 ===');
console.log('Editor position:', editor?.getBoundingClientRect());
console.log('Overlay position:', overlay?.getBoundingClientRect());

// 3. CSS プロパティをチェック
console.log('=== CSS プロパティ ===');
const overlayStyles = getComputedStyle(overlay);
console.log('Overlay styles:', {
    position: overlayStyles.position,
    top: overlayStyles.top,
    left: overlayStyles.left,
    transform: overlayStyles.transform,
    zIndex: overlayStyles.zIndex,
    display: overlayStyles.display,
    visibility: overlayStyles.visibility
});

// 4. エディタのパディング/マージンをチェック
console.log('=== エディタスタイル ===');  
const editorStyles = getComputedStyle(editor);
console.log('Editor styles:', {
    padding: editorStyles.padding,
    margin: editorStyles.margin,
    fontSize: editorStyles.fontSize,
    lineHeight: editorStyles.lineHeight
});

// 5. 強制的にオーバーレイを更新
console.log('=== 強制更新 ===');
if (window.app) {
    window.app.showWhitespace = true;
    window.app.updateWhitespaceOverlay();
}

// 6. オーバーレイの内容をチェック
console.log('Overlay content preview:', overlay?.textContent?.substring(0, 50) + '...');
EOF < /dev/null
