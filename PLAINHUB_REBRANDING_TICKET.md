# PlainHub リブランディングチケット

作成日: 2025-06-11
更新日: 2025-06-11
ステータス: In Progress
優先度: High

## 進捗サマリー
- ✅ アプリケーション名の変更完了
- ✅ ランディングページ作成完了
- 📋 マニュアル・ドキュメント整備が次のステップ

## 概要
Cloud Simple Text EditorをPlainHubにリブランディングし、LP（ランディングページ）とマニュアルを含むサイト構成を整備する。

## タスク一覧

### 1. アプリケーション名の変更 ✅ **完了**
- [x] index.html内の「Cloud Simple Text」を「PlainHub」に変更
- [x] ページタイトルを「PlainHub」に更新
- [x] バージョン情報ダイアログのアプリ名を更新
- [x] コンソールログのアプリ名を更新
- [x] READMEのタイトルと説明を更新

### 2. ブランディング要素
- [ ] ファビコンの作成（シンプルなPHアイコン）
- [x] OGP（Open Graph Protocol）メタタグの追加
- [x] アプリケーションの説明文の更新

### 3. サイト構成の設計 ✅ **完了**
- [x] ドメイン構造の決定
- [x] 各ページの役割定義
- [x] ナビゲーション設計
- [x] ランディングページ作成（landing.html）

## サイト構成案

### ドメイン構造
```
plainhub.io/                    # ランディングページ
plainhub.io/app/               # エディタ本体
plainhub.io/docs/              # ドキュメント・マニュアル
plainhub.io/docs/quickstart    # クイックスタートガイド
plainhub.io/docs/manual        # 詳細マニュアル
plainhub.io/docs/api           # API仕様（将来用）
plainhub.io/examples/          # 使用例・テンプレート
```

### ランディングページ（LP）構成
```
1. ヒーローセクション
   - キャッチコピー: "Your text, your repo, your control"
   - サブコピー: "Edit plain text files directly on GitHub. No servers, no databases."
   - CTAボタン: "Start Writing" → /app/

2. 特徴セクション（3カラム）
   - 🔒 Your Data, Your Control
     プライベートリポジトリ対応、データ所有権
   - ⚡ Lightning Fast
     数万行でも軽快動作、プレーンテキスト
   - 🔄 Version Everything
     Git統合、完全な履歴管理

3. 使い方セクション
   - Step 1: GitHubトークンを用意
   - Step 2: リポジトリを選択
   - Step 3: 編集開始

4. ユースケース
   - 日記・メモ
   - 技術ドキュメント
   - 小説・創作
   - ログ・記録

5. セキュリティ・透明性
   - オープンソース
   - コード完全性検証
   - ローカルストレージのみ

6. フッター
   - GitHub リンク
   - ドキュメント
   - プライバシーポリシー
```

### マニュアル構成
```
1. クイックスタート
   - 5分で始めるPlainHub
   - 必要なもの
   - 初回セットアップ

2. 基本操作
   - ファイルの開き方
   - 編集と保存
   - 検索機能
   - ショートカット

3. 高度な機能
   - 複数端末での利用
   - スクロール設定
   - 検索モード
   - コンテキストメニュー

4. トラブルシューティング
   - よくある質問
   - エラー対処法
   - パフォーマンス改善

5. 開発者向け
   - セルフホスティング
   - カスタマイズ
   - コントリビューション
```

## 実装順序

1. **Phase 1: アプリ名変更**（即実装）
   - 全ての「Cloud Simple Text」を「PlainHub」に置換
   - 動作確認

2. **Phase 2: LP作成**（次段階）
   - シンプルな静的HTMLページ
   - レスポンシブデザイン
   - ダークテーマ対応

3. **Phase 3: ドキュメント整備**
   - Markdownで作成
   - GitHub Pagesで公開
   - 検索可能な構成

## デザインガイドライン

### カラーパレット
- Primary: #0e639c (GitHub blue)
- Background: #1e1e1e (VS Code dark)
- Text: #d4d4d4
- Accent: #ffd700 (検索ハイライト)

### フォント
- 見出し: System UI font
- 本文: -apple-system, BlinkMacSystemFont, "Segoe UI"
- コード: Consolas, Monaco, monospace

### トーン&マナー
- シンプル
- 技術的だが親しみやすい
- 透明性を重視
- 実用性重視