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

## Related Brief

`06_DEPLOY/Infrastructure_Decision_Brief.md`
