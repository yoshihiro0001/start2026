# Supabase Security

## 現在状態

Project not created. RLS / Auth / keys are not configured.

## 目的

Supabase will store tasks, approvals, readiness scores, blockers, evidence, ai runs, and learning logs.

## 今やること

Create project only after Vercel import or in parallel; do not add important data until RLS is designed.

## 注意事項

- Publishable / anon key is client-side candidate and must be paired with RLS.
- Secret / service_role key is server-side only.
- Database password belongs in Password Manager.

## Recovery

Save database password and recovery details in Password Manager only.

## 公式Docs

- https://supabase.com/docs/guides/api/api-keys
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth

## Human Next Action

After Vercel import, create Supabase project and record only safe public values.
