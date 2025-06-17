# Claude作業開始時の手順

## 必ず最初に実行すること

1. **作業コンテキストの確認**
   ```bash
   # 前回の作業状況を確認
   cat CLAUDE_WORK_CONTEXT.md
   ```

2. **チケット状況の確認**
   ```bash
   # 現在のタスク一覧を確認
   cat PLAINHUB_TICKETS.md | grep "ステータス"
   ```

3. **Git状態の確認**
   ```bash
   git status
   git pull origin main
   ```

## 作業終了時の手順

1. **作業内容をCLAUDE_WORK_CONTEXT.mdに記録**
2. **変更をコミット・プッシュ**
3. **次回の作業予定を記載**

## 重要な開発ルール

### コード修正時
- 必ずlint/typecheckを実行（コマンドが分かれば）
- デバッグ用console.logは削除
- 日本語コメントは最小限に

### デプロイ時
- 必ずPLAINHUB_TICKETS.mdのステータスを更新
- コミットメッセージにチケット番号を含める
- 重要な変更は動作確認方法を明記

## よく使うコマンド

```bash
# ファイル検索
grep -n "検索語" index.html

# Git操作
git add -A && git commit -m "feat: PH-XXX 機能説明"
git push origin main

# 履歴確認
git log --oneline -10
```