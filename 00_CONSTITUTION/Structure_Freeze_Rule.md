# Structure Freeze Rule

Last updated: 2026-07-06

## Purpose

Evolution Factoryが整理のためのファイル増殖で重くなることを止める。

このRuleは新しいWorkflowではない。
新規Workflow / 新規Registry / 新規Guideを原則作成しないための構造Freeze正本である。

## Freeze Status

- Structure Freeze: ACTIVE
- File Explosion Risk: HIGH
- New Workflow Creation: DISALLOWED
- New Registry Creation: DISALLOWED
- New Guide Creation: DISALLOWED
- New Folder Creation: DISALLOWED
- Delete: DISALLOWED. Archive candidate first.

Allowed exception:
このファイル `00_CONSTITUTION/Structure_Freeze_Rule.md` のみ。

## Canonical Sources

| Area | ACTIVE_CANONICAL | ACTIVE_SUPPORT |
| --- | --- | --- |
| Thinking | `00_CONSTITUTION/Thinking_Constitution.md` | `00_CONSTITUTION/Thinking_Rules_Quickstart.md`, `00_CONSTITUTION/AI_Handoff_Protocol.md` |
| Trust | `00_CONSTITUTION/Trust_Rules.md` | `00_CONSTITUTION/Rule_Audit_Checklist.md`, `03_STATUS/trust_rules.json` |
| Current State | `03_STATUS/current_state.json` | `03_STATUS/current_state_summary.json`, `03_STATUS/latest_action.json`, `03_STATUS/blockers.json` |
| CEO Console | `01_HUMAN_CONSOLE/index.html` | `01_HUMAN_CONSOLE/README.md` |
| AI Control Center | `02_AI_CONTROL_CENTER/index.html` | `02_AI_CONTROL_CENTER/README.md` |
| Guided Execution | `02_WORKFLOWS/Guided_Execution.md` | `06_DEPLOY/Vercel_Project_Import_Guide.md`, `06_DEPLOY/Supabase_to_Vercel_Env_Guide.md` |
| Knowledge | `02_WORKFLOWS/Knowledge_Compiler.md` + `03_STATUS/knowledge_registry.json` | `04_EVIDENCE/Architecture_Review_Index.md` |
| Decision Quality | `02_WORKFLOWS/Decision_Quality_Pipeline.md` | `02_WORKFLOWS/Thinking_Route.md`, `02_WORKFLOWS/AI_Routing_Rule.md` |
| Architecture Audit | `02_WORKFLOWS/System_Architecture_Audit.md` | `03_STATUS/architecture_audit.json`, `03_STATUS/route_audit.json` |
| Deploy | `06_DEPLOY/Vercel_Project_Import_Guide.md` | `06_DEPLOY/Supabase_to_Vercel_Env_Guide.md`, `06_DEPLOY/Console_Summary.md` |
| Security | `SECURITY/README.md` | `SECURITY/Secrets.md`, `SECURITY/Environment_Variables.md`, `SECURITY/Vercel.md`, `SECURITY/Supabase.md` |
| Evidence | `04_EVIDENCE/Supabase_Project_Setup.md` | `99_LEARNING/Reality_Navigation_Log.md` |

## File Classification

