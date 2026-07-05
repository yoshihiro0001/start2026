# OS Knowledge Audit

Last updated: 2026-07-06

## Purpose

Evolution Factory / MrBrainが、DiscussionやGuideを増やすだけで重くならないよう定期監査する。

監査目的は削除ではなく、Summary化、Registry接続、CEO Console反映、Archive候補の発見である。

## Audit Questions

- Discussionが増えすぎていないか
- Summary化されているか
- Registryへ接続されているか
- CEO Consoleへ反映されているか
- Humanが次に迷わないか
- AIが同じ調査を繰り返していないか
- 古い情報が残っていないか
- 重複概念が増えていないか
- Archive候補はあるか

## Audit Checklist

| Check | Pass Condition |
| --- | --- |
| Summary | 5行以内のSummaryがある |
| Evidence | Evidence sourceがある |
| Rule | Reusable Ruleへ変換されている |
| Registry | `03_STATUS/*registry*.json` へ接続済み |
| CEO Console | Human向けNext Action / Riskだけ反映 |
| AI Control Center | AI向け詳細は分離されている |
| Freshness | last_checked / next_reviewがある |
| Secret Safety | Secret / key / password / recovery codeを保存していない |

## Current Audit Result

Score: 46 / 100

Strong:
- Rule / Trust / AI Handoffは軽量正本化済み。
- Repository identityは正式化済み。
- CEO Console化の方向は自然。

Weak:
- Architecture Reviewは長大化しており辞書化が必要。
- CEO Consoleにはまだ下部にAI向け詳細が多い。
- Guided ExecutionはVercel / Supabase画面単位へ落とし込み途中。
- RegistryとConsoleの同期は手動。

Highest ROI Fix:
Vercel ImportをGuided Execution通りに完了し、Preview URLをCEO Consoleへ反映する。

## Archive Policy

Deleteは原則禁止。
まずArchive候補として記録する。

Archive Candidate条件:
- 30日使われていない
- 正本ではない
- Registryへ要約済み
- Current routeから参照されていない

## Review Cycle

Weekly:
Route / Connection / Broken Link / CEO Console drift

Monthly:
Duplicate Concepts / Responsibility Overlap / Archive Candidates

Quarterly:
Architecture Review / Security / Infrastructure / AI Capability
