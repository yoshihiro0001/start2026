# Evolution Ecosystem

Last updated: 2026-07-06

## Purpose

Operating Companyを部署管理で終わらせず、全部署が勝手に良くなり続ける循環として設計する。

これは新しい部署ではない。
新しいWorkflowでもない。
既存Blueprintを循環として読むためのDiscussion候補である。

Evolution Engineは、新しい概念を増やす部署ではない。
最優先は、統合、圧縮、削減、Canonical化、Rule昇格、Archive候補抽出である。

## Ecosystem Loop

```text
Purpose
↓
Constitution
↓
Evolution Engine
↓
Operating Company
↓
Office
↓
Worker
↓
Reality
↓
Learning
↓
Evolution Engine
```

## Evolution Engine Role

Evolution Engineは次を見る。

- Trust
- Human Cost
- Human Risk
- AI Cost
- Reality Progress
- Knowledge Health
- Runtime Health
- Security
- Profit Validation
- Purpose Alignment
- Entropy

Evolution Engineは次を行う候補である。

- 全Officeを監査する
- 改善Task候補を生成する
- 統合・圧縮・削減の候補を出す
- Canonical化候補を出す
- Rule昇格候補を出す
- Archive候補を出す
- Humanへ承認だけ求める

Humanは更新作業者ではない。
Humanは承認者・方向決定者である。

## Office Evolution Score

各OfficeはMissionだけでなくEvolution Scoreを持つ候補とする。

| Office | Mission | Evolution Score Inputs |
| --- | --- | --- |
| Constitution Office | Purpose / Rule / Trust / 禁止事項を守る | Trust, Purpose Alignment, Entropy, Rule clarity |
| Runtime Office | Execution / Workflow / Automationを動かす | Runtime Health, AI Cost, Reality Progress, Entropy |
| Knowledge Office | Knowledge / Registry / Evidence / Current Stateを圧縮する | Knowledge Health, Human Cost, Entropy, Evidence freshness |
| Reality Office | Vercel / Supabase / Security / External Serviceへ接続する | Reality Progress, Security, Human Risk, Trust |
| CEO Office | Humanが次の判断だけを見る | Human Cost, Trust, Bottleneck clarity, Purpose Alignment |
| Learning Office | Stop Point / Learning / Archive候補を戻す | Learning quality, Archive readiness, Entropy reduction |

## Evolution Score Candidate

まだ数式は決めない。
候補として以下から算出する。

- Trust
- Human Cost
- Human Risk
- AI Cost
- Reality Progress
- Knowledge Health
- Runtime Health
- Security
- Purpose Alignment
- Entropy

## Entropy

Entropyは構造の乱雑さである。

Entropyが上がる例:

- Workflowが増えすぎる
- 同じ概念が複数ファイルに分散する
- 正本が分からない
- CEO Consoleが長くなる
- RegistryとConsoleがズレる
- Guideが重複する
- Archive候補が溜まる

Entropyが一定値を超えた場合、Garbage Collectorが優先すること:

1. 統合
2. 整理
3. Canonical化
4. Archive候補抽出
5. Rule昇格候補の確認

Garbage Collectorは削除ではない。
まずArchive候補として出す。

## Discussion Gate

新しい概念は、既存構造で説明できないことがEvidence付きで証明された場合のみ、Discussion候補として一時登録する。

Discussionは入口ではない。
Discussionは最後の手段である。

## Current Ecosystem Status

Current mode:
部署管理から循環管理への移行前。

Current reality blocker:
Vercel Import未完了。

Current entropy:
High。Workflow / Deploy / Status / Security filesが多く、Manual Syncも残る。

Current priority:
新しい概念ではなく、Vercel ImportとCanonical維持。

## Current Human Action

Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。
