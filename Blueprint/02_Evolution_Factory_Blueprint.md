# Evolution Factory Blueprint

Last updated: 2026-07-06

## Purpose

Evolution Factory全体を、修正・移動・削除せずに可視化する。

This is an observation blueprint only.

## Counts

- Folders: 11
- Files: 78

## Current Tree

```text
- 📄 .DS_Store
- 📄 .env.example
- 📄 .gitignore
- 📄 .nojekyll
- 📁 00_CONSTITUTION
  - 📄 AI_Handoff_Protocol.md
  - 📄 MrBrain_Operating_Manual.md
  - 📄 README.md
  - 📄 Rule_Audit_Checklist.md
  - 📄 Structure_Freeze_Rule.md
  - 📄 Thinking_Constitution.md
  - 📄 Thinking_Rules_Quickstart.md
  - 📄 Trust_Rules.md
- 📁 01_HUMAN_CONSOLE
  - 📄 Approval_Inbox_Design.md
  - 📄 Approved_Next_Action.md
  - 📄 README.md
  - 📄 index.html
- 📁 02_AI_CONTROL_CENTER
  - 📄 README.md
  - 📄 index.html
- 📁 02_WORKFLOWS
  - 📄 AI_Capability_Registry.md
  - 📄 AI_Routing_Rule.md
  - 📄 Approval_To_Codex_Loop.md
  - 📄 Console_Update_Loop.md
  - 📄 Current_System_Review.md
  - 📄 Decision_Quality_Pipeline.md
  - 📄 Evolution_OS_Loop.md
  - 📄 Evolution_Readiness_System.md
  - 📄 Guided_Execution.md
  - 📄 Knowledge_Compiler.md
  - 📄 Knowledge_Compression_Loop.md
  - 📄 Multi_Codex_Orchestration.md
  - 📄 OS_Knowledge_Audit.md
  - 📄 Smartphone_Command_Loop.md
  - 📄 System_Architecture_Audit.md
  - 📄 Thinking_Route.md
  - 📄 Top_Level_Strategy_Loop.md
- 📁 03_STATUS
  - 📄 ai_capability_registry.json
  - 📄 architecture_audit.json
  - 📄 blockers.json
  - 📄 current_state.json
  - 📄 current_state_summary.json
  - 📄 decision_quality.json
  - 📄 identity.json
  - 📄 knowledge_registry.json
  - 📄 latest_action.json
  - 📄 readiness.json
  - 📄 route_audit.json
  - 📄 trust_rules.json
- 📁 04_BACKEND
  - 📄 Supabase_Minimum_Schema.md
  - 📄 Supabase_Setup_Checklist.md
  - 📄 Task_Queue_Schema.md
- 📁 04_EVIDENCE
  - 📄 Architecture_Review_Index.md
  - 📄 Supabase_Project_Setup.md
- 📁 06_DEPLOY
  - 📄 AI_Tool_Docs_Research_Plan.md
  - 📄 Console_Summary.md
  - 📄 Human_Navigator_Vercel_2FA_Guide.md
  - 📄 Human_Setup_Guide_Vercel_Supabase.md
  - 📄 Infrastructure_Decision_Brief.md
  - 📄 Preview_Deployment_Decision.md
  - 📄 Production_Path_Decision_Brief.md
  - 📄 Security_Roadmap.md
  - 📄 Supabase_to_Vercel_Env_Guide.md
  - 📄 Vercel_Project_Import_Guide.md
- 📄 99_ARCHIVE_CANDIDATES.md
- 📁 99_LEARNING
  - 📄 Reality_Navigation_Log.md
- 📁 Blueprint
- 📄 README.md
- 📁 SECURITY
  - 📄 Anthropic.md
  - 📄 Cloudflare.md
  - 📄 Environment_Variables.md
  - 📄 GitHub.md
  - 📄 Google_Account.md
  - 📄 OpenAI.md
  - 📄 Password_Manager.md
  - 📄 README.md
  - 📄 Recovery_Codes.md
  - 📄 Secrets.md
  - 📄 Supabase.md
  - 📄 Vercel.md
- 📄 index.html
```

## Responsibility Table

