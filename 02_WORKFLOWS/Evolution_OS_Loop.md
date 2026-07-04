# Evolution OS Loop

Last updated: 2026-07-05

## Purpose

start2026を、単なるPreview / 開発フォルダではなく、Evidenceを使って自分自身を進化させ続けるEvolution OSの実験工場として動かす。

MrBrainは思想・Architecture・Evidenceの正本。
start2026はHuman Console、Task Queue、Approval Inbox、Readiness Gauge、Evidence、Learning Logをつなぎ、実際に進化ループを回す場所である。

---

## 1. Evolution OSとは何か

Evolution OSとは、Humanがすべて考えるのではなく、AI組織が調査、実装、検証、学習、改善案生成を回し、Humanは次に集中するOSである。

- Purpose
- 美意識
- 違和感
- 最終承認

AI組織は次を担当する。

- Research
- Evidence整理
- Principle抽出
- Strategy生成
- Execution
- Experiment
- Learning
- 次の改善案

AIが全部決めるのではない。
AIは改善案を出し、Evidenceを集め、比較する。
HumanはPurpose、美意識、違和感、最終承認を握る。

---

## 2. 基本ループ

```text
Purpose
↓
Human Experience
↓
Reality
↓
Research
↓
Evidence
↓
Principle
↓
Strategy
↓
Execution
↓
Experiment
↓
Learning
↓
Evolution
↓
次回はより軽く、賢く、美しく、安く、速くなる
```

このLoopの目的は、毎回Humanが説明し直すことを減らすことである。
実行結果をEvidenceとして戻し、次回のHuman Cognitive Loadを下げる。

---

## 3. Evolutionの評価軸

毎回、次を確認する。

- もっと軽くできるか
- もっと賢くできるか
- もっと安くできるか
- もっと美しくできるか
- Human Cognitive Loadを下げられるか
- 同じ理論で他分野へ転用できるか
- 不要な部品を削れるか
- Evidenceはあるか
- 進化した結果、ゲージは上がったか

Evolutionは単なる機能追加ではない。
同じPurposeへ、より少ないHuman Cost、より高いEvidence Confidence、より良いHuman Experienceで近づくことである。

---

## 4. 共通構造

Design / Marketing / 投資 / HOTEL JOY / SNS / 開発 / 経理でも、基本構造は同じである。

```text
Reality
↓
Research
↓
Evidence
↓
Principle
↓
Strategy
↓
Execution
↓
Learning
↓
Evolution
```

ArtifactやExecution Componentは分野ごとに変わる。
しかし、Evidenceを集め、Principleへ圧縮し、Strategyへ変換し、Executionし、Learningを戻す構造は共通である可能性が高い。

---

## 5. Human Consoleとの接続

Human Consoleに将来表示する項目:

- Evolution Readiness
- Current Evolution Loop
- Last Improvement
- Next Highest Evolution Action
- Human Cognitive Load Reduction
- Evidence Confidence
- Reusable Principle
- Gauge Change

Human Consoleは、長い設計書を読む場所ではない。
Evolution Loopの現在位置、次に承認すること、どのゲージが上がったかだけをHumanへ返す入口である。

---

## 6. start2026での実装方針

start2026はEvolution OSの実験工場である。

```text
Human Console
↓
Task Queue
↓
Approval Inbox
↓
Execution
↓
Evidence
↓
Learning Log
↓
Readiness Gauge更新
↓
Next Highest Evolution Action
```

ループが回るたびに、ゲージが更新される状態を目指す。

### Minimum target

最小実装では、次の1回だけを通す。

```text
Task created
↓
Approval requested
↓
Human approves
↓
Codex executes
↓
Preview updates
↓
Learning Log records result
↓
Readiness Gauge changes
```

---

## 7. Status / DB候補

当面はMarkdown / JSONで管理する。
Vercel + Supabase接続後は、次のDBへ移行する。

- tasks
- approvals
- readiness_scores
- blockers
- evidence
- ai_runs
- learning_logs

`04_BACKEND/Task_Queue_Schema.md` と `04_BACKEND/Supabase_Minimum_Schema.md` を参照する。

---

## 8. 注意

- AIが全部決めるのではない。
- AIは改善案を出し、Evidenceを集め、比較する。
- HumanはPurpose、美意識、違和感、最終承認を握る。
- Secret / API Key / PATはGitへ保存しない。
- Supabase service_role keyは絶対にGitへ保存しない。
- `123456` は仮Preview専用。本番・重要情報ありでは使用禁止。

---

## 9. 自己レビュー

既存のPurpose / Human Experience / Learningと矛盾しないか:
矛盾しない。Purposeへ近づくためにHuman Experienceを改善し、Learningを使って次回を軽くする構造である。

新しい概念を増やしすぎていないか:
注意が必要。ただしEvolution OSは新しいEngineというより、既存のPurpose / Human Experience / Evidence / Learning / Gauge / Executionを一本の自己改善ループとして束ねるWorkflowである。

Evolution OSは最上流候補として自然か:
自然である可能性がある。start2026が目指す「自分自身を改善する開発工場」を説明しやすい。ただしPrinciple化には複数分野での検証が必要。

Humanにとって心地よく、軽く、継続しやすいか:
Humanが読む量を減らし、Next Highest Evolution Actionを1つに絞るなら、継続しやすい可能性が高い。

次に実装すべき最小機能:
Task Queue / Approval Inbox / Readiness Gauge / Learning Logを1回だけ接続し、1つの改善でGaugeが変わる状態を作る。
