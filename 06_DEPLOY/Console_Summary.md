# Console Summary: Infrastructure Decision

Last updated: 2026-07-04
Source brief: `06_DEPLOY/Infrastructure_Decision_Brief.md`

## Current Decision

Human Consoleをスマホで安定して開けるため、最小Preview環境を決める。

## Recommendation

Level 1:
GitHub Pages または Vercel static preview。

Level 2:
Vercel または Cloudflare Pagesで常時Preview + Human Console。

Level 3:
Vercel または Cloudflare Pages + Supabaseで、本番App + API + DB + Auth。

## Human Next Action

Previewは外部公開してよいかを決める。

## Risk

Previewを外部公開すると、Human Consoleや開発中UIが外部から見える可能性がある。
Secret / API Key / GitHub PAT / Password は絶対にGitへ保存しない。

## Evidence Status

Confirmed:
- Vercel / GitHub Pages / Cloudflare Pages / Cloudflare Tunnel / Supabase / GitHub Actionsの公式Docs URLをBriefに記録済み。

Needs Research:
- 料金プラン
- ドメイン管理サービス
- DNS状態
- HOTEL JOY本番の既存サーバー有無
- Previewを外部公開してよいか

## Current Readiness

- Production Readiness: 25%
- Research Readiness: 45%
- Evidence Confidence: 40%
- Decision Confidence: 35%
- Security Readiness: 20%
- Deployment Readiness: 30%

## Evidence Completed

- Vercel / GitHub Pages / Cloudflare Pages / Cloudflare Tunnel / Supabase / GitHub Actionsの公式Docs URLをBriefに記録済み。
- `fashionhoteljoy.com` はドメイン候補として記録済み。
- Secret / API Key / GitHub PATをGitへ保存しない方針を記録済み。

## Evidence Missing

- 料金プラン
- ドメイン管理サービス
- DNS状態
- HOTEL JOY本番の既存サーバー有無
- パスワード付きPreviewの最適方法
- Vercel / Cloudflare / GitHub Pages の現在の制約
- Basic認証やアクセス制限の方法

## Decision Confidence

35%。

理由:
主要候補の公式Docsは一部確認済みだが、外部公開可否、料金、DNS、アクセス制限、既存サーバー有無が未確定。

## Next Research Needed

パスワード付きPreviewを最小Human Costで実現する方法を調べる。

## Preview Password Policy

Human判断:
パスワード付きPreviewならOK。
初期パスワードは `123456` で仮OK。

ただし:
`123456` は仮Preview専用。
本番・外部共有・重要情報ありの画面では使用禁止。
Secret / API Key / PAT は絶対にGitへ保存しない。

## Knowledge Compression

長いBriefはそのままConsoleへ出さない。
重要部分だけConsole_Summaryへ圧縮する。
詳細はBriefへ残す。
EvidenceはURL / 日付 / 判断理由を残す。
差分が出たらSummaryへ反映する。

## Related Brief

`06_DEPLOY/Infrastructure_Decision_Brief.md`
