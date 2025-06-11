# Code Integrity Verification

このドキュメントは、Cloud Simple Text Editorのコード完全性を検証するための情報を提供します。

## 検証方法

### 方法1: ブラウザコンソールでの検証

1. アプリケーションを開く: https://katsupin.github.io/cloud-simple-text-editor/
2. 開発者ツールを開く（F12）
3. コンソールで以下を実行:
   ```javascript
   debugApp.verifyIntegrity()
   ```

### 方法2: バージョン情報での簡易確認

1. アプリケーション右下のバージョン番号をクリック
2. 表示されるダイアログでコード完全性のハッシュ値を確認

## ハッシュの検証

実行中のコードのハッシュ値と、GitHubリポジトリのindex.htmlのハッシュ値が一致することを確認します。

### 手動でのハッシュ計算

```bash
# リポジトリをクローン
git clone https://github.com/katsupin/cloud-simple-text-editor.git
cd cloud-simple-text-editor

# SHA-256ハッシュを計算
sha256sum index.html
```

## セキュリティ上の注意

- ハッシュが一致しない場合は、以下の可能性があります：
  1. 開発版を実行している
  2. デプロイが保留中
  3. コードが改変されている

- 本番環境では必ずハッシュが一致することを確認してください

## 透明性の保証

このアプリケーションは以下の方法で透明性を確保しています：

1. **オープンソース**: すべてのコードがGitHubで公開
2. **直接配信**: GitHub Pagesから変更なしに配信
3. **検証可能**: いつでもコードの完全性を確認可能
4. **履歴追跡**: すべての変更がGitで記録

## 最新のハッシュ値

最新のハッシュ値はGitHub Actionsによって自動的に計算され、このファイルに記録されます。