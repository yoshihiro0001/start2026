# Security Roadmap

Last updated: 2026-07-05

## Purpose

今は最短で開発ループを回す。
ただし将来、顧客情報・売上・API Key・本番DBを扱う段階で安全に移行できるよう、セキュリティ強化の道筋を残す。

Human judgment:

- VercelはまずHobbyで開始してよい。
- 商用化・顧客データ・本番運用へ進む段階でPro以上を再検討する。
- Googleログインで開始済み。
- セキュリティは今すぐ完璧化せず、段階的に強化する。

---

## Level 0: GitHub Pages仮Preview + 仮Password

Current:

- GitHub Pages
- client-side password gate
- password: `123456`

Use only for:

- static preview
- non-sensitive UI confirmation

Do not use for:

- customer data
- sales data
- production DB
- API Key
- external users

---

## Level 1: Vercel Hobby Preview + GitHub連携

Purpose:
Development preview and GitHub-based deployment.

Human setup:

- Vercel Hobby / Personal projectで開始
- GitHub repoをImport
- Environment VariablesはVercel dashboardへ入れる
- SecretはGitへ保存しない

Current plan:

```text
Vercel Project: evolution-factory
Repository: yoshihiro0001/evolution-factory
```

---

## Level 2: Vercel Authentication / Cloudflare Access検討

Use when:

- previewを外部共有する
- important internal screensを扱う
- external usersが見る

Notes:

- Vercel Authentication is available as a deployment protection method.
- Vercel Password Protection has plan/add-on conditions and must be checked before adoption.
- Cloudflare Access is a strong candidate for protected access when DNS / Access setup is ready.

---

## Level 3: Supabase Auth + RLS

Use when:

- tasks
- approvals
- readiness_scores
- blockers
- evidence
- ai_runs
- learning_logs

をDBに保存する。

Rules:

- Row Level Securityを有効化する
- anon / publishable keyはRLSとセットで扱う
- secret / service_role keyはserver-side専用
- important dataを入れる前にRLSを確認する

---

## Level 4: Secrets管理 / Env Vars / server-only処理

Rules:

- `.env.example` には名前だけ置く
- real valuesはGitへ保存しない
- Vercel Environment Variablesへ保存する
- Supabase service_role / secret keyはbrowserに出さない
- AI API keyはserver-only routeから使う

---

## Level 5: 本番監査 / Backup / Monitoring / Incident Plan

Use when:

- commercial operation starts
- customer data is stored
- sales / tax / contract data is stored
- production DB is used
- external users access the system

Required:

- backup policy
- monitoring
- incident plan
- access review
- key rotation
- audit log
- paid plan review

---

## Upgrade Trigger

Reconsider Vercel Pro or stronger protection when any of these happen:

- 収益化
- 顧客データ
- 本番DB
- 外部ユーザー利用
- API Keyを使う本番処理
- 売上 / 税務 / 契約 / 個人情報

---

## Current Security Level

```text
Prototype
```

Next Security Action:

```text
Google Account Security Checkup and Recoveryを完了する
```

---

## Vercel Security Notes

- Environment Variablesはコード外で管理する。
- 実値はVercel Project SettingsのEnvironment Variablesへ入れる。
- Sensitive Environment Variablesは、作成後に値を見えにくくする運用ができるため、本番Secretで検討する。
- Vercel Authenticationは、Preview / Deployment保護の候補として扱う。全プランで利用可能な保護手段としてまず確認する。
- Password ProtectionはPro add-on / Enterprise向けの条件があるため、今は採用前にPlan条件を確認する。

Official docs:

- Vercel Environment Variables: https://vercel.com/docs/environment-variables
- Vercel Sensitive Environment Variables: https://vercel.com/docs/environment-variables/sensitive-environment-variables
- Vercel Authentication: https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication
- Vercel Password Protection: https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection

---

## Supabase Security Notes

Supabase API keysはclient-side用とserver-side用で扱いが違う。

Client-side candidate:

- publishable key
- legacy anon key

扱い:
公開される前提。Row Level Securityとセットで扱う。

Server-side only:

- secret key
- legacy service_role key

扱い:
サーバー側専用。Gitへ保存しない。ブラウザへ出さない。Codexへ貼らない。

Official docs:

- Supabase API Keys: https://supabase.com/docs/guides/api/api-keys

---

## Security Foundation Sprint

Purpose:
Identity / Security / Recovery / Secret / Riskを固め、10億円規模へ進む前の土台を作る。

Human Costだけでは足りないため、Human Riskを明示する。

Human Risk examples:

- 全部失う可能性
- アカウント乗っ取り
- Recovery不能
- 秘密漏洩
- 権限ミス

Current Highest Risk:
Recovery未整備

Next Security Action:
Google Account Security Checkup and Recoveryを完了する。

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

---

## Security Foundation Levels

今回のSprintでは、以下を上流Identityから順に固める。

| Level | Target | Foundation |
|---|---|---|
| Level 1 | Google Account | Passkey / 2FA / Recovery / Security Checkup |
| Level 2 | GitHub | Passkey / 2FA / Recovery / SSH / PAT整理 |
| Level 3 | Vercel | 2FA / Recovery / Environment Variables |
| Level 4 | Supabase | 2FA / RLS / Secrets |
| Level 5 | Cloudflare | DNS / Zero Trust |
| Level 6 | OpenAI / Anthropic | API Key / Rotation |

Current Next Level:
Level 1 Google Account Recoveryを完了する。
