# Console Summary: Infrastructure Decision

Last updated: 2026-07-05
Source brief: `06_DEPLOY/Infrastructure_Decision_Brief.md` / `06_DEPLOY/Preview_Deployment_Decision.md`

## Current Decision

Human Consoleをスマホで安定して開けるため、発行済みPreview URLをスマホで開き、password gateを確認する。

## Recommendation

Level 1:
GitHub Pages + simple client-side password gate。Preview URL issued: `https://yoshihiro0001.github.io/start2026/`

Level 2:
Vercel または Cloudflare Pagesで常時Preview + Human Console。

Level 3:
Vercel または Cloudflare Pages + Supabaseで、本番App + API + DB + Auth。

## Human Next Action

スマホでPreview URLを開き、password 123456で入れるか確認する。

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
- Deployment: 35%
- Security: 20%
- Profit Validation: 20%
- Automation: 10%
- AI Resource Optimization: 5%
- Evidence Confidence: 40%

Current interpretation:
Purpose / Architecture / Designは進んでいるが、Runtime / Security / Profit Validation / Automation / AI Resource Optimizationが弱い。Deploymentはpassword gate追加とGitHub Pages URL発行により35%へ進んだが、実機確認は未完了。

## Evidence Completed

- Vercel / GitHub Pages / Cloudflare Pages / Cloudflare Tunnel / Supabase / GitHub Actionsの公式Docs URLをBriefに記録済み。
- `fashionhoteljoy.com` はドメイン候補として記録済み。
- Secret / API Key / GitHub PATをGitへ保存しない方針を記録済み。

## Evidence Missing

- 料金プラン
- ドメイン管理サービス
- DNS状態
- HOTEL JOY本番の既存サーバー有無
- GitHub Pagesのbuild反映状態
- Vercel / Cloudflare / GitHub Pages の現在の制約
- Basic認証やアクセス制限の方法

## Decision Confidence

45%。

理由:
仮Preview方式はGitHub Pages + simple password gateに決定済みで、Preview URLも発行済み。ただしスマホ実機確認、DNS、料金、アクセス制限、既存サーバー有無は未確定。

## Next Research Needed

スマホでPreview URLを開き、password 123456で入れるか確認する。

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

Human Consoleをスマホで安定して開ける、スマホでPreview URLを開き、password 123456で入れるか確認する。

Reason:
Preview URLは公開済み。次はスマホ実機で開けることを確認し、Human Consoleを常時入口にする。

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
`https://yoshihiro0001.github.io/start2026/`

Important:
This is temporary non-sensitive preview only. It is not production auth.


---

## Security Foundation Summary

Current Decision:
Security Foundation Sprintを開始する。

Recommendation:
機能追加より先に、Google Account Recovery / Password Manager / Recovery Codes / Secrets方針を固める。

Human Next Action:
Google Account Security Checkup and Recoveryを完了する。

Risk:
Recovery未整備。上流Identityを失うとGitHub / Vercel / Supabase / Cloudflareへ連鎖する。

Evidence Status:
SECURITY台帳作成済み。実設定完了は未確認。

Related Files:

- SECURITY/README.md
- 06_DEPLOY/Security_Roadmap.md
- 99_LEARNING/Reality_Navigation_Log.md
