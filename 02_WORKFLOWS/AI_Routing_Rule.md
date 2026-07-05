# AI Routing Rule

Purpose: Taskごとに使うAI / toolを、思い込みではなくCapability Registry、Official Docs Evidence、Cost、Risk、Security、Human Costから選ぶ。

## Routing Flow

Purpose
↓
Human Goal
↓
Task Type
↓
AI Capability Registry
↓
Official Docs Evidence
↓
Cost / Risk / Security
↓
AI Routing
↓
Execution
↓
Validation
↓
Human Approval
↓
Learning

## Initial Task Routing

| Task Type | Default Routing | Confidence | Notes |
| --- | --- | ---: | --- |
| Architecture / Principle / Evolution Discussion | ChatGPT | 70% | High reasoning and synthesis. Final promotion still requires Human approval. |
| MrBrain Markdown edits / file creation / Git / deploy prep | Codex | 85% | Codex has workspace and Git context. |
| Code implementation / tests / refactor | Codex or Cursor | 70% | Codex for scoped tasks; Cursor for long app development. |
| Google Account / Gmail / Google Workspace操作 | Pending comparison | 25% | Gemini may help, but do not assume. Compare official docs, account access, and current tool availability. |
| Browser operation / setup screens | Pending research | 25% | Compare ChatGPT Agent, Codex Browser/Computer Use, Gemini, Claude computer use, and available local Browser tools. |
| Long document compression | ChatGPT or Claude | 45% | Choose by current plan limits, context length, privacy, and output quality. |
| Security setup navigation | Browser-capable AI + Official Docs + Human Navigator | 35% | High-risk. Use official docs, current screen, exact step, completion check. Human confirms before changes. |
| Design DNA extraction | ChatGPT / Vision-capable model / Design Brain | 45% | Use screenshot/video evidence. Copying reference is prohibited; extract DNA only. |
| Final decision / approval | Human | 100% | AI recommends; Human owns Purpose, taste, risk, and final approval. |

## Browser Operation Rule

Do not say "Gemini is best for browser operation" or "Claude is best for computer use" without evidence.

Before routing a browser task, verify:

- Is the capability available in the current plan?
- Is it UI browser control, API computer-use, or only browsing/search?
- Can it access the current authenticated session safely?
- Can it avoid reading/storing secrets?
- Can it ask for Human confirmation before irreversible actions?
- Is there a lower-risk path through official docs + Human Navigator?

## Human Navigator Connection

Current Screen
↓
Official Docs
↓
AI Routing
↓
Best Tool
↓
Step Guide
↓
Completion Check

## AI / Human Screen Separation

Human Console:
Humanが見る。ゲージ、成果、承認、リスク、次Actionだけ見る。

AI Control Center:
AI / Codex / Browser Agentが見る。Purpose、現在画面、公式Docs、期待結果、入力値、失敗時対応、Validation条件を見る。

Future folder candidate only:

- 01_HUMAN_CONSOLE/
- 02_AI_CONTROL_CENTER/

Do not implement this split until the current Human Console becomes too heavy or AI workers need a separate operational surface.

## Validation Rule

After routing, record:

- selected AI/tool
- why selected
- alternatives rejected
- evidence source
- cost/risk notes
- result
- Human feedback
- whether to reuse this routing next time
