# Password Manager

## 現在状態

Password Manager choice/status is not fully recorded.

## 目的

Passwords, recovery codes, DB passwords, and service setup secrets must live outside Git and MrBrain text.

## 今やること

Choose where recovery codes and passwords are stored: Apple Passwords, 1Password, or another manager.

## 注意事項

- Do not store secrets in Markdown.
- Do not paste recovery codes into chat.
- Keep access recoverable.

## Recovery

Password Manager recovery is itself a top-level risk and must be understood before production.

## 公式Docs

- https://support.apple.com/guide/passwords/welcome/mac
- https://support.1password.com/secret-key-security/

## Human Next Action

Confirm the Password Manager used for Google / GitHub / Vercel recovery codes.
