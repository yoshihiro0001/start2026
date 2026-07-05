# GitHub Security

## 現在状態

Repository connected: yoshihiro0001/evolution-factory. 2FA / passkey / SSH / PAT inventory status is not confirmed.

## 目的

GitHub stores source, history, Pages preview, and future Actions. Account takeover can alter code or leak secrets.

## 今やること

Confirm GitHub 2FA, recovery codes, passkey, SSH keys, and PAT inventory.

## 注意事項

- Fine-grained PATs should be preferred where possible.
- Remove unused tokens and SSH keys.
- Never commit tokens.

## Recovery

Save GitHub recovery codes in Password Manager, not in repository.

## 公式Docs

- https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
- https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys
- https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## Human Next Action

After Google Recovery, confirm GitHub 2FA and recovery codes.
