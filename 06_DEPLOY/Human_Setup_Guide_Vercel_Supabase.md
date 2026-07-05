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

## Naming / Identity

Current official project identity:

```text
Project Name: Evolution Factory
Role: AI Development Factory
```

Legacy repository:

```text
yoshihiro0001/start2026
```

Long-term naming rule:
年号依存の新規命名は禁止。意味で命名する。

Suggested values:

| Input | Suggested Value | Copy |
|---|---|---|
| Vercel Project Name | Evolution Factory / evolution-factory | `evolution-factory` |
| Vercel Team URL | evolution-factory-jp | `evolution-factory-jp` |
| Supabase Project Name | Evolution Factory / evolution-factory | `evolution-factory` |
| GitHub Repository | yoshihiro0001/start2026 | `yoshihiro0001/start2026` |
| Environment | preview | `preview` |
| Region | Japanまたは近い地域 | `Japan or nearby` |

---

## Vercel Onboarding

Human judgment:
VercelはまずHobbyで開始してよい。
商用化・顧客データ・本番運用へ進む段階でPro以上を再検討する。
Googleログインで開始済み。

Steps:

1. VercelにGoogleログインする。
2. Hobby / Personal projectで開始する。
3. Team URLを聞かれたら `evolution-factory-jp` を使う。
4. 2FAが出た場合は、Human Navigator Guideに従って完了する。
5. GitHub連携を確認する。
6. Repository `yoshihiro0001/start2026` をImportする。
7. Project nameは `evolution-factory` を推奨する。
8. Frameworkは静的HTMLならOther、またはVercelの自動判定に任せる。
9. Deployする。
10. 発行されたURLをHuman Consoleへ反映する。

注意:
Hobbyは検証用。
商用化、顧客データ、本番DB、外部ユーザー利用へ進む時はPro以上を再検討する。

---

## Vercel 2FAで止まった場合

Human Navigator Guide:

```text
06_DEPLOY/Human_Navigator_Vercel_2FA_Guide.md
```

Current Screen:
Authenticator App QR Code

Humanがやること:

1. Google AuthenticatorまたはiPhone標準パスワードアプリを開く。
2. MacのVercel画面に出ているQRコードをスキャンする。
3. 認証アプリに表示された6桁コードをMacのVercel入力欄へ入れる。
4. QRが読めない場合は、Vercel画面の英数字キーを認証アプリへ手入力する。
5. Recovery Codeが表示されたらPassword Managerへ保存する。
6. 次はGitHub repo importへ進む。

注意:
Recovery Code、英数字キー、SecretはGit / Chat / MrBrain本文へ保存しない。

---

## Security Roadmap Reference

Security Roadmap:

```text
06_DEPLOY/Security_Roadmap.md
```

Current Security Level:

```text
Prototype
```

Next Security Action:

```text
VercelにGitHub repoをImportする
```

---

## Vercel 最短手順

1. Vercelにログインする。
2. GitHub連携を確認する。
3. `yoshihiro0001/start2026` をImportする。
4. Project nameは `evolution-factory` を推奨する。
5. まずDeployする。
6. Preview URLを取得する。
7. Environment Variablesは、実値をVercel管理画面に入れる。Gitには入れない。

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

---

## Human Setup Intelligence運用

今後、Vercel / Supabase / Cloudflare / OpenAI / Anthropic / Google / GitHubなど、何か登録する時は必ずGuideへ残す。

残す項目:

- Humanが入力する内容
- Suggested Value
- コピー用
- 注意事項
- Codexへ渡してよい情報
- Codexへ渡してはいけない情報

目的:
Humanが名前、Region、Repository、Environment、Domainで止まらないようにする。

---

## Vercel / Supabase Security Notes

Vercel:

- Environment Variablesはコード外で管理する。
- Sensitive Environment Variablesは本番Secretで検討する。
- Vercel AuthenticationはDeployment保護候補。
- Password ProtectionはPro add-on / Enterprise条件があるため、採用前に確認する。

Supabase:

- client-side: publishable key または legacy anon key。
- server-side: secret key または legacy service_role key。
- server-side keyはGitへ保存しない。ブラウザへ出さない。Codexへ貼らない。
- publishable / anon keyはRLS設計とセットで扱う。
