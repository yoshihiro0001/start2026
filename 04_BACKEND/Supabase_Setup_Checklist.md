# Supabase Setup Checklist

Last updated: 2026-07-06

## Purpose

Human Consoleをスマホ承認・Task Queue・DB-backed statusへ進めるため、Supabase作成から安全確認までを最小手順にする。

---

## 1. Project作成

- [x] Supabase accountへログイン
- [x] Organization `evolution-factory` を作成
- [x] Project `evolution-factory` を作成
- [x] Region: Oceania (Sydney) / ap-southeast-2
- [x] Compute: Nano
- [x] Project URLを記録: `https://fxqvhcryitmgsemlojme.supabase.co`
- [ ] anon / publishable keyを確認
- [ ] service_role / secret keyをコピーしないことを確認
- [ ] DB passwordはPassword Manager / Bitwardenのみへ保存

---

## 2. Database Schema

最小テーブル案は `04_BACKEND/Task_Queue_Schema.md` を正本にする。

最初に必要なテーブル:

- tasks
- approvals
- comments
- readiness_scores
- blockers
- ai_runs
- learning_logs

---

## 3. Auth

- [ ] Supabase Authを有効化
- [ ] 最初はHuman本人だけが使う前提で設計
- [ ] Email login / magic link / password loginのどれを使うか決める
- [ ] `123456` は使わない。これはGitHub Pages仮Preview専用

---

## 4. RLS

- [ ] Row Level Securityを有効化
- [ ] tasks / approvals / readiness_scores / blockers にRLS方針を作る
- [ ] anon keyで見えてよい範囲を明確化
- [ ] service_role keyが必要な処理はサーバー側だけで扱う

---

## 5. Env Vars

`.env.example` に名前だけ置く。
実値はGitへ保存しない。

Required names:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
```

Where to store real values:

- Local dev: `.env.local`
- Vercel: Project Environment Variables
- Supabase: Project settings
- GitHub Actions: GitHub Secrets if needed
- Password Manager: human-managed credentials

---

## 6. Local Dev

- [ ] Frameworkを選ぶ。候補: Next.js on Vercel
- [ ] `.env.local` を作る。Gitへ保存しない
- [ ] Supabase clientを接続
- [ ] Read-onlyで readiness_scores を読む最小動作から始める

---

## 7. Deploy

- [ ] Vercel projectをGitHub repoへ接続
- [ ] Vercel Environment Variablesへ実値を登録
- [ ] Preview deploymentを確認
- [ ] Production deployment前にAuth / RLSを確認

---

## 8. Security Check

- [ ] `SUPABASE_SERVICE_ROLE_KEY` がGitに無い
- [ ] `OPENAI_API_KEY` がGitに無い
- [ ] Browser codeにservice_role keyが出ていない
- [ ] anon keyで見えるDB範囲をRLSで制限している
- [ ] 本番・重要情報あり画面で `123456` を使っていない
- [ ] 顧客情報 / 売上 / 税務 / 契約 / 個人情報を仮Previewに置いていない

---

## Next Minimum Step

Supabase Project Settings / APIでProject URLとanon/publishable keyを確認し、Vercel Environment Variablesへ接続する準備をする。service_role / secret keyはGit・Chat・Markdownへ保存しない。
