# System Architecture Audit

Last updated: 2026-07-05

## Purpose

Evolution Factory / MrBrainが、情報や部品を増やすだけでなく、ルート、接続、重複、不要部品、運用コスト、進化しやすさを定期的に点検できる状態を作る。

このAuditは新しいEngineではない。
まずはWorkflowとして保存し、Human Consoleへ短い状態だけ表示する。

---

## Audit Items

- Route Health
- Connection Health
- Duplicate Concepts
- Dead Files / Unused Docs
- Overlapping Responsibilities
- Missing Links
- Human Cost
- AI Cost
- Security Risk
- Maintenance Cost
- Evolution Readiness

---

## Route & Connection Audit

見るもの:

- Human Consoleから各Guideへ自然に行けるか
- Approved_Next_ActionからTask Queueへつながるか
- Status JSONとindex表示がズレていないか
- MrBrain DiscussionとEvolution Factory実装が接続されているか
- Security GuideとHuman Navigatorが接続されているか
- Knowledge RegistryとArchitecture Reviewが接続されているか

Current known weak points:

- Human Consoleはまだ静的HTMLで、Status JSONを自動読込していない
- Approved_Next_ActionからTask QueueはまだDB接続されていない
- MrBrain DiscussionとEvolution Factory実装は手動同期
- SECURITY Guideは作成済みだが、Console内リンクはまだ文字列中心
- Knowledge Registryは作成済みだが、Architecture Reviewとの自動接続はない

---

## Add / Merge / Archive / Promote / Delete Rule

| Action | 判断基準 |
|---|---|
| Add | 既存構造で説明できず、Human Costを明確に下げる |
| Merge | 似た責務が2つ以上ある |
| Archive | 30日使われず、正本でない |
| Promote | Evidenceが3回以上あり、再利用性が高い |
| Delete | 原則禁止。まずArchive |

重要:
新しい部品を足す前に、既存部品で説明できるか確認する。

---

## Periodic Checks

| Frequency | Check |
|---|---|
| Weekly | Route / Connection / Broken Links |
| Monthly | Duplicate Concepts / Responsibility Overlap |
| Quarterly | Architecture Review / Security / Infrastructure |

---

## Current Audit Snapshot

| Item | Status |
|---|---|
| Architecture Health | 40% |
| Route Health | 35% |
| Connection Health | 30% |
| Duplicate Risk | Medium |
| Maintenance Cost | Medium |
| Evolution Readiness | 35% |

Top Issue:
Status JSON and Human Console are manually synchronized.

Next Cleanup Action:
Check whether Human Console routes to SECURITY, Knowledge Registry, Setup Guides, and Approved Next Action are visible and current.

---

## Self Review

Information overload:
Risk exists. Human Console should show only health, top issue, and one cleanup action.

Can unused parts be found?
Partially. Dead files / unused docs require a monthly review until automated link tracking exists.

Does this reduce cost?
Yes, if it prevents duplicated concepts and broken routes before they become maintenance debt.

Is this premature?
No. The system already has multiple registries, guides, workflows, and status JSON. Audit is now needed to prevent drift.
