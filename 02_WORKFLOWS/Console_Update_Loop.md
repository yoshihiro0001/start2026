# Console Update Loop

Last updated: 2026-07-05

## Purpose

Human Consoleを「見られる画面」から「開発の進行に合わせて更新される司令塔」へ進める。

Humanが毎回読むべきものは長文のBriefではなく、Console上の短い現在状態だけにする。

---

## Loop

```text
Codex / Workflow progress
↓
03_STATUS/readiness.json
03_STATUS/latest_action.json
03_STATUS/blockers.json
↓
Human Console static reflection
↓
Human confirms one next action
↓
Approved_Next_Action.md
↓
Codex executes
↓
Status JSON update
↓
Human Console update
```

---

## Current Rule

現在は静的HTMLへ反映する。
ただし責務は分ける。

- `03_STATUS/readiness.json`: ゲージと現在座標
- `03_STATUS/latest_action.json`: Human Next ActionとCodex next task
- `03_STATUS/blockers.json`: 現在止まっている理由
- `01_HUMAN_CONSOLE/index.html`: Humanが見る圧縮表示

---

## Future Direction

将来はHuman ConsoleがJSONを直接読み、commitごとに自動更新する。

候補:

- static JSON fetch on GitHub Pages
- Vercel static + serverless API
- Cloudflare Pages + Functions
- Supabase table as status source

---

## Update Discipline

Decision Briefを更新したら、該当するStatus JSONも更新する。
Human ConsoleにはSummaryだけを表示する。
Human Next Actionは常に1つだけにする。

---

## Self Review

- Humanが読む量は減る。
- ConsoleとBriefの責務が分かれる。
- 現時点では手動反映なので、Runtime Intelligenceではない。
- 次はProduction Pathを選び、JSONを自動で読む構成へ進めるか判断する。
