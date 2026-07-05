# Workflow Archive Candidates

Last updated: 2026-07-06

## Purpose

Knowledge Compilerの初回Auditとして、`02_WORKFLOWS` 内のWorkflowを分類する。

削除は禁止。
ここでは active / duplicate_candidate / merge_candidate / archive_candidate / reference_only を記録するだけにする。

Current Human Next Action is unchanged:
Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。

## Classification Summary

| File | Classification | Reason | Suggested Handling |
| --- | --- | --- | --- |
| `AI_Capability_Registry.md` | active | AI選定の能力台帳として必要。 | Keep. `AI_Routing_Rule.md` と接続。 |
| `AI_Routing_Rule.md` | merge_candidate | `Decision_Quality_Pipeline.md` / `Thinking_Route.md` と責務が近い。 | 将来 `Decision_Quality_Pipeline` のAI routing sectionへ吸収候補。 |
| `Approval_To_Codex_Loop.md` | reference_only | Task Queue未実装のため現時点では構想資料。 | Task Queue開始時に再確認。 |
| `Console_Update_Loop.md` | merge_candidate | CEO Console更新ルールは `current_state.json` / `readiness.json` / `Guided_Execution.md` と重複。 | 将来 `Guided_Execution.md` または READMEへ要約吸収。 |
| `Current_System_Review.md` | active | 現在の構造監査ログ。 | Keep. 最新レビューだけ上に出す運用へ改善候補。 |
| `Decision_Quality_Pipeline.md` | active | CEO判断品質の中心Route。 | Keep. `Thinking_Route.md` と責務整理。 |
| `Evolution_OS_Loop.md` | reference_only | 上位思想 / 進化ループの説明。日常実行では直接使わない。 | Architecture referenceとして維持。 |
| `Evolution_Readiness_System.md` | active | Readiness GaugeとAI Resource Optimizationの基礎。 | Keep. Gauge更新時に参照。 |
| `Guided_Execution.md` | active | Current Screen / Exact Button / Exact Inputの中心。 | Keep. 今すぐ使うWorkflow。 |
| `Knowledge_Compiler.md` | active | 長大DiscussionをRegistryへ圧縮する中心。 | Keep. 今すぐ使うWorkflow。 |
| `Knowledge_Compression_Loop.md` | duplicate_candidate | `Knowledge_Compiler.md` と責務がかなり重なる。 | `Knowledge_Compiler.md` へ要点吸収済み。Archive候補。 |
| `Multi_Codex_Orchestration.md` | reference_only | 将来構想。今すぐ実装しない。 | 1体Codex運用が安定するまで参照のみ。 |
| `OS_Knowledge_Audit.md` | merge_candidate | `System_Architecture_Audit.md` と監査責務が近い。 | 将来 `System_Architecture_Audit.md` のKnowledge sectionへ統合候補。 |
| `Smartphone_Command_Loop.md` | reference_only | Supabase / Task Queue / Approval Inbox未実装のため将来構想。 | Vercel + Supabase接続後に再評価。 |
| `System_Architecture_Audit.md` | active | Route / Connection / Duplicate / Maintenance監査の中心。 | Keep. `OS_Knowledge_Audit.md` と統合候補。 |
| `Thinking_Route.md` | merge_candidate | `Decision_Quality_Pipeline.md` とRoute責務が近い。 | 将来Decision routeの上流チェックとして統合候補。 |
| `Top_Level_Strategy_Loop.md` | reference_only | 利益化 / Strategyの上位構想。現在のVercel Importには直接不要。 | Profit validation開始時に再確認。 |

## Responsibility Clusters

### Knowledge Cluster

Files:
- `Knowledge_Compiler.md`
- `Knowledge_Compression_Loop.md`
- `OS_Knowledge_Audit.md`

Current decision:
`Knowledge_Compiler.md` をactive centerにする。
`Knowledge_Compression_Loop.md` はduplicate_candidate。
`OS_Knowledge_Audit.md` はSystem Architecture Auditへ統合候補。

### Execution / Console Cluster

Files:
- `Guided_Execution.md`
- `Console_Update_Loop.md`
- `Smartphone_Command_Loop.md`
- `Approval_To_Codex_Loop.md`

Current decision:
今すぐ使うのは `Guided_Execution.md`。
`Console_Update_Loop.md` はStatus JSON更新ルールとして残すが統合候補。
`Smartphone_Command_Loop.md` / `Approval_To_Codex_Loop.md` はDB-backed loop開始までreference_only。

### Decision / Route / AI Routing Cluster

Files:
- `Decision_Quality_Pipeline.md`
- `Thinking_Route.md`
- `AI_Routing_Rule.md`
- `AI_Capability_Registry.md`

Current decision:
`Decision_Quality_Pipeline.md` をCEO判断Routeの中心にする。
`AI_Capability_Registry.md` は台帳としてactive。
`Thinking_Route.md` / `AI_Routing_Rule.md` は将来統合候補。

### Strategy / Evolution Cluster

Files:
- `Evolution_OS_Loop.md`
- `Evolution_Readiness_System.md`
- `Top_Level_Strategy_Loop.md`
- `Multi_Codex_Orchestration.md`

Current decision:
`Evolution_Readiness_System.md` はGauge用にactive。
その他はreference_only。
Multi-Codexは早すぎるため、Task Queue / Validation / Merge Ruleができるまで参照のみ。

## Archive Candidate Rules

Archive candidate does not mean delete.
Archive only after all conditions are met:

- Registryへ要約済み
- Current routeから参照されていない
- 30日以上使われていない
- Human Console / AI Control Center / Status JSONに影響しない
- Humanが次に何を押すかに関係しない

## Current Active Minimal Set

今すぐ日常運用で読むWorkflowは以下に絞る。

1. `Guided_Execution.md`
2. `Knowledge_Compiler.md`
3. `Decision_Quality_Pipeline.md`
4. `Current_System_Review.md`
5. `System_Architecture_Audit.md`
6. `Evolution_Readiness_System.md`

## Current Human Action

Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。

Do not paste:
- service_role
- secret key
- DB password
- Recovery Code
- PAT
