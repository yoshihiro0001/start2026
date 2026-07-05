# Blueprint Refactor Plan: AI Operating Company

Last updated: 2026-07-06

## Purpose

ここで初めて修正案を書く。
まだ実行禁止。

## Phase -1: Operating Company Blueprint Freeze

Status: active.

- Use 5部署 model as the top-level map.
- No new Workflow / Registry / Guide.
- Keep big categories within 5-7.
- Treat Workflow as Runtime Office implementation.
- Treat Deploy / Security / Browser / External Service as Reality Office implementation.
- Treat Status / Registry / Evidence / Summary as Knowledge Office implementation.
- Treat Human-facing surfaces as CEO Office.

## Phase 0: Structure Freeze継続

- `00_CONSTITUTION/Structure_Freeze_Rule.md` remains active.
- Existing files are classified but not moved.
- Archive is not executed.

## Phase 1: Vercel Import完了

Do:
- Import `yoshihiro0001/evolution-factory` into Vercel.
- Record Preview URL in `current_state.json` and CEO Console.

Do not:
- Add new architecture discussions.
- Add new workflow files.

## Phase 2: Runtime Office Consolidation

候補:
- WorkflowをRuntime Officeへ統合候補化する。
- `Guided_Execution.md` を実行系の中心にする。
- `Console_Update_Loop.md`, `Approval_To_Codex_Loop.md`, `Smartphone_Command_Loop.md` はDB-backed loopまでreference/merge candidate。
- Multi-Codexは将来構想のまま。

## Phase 3: Knowledge Office Consolidation

候補:
- Status JSONをKnowledge Officeへ統合・自動更新候補化する。
- `current_state.json` を現在状態の正本にする。
- Other status JSON remains support.
- Knowledge Compiler + Registry + Architecture Indexで長文Discussionを読まない運用へ寄せる。

## Phase 4: Reality Office Consolidation

候補:
- Deploy / Security / Browser / External ServicesをReality Officeへ統合候補化する。
- `Vercel_Project_Import_Guide.md` を現実実行の正本にする。
- Securityは `SECURITY/README.md` を正本にする。
- `Human_Setup_Guide_Vercel_Supabase.md` / `Security_Roadmap.md` は統合候補。

## Phase 5: CEO Office Front Door

候補:
- CEO ConsoleをCEO Officeの正面玄関にする。
- Humanに見せるのはCurrent Office / Reality Step / Next Action / Bottleneck / Do Not Pasteのみ。
- AI向け詳細はAI Control Centerへ下げる。

## Phase 6: Learning / Archive Loop Candidate

候補:
- Learning / Archive Loopを実装候補化する。
- Archive実行はHuman承認後。
- Archive candidate期間とRoute Auditを必須にする。

## Current Highest ROI

Complete Vercel Import.

## Current Human Action

Vercelで Import Project を押し、`yoshihiro0001/evolution-factory` を選ぶ。
