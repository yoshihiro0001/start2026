# Vercel Project Import Guide

Last updated: 2026-07-06

Purpose: Evolution Factory repositoryをVercelへImportし、Vercel Preview / Production pathへ進める。

## Current State

- GitHub repository: `yoshihiro0001/evolution-factory`
- Vercel Organization URL: `evolution-factory-jp`
- Vercel account: created
- Vercel 2FA: completed
- Vercel GitHub integration: authorized
- Vercel project: not created / not imported
- Supabase project: created

## Human Next Action

Vercel dashboardでImport Projectを押し、GitHub repo `yoshihiro0001/evolution-factory` を選ぶ。

## Steps

1. Vercel dashboardを開く。
2. Add New / Import Project を選ぶ。
3. GitHubから `yoshihiro0001/evolution-factory` を選ぶ。
4. Project nameは `evolution-factory` を使う。
5. Frameworkは現状静的HTMLなら `Other` またはVercelの自動判定に任せる。
6. Root Directoryを確認する。まずrepository rootでよい。
7. Environment Variablesは後で追加する。
8. Deployする。
9. 発行されたPreview / Project URLをCEO Consoleへ記録する。

## Do Not Enter Yet

- Supabase service_role / secret key
- DB password
- GitHub PAT
- OpenAI API Key
- Recovery Code

## Completion Check

- Vercel Projectが作成されている。
- GitHub repository `yoshihiro0001/evolution-factory` と接続されている。
- Vercel Preview URLが発行されている。
- CEO ConsoleへVercel Project URL / Preview URLを記録できる。
