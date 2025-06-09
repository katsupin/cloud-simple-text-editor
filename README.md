# クラウドシンプルテキスト - GitHub連携ノートエディタ

## 🚀 セットアップ手順

### 1. GitHub Personal Access Token の取得

1. GitHub にログイン
2. `Settings` → `Developer settings` → `Personal access tokens` → `Tokens (classic)`
3. `Generate new token (classic)` をクリック
4. **必要なスコープ:** 
   - ✅ `repo` (プライベートリポジトリアクセス用)
   - ✅ `public_repo` (パブリックリポジトリ用)
5. トークンをコピーして保存

### 2. テスト用リポジトリの準備

```bash
# 新しいリポジトリを作成（GitHubウェブサイトで）
# または既存のリポジトリを使用

# テスト用ファイルを作成
echo "# テストノート" > test-note.md
echo "これはテスト用のノートファイルです。" >> test-note.md
```

### 3. アプリケーションの起動

```bash
# ローカルサーバー起動
python3 -m http.server 8080

# ブラウザでアクセス
# http://localhost:8080/index.html
```

### 4. 動作確認手順

1. **認証**: `GitHub でログイン` → Personal Access Token を入力
2. **リポジトリ選択**: `username/repo-name` 形式で入力
3. **ファイル選択**: `.md` または `.txt` ファイルを選択
4. **編集テスト**: ファイルを編集して自動保存を確認
5. **同期確認**: GitHubで変更がcommitされているか確認

## 📊 パフォーマンステスト

### 大容量ファイルテスト
```bash
# テストデータ生成
python3 generate_test_data.py

# パフォーマンステスト実行
# http://localhost:8080/performance_test.html
```

### 検証項目
- ✅ 読み込み時間: ~500ms (2.9MB, 81,260行)
- ✅ 編集応答性: リアルタイム
- ✅ メモリ使用量: ~100MB
- ✅ 自動保存: 2秒間隔

## 🔧 トラブルシューティング

### よくある問題

**1. "リポジトリの取得に失敗しました"**
- Personal Access Token のスコープを確認
- リポジトリ名の形式を確認 (`username/repo-name`)

**2. "ファイルの保存に失敗しました"**
- ファイルが他で編集されていないか確認
- ネットワーク接続を確認

**3. パフォーマンスが遅い**
- ブラウザの拡張機能を無効化
- 他のタブを閉じてメモリを確保

## 📱 対応ブラウザ

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🛡️ セキュリティ

- Personal Access Token はローカルストレージに保存
- HTTPS通信でGitHub APIと通信
- トークンは手動で削除可能（ログアウト機能）