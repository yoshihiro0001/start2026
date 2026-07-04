# Infrastructure Decision Brief

Last reviewed: 2026-07-04

## Purpose

HumanがDB / Server / Domain / Deploy / Auth / Secret管理を詳しく知らなくても、Evidenceに基づいて、Human Costが低く、拡張性のある本番環境を選べるようにする。

このBriefは最終決定ではなく、Infrastructure Decisionのための判断材料である。
秘密情報、GitHub PAT、API Key、Passwordは絶対に保存しない。

---

## 1. 本番環境で決めるべき項目

| 項目 | 決めること | 現在状態 | Human Cost観点 |
|---|---|---|---|
| Frontend hosting | Human Console / App / Dashboardをどこで配信するか | 未決定 | Preview URLが安定すると大きく下がる |
| Backend / API | AI Organization / Approval / DB更新をどこで動かすか | 未決定 | 最初は小さく、後で拡張したい |
| Database | 業務データ、Session、Approval、Learningをどこへ保存するか | 本番DB未定 | 管理画面付きが低負荷 |
| Auth | Human / Staff / Adminのログイン方式 | 未決定 | 自作しない方が安全で低負荷 |
| Domain / DNS | `fashionhoteljoy.com` をどこへ接続するか | ドメイン名のみ記録済み | 接続先が決まるとQR / URLが安定 |
| Secret管理 | API Key / PAT / DB URLをどこへ置くか | 未確定 | Gitへ保存禁止。GitHub Secrets等へ分離 |
| File storage | 写真、証憑、PDF、スクショの保存先 | Google Drive中心の想定 | 原本はGitに入れない |
| Background jobs | 通知、同期、定期処理、Learning収集 | 未決定 | 最初は不要。必要時に追加 |
| Monitoring | 起動確認、エラー、Preview失敗検知 | 未決定 | Humanが気付く前に検知したい |
| Backup | DB / file / config の復元 | 未決定 | 本番前に必須 |
| Cost | 初期/月額の許容範囲 | 未確認 | 無料/低額から始める |
| Security | 個人情報、売上、税務、外部送信の保護 | 未設計 | ApprovalとSecret分離が必須 |

---

## 2. 候補比較

評価: High / Medium / Low / Unknown

| 候補 | 主な役割 | Human Cost | 初期コスト | 月額コスト | 拡張性 | セキュリティ | 運用の簡単さ | GitHub連携 | スマホPreview | HOTEL JOY本番 | AI Organization / Human Console適性 | Evidence |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Vercel | Frontend / Preview / API Functions候補 | Low | Low | Needs Research | High | Medium-High | High | High | High | Medium | High | VercelはGit連携、Preview、Production環境を公式に持つ。Docs: https://vercel.com/docs/deployments, https://vercel.com/docs/deployments/environments |
| GitHub Pages | Static hosting | Low | Low | Low/Needs Research | Low-Medium | Medium | High | High | Medium | Low-Medium | Medium | GitHub Pagesはrepoをlive website化できる。Static中心。Docs: https://docs.github.com/en/pages |
| Cloudflare Pages | Static / full-stack Pages / Preview | Medium | Low | Needs Research | High | High | Medium | High | High | Medium-High | High | PagesはGit連携、preview deployments、custom domains、Workers連携候補。Docs: https://developers.cloudflare.com/pages/, https://developers.cloudflare.com/pages/configuration/preview-deployments/ |
| Cloudflare Tunnel | Local preview / temporary sharing / private access | Medium | Low | Needs Research | Medium | High | Medium | Low-Medium | High | Medium | High for preview delivery | Tunnelはlocal環境を外部接続する候補。Docs: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/ |
| Supabase | Postgres DB / Auth / Storage / Edge Functions候補 | Low-Medium | Low | Needs Research | High | Medium-High | High | Medium | Medium | High | High | Supabase projectはfull Postgres DBを持ち、Auth/Storage/Realtime/Edge Functionsと統合。Docs: https://supabase.com/docs/guides/database/overview, https://supabase.com/docs/guides/auth |
| Laravel既存サーバー | 既存PHP/Laravel資産活用 | Unknown | Unknown | Unknown | Medium | Depends | Medium-Low | Medium | Low-Medium | High if existing ops | Medium | Laravel deployはPHP extensions, Nginx/public root, `.env`, optimize等が必要。既存サーバー情報はUnknown。Docs: https://laravel.com/docs/12.x/deployment |
| VPS | 自由度高い自前server | High | Medium | Medium | High | Depends | Low | Low-Medium | Low | Medium-High | Low-Medium | Provider未選定。運用・監視・backup・securityを自分で見る必要あり。Needs Research |
| Managed database | Supabase / Neon / RDS等 | Low-Medium | Low-Medium | Needs Research | High | High | Medium-High | Medium | N/A | High | High | 具体サービス未選定。Supabaseは候補。Neon/RDS等はNeeds Research |
| GitHub Actions | CI/CD / deploy automation / checks | Medium | Low | Needs Research | High | Medium-High | Medium | Native | N/A | Medium | High | GitHub ActionsはCI/CD workflowをrepo内で実行でき、Secrets機能あり。Docs: https://docs.github.com/en/actions, https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets |

