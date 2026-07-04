# Evolution / Readiness / AI Resource Optimization System

Last updated: 2026-07-05

## Purpose

Humanが「今どこまで来ているか」「何が足りないか」「どのAIをどこに使うべきか」「目標達成まで何％か」を一目で分かる状態にする。

このSystemは新しい思想ではなく、start2026を毎日動かすための現在座標管理である。

---

## 1. 関係整理

| Area | 役割 |
|---|---|
| Evolution Engine | OSがどの能力を獲得し、次に何を伸ばすかを管理する |
| Readiness Dashboard | 本番・Strategy・Evidence・Securityなどの準備率を表示する |
| Runtime Intelligence | 実行時に、現在状態・詰まり・次の一手を判断する |
| Meta Evaluation | AI出力、Strategy、Evidence、Design、Executionを批判的に評価する |
| Experiment Engine | 小さな検証、Paid Test、Preview Test、Market Testを回す |
| AI Resource Optimization | タスクごとに最適なAI / tool / scriptを選ぶ |
| Cost Optimization | AI費用、API費用、サーバー費用、Human Costを総合最適化する |
| Human Cognitive Load | Humanが読む・迷う・判断する・探す負荷を測り下げる |

関係:

```text
Evolution Engine
↓
Readiness Dashboard
↓
Runtime Intelligence
↓
AI Resource Optimization / Cost Optimization
↓
Experiment Engine
↓
Meta Evaluation
↓
Learning
↓
Evolution Update
```

---

## 2. AI Resource Optimization

目的:
すべてを高性能AIで回すのではなく、タスクごとに最適なAI / tool / scriptを選ぶ。

| 分類 | 使うもの | 向いている仕事 |
|---|---|---|
| High Reasoning | GPT / Claudeなど高性能AI | 戦略、抽象化、設計レビュー、複雑な判断 |
| Code Execution | Codex / Cursor | ファイル編集、コード実装、Git操作、UI実装 |
| Cheap Repetitive Task | 低コストAI / script | 定型変換、整形、分類、繰り返し処理 |
| Search / Research | Web / official docs / Research Brain | 最新情報、公式Docs、価格、制約確認 |
| Image / Design | Vision / Design Brain | スクショ分析、Design DNA抽出、UI比較 |
| Review / Critique | Meta Evaluation Brain | 出力品質、リスク、矛盾、Evidence不足の検出 |

評価軸:

- Reasoning Depth
- Accuracy Need
- Cost
- Speed
- Risk
- Privacy
- Repeatability
- Human Cognitive Load

基本方針:

- 高い推論が必要なところだけ高性能AIを使う
- 繰り返しはscript化する
- 最新情報は公式Docs / Research Brainで確認する
- 秘密情報や個人情報を外部AIへ渡す前にRisk / Security Brainで確認する
- Humanが判断する量を減らすため、AI選定結果もHuman Consoleへ圧縮表示する

---

## 3. Readiness Gauge設計

各カテゴリは以下を持つ。

- current %
- status
- blocker
- next action
- confidence

### Current Scores

| Category | Current | Status | Blocker | Next Action | Confidence |
|---|---:|---|---|---|---:|
| Purpose / Philosophy | 90% | Strong | Principle化前の検証 | 実案件で矛盾確認 | 80% |
| Architecture | 85% | Strong | 概念が増えやすい | 実案件で統合判断 | 75% |
| Human Console | 45% | Prototype | スマホ常時Preview未安定 | パスワード付きPreview導線 | 70% |
| Design System | 65% | Candidate | Token本採用前 | Mobile Studio検証 | 65% |
| Developer Factory | 30% | Booting | Workflow未接続 | Human Console起点の導線 | 60% |
| Runtime Intelligence | 5% | Not started | 実行時判断なし | 最小状態診断を作る | 40% |
| Evidence System | 25% | Early | Evidence DB未整備 | Evidence template固定 | 55% |
| Strategy Loop | 40% | Discussion | Market Evidence不足 | Profit Hypothesis作成 | 60% |
| Infrastructure | 30% | Brief ready | Preview方式未確定 | 外部公開可否決定 | 55% |
| Deployment | 15% | Not ready | Deploy先未選定 | パスワード付きPreview調査 | 45% |
| Security | 20% | Policy only | Auth / access制限未決定 | Preview認証方式調査 | 50% |
| Profit Validation | 20% | Hypothesis | Paid Test未実施 | 小さなOffer検証設計 | 45% |
| Automation | 10% | Not started | API / Workflow未整備 | 手動→半自動の順で設計 | 40% |
| AI Resource Optimization | 5% | Not started | AI選定ルール未運用 | タスク分類表を使う | 45% |

Overall Readiness:
35%前後。

理由:
Purpose / Architecture / Designは進んでいるが、Runtime / Deployment / Security / Profit Validation / Automationがまだ弱い。

---

## 4. Human Console表示方針

Human Consoleには以下だけ表示する。

- 今の準備率
- 何が足りないか
- 次に調べること
- Humanが決めること1つ
- 現在の推奨
- 信頼度

詳細表はこの文書へ残す。
Consoleには長い説明を出さない。

---

## 5. Next Highest ROI Action

Human Consoleをスマホで安定して開ける、パスワード付きPreview導線を作る。

理由:
Human Consoleが司令塔なので、スマホで常時開けることが全体のHuman Cognitive Loadを最も下げる。

---

## 6. Password Preview Policy

Human判断:
パスワード付きなら外部Preview OK。
初期パスワードは `123456` で仮OK。

注意:
`123456` は仮Preview専用。
Secret / API Key / PATはGitに保存しない。
本番や重要情報ありのPreviewでは、より強い認証へ移行する。

---

## 7. 自己レビュー

Humanが現在座標を一目で理解できるか:
Readiness GaugeとOverall Readinessで理解しやすくなる。

ゲージが多すぎて認知負荷になっていないか:
詳細はこの文書、Consoleは要約表示に分ける必要がある。

次に何をすべきか1つに絞れているか:
現時点では「パスワード付きPreview導線を作る」に絞る。

AIモデル選択の最適化方針が入っているか:
入っている。Reasoning Depth / Cost / Risk / Privacy / Repeatabilityで分類する。

今後ループが回るたびにゲージ更新できるか:
できる。各カテゴリにcurrent / status / blocker / next action / confidenceを持たせた。
