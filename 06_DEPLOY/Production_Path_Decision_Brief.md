# Production Path Decision Brief

Last updated: 2026-07-05

## Decision

Recommended production path:

```text
Vercel + Supabase
```

Human judgment:
最も拡張性の高いDBを使いたい。10億円Goalを前提に、最初からDB / Auth / API / Realtime / AI API連携へ進める構成を優先する。

Therefore:

- GitHub Pages remains as temporary static preview only.
- Vercel becomes the primary frontend / API / preview platform candidate.
- Supabase becomes the primary DB / Auth / Realtime / backend data candidate.
- Cloudflare Access remains a strong production protection candidate when domain / access control becomes important.

---

## Current State

```text
Temporary preview:
GitHub Pages + simple client-side password gate

Preview URL:
https://yoshihiro0001.github.io/start2026/ (legacy preview)

Temporary password:
123456
```

This is acceptable only for non-sensitive preview.
It is not production authentication.

---

## Why Vercel + Supabase

Vercel is a strong fit for:

- Web app hosting
- Preview deployments
- GitHub-based deployment flow
- Serverless / API route style development
- Environment variables for secrets
- Future AI API integration from backend routes

Supabase is a strong fit for:

- Postgres database
- Auth
- Realtime updates
- Row Level Security
- Storage / Edge Functions when needed
- Status, task, approval, evidence, and learning data

This combination lets Human Console evolve from static HTML into a DB-backed command system.

---

## Candidate Comparison

| Candidate | Smartphone preview | Password protection | DB connection | API connection | Auth | Secret management | GitHub integration | AI API future | Human Cost | Monthly cost | Scalability | Decision |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| GitHub Pages continuation | High | Low | None | None | None | Poor for runtime secrets | High | Low | Very low | Low | Low | Keep as static temporary preview only |
| Vercel | High | Medium-High | Via Supabase or other DB | High | Medium-High | High via env vars | High | High | Medium | Needs plan check | High | Primary frontend/API candidate |
| Cloudflare Pages | High | High with Cloudflare Access | Via Supabase or other DB | High via Functions/Workers | High with Access | High | High | High | Medium | Needs plan check | High | Production protection / edge candidate |
| Supabase | Medium | Auth built in | High | Medium-High | High | High via project settings | Medium | High | Medium | Needs plan check | High | Primary DB/Auth/Realtime candidate |
| Existing Laravel / HOTEL JOY server | Unknown | Unknown | Possible | Possible | Possible | Unknown | Low-Medium | Medium | High until audited | Unknown | Medium-High | Later integration candidate |

---

## Role Separation

### GitHub Pages

Role:
Static preview only.

Use for:

- Non-sensitive Human Console preview
- Simple HTML confirmation
- Low-cost fallback URL

Do not use for:

- Production auth
- DB-backed workflow
- API execution
- Secret handling
- Customer / sales / tax / private data

### Vercel

Role:
Production app / preview / frontend / API candidate.

Use for:

- Human Console app
- API routes / server functions
- Preview deployments
- Environment variables
- Future AI API calls
- GitHub-driven deploy loop

### Supabase

Role:
DB / Auth / Realtime / persistent workflow candidate.

Use for:

- tasks
- approvals
- readiness_scores
- blockers
- evidence
- ai_runs
- learning_logs
- Realtime status updates
- Auth and Row Level Security

### Cloudflare Access

Role:
Production protection candidate.

Use when:

- preview must be externally accessible but protected
- domain access policies are needed
- Cloudflare DNS / Zero Trust setup is acceptable

---

## Evidence

| Source | URL | Evidence meaning | Status |
|---|---|---|---|
| GitHub Pages docs | https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages | GitHub Pages is static site hosting | Recorded |
| Vercel Docs | https://vercel.com/docs | Vercel platform documentation entry point | Recorded |
| Vercel Deployment Protection | https://vercel.com/docs/deployment-protection | Deployment protection and preview protection options | Recorded |
| Vercel Environment Variables | https://vercel.com/docs/environment-variables | Secret / env var handling candidate | Recorded |
| Vercel Functions | https://vercel.com/docs/functions | API / backend function candidate | Recorded |
| Supabase Docs | https://supabase.com/docs | Supabase platform documentation entry point | Recorded |
| Supabase Auth | https://supabase.com/docs/guides/auth | Auth candidate | Recorded |
| Supabase Realtime | https://supabase.com/docs/guides/realtime | Realtime status update candidate | Recorded |
| Supabase Edge Functions | https://supabase.com/docs/guides/functions | Backend function candidate | Recorded |
| Cloudflare Access docs | https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/ | Access can protect HTTP apps | Recorded |
| Existing Laravel / HOTEL JOY server | Unknown | Need server inventory | Unknown |

---

## Minimum Implementation Plan

### Step 1: Keep GitHub Pages as fallback preview

Do not remove current preview.
It remains useful for static confirmation.

### Step 2: Create Vercel project

Connect `yoshihiro0001/evolution-factory` to Vercel.
Use environment variables for secrets.
Do not commit any secret.

### Step 3: Create Supabase project

Create Supabase project for `Evolution Factory`.
Start with minimal schema:

- tasks
- approvals
- readiness_scores
- blockers
- evidence
- ai_runs
- learning_logs

### Step 4: Connect app to Supabase with safe keys

Public anon key may be used only after confirming Row Level Security and public exposure rules.
`service_role` key must never be committed or exposed to browser code.

### Step 5: Make Human Console DB-backed

Move from static JSON to Supabase-backed status:

```text
Smartphone instruction
↓
Task Queue
↓
Approval Inbox
↓
DB-backed status
↓
Auto gauge update
↓
Learning
```

---

## Human Question

Vercel project and Supabase project creationを承認しますか？

This is the next Human action.

---

## Console Summary

- Recommended Production Path: Vercel + Supabase
- GitHub Pages: Temporary static preview only
- Production Path Status: Selected direction, not connected yet
- Distance to production: Medium
- Next Human Action: Vercel / Supabase作成を承認する
- Main risk: Secret / API Key / service_role key handling

---

## Self Review

- This decision matches the 10億円Goal because it favors DB / Auth / API / Realtime / AI API expansion.
- GitHub Pages is not discarded; it remains a low-cost static preview fallback.
- Cloudflare Access is not ignored; it remains a strong protection candidate for production access control.
- Pricing and exact plan limits still require current verification before paid commitment.
- No Secret / API Key / PAT is stored in Git.