---

## 3. 比較軸の結論

### Human Cost

最も低い順の仮説:

1. GitHub Pages for static preview
2. Vercel for Preview + Production frontend
3. Cloudflare Pages for Preview + domain + Cloudflare ecosystem
4. Supabase for DB / Auth / Storage
5. VPS / Laravel既存サーバーは、既存運用情報が揃うまでHuman Cost高め

### 初期コスト

最小PreviewだけならGitHub PagesまたはVercel / Cloudflare Pagesが低い。
本番App + API + DB + Authに進むなら、FrontendとBackend/DBを分けて考える。

### 月額コスト

現時点では具体金額を断定しない。
価格は変更されるため、次回Decision前に公式Pricingを確認する。

Pricing Evidence to research:

- Vercel Pricing: https://vercel.com/pricing
- Cloudflare Pages Pricing: https://developers.cloudflare.com/pages/platform/limits/
- Supabase Pricing: https://supabase.com/pricing
- GitHub Billing / Pages / Actions: https://docs.github.com/en/billing

### 拡張性

Human Console / Developer Factory / AI Organizationを考えるなら、静的HTMLだけでは足りない。
将来的には以下が必要になる。

- Auth
- DB
- API
- Approval Inbox
- Feedback Inbox
- Execution Log
- Learning Log
- Background jobs

そのため、Level 3では Supabase + Vercel / Cloudflare Pages が自然な候補。

### Security

最重要:

- GitHub PAT / API Key / DB passwordはGitへ保存しない
- `.env` はlocalのみ
- GitHub ActionsはGitHub Secretsを使う
- ProductionとPreviewのSecretを分ける
- HOTEL JOYの売上、個人情報、税務、外部送信はApproval必須

GitHub Secretsはrepository / environment / organization単位で保存できる。Evidence: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets

---

## 4. 推奨案

### Level 1: 最小Preview環境

推奨: GitHub Pages または Vercel static preview

目的:
Human Consoleをスマホで毎回安定して開けること。

仮推奨:

- まずは GitHub Pages で `start2026` の静的Previewを公開
- 理由: GitHub repoと直結し、Human Costが低い
- 制約: API / DB / Authは基本なし。公開範囲に注意

代替:

- Vercel Drop / Git連携Preview
- Cloudflare Pages

Decision:
外部公開してよいかをHumanに確認する。

### Level 2: 常時Preview + Human Console

推奨: Vercel or Cloudflare Pages

目的:
Human Console / Developer Dashboard / Mobile Design Studioを常時Preview URLで見られるようにする。