| File | Classification | Note |
| --- | --- | --- |
| `00_CONSTITUTION/AI_Handoff_Protocol.md` | ACTIVE_SUPPORT | AI引き継ぎ用。Thinking正本ではない。 |
| `00_CONSTITUTION/MrBrain_Operating_Manual.md` | ACTIVE_SUPPORT | 運用補助。CEO Consoleには出さない。 |
| `00_CONSTITUTION/README.md` | ACTIVE_SUPPORT | Constitution入口。 |
| `00_CONSTITUTION/Rule_Audit_Checklist.md` | ACTIVE_SUPPORT | Trust監査補助。 |
| `00_CONSTITUTION/Thinking_Constitution.md` | ACTIVE_CANONICAL | Thinking正本。 |
| `00_CONSTITUTION/Thinking_Rules_Quickstart.md` | ACTIVE_SUPPORT | 軽量Quickstart。 |
| `00_CONSTITUTION/Trust_Rules.md` | ACTIVE_CANONICAL | Trust正本。 |
| `00_CONSTITUTION/Structure_Freeze_Rule.md` | ACTIVE_CANONICAL | 構造Freeze正本。 |
| `01_HUMAN_CONSOLE/Approval_Inbox_Design.md` | REFERENCE_ONLY | Approval Inbox未実装。 |
| `01_HUMAN_CONSOLE/Approved_Next_Action.md` | ACTIVE_SUPPORT | 承認済み次Action補助。 |
| `01_HUMAN_CONSOLE/README.md` | ACTIVE_SUPPORT | CEO Console説明。 |
| `01_HUMAN_CONSOLE/index.html` | ACTIVE_CANONICAL | CEO Console正本。 |
| `02_AI_CONTROL_CENTER/README.md` | ACTIVE_SUPPORT | AI向け画面説明。 |
| `02_AI_CONTROL_CENTER/index.html` | ACTIVE_CANONICAL | AI Control Center正本候補。 |
| `02_WORKFLOWS/AI_Capability_Registry.md` | ACTIVE_SUPPORT | AI能力台帳。 |
| `02_WORKFLOWS/AI_Routing_Rule.md` | MERGE_CANDIDATE | Decision Quality / Thinking Routeと統合候補。 |
| `02_WORKFLOWS/Approval_To_Codex_Loop.md` | REFERENCE_ONLY | Task Queue未実装まで参照のみ。 |
| `02_WORKFLOWS/Console_Update_Loop.md` | MERGE_CANDIDATE | Guided Execution / current_state運用へ統合候補。 |
| `02_WORKFLOWS/Current_System_Review.md` | ACTIVE_CANONICAL | 現状レビュー正本。 |
| `02_WORKFLOWS/Decision_Quality_Pipeline.md` | ACTIVE_CANONICAL | 判断品質Route正本。 |
| `02_WORKFLOWS/Evolution_OS_Loop.md` | REFERENCE_ONLY | 上位思想。日常実行では読まない。 |
| `02_WORKFLOWS/Evolution_Readiness_System.md` | ACTIVE_SUPPORT | Gauge / Readiness補助。 |
| `02_WORKFLOWS/Guided_Execution.md` | ACTIVE_CANONICAL | Guided Execution正本。 |
| `02_WORKFLOWS/Knowledge_Compiler.md` | ACTIVE_CANONICAL | Knowledge圧縮正本。 |
| `02_WORKFLOWS/Knowledge_Compression_Loop.md` | MERGE_CANDIDATE | Knowledge Compilerへ統合候補。 |
| `02_WORKFLOWS/Multi_Codex_Orchestration.md` | REFERENCE_ONLY | 将来構想。今は使わない。 |
| `02_WORKFLOWS/OS_Knowledge_Audit.md` | MERGE_CANDIDATE | System Architecture Auditへ統合候補。 |
| `02_WORKFLOWS/Smartphone_Command_Loop.md` | REFERENCE_ONLY | DB-backed loopまで参照のみ。 |
| `02_WORKFLOWS/System_Architecture_Audit.md` | ACTIVE_CANONICAL | 構造監査正本。 |
| `02_WORKFLOWS/Thinking_Route.md` | MERGE_CANDIDATE | Decision Quality Pipelineへ統合候補。 |
| `02_WORKFLOWS/Top_Level_Strategy_Loop.md` | REFERENCE_ONLY | Profit validation開始時に参照。 |
| `03_STATUS/ai_capability_registry.json` | ACTIVE_SUPPORT | AI能力Status。 |
| `03_STATUS/architecture_audit.json` | ACTIVE_SUPPORT | 構造監査Status。 |
| `03_STATUS/blockers.json` | ACTIVE_SUPPORT | Blocker Status。 |
| `03_STATUS/current_state.json` | ACTIVE_CANONICAL | 現在状態正本。 |
| `03_STATUS/current_state_summary.json` | ACTIVE_SUPPORT | AI引き継ぎ用Summary。 |
| `03_STATUS/decision_quality.json` | ACTIVE_SUPPORT | Decision Quality Status。 |
| `03_STATUS/identity.json` | ACTIVE_SUPPORT | Identity台帳。 |
| `03_STATUS/knowledge_registry.json` | ACTIVE_CANONICAL | Knowledge Registry正本。 |
| `03_STATUS/latest_action.json` | ACTIVE_SUPPORT | Next action補助。 |
| `03_STATUS/readiness.json` | ACTIVE_SUPPORT | Gauge Status。 |
| `03_STATUS/route_audit.json` | ACTIVE_SUPPORT | Route Audit Status。 |
| `03_STATUS/trust_rules.json` | ACTIVE_SUPPORT | Trust Status。 |
| `04_EVIDENCE/Architecture_Review_Index.md` | ACTIVE_SUPPORT | Architecture Review辞書Index。 |
| `04_EVIDENCE/Supabase_Project_Setup.md` | ACTIVE_CANONICAL | Supabase setup evidence正本。 |
| `06_DEPLOY/AI_Tool_Docs_Research_Plan.md` | REFERENCE_ONLY | AI docs調査時のみ参照。 |
| `06_DEPLOY/Console_Summary.md` | ACTIVE_SUPPORT | Deploy summary補助。 |
| `06_DEPLOY/Human_Navigator_Vercel_2FA_Guide.md` | LEGACY | Vercel 2FA完了済み。学習Evidenceとして残す。 |
| `06_DEPLOY/Human_Setup_Guide_Vercel_Supabase.md` | MERGE_CANDIDATE | Vercel/Supabase個別GuideとSecurityへ分割・統合候補。 |
| `06_DEPLOY/Infrastructure_Decision_Brief.md` | REFERENCE_ONLY | Decision済み部分はProduction Pathへ集約。 |
| `06_DEPLOY/Preview_Deployment_Decision.md` | LEGACY | GitHub Pages legacy preview。 |
| `06_DEPLOY/Production_Path_Decision_Brief.md` | ACTIVE_SUPPORT | Production path補助。 |
| `06_DEPLOY/Security_Roadmap.md` | MERGE_CANDIDATE | SECURITY/READMEへ統合候補。 |
| `06_DEPLOY/Supabase_to_Vercel_Env_Guide.md` | ACTIVE_SUPPORT | Deploy補助。 |
| `06_DEPLOY/Vercel_Project_Import_Guide.md` | ACTIVE_CANONICAL | 今のDeploy正本。 |
| `SECURITY/Anthropic.md` | REFERENCE_ONLY | Anthropic利用時に参照。 |
| `SECURITY/Cloudflare.md` | REFERENCE_ONLY | Cloudflare接続時に参照。 |
| `SECURITY/Environment_Variables.md` | ACTIVE_SUPPORT | Env Vars security補助。 |
| `SECURITY/GitHub.md` | ACTIVE_SUPPORT | GitHub security補助。 |
| `SECURITY/Google_Account.md` | ACTIVE_SUPPORT | Google account security補助。 |
| `SECURITY/OpenAI.md` | REFERENCE_ONLY | OpenAI API利用時に参照。 |
| `SECURITY/Password_Manager.md` | ACTIVE_SUPPORT | Password Manager補助。 |
| `SECURITY/README.md` | ACTIVE_CANONICAL | Security正本。 |
| `SECURITY/Recovery_Codes.md` | ACTIVE_SUPPORT | Recovery補助。 |
| `SECURITY/Secrets.md` | ACTIVE_SUPPORT | Secrets補助。 |
| `SECURITY/Supabase.md` | ACTIVE_SUPPORT | Supabase security補助。 |
| `SECURITY/Vercel.md` | ACTIVE_SUPPORT | Vercel security補助。 |
| `99_LEARNING/Reality_Navigation_Log.md` | ACTIVE_SUPPORT | Stop Point learning log。 |

