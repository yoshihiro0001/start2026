# Knowledge Compression Loop

Last updated: 2026-07-05

## Purpose

CodexやAIが集めた情報を、ただ保存するのではなく、次回以降のHuman CostとAI Costを下げる知識資産へ変換する。

Knowledge Compressionは、長文を増やすことではない。
Raw InformationをSummary / Decision / Evidence / Reusable Ruleへ圧縮し、次回のHuman Console、Decision Brief、Codex指示へ再利用するためのWorkflowである。

---

## Basic Loop

```text
Collect
↓
Summarize
↓
Compress
↓
Connect
↓
Validate
↓
Update
↓
Reuse
↓
Archive
```

### Collect

公式Docs、調査結果、実案件ログ、Human Feedback、失敗Evidence、AI出力を集める。

### Summarize

Humanが短時間で読める要約へ変換する。

### Compress

次の形へ圧縮する。

- Summary
- Decision
- Evidence
- Reusable Rule
- Outdated Risk
- Next Review Date

### Connect

関連領域へ接続する。

- Security
- Infrastructure
- Human Console
- Design System
- Strategy Loop
- Evolution OS
- Reality Navigation

### Validate

情報源、取得日、公式Docs、実案件との整合性を確認する。

### Update

古くなった情報、Docs変更、料金変更、仕様変更を更新する。

### Reuse

次のArtifactへ再利用する。

- Human Console
- Decision Brief
- Setup Guide
- Codex instruction
- Security Roadmap
- Architecture Review

### Archive

古くなった情報を正本から外し、参照だけ残す。

---

## Knowledge Object Fields

- Raw Information
- Summary
- Decision
- Evidence
- Principle Candidate
- Connected Area
- Reusable Rule
- Outdated Risk
- Next Review Date

---

## Audit Schedule

| Audit | Frequency | Target |
|---|---|---|
| Weekly Knowledge Audit | Weekly | Latest decisions / docs / evidence |
| Monthly Architecture Review | Monthly | Architecture Discussion / merge / archive |
| Quarterly Security / Infrastructure Review | Quarterly | Security / Vercel / Supabase / Cloudflare / Domain / Secrets |
| AI Model Capability Review | Quarterly or major release | OpenAI / Anthropic / Codex / Cursor / NotebookLM / Vision |

---

## Evaluation Metrics

Each knowledge item should track:

- Confidence
- Freshness
- Reusability
- Human Cost Reduction
- Evidence presence
- Update necessity

---

## Human Console Summary

Human Console should only show:

- Knowledge Health
- Latest Compressed Knowledge
- Outdated Knowledge Risk
- Next Knowledge Audit
- Connected Principles
- Reusable Insights

Human should not need to read raw notes unless investigating details.

---

## Current Minimum Implementation

Current source:

```text
03_STATUS/knowledge_registry.json
```

Current status:

- Knowledge Health: 30%
- Latest Compressed Knowledge: Security Foundation Sprint
- Outdated Knowledge Risk: Medium
- Next Knowledge Audit: Weekly
- Connected Principles: Human Experience / Evolution OS / Security Foundation
- Reusable Insights: Docs alone are not enough; Human Navigator must connect current screen to next action.

---

## Self Review

Does this reduce Human Cost?
Yes. Human sees compressed state instead of raw docs.

Does this reduce AI Cost?
Yes. AI can reuse registry items instead of researching the same facts repeatedly.

Can old information be detected?
Partially. Next Review Date and Outdated Risk are now explicit, but automated checks are not implemented.

Does this connect to Evolution Loop?
Yes. Learning becomes Knowledge, Knowledge becomes next Decision / Execution.