仮推奨:

- Vercel: Preview / Production環境の概念が明確で、GitHub連携が強い
- Cloudflare Pages: preview deploymentsとCloudflare Access候補がある

比較:

- Vercel: Design / App / Dashboard開発に自然
- Cloudflare: domain / DNS / access / tunnelまで一体化しやすい

Decision:
`fashionhoteljoy.com` のDNSをどこで管理しているか確認する。

### Level 3: 本番App + API + DB + Auth

推奨: Vercel or Cloudflare Pages + Supabase

目的:
Human Consoleを本番Appへ進化させ、Approval / Mission / Feedback / Learningを保存する。

構成候補:

```text
Frontend: Vercel or Cloudflare Pages
API: Vercel Functions / Cloudflare Workers / Supabase Edge Functions
Database: Supabase Postgres
Auth: Supabase Auth
File Storage: Google Drive initially, Supabase Storage later if app-connected storage is needed
Secrets: GitHub Secrets / Vercel env / Cloudflare env / Supabase dashboard
Monitoring: Platform logs + later external monitoring
Backup: Supabase backup policy + Drive original storage
```

理由:

- SupabaseはPostgres / Auth / Storage / Edge Functionsの統合候補
- 自前VPSよりHuman Costが低い
- HOTEL JOY本番ではDBとAuthを最初から分離・管理できる

保留:

- Laravel既存サーバーは、既存資産や運用者がいるなら強いが、現時点では情報不足
- VPSは自由度が高いが、Human Costと運用負担が高い

---

## 5. Humanに聞く質問（最大3つ）

1. Previewは外部公開してよいですか。
   - Yes / No / パスワード付きならOK

2. 月額いくらまで許容ですか。
   - 0円優先 / 1,000〜3,000円 / 5,000円以上も可

3. HOTEL JOY本番環境と start2026 実験環境は分けますか。
   - 分ける / 最初は同じでよい / 任せる

---

## 6. Human Consoleに表示すべき要約

推奨Preview方式:

```text
Level 1はGitHub PagesまたはVercel static preview。
外部公開可否を確認してから決定。
```

次に必要な承認:

```text
Previewを外部公開してよいか。
```

未調査Evidence:

```text
料金プラン、ドメイン管理サービス、DNS状態、HOTEL JOY本番の既存サーバー有無。
```

リスク:

```text
Preview URLを公開すると、Human Consoleや開発中UIが外部から見える可能性がある。
秘密情報は絶対に置かない。
```

Next Action 1つ:

```text
Previewは外部公開してよいかを決める。
```

---

## 7. Evidence Links

- Vercel Deployments: https://vercel.com/docs/deployments
- Vercel Environments: https://vercel.com/docs/deployments/environments
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
- GitHub Pages: https://docs.github.com/en/pages
- GitHub Actions: https://docs.github.com/en/actions
- GitHub Actions Secrets: https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Cloudflare Pages Preview Deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare Tunnel: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
- Supabase Database: https://supabase.com/docs/guides/database/overview
- Supabase Auth: https://supabase.com/docs/guides/auth
- Laravel Deployment: https://laravel.com/docs/12.x/deployment

---

## 8. 自己レビュー

推奨が思い込みになっていないか:
一部仮説である。Vercel / Cloudflare / Supabaseは公式Docsを確認したが、料金、ドメイン管理、既存サーバー、HOTEL JOY本番要件は未確認。

Evidence欄があるか:
ある。各候補に公式Docs URLまたはNeeds Researchを残した。

Human Costは下がるか:
下がる。HumanはDB / Server / Authを細かく理解しなくても、Level 1 / 2 / 3のどこを決めるか分かる。

本番環境までの道筋が明確か:
明確。まずPreview公開可否を決め、次にPreview方式、最後にDB / Auth / APIを決める。

Next Best Action:

```text
Previewは外部公開してよいかを決める。
```