## Merge Candidates

- `Knowledge_Compression_Loop.md` → `Knowledge_Compiler.md`
- `OS_Knowledge_Audit.md` → `System_Architecture_Audit.md`
- `Console_Update_Loop.md` → `Guided_Execution.md` / `current_state.json`運用
- `Thinking_Route.md` + `AI_Routing_Rule.md` → `Decision_Quality_Pipeline.md`
- `Human_Setup_Guide_Vercel_Supabase.md` + `Security_Roadmap.md` + `SECURITY/*.md` は責務重複を確認し、Securityは `SECURITY/README.md` を正本に寄せる

## Current Rule

次の実行はVercel Importであり、思想追加ではない。

Human Next Action:
Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。

Do not paste:
- service_role
- secret key
- DB password
- Recovery Code
- PAT

## AI Operating Company Office Rules

Rule:
大カテゴリは原則5〜7個以内に保つ。

Rule:
Workflowは独立カテゴリではなくRuntime Officeの実装である。

Rule:
Deploy / Security / Browser / External ServiceはReality Officeの実装である。

Rule:
Status / Registry / Evidence / SummaryはKnowledge Officeの実装である。

Rule:
Humanが見るものはCEO Officeに集約する。

Rule:
Humanは更新作業者ではなく、承認者・方向決定者である。

Current Office:
Reality Office

Current Reality Step:
Vercel Import

## Policy Lock / Rule Lock

CEOがLockしたRuleは、AI / Codex / Workerが勝手に変更できない。

Lock対象:

- Design Rule
- Security Rule
- Naming Standard
- Trust Rule
- Environment Variable Naming Standard
- Secret Handling Rule
- Structure Freeze

Rules:

- Lock解除にはCEO Decisionが必要。
- Locked RuleはCEO Consoleに表示する。
- 新しい提案はLocked Ruleと照合してからTask化する。
- Locked Ruleに反するTaskは、Task Queueへ入れずDecision Queueへ戻す。
- AI / Codex / WorkerはLocked Ruleの変更を提案できるが、実行はできない。
