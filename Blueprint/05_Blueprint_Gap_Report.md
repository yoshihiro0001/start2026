# Blueprint Gap Report

Last updated: 2026-07-06

## Purpose

まだ修正しない。
Blueprintを見た結果の差分だけを出す。

## Gaps

| Gap | Severity | Evidence | Do Now? |
| --- | --- | --- | --- |
| Workflow多すぎ | High | 17 workflow files | No, plan only |
| Registry重複 / manual sync | Medium | many `03_STATUS/*.json` | No, plan only |
| CEO Console責務混在 | Medium | lower AI details still exist in HTML but hidden | No, plan only |
| Discussion未昇格 / 未圧縮 | Medium | Architecture Review long | No, plan only |
| Guide重複 | High | Human Setup / Security Roadmap / SECURITY files / Deploy guides overlap | No, plan only |
| Security散らばり | Medium | SECURITY + 06_DEPLOY Security Roadmap | No, plan only |
| Archive process未実装 | Low | archive candidates only | No |
| Evidence自動接続なし | Medium | Evidence folder and registry manually maintained | No |
| Current route still Reality未完了 | High | Vercel Import pending | Yes, but outside Blueprint Sprint |

## Most Important Gap

Vercel Import is still pending.
The system should stop adding theory and execute the current Reality step.

## What Not To Do

- Do not add new Workflow.
- Do not add new Registry.
- Do not add new Guide.
- Do not refactor files yet.
- Do not archive yet.
