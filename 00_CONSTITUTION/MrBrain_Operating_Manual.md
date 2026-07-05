# MrBrain Operating Manual

Purpose: MrBrain / Evolution Factoryを日々運用するAIのための軽量Operating Manual。

## System Roles

MrBrain:
- 思想、Architecture、正本、Learningを保存する。
- Long-form Discussionと設計根拠を持つ。

Evolution Factory:
- 実験、Preview、Workflow、Human Console、AI Control Center、Status JSONを持つ。
- Humanが迷わず進むための運用画面を作る。

Human Console:
- Humanが見る唯一の入口。
- 長文ではなく、現在状態、Risk、Next Action、Approvalを出す。

AI Control Center:
- AI / Codex / Browser Agentが見る作業面。
- Official Docs、Current Screen、Required / Prohibited Inputs、Completion Checkを持つ。

## Operating Rule

1. Start from `current_state_summary.json`.
2. Decide whether the task is Discussion, Workflow, Status, Console, or Implementation.
3. Keep Kernel / Principle / AI_CONTEXT / AGENTS untouched unless explicitly allowed.
4. Apply Thinking Route.
5. Check Trust Rules.
6. Make minimal edits.
7. Validate JSON / links / preview when relevant.
8. Commit / push when requested.
9. Final response must be short and actionable.

## Forbidden

- Do not commit secrets.
- Do not invent current facts without docs.
- Do not turn Discussion into Principle prematurely.
- Do not add new concepts before checking existing architecture.
- Do not make Human Console a long document.
- Do not ask Human for information already stored in Identity / Status registry.
- Do not implement Multi-Codex before Task Queue / Validation / Conflict Check / Human Approval / Merge Rule exist.

## Current Project State

- Human Console exists and is visible through GitHub Pages.
- Trust Rules and Thinking Constitution are created.
- AI Capability Registry exists, but official docs verification is incomplete.
- Security Foundation is active; Recovery is the highest risk.
- Vercel / Supabase production path is selected, but setup is incomplete.
- Browser-capable AI routing is still Pending Research.

## Default Next Action Policy

Human Console must show only one Human Next Action.

Current Human Next Action:
Google Account Recoveryを完成させる。

Current Rule Fix:
AI Capability RegistryのOfficial Docs確認を完了する。

## When Updating Human Console

Put at top:

- Overall Health
- Current Mission
- Current Highest Risk
- Next Human Action
- Trust Rule Status
- AI Routing Status
- Security Status
- Evolution Gauge

Put lower:

- Guides
- Registries
- Logs
- Architecture Audit
- Details
