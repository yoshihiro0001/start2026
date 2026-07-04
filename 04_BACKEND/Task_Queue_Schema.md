# Task Queue Schema

Last updated: 2026-07-05

## Purpose

スマホからの自然言語指示、AI / Codex処理、承認、Gauge更新、LearningをDBでつなぐための最小Schema。

---

## Security Policy

- service_role key is server-only.
- service_role key must never be committed.
- anon key may be public only after RLS is confirmed.
- Use RLS before storing important information.
- Do not store Secret / API Key / PAT in these tables.

---

## Tables

### tasks

Human instruction and AI/Codex task queue.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- title text not null
- raw_instruction text
- status text not null default 'pending'
- priority integer default 3
- source text
- requested_by text
- assigned_to text
- related_artifact text
- preview_url text
- created_at timestamptz default now()
- updated_at timestamptz default now()

### approvals

Human approval inbox.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- task_id uuid references tasks(id)
- status text not null default 'pending'
- approval_type text
- summary text
- preview_url text
- human_decision text
- decided_at timestamptz
- created_at timestamptz default now()
- updated_at timestamptz default now()

### comments

Natural language feedback.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- task_id uuid references tasks(id)
- approval_id uuid references approvals(id)
- body text not null
- category text
- created_by text
- created_at timestamptz default now()

### readiness_scores

Human Console gauges.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- category text not null
- current_percent integer not null
- status text
- blocker text
- next_action text
- confidence text
- updated_at timestamptz default now()

### blockers

Current blockers.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- rank integer
- name text not null
- impact text
- next_action text
- status text default 'open'
- created_at timestamptz default now()
- resolved_at timestamptz

### ai_runs

AI/Codex execution log.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- task_id uuid references tasks(id)
- agent_type text
- model_or_tool text
- input_summary text
- output_summary text
- status text
- cost_estimate text
- risk_level text
- started_at timestamptz
- finished_at timestamptz

### learning_logs

Result and improvement memory.

Suggested fields:

- id uuid primary key default gen_random_uuid()
- task_id uuid references tasks(id)
- reality_change text
- human_feedback text
- metric_change text
- next_improvement text
- created_at timestamptz default now()

---

## Minimum Build Order

1. readiness_scores
2. blockers
3. tasks
4. approvals
5. comments
6. ai_runs
7. learning_logs

Reason:
First make Human Console read DB-backed status, then add task and approval loop.
