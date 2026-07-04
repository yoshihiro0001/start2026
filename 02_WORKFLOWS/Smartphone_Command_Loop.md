# Smartphone Command Loop

Last updated: 2026-07-05

## Purpose

Humanがスマホから自然言語で指示し、AI Development FactoryがTask Queue、Preview、Approval、Gauge更新、Learningまで回す流れを作る。

---

## Loop

```text
スマホから自然言語で指示
↓
Task Queueへ保存
↓
AI / Codexが処理
↓
Preview生成
↓
Approval Inbox
↓
承認
↓
Gauge更新
↓
Learning
```

---

## Target Architecture

Recommended path:

```text
Vercel + Supabase
```

- Vercel: Human Console app, API routes, preview deployments, AI API gateway
- Supabase: tasks, approvals, readiness scores, blockers, evidence, ai_runs, learning_logs
- GitHub Pages: temporary static preview only

---

## Minimum Flow

1. Human enters instruction from smartphone.
2. Instruction is saved to `tasks`.
3. AI / Codex reads approved task.
4. Codex updates files / preview.
5. Human sees result in Preview.
6. Human approves in Approval Inbox.
7. `readiness_scores` and `learning_logs` are updated.
8. Human Console shows next one action.

---

## Human Console Rule

Human Console must show only:

- Current Mission
- Next Human Action 1つ
- Approval待ち
- Preview URL
- Current Blocker
- Readiness Gauge

Long logs stay in DB / files.

---

## Security Rule

- Secret / API Key / PAT must not be committed.
- Supabase `service_role` key must never be exposed to browser code.
- Supabase anon key may only be used after public exposure and RLS are confirmed.
- Production data requires real auth, not `123456`.

---

## Next Minimum Implementation

Create Vercel and Supabase projects, then connect a small DB-backed status read path.
