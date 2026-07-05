# Multi-Codex Orchestration Discussion

Last updated: 2026-07-05

## Purpose

将来、複数のCodex / AI WorkerをMrBrain配下で管理し、Task Queueから安全に並列実行できる構想を整理する。

重要:
今すぐ複数Codexを動かさない。
まず1体のCodexがTask Queueから安全に動ける状態を作る。
その後、Validation / Merge / Trustが整ってから複数化する。

---

## Future Flow

```text
MrBrain / Evolution OS
↓
Task Queue
↓
Codex Worker Pool
↓
Validation Layer
↓
Merge / Deploy
↓
Human Approval
↓
Learning
```

---

## Worker Candidates

- Codex Worker A: 実装
- Codex Worker B: テスト
- Codex Worker C: 調査
- Codex Worker D: リファクタ
- Codex Worker E: セキュリティ確認
- Review Worker: 品質確認
- Merge Worker: 衝突確認

---

## Required Safety Devices

- Task Queue
- Worker Role
- File Lock / Conflict Check
- Branch Rule
- Review Rule
- Human Approval
- Merge Rule
- Rollback
- Trust Score

---

## Human Console Future Display

- Active Workers
- Worker Status
- Current Task
- Conflict Risk
- Review Status
- Merge Waiting
- Trust Score
- Human Approval Needed

---

## Current Position

Current state:
Single Codex operation only.

Current priority:
Task Queue / Approval Inbox / Readiness Gauge / Learning Logを1回だけ接続する。

Not ready for Multi-Codex because:

- Task Queue is schema-only
- Approval Inbox is design-only
- File locking does not exist
- Branch rules are not defined
- Review / Merge / Rollback are not automated
- Trust Score does not exist

---

## Phased Plan

### Phase 0: Single Codex, manual queue

Human Console shows one approved task.
Codex executes manually.
Learning is recorded.

### Phase 1: DB-backed Task Queue

Tasks / approvals / blockers / readiness_scores are stored in Supabase.

### Phase 2: Validation Layer

Codex output is checked by tests, lint, review, security, and route audit.

### Phase 3: Branch / Merge Rule

Each worker operates on isolated branch or locked file scope.
Merge requires validation and Human Approval.

### Phase 4: Worker Pool

Multiple workers execute separate roles in parallel.
Trust Score determines autonomy.

---

## Self Review

Is Multi-Codex too early?
Yes for implementation. No for architecture discussion.

Can Human Cost decrease?
Eventually yes, but only after Task Queue and Validation are reliable.

What is the biggest risk?
Conflicting edits, low-quality parallel output, secret exposure, and merge mistakes.

Next practical action:
Do not start Multi-Codex. Build single-Codex Task Queue operation first.
