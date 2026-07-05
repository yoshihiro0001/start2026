# Trust Rules

Purpose: 既存Discussionから抽出した、判断・実装・案内で必ず守るRule候補。

Trust is not intelligence. Trust is earned by rule compliance, evidence, validation, recovery, and successful results.

| Rule | Title | Rule | Used In | Risk if Broken | Human Console Output |
| --- | --- | --- | --- | --- | --- |
| Rule 01 | Official Docs Required | 最新情報、料金、機能、AI能力、セキュリティ、API、法律、仕様は、公式Docs確認なしに断定しない。 | AI Capability Registry / Reality Connection / Security Foundation | 古い知識で誤案内し、実装や契約判断を誤る。 | 公式Docs確認状態をEvidence Statusへ出す。 |
| Rule 02 | AI Routing Requires Evidence | AI選定は、AI Capability Registry、公式Docs、契約プラン、実機能力、Cost、Riskを比較してから行う。 | AI Capability Registry | Gemini/Claude/ChatGPT/Codexの能力を思い込みで選び、Human CostやSecurity Riskが上がる。 | AI Control CenterにRecommended AI / Confidence / Pending Researchを出す。 |
| Rule 03 | No Evidence, No Assertion | Evidence不足の判断は、断定せずHypothesis / Pending Researchと表示する。 | Human Experience Evidence / Knowledge Compression | 未確認情報が正本化され、次回以降の判断を汚す。 | ConfidenceとCurrent Gapを表示する。 |
| Rule 04 | Explain With Existing Architecture First | 新しい概念は、既存Architectureで説明できるか確認してから追加する。 | Evolution Rule | 概念が増え、Route / Responsibility / Human Consoleが重くなる。 | Architecture AuditにDuplicate Riskを出す。 |
| Rule 05 | Human Cost Must Pay Back | Human Costを増やす実装は、明確なReality ChangeまたはRisk低下がない限り採用しない。 | Human Console / Cognitive Load | 読む量、判断量、画面切替が増える。 | Human ConsoleにはNext Actionを1つだけ出す。 |
| Rule 06 | High Human Risk Requires Security | Human Riskが高い作業は、必ずSecurity / Recovery / Approvalを通す。 | Security Foundation | 乗っ取り、Recovery不能、秘密漏洩、権限ミスが起きる。 | Current Highest RiskとNext Security Actionを出す。 |
| Rule 07 | No Secrets In Git | Secret / API Key / PAT / service_role / Recovery CodeはGitへ保存しない。 | Security Foundation | 秘密情報が漏洩し、復旧不能な被害につながる。 | Prohibited InputsとしてAI Control Centerに表示する。 |
| Rule 08 | Stop Points Become Evidence | Humanが迷った場所はReality Navigation LogへEvidenceとして残す。 | Human Navigator | 同じ停止が繰り返される。 | Reality Navigation Logへの接続をRoute Auditで確認する。 |
| Rule 09 | Guide From Current Screen | 外部サービス設定は、Human NavigatorでCurrent Screen / Next Button / Required App / Completion Checkまで案内する。 | Human Navigator | Docsを読ませるだけになり、Humanが画面上で止まる。 | Human NavigatorカードとGuideリンクを出す。 |
| Rule 10 | Compress Human Console | Human Consoleは長文を表示せず、Current Mission / Risk / Gauge / Next Action / Approvalに圧縮する。 | Human Console / Cognitive Load | Human Console自体が読む負担になる。 | TopはHealth / Risk / Next Action / Trustに限定する。 |
| Rule 11 | Separate Human And AI Screens | AI用画面とHuman用画面は責務を分ける。 | AI Capability Registry | Human ConsoleにAI内部情報や長いDocsが混ざる。 | 02_AI_CONTROL_CENTERを候補として分離する。 |
| Rule 12 | Compress Knowledge | KnowledgeはRawのまま放置せず、Summary / Decision / Evidence / Reusable Rule / Next Reviewへ圧縮する。 | Knowledge Compression | 情報が増えても再利用できず、AI Costが下がらない。 | Knowledge HealthとNext Auditを表示する。 |
| Rule 13 | Audit Routes And Maintenance | Route / Connection / Duplicate / Dead File / Maintenance Costは定期Auditする。 | System Architecture Audit | ファイルや概念が増え、入口と正本が分からなくなる。 | Route Audit JSONとArchitecture Healthを出す。 |
| Rule 14 | Do Not Ask Twice | 同じ情報をHumanに二度入力させない。Identity Registry / Input Memoryから再利用する。 | Identity Registry / Human Setup Intelligence | Humanが名前、URL、Project情報で毎回止まる。 | Suggested Input / Registry / Copy予定を出す。 |
| Rule 15 | Do Not Multi-Codex Too Early | 複数Codex化は、Task Queue / Conflict Check / Validation / Human Approval / Merge Ruleが整うまで実装しない。 | Multi-Codex Orchestration | 並列作業で衝突、上書き、責務不明が起きる。 | Multi-Codex StatusをDiscussion onlyで表示する。 |
| Rule 16 | Profit Requires Market Evidence | Profit Strategyは、Market Evidence / Demand / Price / Competition / Human Cost / Riskなしに実行しない。 | Top-Level Strategy Loop | 願望だけで広告費、開発費、時間を使う。 | Strategy ConfidenceとEvidence Readinessへ接続する。 |
| Rule 17 | Design Optimizes Experience | DesignやUIは見た目ではなく、Human Experience / Cognitive Load / Reality Changeで評価する。 | Purpose to Human Experience / Design Engineering | 綺麗だが使えないUIになる。 | Design FeedbackをHuman Cost / Cognitive Loadで評価する。 |
| Rule 18 | Validate Goal Before Execution | Execution前にGoal Validationを通す。IntentをそのままExecutionへ流さない。 | Goal Validation Gate | 願望や違和感がそのまま危険な実行になる。 | Goal / Success / Scope / Reality contradictionを確認する。 |
| Rule 19 | Discover Implementation Before Building | Implementation前にReality Connection / Implementation Discoveryを通す。 | Reality Connection | APIがあるのにブラウザ自動化を作るなど、コストが増える。 | Implementation Discovery statusをDecision Briefへ残す。 |
| Rule 20 | Trust Is Earned | TrustはAIの賢さではなく、Ruleを守った回数、Evidence、成功結果で上げる。 | Trust Evolution | 印象だけでAIに任せすぎる。 | Trust Score / Rule Compliance / Result Evidenceを使う。 |

## Trust Scoring Hypothesis

Trust should increase when:

- Rule was checked.
- Evidence was attached.
- Official docs were checked where required.
- Human Approval was obtained before high-risk execution.
- Secrets were not exposed.
- Result was validated.
- Failure was learned and compressed.

Trust should decrease when:

- AI asserts current facts without docs.
- Pending Research is presented as fact.
- Human Console becomes too long.
- Secrets or recovery codes are requested in chat or Git.
- Browser actions happen without Human approval.
- Route / Registry / Status JSON drift apart.
