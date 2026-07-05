# Approval To Codex Loop

Last updated: 2026-07-05

## Purpose

Humanが毎回ChatGPTに指示文を頼まなくても、Human Console内のApproved Next ActionからCodexが次Taskを読めるようにする。

## Loop

```text
Human Console
↓
Approved_Next_Action
↓
Codex Task
↓
Execution
↓
Preview URL
↓
Human Console update
↓
Learning
```

## Responsibilities

Human Console:
Humanが今やること、承認待ち、Preview URLを見る入口。

Approved_Next_Action:
Humanが承認した次の作業だけを短く保存する。

Codex Task:
CodexがApproved_Next_Actionを読み、実装・編集・Git操作を行う。

Execution:
ファイル作成、Preview設定、Deploy、URL発行など。

Preview URL:
Humanがスマホで確認するURL。

Human Console update:
Preview URL、Password、Status、Blockerを更新する。

Learning:
成功、失敗、Connection Gap、次の改善をMrBrain / Evolution Factoryへ戻す。

## Current Approved Task

Preview環境を作成し、Human Consoleをスマホで開けるURLを発行する。

## Safety

Secrets must not be committed.
Temporary password `123456` is preview-only and not production security.
