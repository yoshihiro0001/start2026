# Architecture Review Index

Last updated: 2026-07-06

## Purpose

`AI_Workspace_OS_Architecture_Review.md` は辞書として扱う。
毎回全文を読まない。
必要なDiscussionだけを、Summary / Rule / Evidence / Next Reviewとして参照する。

Source:
`/Users/kashiharayoshihiro/Library/Mobile Documents/com~apple~CloudDocs/MrBrain/04_PROJECTS/AI_Workspace_OS/AI_Workspace_OS_Architecture_Review.md`

## Operating Rule

- Architecture Reviewは正本だが、日常運用ではIndexとRegistryを読む。
- 新しいDiscussionを追加する前に、既存Discussionで説明できるか確認する。
- 重要な差分だけKnowledge Registryへ圧縮する。
- CEO ConsoleへはNext ActionとRiskだけ出す。

## Major Discussion Summary

| Discussion | 5-line Summary | Active Rule Candidate | Evidence Status |
| --- | --- | --- | --- |
| Thinking Constitution / Trust Rule | AIはPurpose、Evidence、Risk、Routeを確認してから動く。公式DocsやCurrent Realityが必要な領域では断定しない。 | Official Docs Required / No Secrets In Git / Compress Console | Partial |
| Human Experience / Human State | Humanが何をしたいかだけでなく、今どんな状態かを見て最小認知負荷でReality Changeへ導く。 | Human Cost must pay back | Partial |
| Reality Connection | Capabilityを現実へ接続する方法を調べ、API / Browser / QR / LAN / Cloud / Human Agentを比較する。 | Discover implementation before building | Partial |
| Guided Execution / Human Navigator | DocsではなくCurrent ScreenからExact Button / Exact Input / Completion Checkまで案内する。 | Guide from current screen | Active evidence from Vercel 2FA |
| CEO Console | HumanはAIの途中経過を追わず、North Star、Bottleneck、Next Decision、Trust、Auditだけ見る。 | Separate Human and AI screens | Active |
| Security Foundation | Identity、2FA、Recovery、Secrets、Env Vars、RLSを段階的に固める。 | High Human Risk requires Security | Active |
| AI Capability Routing | AI選定は記憶ではなく公式Docs、契約プラン、能力、Cost、Riskで決める。 | AI Routing requires evidence | Pending research |
| Knowledge Compression | Raw情報をSummary / Evidence / Rule / Registryへ圧縮し、次回のHuman CostとAI Costを下げる。 | Compress knowledge | Active |
| Evolution OS | Evidenceで自分自身を軽く、賢く、安く、美しく進化させる。 | Evolution requires Evidence | Partial |

## Current Adopted Rule Candidates

- Official Docs Required
- AI Routing Requires Evidence
- No Evidence, No Assertion
- No Secrets In Git
- Compress Human Console
- Separate Human and AI Screens
- Guide From Current Screen
- Compress Knowledge
- Audit Routes And Maintenance

## Pending Evidence

- Browser-capable AI comparison from official docs
- Vercel project import completion
- Supabase env vars connection
- RLS design
- CEO Console usefulness after Vercel import
- Knowledge Compiler usefulness after next handoff

## Merge Candidates

- Human Cost / Human Cognitive Load can remain under Human Experience unless repeated evidence requires separation.
- Reality Connection / Implementation Discovery / Connection Knowledge should stay responsibility-separated but routed through one Registry view.
- Developer Dashboard / Human Console / CEO Console should remain separated by audience.

## Archive Candidates

No delete now. Archive candidates should be decided after 30 days of non-use and route audit.

## Next Review

2026-07-12 Weekly Knowledge Audit.
