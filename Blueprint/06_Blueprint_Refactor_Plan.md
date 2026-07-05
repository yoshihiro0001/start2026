# Blueprint Refactor Plan

Last updated: 2026-07-06

## Purpose

ここで初めて修正案を書く。
まだ実行禁止。

## Refactor Principles

- 1領域1正本へ寄せる。
- Support files are allowed only when they reduce Human/AI cost.
- Legacy files remain until archive criteria are met.
- No deletion without archive candidate period.
- No refactor before Vercel Import unless critical.

## Proposed Phases

### Phase 0: Stop Adding

Status: active.

- Structure Freeze stays active.
- New Workflow / Registry / Guide creation is disallowed.
- Current action remains Vercel Import.

### Phase 1: Complete Reality Step

Do:
- Import `yoshihiro0001/evolution-factory` into Vercel.
- Record Preview URL in `current_state.json` and CEO Console.

Do not:
- Add new architecture discussions.

### Phase 2: Merge Workflow Duplicates

Candidates:
- `Knowledge_Compression_Loop.md` into `Knowledge_Compiler.md`
- `OS_Knowledge_Audit.md` into `System_Architecture_Audit.md`
- `Console_Update_Loop.md` into `Guided_Execution.md` / `current_state.json` operation
- `Thinking_Route.md` and `AI_Routing_Rule.md` into `Decision_Quality_Pipeline.md` sections

### Phase 3: Consolidate Deploy/Security Guides

Candidates:
- Keep `Vercel_Project_Import_Guide.md` as current deploy canonical.
- Keep `Supabase_to_Vercel_Env_Guide.md` as support.
- Move repeated security rules conceptually under `SECURITY/README.md`.
- Mark 2FA guide as legacy after Vercel Import completes.

### Phase 4: Registry Simplification

Candidates:
- Keep `current_state.json` as current-state canonical.
- Keep other JSON as support.
- Reduce CEO Console dependency to `current_state.json` first, then links to support JSON.

### Phase 5: Archive Candidates

Only after:
- Registry summary exists.
- 30 days non-use.
- Route audit confirms not needed.
- Human approves archive.

## Current Highest ROI

Complete Vercel Import.

## Current Human Action

Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。
