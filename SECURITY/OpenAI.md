# OpenAI API Security

## 現在状態

API key not configured. OPENAI_API_KEY exists only as an empty name in .env.example.

## 目的

OpenAI may power AI runs, summaries, coding help, or analysis. Keys must be server-side only.

## 今やること

Do not create or paste API keys until server-side route and env handling are ready.

## 注意事項

- Never commit API keys.
- Use least-privilege project keys where possible.
- Plan rotation before production.

## Recovery

If a key leaks, revoke it immediately and rotate dependent services.

## 公式Docs

- https://platform.openai.com/docs/guides/production-best-practices
- https://platform.openai.com/api-keys

## Human Next Action

Wait until Vercel Environment Variables and server-only API route exist.
