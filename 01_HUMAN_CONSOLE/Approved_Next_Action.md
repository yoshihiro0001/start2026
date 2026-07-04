# Approved Next Action

Last updated: 2026-07-05

## Approval

Human approved password protected preview.

## Temporary Password

```text
123456
```

## Codex Next Task

Preview環境を作成し、Human Consoleをスマホで開けるURLを発行する。

Current implementation target:

```text
GitHub Pages + simple client-side password gate
```

## Secret Policy

Secrets must not be committed.

Never commit:

- GitHub PAT
- API Key
- Password for production
- DB URL
- Private token
- Customer data
- Sales/tax/private files

## Safety Note

`123456` is temporary preview only.
Do not use it for production, important information, or external sharing with sensitive content.
