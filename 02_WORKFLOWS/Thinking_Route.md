# Thinking Route

Purpose: Evolution Factoryのすべての判断、実装、案内が通る標準Route。

## Route

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

## Route Responsibilities

| Step | Responsibility | Output |
| --- | --- | --- |
| Human Intent | Humanの言葉を受け取る | Raw intent |
| Purpose Check | なぜやるかを見る | Purpose fit |
| Human State / Cost / Risk | Humanの状態、負荷、危険を見る | Human-safe path |
| Goal Validation | IntentをGoalへ変換し、ScopeとSuccessを確認する | Validated goal |
| Reality / Current Screen / Context | 現実、画面、状況を確認する | Current reality |
| Official Docs / Evidence Check | 現在事実を確認する | Evidence / Unknown |
| Capability / AI Capability / Implementation Discovery | 何ができるか、どう実装できるか、どのAIを使うか比較する | Options |
| Decision | 最も軽く、安全で価値が高い選択肢を選ぶ | Decision summary |
| Approval | 外部影響・高リスク前にHuman承認を通す | Approved action |
| Execution | Realityへ影響を与える | Result |
| Learning | 成功、失敗、停止点を戻す | Learning log |
| Knowledge Compression | 次回使える知識へ圧縮する | Reusable rule |
| Rule / Registry / Gauge Update | Trustと状態を更新する | Updated console |

## Current Implementation

- Constitution: `00_CONSTITUTION/Thinking_Constitution.md`
- Trust Rules: `00_CONSTITUTION/Trust_Rules.md`
- Rule Audit: `00_CONSTITUTION/Rule_Audit_Checklist.md`
- Trust status: `03_STATUS/trust_rules.json`
- Route audit: `03_STATUS/route_audit.json`
