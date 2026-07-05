# SECURITY

Purpose:
Humanが「どう守るか」で止まらないように、Identity / Security / Recovery / Secret / RiskをHumanが読める粒度で管理する。

Current Security Foundation Sprint:

- Identityを確認する
- Recoveryを固める
- SecretsをGitから分離する
- Human Navigatorで設定画面の停止を減らす
- 10億円規模へ進む前にHuman Riskを見える化する

Current Highest Risk:
Recovery未整備

Current Highest ROI:
Google Account Recovery完成

Human Next Action:
Google Account Security Checkupを完了し、Recovery方法をPassword Managerへ保存する。

Security Readiness:

| Area | Readiness |
|---|---:|
| Identity | 35% |
| Google | 70% |
| GitHub | 40% |
| Vercel | 20% |
| Supabase | 0% |
| Secrets | 0% |
| Recovery | 10% |
| Password Manager | 15% |
| Overall | 22% |

Important:
Secret / API Key / PAT / Recovery Code / Database passwordはGitへ保存しない。
