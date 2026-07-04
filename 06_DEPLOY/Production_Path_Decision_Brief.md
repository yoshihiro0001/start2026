# Production Path Decision Brief

Last updated: 2026-07-05

## Purpose

GitHub Pages仮Previewから、より本番に近いPreview / Auth / DB / API構成へ進む道筋を選ぶ。

Humanが詳しいインフラ知識を持たなくても、スマホ確認・パスワード保護・DB/API接続・Secret管理・将来のAI API連携を比較できる状態にする。

---

## Current State

```text
Current:
GitHub Pages + simple client-side password gate

Preview URL:
https://yoshihiro0001.github.io/start2026/

Temporary password:
123456
```

This is acceptable only for non-sensitive preview.
It is not production authentication.

---

## Candidate Comparison

| Candidate | Smartphone preview | Password protection | DB connection | API connection | Auth | Secret management | GitHub integration | AI API future | Human Cost | Monthly cost | Scalability | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| GitHub Pages continuation | High | Low | None | None | None | Poor for runtime secrets | High | Low | Very low | Low | Low | Good for static console only. Not good for important data or dynamic app. |
| Vercel | High | Medium-High | Via external DB | High via Functions / app framework | Medium-High | High via project env vars | High | High | Medium | Unknown / plan dependent | High | Strong path for app preview, API, and future AI calls. Password protection details depend on plan/method. |
| Cloudflare Pages | High | High with Cloudflare Access | Via external DB | High via Functions / Workers | High with Access | High via environment variables | High | High | Medium | Unknown / plan dependent | High | Strong path when DNS / Access is ready. Good for protected preview. |
| Supabase integration | Medium | Auth built in, not hosting by itself | High | Medium-High with Edge Functions | High | High via project settings | Medium | High | Medium | Unknown / plan dependent | High | Best DB/Auth candidate; usually paired with Vercel or Cloudflare Pages. |
| Existing Laravel / HOTEL JOY server | Unknown | Unknown | Possible | Possible | Possible | Unknown | Low-Medium | Medium | High until audited | Unknown | Medium-High | Needs server inventory. Could be useful for HOTEL JOY but not first preview path. |

---

## Comparison Axis Review

### Smartphone confirmation

- GitHub Pages is already working for static preview.
- Vercel / Cloudflare Pages are better when previews become app-like.
- Existing Laravel server depends on current server access and deployment flow.

### Password protection

- GitHub Pages simple password gate is not true security.
- Vercel / Cloudflare can support stronger protection depending on plan and configuration.
- Supabase provides application auth but is not the frontend host by itself.

### DB / API / Auth

- GitHub Pages cannot run backend logic.
- Vercel / Cloudflare can host frontend + serverless/functions.
- Supabase is the strongest early DB/Auth candidate.
- Laravel server may work if HOTEL JOY already has stable infrastructure.

### Secret management

- Never commit Secret / API Key / PAT.
- Use Vercel env vars, Cloudflare environment variables, Supabase project settings, GitHub Secrets, or server `.env` depending on path.

---

## Evidence

| Source | URL | Evidence meaning | Status |
|---|---|---|---|
| GitHub Pages docs | https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages | Static site hosting and Pages concept | Recorded |
| Vercel Deployment Protection | https://vercel.com/docs/deployment-protection | Protection options for deployments | Recorded |
| Vercel Password Protection | https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection | Built-in password protection details / plan condition | Recorded |
| Cloudflare Pages docs | https://developers.cloudflare.com/pages/ | Pages hosting / functions entry point | Needs detailed research |
| Cloudflare Access docs | https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/ | Access can protect HTTP apps | Recorded |
| Supabase docs | https://supabase.com/docs | DB/Auth/Edge Functions candidate | Needs detailed research |
| Existing Laravel / HOTEL JOY server | Unknown | Need server inventory | Unknown |

---

## Provisional Recommendation

### Level 1: Continue static preview briefly

Use GitHub Pages while Human Console is static and non-sensitive.

### Level 2: Move to Vercel or Cloudflare Pages for app-like preview

When Human Console needs real status loading, preview environments, or stronger access control, move off pure GitHub Pages.

### Level 3: Add Supabase when DB/Auth is required

When Human Console needs persistent state, Approval history, Feedback Inbox, or user auth, pair Vercel / Cloudflare Pages with Supabase.

---

## Current Best Decision Point

Human should choose the next direction:

```text
Stay on GitHub Pages for a little longer
or
move toward Vercel / Cloudflare / Supabase architecture
```

---

## Human Question

GitHub Pages仮Previewのまま進めますか、Vercel / Cloudflare / Supabase構成へ進む前提で調査・実装しますか？

---

## Console Summary

- Current production path: GitHub Pages temporary preview
- Production path status: Not selected
- Distance to production: Medium-High
- Next Human Action: Choose whether to continue GitHub Pages preview or move toward Vercel / Cloudflare / Supabase
- Main risk: current password gate is not real security

---

## Self Review

- This brief does not force a platform decision.
- Evidence is partially recorded, but pricing and plan limits need current verification before paid use.
- Human Cost is reduced because the decision is narrowed to one direction question.
- GitHub Pages is good for static preview, but not enough for DB/API/Auth loops.
