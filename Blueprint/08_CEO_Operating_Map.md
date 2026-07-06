# CEO Operating Map

Last updated: 2026-07-06

## Purpose

CEOはファイルを見ない。
CEOは会社全体の循環を見る。

このMapは新しいWorkflowではない。
既存のBlueprint / Office / Console / Runtime / Knowledge / Learningを、CEO判断用の一本のOperating Mapへ接続する。

## Operating Route

```text
Purpose
↓
Constitution
↓
Blueprint
↓
Operating Map
↓
Departments / Offices
↓
Decision Queue
↓
Task Queue
↓
Workers
↓
Reality
↓
Evidence
↓
Learning
↓
Compiler
↓
Garbage Collector
↓
Blueprint Candidate
↓
CEO Approval
↓
Blueprint Update
```

## CEO Console Definition

CEO Consoleは、Human CEOが読む画面ではなく、判断する画面である。

表示するもの:

- Company Health
- Purpose Alignment
- Constitution Health
- Knowledge Health
- Runtime Health
- Reality Health
- Learning Health
- Security Health
- Entropy
- Current Bottleneck
- Owner Office
- CEO Decisions
- Human Action
- Locked Policies
- Unverified Claims
- Latest Evidence
- Next Approved Move

表示しないもの:

- 長いDocs
- AIの迷い
- Registry全文
- Workflow全文
- Secret値
- 実装ログ全文

## Department Health Tree

各Officeは次を持つ。

- mission
- health_score
- current_status
- current_bottleneck
- owner
- worker
- next_decision
- latest_evidence
- entropy_risk
- locked_rules
- needs_ceo_approval

| Office | Mission | Current Status | Bottleneck | Owner | Worker | CEO Decision |
| --- | --- | --- | --- | --- | --- | --- |
| Constitution Office | Purpose / Trust / Lock Ruleを守る | Active | 自動監査未実装 | Constitution Office | Codex / AI Reviewer | Lock解除はCEO判断 |
| Knowledge Office | Summary / Registry / Evidenceを圧縮する | Active | Manual Sync | Knowledge Compiler | Codex | Knowledge圧縮方針 |
| Runtime Office | Code / API / Verificationを動かす | Active | Reality Verification未完了 | Runtime Office | Codex | Runtime fix承認 |
| Reality Office | GitHub / Vercel / Supabase / Securityへ接続する | Active | Supabase Data API 200未達 | Reality Office | Codex / Human Navigator | 外部接続承認 |
| CEO Office | CEOが判断だけを見る | Active | まだ情報が多い | CEO Console | Codex | Next Decisionの選択 |
| Learning Office | Evidence / Stop Pointを戻す | Partial | 自動Learning未実装 | Learning Office | Codex | Archive / Rule候補承認 |

## Decision Queue vs Task Queue

CEOはTaskを見ない。
CEOはDecisionだけを見る。

Decision Queue:

- CEOが承認・却下・保留するもの
- 方針
- セキュリティ
- 費用
- 外部接続
- Rule Lock
- Blueprint Update

Task Queue:

- Worker / Codex / AIが実行するもの
- CEO承認済みの実務だけ入る
- 実装
- 検証
- Evidence記録
- Console反映
- Learning更新

## Current Operating State

Company Health:
Draft / 56%

Current Bottleneck:
Runtime / Reality Verification未完了。
最新EvidenceではData APIへ到達済みだが、Health Check probe tableが存在しないか未公開で200 OK未達。

Owner Office:
Runtime Office

CEO Decision:
Runtime Officeの次の検証方針を承認する。

Human Action:
現時点では値やSecretを貼らない。
CEOは承認だけ行う。

## Locked Policies

- Trust Rule
- Env Naming Standard
- Secret Handling Rule
- Structure Freeze
- No Secret in Git / Chat / Markdown
- CEOはTaskを見ない。Decisionだけ見る。

## Self Review

- CEOがファイルではなく会社を見られる: Partial。MapはできたがConsoleはまだ静的。
- 今どこが詰まっているか: Yes。Runtime Office / Reality Verification。
- Human Actionが不要な場合に不要と表示できる: Yes。
- Runtime / Reality / Knowledgeの責務: Separated。
- Locked Ruleが勝手に変えられない構造: Policy Lockとして追記済み。自動 enforcement は未実装。
