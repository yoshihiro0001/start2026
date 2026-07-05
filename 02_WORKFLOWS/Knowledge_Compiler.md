# Knowledge Compiler

Last updated: 2026-07-06

## Purpose

Evolution Factory / MrBrainの長大化したDiscussionを、毎回全文を読まなくても使える知識資産へ圧縮する。

目的は新しい概念を増やすことではない。
Raw Discussionを、Summary / Evidence / Reusable Rule / Registry / CEO Console / Learningへ接続し、Human CostとAI Costを下げる。

## Responsibility

Knowledge Compilerは以下を行う。

- Raw Discussionを読む
- 5行Summaryへ圧縮する
- Evidenceを抽出する
- Reusable Ruleを抽出する
- Registryへ接続する
- CEO Consoleへ必要最小限だけ反映する
- 古い / 重複 / 未接続DiscussionをAudit対象にする

## Flow

```text
Discussion
↓
Summary
↓
Evidence
↓
Reusable Rule
↓
Registry
↓
CEO Console
↓
Learning
```

## Output Format

各Discussionは以下の形へ圧縮する。

| Field | Meaning |
| --- | --- |
| title | 知識名 |
| category | どの領域か |
| summary | 5行以内の要約 |
| source_file | 元のDiscussion / Guide / Evidence |
| connected_to | どのRegistry / Console / Workflowへ接続するか |
| reusable_rule | 次回以降に使えるRule |
| evidence_status | Evidence有無 |
| confidence | 現時点の信頼度 |
| last_checked | 最終確認日 |
| next_review | 次回見直し日 |
| status | active / pending / outdated / archive_candidate |

## CEO Console Rule

CEO Consoleへ出すのは以下だけ。

- Current Objective
- Current Bottleneck
- Next Human Action
- Current Screen
- Exact Button / Exact Input
- Trust / Security / Readiness / Knowledge Health

長い説明、AIの迷い、Docs候補、Registry詳細はCEO Consoleへ出さない。

## Audit Target

以下はAudit対象にする。

- Summary化されていないDiscussion
- Registryへ接続されていないDiscussion
- CEO ConsoleとStatus JSONがズレている項目
- 30日以上使われていないGuide
- 似た責務のRegistry / Workflow
- Evidenceが古いInfrastructure / AI Capability情報

## Current Application

Current highest ROI:
Vercel Importを迷わず完了させる。

Current highest risk:
Secret誤保存 / Console情報過多 / Registry未接続。
