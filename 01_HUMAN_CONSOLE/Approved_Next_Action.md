# Approved Next Action

Last updated: 2026-07-05

## Approval State

Human selected the production direction:

```text
Vercel + Supabase
```

GitHub Pages remains temporary static preview only.

## Codex Next Task

Prepare the minimum Vercel + Supabase connection path.

## Human Next Action

Vercel / Supabase作成を承認する。

## Why

Human wants the most extensible DB-backed structure for the 10億円Goal, with DB / Auth / API / Realtime / AI API integration available from the beginning.

## Related Files

- `06_DEPLOY/Production_Path_Decision_Brief.md`
- `02_WORKFLOWS/Smartphone_Command_Loop.md`
- `04_BACKEND/Supabase_Minimum_Schema.md`
- `03_STATUS/readiness.json`

## Secret Policy

Secrets must not be committed.

Never commit:

- GitHub PAT
- API Key
- Password for production
- DB URL if private
- Supabase service_role key
- Private token
- Customer data
- Sales/tax/private files

## Supabase Key Policy

- Supabase anon key may be public only after exposure and RLS rules are confirmed.
- Supabase service_role key must never be committed or exposed to browser code.

## Safety Note

`123456` is temporary preview only.
Do not use it for production, important information, or external sharing with sensitive content.
