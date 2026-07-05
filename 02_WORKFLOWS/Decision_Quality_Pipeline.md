# Decision Quality Pipeline

Purpose: AIが途中経過や迷いをHumanへ見せるのではなく、CEOが判断できる品質までRecommendationを圧縮する。

## Pipeline

Task
↓
Purpose Check
↓
Thinking Rule Check
↓
Official Docs / Evidence Check
↓
Capability Registry Check
↓
Cost / Risk Check
↓
Options
↓
Recommendation
↓
Audit
↓
Human Decision
↓
Execution
↓
Learning

## Responsibilities

| Step | Responsibility | CEO Console Output |
| --- | --- | --- |
| Task | 何について判断するか定義する | Current Objective |
| Purpose Check | North Starと一致するか確認する | Purpose Fit |
| Thinking Rule Check | Trust Rulesに違反していないか見る | Trust Status |
| Official Docs / Evidence Check | 最新事実、料金、仕様、AI能力を公式Docsで確認する | Evidence Status |
| Capability Registry Check | AI / Tool / Implementation候補をRegistryで確認する | Confidence |
| Cost / Risk Check | Human Cost / Human Risk / Money Costを確認する | Current Bottleneck / Risk |
| Options | 選択肢を作る | AI Control Center only |
| Recommendation | CEOが判断できる形へ圧縮する | Recommended Decision |
| Audit | Rule / Evidence / Routeを監査する | Audit Status |
| Human Decision | HumanがCEOとして承認/保留/却下する | Next Human Decision |
| Execution | Codex / AI / Human Agentが実行する | Current Sprint |
| Learning | 結果をStatus / Registry / Knowledgeへ戻す | Gauge change |

## CEO Console Rule

CEO ConsoleにはAIの途中経過を出さない。

出すもの:

- North Star
- Current Objective
- Current Bottleneck
- Current Sprint
- Next Human Decision
- Trust Status
- Audit Status
- Overall Health
- Current System Review Summary

出さないもの:

- 長いDocs候補
- Raw Evidence
- Registry全文
- AIの迷い
- AI向け内部手順

## Current Pipeline Status

- Current Decision: Supabaseログイン後、Project作成に進むか承認する。
- Evidence Status: Partial。AI Capability Registry / Official Docs監査が未完了。
- Current Bottleneck: AI Capability Registryが未監査。
- Current Sprint: AI Capability Research + Security Foundation。
- Confidence: Low to Medium。
