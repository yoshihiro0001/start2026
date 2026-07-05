# Blueprint Map

Last updated: 2026-07-06

## Purpose

MrBrain and Evolution Factoryを一本の地図に統合する。

## One-Line Blueprint

```text
Purpose
↓
Constitution
↓
Thinking Rules
↓
Trust Rules
↓
Architecture
↓
Workflow
↓
Registry
↓
Evidence
↓
Guide
↓
CEO Console
↓
Reality
↓
Learning
↓
Archive
```

## Integrated Map

| Layer | MrBrain Source | Evolution Factory Source | Current Responsibility | Current Status |
| --- | --- | --- | --- | --- |
| Purpose | `02_PRINCIPLES`, `04_PROJECTS/AI_Workspace_OS` | `00_CONSTITUTION`, `03_STATUS/current_state.json` | Why the system exists and what Human owns | Partially explicit |
| Constitution | Principles / Architecture Review | `00_CONSTITUTION/Thinking_Constitution.md` | Operating constraints for AI and Human | Active |
| Thinking Rules | Architecture Review / Principle candidates | `Thinking_Rules_Quickstart.md`, `Thinking_Route.md` | How AI reasons before action | Active but overlap exists |
| Trust Rules | Architecture Review discussions | `00_CONSTITUTION/Trust_Rules.md`, `03_STATUS/trust_rules.json` | Evidence, security, approval rules | Active |
| Architecture | `AI_Workspace_OS_Architecture_Review.md` | `04_EVIDENCE/Architecture_Review_Index.md` | Dictionary / source of high-level structure | Too long; indexed |
| Workflow | Project and Architecture notes | `02_WORKFLOWS/*` | How tasks move from intent to execution | Too many; audit started |
| Registry | MrBrain正本 / Project files | `03_STATUS/*.json` | Current state, identity, readiness, routes | Active but manual sync |
| Evidence | Project evidence / Design refs | `04_EVIDENCE`, `99_LEARNING` | Proof, setup facts, stop points | Active |
| Guide | Design/System docs | `06_DEPLOY`, `SECURITY`, `Guided_Execution.md` | Human step-by-step operation | Duplicated; freeze active |
| CEO Console | Not applicable | `01_HUMAN_CONSOLE/index.html` | Human sees next decision only | Active |
| AI Control | Agent docs | `02_AI_CONTROL_CENTER` | AI sees docs/evidence/task detail | Minimal |
| Reality | Business / Hotel / Design / External systems | Vercel / Supabase / GitHub / Browser / Human action | Where the system changes the outside world | Vercel Import pending |
| Learning | `99_ARCHIVE`, project logs | `99_LEARNING/Reality_Navigation_Log.md` | Stops, failures, improvements | Active but manual |
| Archive | `99_ARCHIVE` | `99_ARCHIVE_CANDIDATES.md` | Safe retirement path | Candidate-only, no deletion |

## Current Active Route

```text
Human Purpose
↓
CEO Console
↓
Current State Registry
↓
Guided Execution
↓
Vercel Import Guide
↓
Human presses Import Project
↓
Vercel Preview URL
↓
CEO Console update
↓
Learning / Route Audit
```

## Current Canonical Path

- Thinking: `00_CONSTITUTION/Thinking_Constitution.md`
- Trust: `00_CONSTITUTION/Trust_Rules.md`
- Current State: `03_STATUS/current_state.json`
- CEO Console: `01_HUMAN_CONSOLE/index.html`
- Guided Execution: `02_WORKFLOWS/Guided_Execution.md`
- Knowledge: `02_WORKFLOWS/Knowledge_Compiler.md` + `03_STATUS/knowledge_registry.json`
- Deploy: `06_DEPLOY/Vercel_Project_Import_Guide.md`
- Security: `SECURITY/README.md`

## Current Human Action

Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。
