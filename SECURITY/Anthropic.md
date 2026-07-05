# Anthropic API Security

## 現在状態

API key not configured.

## 目的

Anthropic may be one of the AI brains for review / reasoning. Keys must be protected like OpenAI keys.

## 今やること

Do not create or paste API keys until server-side route and env handling are ready.

## 注意事項

- Never commit API keys.
- Use environment variables.
- Rotate keys if exposed.

## Recovery

If a key leaks, revoke it and regenerate from the official console.

## 公式Docs

- https://docs.anthropic.com/en/api/getting-started
- https://console.anthropic.com/settings/keys

## Human Next Action

Keep pending until AI Resource Optimization chooses where Anthropic is needed.
