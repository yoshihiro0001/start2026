# Supabase Minimum Schema

Last updated: 2026-07-05

## Purpose

Human Consoleを静的HTMLから、DB-backed command systemへ進化させるための最小テーブル案。

Recommended stack:

```text
Vercel + Supabase
```

---

## Security First

- Do not commit Supabase URL / anon key until public exposure rules are confirmed.
- `service_role` key must never be committed.
- `service_role` key must never be used in browser code.
- Use Supabase Row Level Security before storing important data.
- `123456` is temporary preview only and not production auth.

---

## Tables

### tasks

Purpose:
Human instruction / Codex task queue.

Suggested fields:

- id uuid primary key
- title text
- raw_instruction text
- status text
- priority integer
- created_by text
- assigned_to text
- source text
- related_artifact text
- created_at timestamptz
- updated_at timestamptz

### approvals

Purpose:
Human approval inbox.

Suggested fields:

- id uuid primary key
- task_id uuid
- approval_type text
- status text
- human_decision text
- comment text
- preview_url text
- decided_at timestamptz
- created_at timestamptz

### readiness_scores

Purpose:
Human Console gauges.

Suggested fields:

- id uuid primary key
- category text
- current_percent integer
- status text
- blocker text
- next_action text
- confidence text
- evidence_id uuid
- updated_at timestamptz

### blockers

Purpose:
Current blockers and connection gaps.

Suggested fields:

- id uuid primary key
- rank integer
- name text
- impact text
- next_action text
- status text
- created_at timestamptz
- resolved_at timestamptz

### evidence

Purpose:
Decision evidence and source tracking.

Suggested fields:

- id uuid primary key
- source_title text
- source_url text
- captured_at timestamptz
- evidence_meaning text
- confidence text
- unresolved_gap text
- related_decision text

### ai_runs

Purpose:
Track AI / Codex execution and cost learning.

Suggested fields:

- id uuid primary key
- task_id uuid
- agent_type text
- model_or_tool text
- input_summary text
- output_summary text
- cost_estimate text
- risk_level text
- status text
- started_at timestamptz
- finished_at timestamptz

### learning_logs

Purpose:
What changed, what worked, what should improve.

Suggested fields:

- id uuid primary key
- task_id uuid
- reality_change text
- human_feedback text
- metric_change text
- next_improvement text
- created_at timestamptz

---

## Minimum First Connection

Start with read-only status:

```text
readiness_scores
blockers
latest task
```

Then add:

```text
tasks
approvals
learning_logs
```

---

## Future Realtime

Use Supabase Realtime only after basic DB-backed status works.
Initial goal is not realtime animation; it is lowering Human Cognitive Load.
