# Human Setup Guide: Vercel + Supabase

Last updated: 2026-07-05

## Purpose

HumanがVercel / Supabaseを初めて作る場合でも、迷わず最小手順で進めるためのGuide。

Goal:
スマホ承認、Task Queue、DB-backed Gauge更新へ進むため、Vercel projectとSupabase projectを作る。

---

## Human Next Action

```text
Vercel / Supabase project作成を進める。
```

---

## Vercel 最短手順

1. Vercelにログインする。
2. GitHub連携を確認する。
3. `yoshihiro0001/start2026` をImportする。
4. まずDeployする。
5. Preview URLを取得する。
6. Environment Variablesは、実値をVercel管理画面に入れる。Gitには入れない。

HumanがCodexへ渡してよいもの:

- Vercel Project URL
- Vercel Preview URL

HumanがCodexへ渡さないもの:

- Vercel token
- Secret
- API key
- private env values

---

## Supabase 最短手順

1. Supabaseにログインする。
2. New projectを作る。
3. Project name: `start2026`
4. Region: Japanまたは近い地域を選ぶ。
5. Database passwordを作成し、Password Managerへ保存する。
6. Project URLを取得する。
7. Publishable key または legacy anon keyを取得する。
8. Secret key または legacy service_role keyは確認しても、絶対にGitへ保存しない。

HumanがCodexへ渡してよい可能性があるもの:

- Supabase Project URL
- Supabase publishable key
- Supabase legacy anon key

ただし、publishable / anon keyは、RLS設計と公開範囲を確認してから扱う。

HumanがCodexへ渡さないもの:

- Supabase secret key
- Supabase legacy service_role key
- Database password
- private token

---

## Supabase API Keyの違い

Supabase API keysには、扱いが違う種類がある。

### Client-side用

- publishable key
- legacy anon key

用途:
Browser / client-sideから使う可能性がある。
ただし、公開される前提で扱い、Row Level Securityとセットで設計する。

### Server-side用

- secret key
- legacy service_role key

用途:
Server-sideだけで使う。
Browserへ出さない。
Gitへ保存しない。
Codexへ貼らない。
Vercel Environment VariablesやPassword Managerで管理する。

---

## 迷った時の答え

### Vercel / Supabaseを作ったことがない

このGuideの順番通りでよい。
まず空の`start2026`だけ接続する。
重要情報は入れない。

### どの情報をCodexへ渡す？

渡してよい候補:

- Vercel Project URL
- Vercel Preview URL
- Supabase Project URL
- Supabase publishable key / legacy anon key

渡さない:

- service_role key
- secret key
- Database password
- API Key
- PAT

### 怖い

まず空の`start2026`だけ接続する。
顧客情報、売上、税務、契約、個人情報は入れない。
RLS / Authができるまで重要情報は保存しない。

---

## Safety Checklist

- [ ] `123456` はGitHub Pages仮Preview専用と理解した
- [ ] 本番や重要情報ありの画面で `123456` を使わない
- [ ] Secret / API Key / PATをGitへ保存しない
- [ ] service_role / secret keyをCodexへ貼らない
- [ ] Supabase publishable / anon keyはRLS設計とセットで扱う
- [ ] まず空のstart2026だけ接続する

---

## Next Step After Creation

Humanが次を共有する。

```text
Vercel Project URL:
Supabase Project URL:
Supabase publishable / anon key:
```

Secret / service_role keyは共有しない。
