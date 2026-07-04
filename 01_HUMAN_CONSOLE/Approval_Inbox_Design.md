# Approval Inbox Design

Last updated: 2026-07-05

## Purpose

Humanがスマホで承認・却下・改善依頼を行い、AI / Codexの開発ループを止めずに進めるための最小承認画面。

---

## Screen Role

Approval Inbox is not a dashboard.
It is a decision surface.

Human should only see:

- Pending Approval
- What changed
- What will happen if approved
- Approve / Reject / Improve
- Comment
- Last Updated

---

## Required Items

### Pending Approval

現在承認待ちのTaskを1件ずつ表示する。
複数ある場合も、Humanには優先順で1件を大きく出す。

### Approve

実行・反映してよい時に押す。

### Reject

方向性が違う時に押す。
理由は任意だが、できれば一言残す。

### Improve

惜しいが修正したい時に押す。
自然言語Feedbackを添える。

### Comment

例:

```text
数字は見やすいけど、カードが少し丸すぎる。
```

### Approved Task

承認対象のTask名。

### Task Status

- pending
- approved
- rejected
- improve_requested
- running
- completed

### Last Updated

いつ更新されたか。

---

## Mobile Layout

```text
[Pending Approval]
Task title
Short summary
Preview URL

[Approve]
[Improve]
[Reject]

Comment textarea
Last Updated
```

---

## Human Experience Rule

- 1画面1判断
- 長文を出さない
- 承認前にReality Changeの影響を短く示す
- Secret / API Key / private dataを画面に出さない
- Improveは自然言語でよい

---

## Data Mapping

- Pending Approval -> `approvals.status = pending`
- Approve -> `approvals.status = approved`
- Reject -> `approvals.status = rejected`
- Improve -> `approvals.status = improve_requested`
- Comment -> `comments.body`
- Task Status -> `tasks.status`
- Last Updated -> `approvals.updated_at`

---

## First Prototype

最初はSupabaseに接続せず、静的PreviewでUIを確認する。
その後、`approvals` tableへ接続する。