| Path | Type | Responsibility | Purpose | Connected To | Usage | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `00_CONSTITUTION` | Folder | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `01_HUMAN_CONSOLE` | Folder | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support |
| `02_AI_CONTROL_CENTER` | Folder | AI Control | AI/Codex向け作業面。 | Workflows / Registries | Medium | Support |
| `02_WORKFLOWS` | Folder | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support |
| `03_STATUS` | Folder | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support |
| `04_BACKEND` | Folder | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support |
| `04_EVIDENCE` | Folder | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | Medium | Support |
| `06_DEPLOY` | Folder | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `99_LEARNING` | Folder | Learning | Reality Navigation / Stop Point log。 | Knowledge / Audit | Medium | Support |
| `Blueprint` | Folder | Root | Entry / repo config. | CEO Console | Medium | Support |
| `SECURITY` | Folder | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `.DS_Store` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `.env.example` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `.gitignore` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `.nojekyll` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `00_CONSTITUTION/AI_Handoff_Protocol.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `00_CONSTITUTION/MrBrain_Operating_Manual.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `00_CONSTITUTION/README.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `00_CONSTITUTION/Rule_Audit_Checklist.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `00_CONSTITUTION/Structure_Freeze_Rule.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical |
| `00_CONSTITUTION/Thinking_Constitution.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical |
| `00_CONSTITUTION/Thinking_Rules_Quickstart.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `00_CONSTITUTION/Trust_Rules.md` | File | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical |
| `01_HUMAN_CONSOLE/Approval_Inbox_Design.md` | File | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support |
| `01_HUMAN_CONSOLE/Approved_Next_Action.md` | File | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support |
| `01_HUMAN_CONSOLE/README.md` | File | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support |
| `01_HUMAN_CONSOLE/index.html` | File | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | High | Canonical |
| `02_AI_CONTROL_CENTER/README.md` | File | AI Control | AI/Codex向け作業面。 | Workflows / Registries | Medium | Support |
| `02_AI_CONTROL_CENTER/index.html` | File | AI Control | AI/Codex向け作業面。 | Workflows / Registries | High | Canonical |
| `02_WORKFLOWS/AI_Capability_Registry.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support |
| `02_WORKFLOWS/AI_Routing_Rule.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate |
| `02_WORKFLOWS/Approval_To_Codex_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only |
| `02_WORKFLOWS/Console_Update_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate |
| `02_WORKFLOWS/Current_System_Review.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical |
| `02_WORKFLOWS/Decision_Quality_Pipeline.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical |
| `02_WORKFLOWS/Evolution_OS_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only |
| `02_WORKFLOWS/Evolution_Readiness_System.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support |
| `02_WORKFLOWS/Guided_Execution.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical |
| `02_WORKFLOWS/Knowledge_Compiler.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical |
| `02_WORKFLOWS/Knowledge_Compression_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate |
| `02_WORKFLOWS/Multi_Codex_Orchestration.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only |
| `02_WORKFLOWS/OS_Knowledge_Audit.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate |
| `02_WORKFLOWS/Smartphone_Command_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only |
| `02_WORKFLOWS/System_Architecture_Audit.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical |
| `02_WORKFLOWS/Thinking_Route.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate |
| `02_WORKFLOWS/Top_Level_Strategy_Loop.md` | File | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only |
| `03_STATUS/ai_capability_registry.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/architecture_audit.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/blockers.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/current_state.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | High | Canonical |
| `03_STATUS/current_state_summary.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/decision_quality.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/identity.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/knowledge_registry.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | High | Canonical |
| `03_STATUS/latest_action.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/readiness.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/route_audit.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `03_STATUS/trust_rules.json` | File | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry |
| `04_BACKEND/Supabase_Minimum_Schema.md` | File | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support |
| `04_BACKEND/Supabase_Setup_Checklist.md` | File | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support |
| `04_BACKEND/Task_Queue_Schema.md` | File | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support |
| `04_EVIDENCE/Architecture_Review_Index.md` | File | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | Medium | Support |
| `04_EVIDENCE/Supabase_Project_Setup.md` | File | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | High | Canonical |
| `06_DEPLOY/AI_Tool_Docs_Research_Plan.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Reference Only |
| `06_DEPLOY/Console_Summary.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `06_DEPLOY/Human_Navigator_Vercel_2FA_Guide.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Legacy |
| `06_DEPLOY/Human_Setup_Guide_Vercel_Supabase.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Merge Candidate |
| `06_DEPLOY/Infrastructure_Decision_Brief.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `06_DEPLOY/Preview_Deployment_Decision.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Legacy |
| `06_DEPLOY/Production_Path_Decision_Brief.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `06_DEPLOY/Security_Roadmap.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Merge Candidate |
| `06_DEPLOY/Supabase_to_Vercel_Env_Guide.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `06_DEPLOY/Vercel_Project_Import_Guide.md` | File | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | High | Canonical |
| `99_ARCHIVE_CANDIDATES.md` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `99_LEARNING/Reality_Navigation_Log.md` | File | Learning | Reality Navigation / Stop Point log。 | Knowledge / Audit | Medium | Support |
| `README.md` | File | Root | Entry / repo config. | CEO Console | Medium | Support |
| `SECURITY/Anthropic.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Cloudflare.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Environment_Variables.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/GitHub.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Google_Account.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/OpenAI.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Password_Manager.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/README.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | High | Canonical |
| `SECURITY/Recovery_Codes.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Secrets.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Supabase.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `SECURITY/Vercel.md` | File | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `index.html` | File | Root | Entry / repo config. | CEO Console | Medium | Support |

## Initial Read

Evolution Factory is the execution and preview factory for MrBrain.
It currently contains CEO Console, AI Control Center, Workflows, Status JSON, Evidence, Deploy Guides, Security files, and Learning logs.
Structure Freeze is active, so future work should consolidate instead of adding files.
