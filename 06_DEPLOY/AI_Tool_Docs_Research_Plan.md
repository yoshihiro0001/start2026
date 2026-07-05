# AI Tool Docs Research Plan

Purpose: AI選定を古い記憶や感覚ではなく、公式Docs、現在契約プラン、実機能力、コスト、リスク、Human Costで判断する。

## Research Policy

- Official docs first.
- Blog / SNS / old articles are secondary evidence only.
- Record source URL, checked date, and what the source proves.
- Unknown stays Unknown.
- Do not route high-risk work based on assumptions.
- If docs and actual account behavior differ, record both.

## Research Targets

| Target | Official Docs URL | What to Verify | Status | Last Checked |
| --- | --- | --- | --- | --- |
| OpenAI ChatGPT Pro plans | https://chatgpt.com/pricing/ | Current Pro limits, Codex access, Agent/browser availability, context, file/project capability | Partial | 2026-07-05 |
| OpenAI Codex docs | https://developers.openai.com/codex | Codex app/CLI/web capability, browser/computer-use surfaces, pricing/limits, security approvals | Partial | 2026-07-05 |
| OpenAI Computer Use | https://platform.openai.com/docs/ | Computer-use / browser-operation related docs, supported models, safety constraints, and whether they map to current product access | Partial | 2026-07-05 |
| Anthropic Claude computer use | https://docs.anthropic.com/ | Computer-use availability, plan requirements, safety constraints, and exact feature page | Partial | 2026-07-05 |
| Anthropic Claude plans/support | https://support.anthropic.com/ | Free vs paid plan limits, web/search, file/context, computer-use availability | Needs Research | 2026-07-05 |
| Google Gemini Help | https://support.google.com/gemini/ | Current plan, connected apps, Workspace integration, browser/agent capability | Partial | 2026-07-05 |
| Google Gemini app | https://gemini.google.com/ | Actual account capability and available tools | Needs Account Check | 2026-07-05 |
| Cursor docs | https://docs.cursor.com/ | App development workflow, project context, privacy/settings | Partial | 2026-07-05 |
| GitHub Copilot docs | https://docs.github.com/en/copilot | Coding support, PR/repo integration, plan/security constraints | Partial | 2026-07-05 |
| Vercel security docs | https://vercel.com/docs | Auth, env vars, deployment protection, secrets, team/project security | Needs Research | 2026-07-05 |
| Supabase security docs | https://supabase.com/docs | RLS, anon/publishable vs service_role/secret keys, auth, secrets | Needs Research | 2026-07-05 |

## Immediate Research Questions

1. Which current tool can safely inspect a logged-in setup screen and guide Human step-by-step?
2. Does the user's Gemini plan include any browser/control capability, or only chat/search/app integration?
3. Does Claude Free expose computer-use in UI, or is computer-use API/paid/beta only?
4. Which OpenAI/Codex surface is safest for setup navigation: in-app Browser, Chrome plugin, Computer Use, or text guide?
5. What is the cost/risk tradeoff for using high-performance AI for routine navigation?

## Output Format

Each completed research item should update:

- 02_WORKFLOWS/AI_Capability_Registry.md
- 03_STATUS/ai_capability_registry.json
- 02_WORKFLOWS/AI_Routing_Rule.md
- Human Console AI Control Center summary

## Current Recommendation

Recommended AI for browser/security setup is Pending Research.

Reason: Browser operation capability must be verified from official docs, current account plan, and live tool availability before routing high-risk security setup.
