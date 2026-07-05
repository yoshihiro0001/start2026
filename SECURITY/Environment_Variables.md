# Environment Variables

## 現在状態

.env.example exists with empty names. Runtime env values are not configured.

## 目的

Environment variables connect code to services without storing secrets in Git.

## 今やること

Use Vercel Environment Variables for real values after the Vercel project exists.

## 注意事項

- NEXT_PUBLIC_ values can be exposed to browser.
- Server-only values must not use NEXT_PUBLIC_.
- SUPABASE_SERVICE_ROLE_KEY is server-only.

## Recovery

If a variable is exposed incorrectly, rotate the key and redeploy.

## 公式Docs

- https://vercel.com/docs/environment-variables
- https://supabase.com/docs/guides/api/api-keys

## Human Next Action

Wait until Vercel project exists, then add only required values.
