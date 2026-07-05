# Blueprint Map: AI Operating Company

Last updated: 2026-07-06

## Purpose

MrBrain and Evolution Factoryを、10億円を目指すAI Operating Companyとして一本の地図に統合する。

ファイルやWorkflowを増やして管理するのではなく、5部署で見る。

## Operating Company Blueprint

```text
Purpose
↓
Constitution Office
↓
Runtime Office
↓
Knowledge Office
↓
Reality Office
↓
CEO Office
↓
Learning / Archive
```

## Office Definitions

| Office | Responsibility | What It Owns | What It Must Not Own |
| --- | --- | --- | --- |
| Constitution Office | 憲法・禁止事項・判断基準 | Purpose, Thinking Constitution, Trust Rules, Structure Freeze | 実装手順やStatus詳細 |
| Runtime Office | 実行・自動化・Workflow | Execution, Task Queue, Codex Loop, Guided Execution, Automation, Multi-Codex future | CEO判断や現実サービス設定の正本 |
| Knowledge Office | 知識・状態・Registry・Evidence Summary | Knowledge Compiler, Registry, Evidence Summary, Current State, Learning, Architecture Index | Human向け長文表示 |
| Reality Office | 現実接続・外部サービス・Security | Vercel, Supabase, GitHub, Security, Browser, Docs, External Services, Deployment, Env Vars | 思想や判断基準 |
| CEO Office | 経営判断・Humanの入口 | CEO Console, Next Human Action, Decision Quality, Bottleneck, Trust Status, Audit Status, Strategy/North Star | AIの途中経過、長いDocs、Raw Registry |
| Learning / Archive | 学習・退避 | Reality Navigation Log, Archive Candidates | 現役正本 |

## Old Route Folded Into Offices

| Old Layer | New Office |
| --- | --- |
| Purpose | Constitution Office / CEO Office |
| Constitution | Constitution Office |
| Thinking Rules | Constitution Office |
| Trust Rules | Constitution Office |
| Architecture | Constitution Office + Knowledge Office |
| Workflow | Runtime Office |
| Registry | Knowledge Office |
| Evidence | Knowledge Office |
| Guide | Runtime Office or Reality Office, depending on whether it guides execution or external services |
| CEO Console | CEO Office |
| Reality | Reality Office |
| Learning | Learning / Archive |
| Archive | Learning / Archive |

## Integrated Map

| Office | MrBrain Source | Evolution Factory Source | Current Responsibility | Current Status |
| --- | --- | --- | --- | --- |
| Constitution Office | `02_PRINCIPLES`, `04_PROJECTS/AI_Workspace_OS`, `07_SYSTEM` | `00_CONSTITUTION/*`, `Structure_Freeze_Rule.md` | Purpose, Constitution, Trust, Freeze, Rules | Active |
| Runtime Office | `04_PROJECTS`, `05_DESIGN_SYSTEM`, `07_AGENTS` | `02_WORKFLOWS/*`, `04_BACKEND`, `02_AI_CONTROL_CENTER` | Workflow, Execution, Task Queue, Codex Loop, Automation | Too many files, but office-level coherent |
| Knowledge Office | `06_KNOWLEDGE`, Architecture Review index material | `03_STATUS/*.json`, `04_EVIDENCE`, `Knowledge_Compiler.md`, `Blueprint/*` | Registry, Evidence, Summary, Current State, Architecture Index | Manual sync is biggest gap |
| Reality Office | `03_BUSINESS`, HOTEL JOY, 経理, 税務 | `06_DEPLOY`, `SECURITY`, Vercel/Supabase/GitHub guides | External services, Deployment, Env Vars, Security | Vercel Import pending |
| CEO Office | `00_HOME`, `01_ME` | `01_HUMAN_CONSOLE/index.html`, `Decision_Quality_Pipeline.md` | Next Human Action, Bottleneck, Strategy, Trust/Audit summary | Active |
| Learning / Archive | `99_ARCHIVE` | `99_LEARNING`, `99_ARCHIVE_CANDIDATES.md` | Learning and safe archive candidate path | Candidate only |

## Current Active Route

```text
Purpose
↓
Constitution Office
  - Structure Freeze active
  - No secrets in Git
↓
CEO Office
  - One next Human action
↓
Reality Office
  - Vercel Import screen
↓
Runtime Office
  - Guided Execution supports exact action
↓
Knowledge Office
  - current_state.json records state
↓
Learning / Archive
  - Stop points go to Reality Navigation Log
```

## Current Reality Step

Vercel Import.

Human action:
Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。

## Current Canonical Sources By Office

| Office | Canonical |
| --- | --- |
| Constitution Office | `00_CONSTITUTION/Thinking_Constitution.md`, `Trust_Rules.md`, `Structure_Freeze_Rule.md` |
| Runtime Office | `02_WORKFLOWS/Guided_Execution.md` |
| Knowledge Office | `03_STATUS/current_state.json`, `03_STATUS/knowledge_registry.json`, `02_WORKFLOWS/Knowledge_Compiler.md` |
| Reality Office | `06_DEPLOY/Vercel_Project_Import_Guide.md`, `SECURITY/README.md` |
| CEO Office | `01_HUMAN_CONSOLE/index.html`, `02_WORKFLOWS/Decision_Quality_Pipeline.md` |
| Learning / Archive | `99_LEARNING/Reality_Navigation_Log.md`, `99_ARCHIVE_CANDIDATES.md` |
