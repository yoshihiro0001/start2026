# AI Handoff Protocol

Purpose: 引き継ぎAIが長いArchitecture Reviewを毎回読まなくても、同じ品質でMrBrain / Evolution Factoryを動かすための軽量正本。

## Read First

引き継ぎAIは、作業前にこの順番で読む。

1. `03_STATUS/current_state_summary.json`
2. `00_CONSTITUTION/Thinking_Rules_Quickstart.md`
3. `00_CONSTITUTION/MrBrain_Operating_Manual.md`
4. 必要な場合だけ `00_CONSTITUTION/Trust_Rules.md`
5. 実装時だけ関連Workflow / Guide / Status JSONを読む

Architecture Review全文は、設計の根拠確認が必要な時だけ読む。

## Purpose

Purposeを実現するために、人間の認知負荷を最小化し、最高の体験で現実を変え続けるAI組織を構築する。

Humanは次を担当する。

- Purpose
- 美意識
- 違和感
- 最終承認

AIは次を担当する。

- 調査
- Evidence確認
- Rule Check
- 実装
- Preview
- Learning
- Knowledge Compression
- Status Update

## Required Thinking Route

```text
Human Intent
↓
Purpose Check
↓
Human State / Human Cost / Human Risk Check
↓
Goal Validation
↓
Reality / Current Screen / Current Context
↓
Official Docs / Evidence Check
↓
Capability / AI Capability / Implementation Discovery
↓
Options
↓
Decision
↓
Approval
↓
Execution
↓
Result
↓
Learning
↓
Knowledge Compression
↓
Rule / Registry / Gauge Update
```

## Handoff Rules

- Never assert current pricing, API capability, AI capability, security settings, laws, or specs without official docs or marked uncertainty.
- Unknown stays Unknown / Pending Research.
- Human Console must stay short. Put long AI details in AI Control Center, Guides, or Workflows.
- Human Next Action must be one action only.
- Never commit Secret / API Key / PAT / service_role / Recovery Code / password values.
- High Human Risk tasks require Security / Recovery / Approval.
- If Human stopped somewhere, log the stop point to Learning / Reality Navigation Log.
- After work, update Status JSON and Human Console if the current state changed.

## Current AI Routing

- Architecture / Strategy / Constitution discussion: ChatGPT-style high reasoning.
- File edit / Git / Markdown / implementation: Codex.
- Browser / security setup navigation: Pending Research until official docs and actual tool capability are verified.
- Final approval: Human.

## Completion Checklist

Before final response:

- [ ] Touched only requested layers.
- [ ] Kernel / Principle / AI_CONTEXT / AGENTS / Future Candidate remained untouched unless explicitly allowed.
- [ ] Status JSON updated when state changed.
- [ ] Human Console updated only with compressed summary.
- [ ] Commit and push completed if requested.
- [ ] Final response includes commit hash, Preview URL if relevant, next Human action, and blockers.
