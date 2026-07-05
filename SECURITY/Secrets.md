# Secrets Policy

## 現在状態

No production secrets are stored in this repo. .env.example contains names only.

## 目的

Secrets must be separated from source code, chat, and MrBrain Markdown.

## 今やること

Keep real values in Vercel Environment Variables, password manager, or provider consoles.

## 注意事項

- Do not commit API keys, PAT, service_role, database password, recovery codes.
- If a secret appears in Git, rotate it.

## Recovery

Rotate leaked secrets and record the incident in Learning Log.

## 公式Docs

- https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning
- https://vercel.com/docs/environment-variables

## Human Next Action

Before adding any key, decide whether it is client-side or server-side.
