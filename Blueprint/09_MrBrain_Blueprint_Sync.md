# MrBrain Blueprint Sync

Last updated: 2026-07-06

## Purpose

司令塔AIが、MrBrainの現在地を短く把握できるようにする。
長文Architecture Reviewを毎回読ませない。

MrBrain → Evolution Factory → CEO Console の接続を作る。

これは新しいWorkflowではない。
MrBrainの現在構造をBlueprintとして同期するためのMapである。

## Sync Targets

MrBrain全体から短く抽出する対象:

- Purpose
- Constitution
- Principles
- Knowledge
- Agents
- Projects
- Current Reviews
- Rules
- Open Loops
- Archive Candidates
- Sync Targets

## Sync Route

```text
MrBrain Canonical Knowledge
↓
Architecture Review / Project Notes / Design System / AI Workspace OS
↓
Blueprint Summary
↓
Evolution Factory Current State
↓
CEO Console
↓
CEO Decision
↓
Runtime / Reality / Knowledge Task
↓
Learning
↓
MrBrain Update Candidate
```

## What AI Should Read First

1. `03_STATUS/current_state.json`
2. `Blueprint/08_CEO_Operating_Map.md`
3. `04_EVIDENCE/Architecture_Review_Index.md`
4. `00_CONSTITUTION/Thinking_Rules_Quickstart.md`
5. MrBrain source only when the summary is insufficient

## Current MrBrain Summary Candidate

Purpose:
Humanが最小認知負荷で、最高の体験でRealityを変え続けるAI組織を作る。

Constitution:
Trust Rule, Structure Freeze, Secret Handling, Evidence before decision.

Knowledge:
Architecture Reviewは辞書化し、日常運用はBlueprint / Registry / CEO Consoleへ圧縮する。

Projects:
AI Workspace OS, Design System, HOTEL JOY, Evolution Factory.

Open Loops:
- Supabase Reality Verification
- CEO Console static/manual sync
- Knowledge Compiler automation
- Runtime / Reality Office separation
- Learning loop automation

Archive Candidates:
Structure Freeze Ruleに従い、削除ではなくArchive候補として扱う。

## Sync Rules

- MrBrain本文を毎回全文読まない。
- Evolution Factoryは現在状態・実行・検証を持つ。
- MrBrainは思想・正本・Learning候補を持つ。
- CEO Consoleには短い判断情報だけ出す。
- Secret / API Key / PAT / service_role / DB password / Recovery Codeは同期しない。

## Next Sync Need

Current State JSONとMrBrain Architecture Review Indexを対応づけ、AIが長文を読まずに現在地を把握できるようにする。
