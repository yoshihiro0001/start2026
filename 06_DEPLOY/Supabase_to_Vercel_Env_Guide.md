# Supabase to Vercel Environment Variables Guide

Last updated: 2026-07-06

Purpose: Supabase ProjectをVercel Projectへ安全に接続するため、公開キーとSecretを分けて扱う。

## Current State

- Supabase Organization: `evolution-factory`
- Supabase Project: `evolution-factory`
- Supabase Project URL: `https://fxqvhcryitmgsemlojme.supabase.co`
- Supabase status: Healthy
- Vercel Project: not created / not imported
- Vercel Environment Variables: not configured

## Supabase Side

1. Supabase DashboardでProject `evolution-factory` を開く。
2. Settings を開く。
3. API を開く。
4. Project URLを確認する。
5. anon public key または publishable keyを確認する。
6. service_role / secret keyはコピーしない。
7. DB passwordはコピーしない。

## Vercel Side

Vercel Project作成後:

1. Vercel Projectを開く。
2. Settings を開く。
3. Environment Variables を開く。
4. 必要な公開変数を追加する。

Suggested names:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

If using Supabase's newer publishable key naming, keep the code-side variable name consistent before adding values.

## Do Not Add To Client/Public Env

- service_role key
- secret key
- DB password
- Recovery Code
- GitHub PAT
- OpenAI API Key unless server-only and required later

## Security Notes

- anon / publishable key is public by design, but must be used with RLS.
- Do not add production/customer data before RLS is designed and verified.
- service_role / secret key is server-side only.
- Never store real values in Git, Chat, Markdown, screenshots, or MrBrain text.

## Completion Check

- Vercel Project exists.
- Public Supabase URL/key are added only as intended.
- service_role / secret key is not copied into Git/Chat/Markdown.
- RLS design is planned before real data.
