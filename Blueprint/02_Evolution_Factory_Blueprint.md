# Evolution Factory Blueprint

Last updated: 2026-07-06

## Purpose

Evolution Factory全体を、AI Operating Companyの5部署モデルへ分類して可視化する。

This is an observation blueprint only. No move / delete / archive is executed.

## Office Model

- Constitution Office: Constitution / Trust / Structure Freeze
- Runtime Office: Execution / Workflow / Task Queue / Codex Loop / Guided Execution / Automation
- Knowledge Office: Knowledge Compiler / Registry / Evidence Summary / Current State / Architecture Index
- Reality Office: Vercel / Supabase / GitHub / Security / Browser / Docs / External Services / Deployment / Env Vars
- CEO Office: CEO Console / Next Human Action / Decision Quality / Bottleneck / Strategy / North Star
- Learning / Archive: Learning Log / Archive Candidates

## Counts

- Folders: 11
- Files: 84

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
  - 📄 01_Current_Blueprint.md
  - 📄 02_Evolution_Factory_Blueprint.md
  - 📄 03_Blueprint_Map.md
  - 📄 04_Blueprint_Audit.md
  - 📄 05_Blueprint_Gap_Report.md
  - 📄 06_Blueprint_Refactor_Plan.md
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

| Path | Type | Office | Responsibility | Purpose | Connected To | Usage | Status | Current Problem | Recommended Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `00_CONSTITUTION` | Folder | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support |
| `01_HUMAN_CONSOLE` | Folder | CEO Office | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support |
| `02_AI_CONTROL_CENTER` | Folder | Runtime Office | AI Control | AI/Codex向け作業面。 | Workflows / Registries | Medium | Support |
| `02_WORKFLOWS` | Folder | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support |
| `03_STATUS` | Folder | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support |
| `04_BACKEND` | Folder | Runtime Office | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support |
| `04_EVIDENCE` | Folder | Knowledge Office | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | Medium | Support |
| `06_DEPLOY` | Folder | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support |
| `99_LEARNING` | Folder | Learning / Archive | Learning | Reality Navigation / Stop Point log。 | Knowledge / Audit | Medium | Support |
| `Blueprint` | Folder | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support |
| `SECURITY` | Folder | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support |
| `.DS_Store` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `.env.example` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `.gitignore` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `.nojekyll` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/AI_Handoff_Protocol.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/MrBrain_Operating_Manual.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/README.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/Rule_Audit_Checklist.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/Structure_Freeze_Rule.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical | None now | Keep as canonical |
| `00_CONSTITUTION/Thinking_Constitution.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical | None now | Keep as canonical |
| `00_CONSTITUTION/Thinking_Rules_Quickstart.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | Medium | Support | None now | Support canonical source |
| `00_CONSTITUTION/Trust_Rules.md` | File | Constitution Office | Constitution | Thinking / Trust / Freezeの正本。 | CEO Console / Workflows | High | Canonical | None now | Keep as canonical |
| `01_HUMAN_CONSOLE/Approval_Inbox_Design.md` | File | CEO Office | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support | None now | Support canonical source |
| `01_HUMAN_CONSOLE/Approved_Next_Action.md` | File | CEO Office | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support | None now | Support canonical source |
| `01_HUMAN_CONSOLE/README.md` | File | CEO Office | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | Medium | Support | None now | Support canonical source |
| `01_HUMAN_CONSOLE/index.html` | File | CEO Office | CEO Console | Humanが見る現在状態と次Action。 | Status / Guides / Reality | High | Canonical | None now | Keep as canonical |
| `02_AI_CONTROL_CENTER/README.md` | File | Runtime Office | AI Control | AI/Codex向け作業面。 | Workflows / Registries | Medium | Support | None now | Support canonical source |
| `02_AI_CONTROL_CENTER/index.html` | File | Runtime Office | AI Control | AI/Codex向け作業面。 | Workflows / Registries | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/AI_Capability_Registry.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support | None now | Support canonical source |
| `02_WORKFLOWS/AI_Routing_Rule.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `02_WORKFLOWS/Approval_To_Codex_Loop.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `02_WORKFLOWS/Console_Update_Loop.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `02_WORKFLOWS/Current_System_Review.md` | File | Knowledge Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/Decision_Quality_Pipeline.md` | File | CEO Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/Evolution_OS_Loop.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `02_WORKFLOWS/Evolution_Readiness_System.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Medium | Support | None now | Support canonical source |
| `02_WORKFLOWS/Guided_Execution.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/Knowledge_Compiler.md` | File | Knowledge Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/Knowledge_Compression_Loop.md` | File | Knowledge Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `02_WORKFLOWS/Multi_Codex_Orchestration.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `02_WORKFLOWS/OS_Knowledge_Audit.md` | File | Knowledge Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `02_WORKFLOWS/Smartphone_Command_Loop.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `02_WORKFLOWS/System_Architecture_Audit.md` | File | Knowledge Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | High | Canonical | None now | Keep as canonical |
| `02_WORKFLOWS/Thinking_Route.md` | File | Runtime Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `02_WORKFLOWS/Top_Level_Strategy_Loop.md` | File | CEO Office | Workflow | 実行・監査・判断Route。 | CEO Console / Status | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `03_STATUS/ai_capability_registry.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/architecture_audit.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/blockers.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/current_state.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | High | Canonical | None now | Keep as canonical |
| `03_STATUS/current_state_summary.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/decision_quality.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/identity.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/knowledge_registry.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | High | Canonical | None now | Keep as canonical |
| `03_STATUS/latest_action.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/readiness.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/route_audit.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `03_STATUS/trust_rules.json` | File | Knowledge Office | Status Registry | 現在状態・Readiness・Trust・RouteのJSON。 | CEO Console / Workflows | Medium | Support Registry | Manual sync / responsibility needs audit | Support canonical source |
| `04_BACKEND/Supabase_Minimum_Schema.md` | File | Runtime Office | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support | None now | Support canonical source |
| `04_BACKEND/Supabase_Setup_Checklist.md` | File | Runtime Office | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support | None now | Support canonical source |
| `04_BACKEND/Task_Queue_Schema.md` | File | Runtime Office | Backend design | Supabase schema / Task Queue設計。 | Deploy / Runtime | Medium | Support | None now | Support canonical source |
| `04_EVIDENCE/Architecture_Review_Index.md` | File | Knowledge Office | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | Medium | Support | None now | Support canonical source |
| `04_EVIDENCE/Supabase_Project_Setup.md` | File | Knowledge Office | Evidence | 作成済みEvidenceとArchitecture Index。 | Knowledge / Audit | High | Canonical | None now | Keep as canonical |
| `06_DEPLOY/AI_Tool_Docs_Research_Plan.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Reference Only | Legacy or reference only | Review for merge/archive later |
| `06_DEPLOY/Console_Summary.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support | None now | Support canonical source |
| `06_DEPLOY/Human_Navigator_Vercel_2FA_Guide.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Legacy | Legacy or reference only | Review for merge/archive later |
| `06_DEPLOY/Human_Setup_Guide_Vercel_Supabase.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `06_DEPLOY/Infrastructure_Decision_Brief.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support | None now | Support canonical source |
| `06_DEPLOY/Preview_Deployment_Decision.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Legacy | Legacy or reference only | Review for merge/archive later |
| `06_DEPLOY/Production_Path_Decision_Brief.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support | None now | Support canonical source |
| `06_DEPLOY/Security_Roadmap.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Low | Merge Candidate | Manual sync / responsibility needs audit | Review for merge/archive later |
| `06_DEPLOY/Supabase_to_Vercel_Env_Guide.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | Medium | Support | None now | Support canonical source |
| `06_DEPLOY/Vercel_Project_Import_Guide.md` | File | Reality Office | Deploy guide | Vercel / Supabase / Infra接続手順。 | Guided Execution | High | Canonical | None now | Keep as canonical |
| `99_ARCHIVE_CANDIDATES.md` | File | Learning / Archive | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `99_LEARNING/Reality_Navigation_Log.md` | File | Learning / Archive | Learning | Reality Navigation / Stop Point log。 | Knowledge / Audit | Medium | Support | None now | Support canonical source |
| `Blueprint/01_Current_Blueprint.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `Blueprint/02_Evolution_Factory_Blueprint.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `Blueprint/03_Blueprint_Map.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `Blueprint/04_Blueprint_Audit.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `Blueprint/05_Blueprint_Gap_Report.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `Blueprint/06_Blueprint_Refactor_Plan.md` | File | Knowledge Office | Blueprint | 全体地図。 | CEO / Constitution / Runtime / Knowledge / Reality | Medium | Support | None now | Support canonical source |
| `README.md` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |
| `SECURITY/Anthropic.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Cloudflare.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Environment_Variables.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/GitHub.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Google_Account.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/OpenAI.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Password_Manager.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/README.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | High | Canonical | None now | Keep as canonical |
| `SECURITY/Recovery_Codes.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Secrets.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Supabase.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `SECURITY/Vercel.md` | File | Reality Office | Security | Security Foundation正本・補助。 | Deploy / Trust | Medium | Support | None now | Support canonical source |
| `index.html` | File | Knowledge Office | Root | Entry / repo config. | CEO Console | Medium | Support | None now | Support canonical source |

## Initial Read

Evolution Factory is the operating factory of the AI Operating Company.
It should be read by office, not by raw folder count.
Structure Freeze remains active, so future work should consolidate instead of adding files.
