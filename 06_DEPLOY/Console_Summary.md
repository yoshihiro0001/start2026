# Console Summary: Infrastructure Decision

Last updated: 2026-07-05
Source brief: `06_DEPLOY/Infrastructure_Decision_Brief.md` / `06_DEPLOY/Preview_Deployment_Decision.md`

## Current Decision

Human Consoleをスマホで安定して開けるため、仮Preview環境を作成してURLを発行する。

## Recommendation

Level 1:
GitHub Pages + simple client-side password gate。

Level 2:
Vercel または Cloudflare Pagesで常時Preview + Human Console。

Level 3:
Vercel または Cloudflare Pages + Supabaseで、本番App + API + DB + Auth。

## Human Next Action

Preview環境を作成してURLを発行する。

## Risk

Previewを外部公開すると、Human Consoleや開発中UIが外部から見える可能性がある。
今回のpassword gateはclient-sideの仮保護であり、本番保護ではない。
Secret / API Key / GitHub PAT / Password は絶対にGitへ保存しない。

## Evidence Status

Confirmed:
- Vercel / GitHub Pages / Cloudflare Pages / Cloudflare Tunnel / Supabase / GitHub Actionsの公式Docs URLをBriefに記録済み。

Needs Research:
- 料金プラン
- ドメイン管理サービス
- DNS状態
- HOTEL JOY本番の既存サーバー有無
- Preview外部公開は「パスワード付きならOK」
- GitHub Pages + simple password gateを仮Preview方式として採用

## Current Readiness

- Overall Readiness: 35%
- Purpose / Philosophy: 90%
- Architecture: 85%
- Human Console: 45%
- Design System: 65%
- Developer Factory: 30%
- Runtime Intelligence: 5%
- Evidence System: 25%
- Strategy Loop: 40%
- Infrastructure: 30%
- Deployment: 25%
- Security: 20%
- Profit Validation: 20%
- Automation: 10%
- AI Resource Optimization: 5%
- Evidence Confidence: 40%

Current interpretation:
Purpose / Architecture / Designは進んでいるが、Runtime / Security / Profit Validation / Automation / AI Resource Optimizationが弱い。Deploymentはpassword gate追加により25%へ進んだが、GitHub Pages URLは未発行。

## Evidence Completed

- Vercel / GitHub Pages / Cloudflare Pages / Cloudflare Tunnel / Supabase / GitHub Actionsの公式Docs URLをBriefに記録済み。
- `fashionhoteljoy.com` はドメイン候補として記録済み。
- Secret / API Key / GitHub PATをGitへ保存しない方針を記録済み。

## Evidence Missing

- 料金プラン
- ドメイン管理サービス
- DNS状態
- HOTEL JOY本番の既存サーバー有無
- GitHub Pagesの有効化状態
- Vercel / Cloudflare / GitHub Pages の現在の制約
- Basic認証やアクセス制限の方法

## Decision Confidence

40%。

理由:
仮Preview方式はGitHub Pages + simple password gateに決定済み。ただしGitHub Pages URL、DNS、料金、アクセス制限、既存サーバー有無は未確定。

## Next Research Needed

GitHub Pagesを有効化し、Human ConsoleのPreview URLを発行する。

## Preview Password Policy

Human判断:
パスワード付きなら外部Preview OK。
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

## AI Resource Status

Current:
AI Resource Optimizationは5%。
まだ高性能AI / Codex / Cursor / script / Research Brainの使い分けは運用前。

Policy:
- High Reasoning: GPT / Claudeなど高性能AI
- Code Execution: Codex / Cursor
- Cheap Repetitive Task: 低コストAI / script
- Search / Research: Web / official docs / Research Brain
- Image / Design: Vision / Design Brain
- Review / Critique: Meta Evaluation Brain

Evaluation axis:
Reasoning Depth / Accuracy Need / Cost / Speed / Risk / Privacy / Repeatability / Human Cognitive Load。

## Next Highest ROI Action

Human Consoleをスマホで安定して開ける、Preview環境を作成してURLを発行する。

Reason:
password gateは追加済み。次はGitHub Pages URLを確定し、スマホで常時開ける状態にすることがHuman Cognitive Loadを最も下げる。

## Related Brief

`06_DEPLOY/Infrastructure_Decision_Brief.md`


## Preview Deployment Summary

Selected method:
GitHub Pages + simple client-side password gate.

Password Protected:
Yes.

Temporary Password:
`123456`

Preview URL:
Pending. Expected candidate after GitHub Pages is enabled:
`https://yoshihiro0001.github.io/start2026/`

Important:
This is temporary non-sensitive preview only. It is not production auth.
