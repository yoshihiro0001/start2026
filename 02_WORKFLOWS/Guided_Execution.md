# Guided Execution

Last updated: 2026-07-06

## Purpose

Humanが外部サービス画面で止まらないよう、Current ScreenごとにExact Button / Exact Input / Do Not Touch / Completion Checkまで落とす。

Docsを読ませるのではなく、現在画面から次の操作へ案内する。

## Required Fields

| Field | Meaning |
| --- | --- |
| Service | GitHub / Vercel / Supabase / Bitwardenなど |
| Current Screen | Humanが今見ている画面 |
| Current Goal | この画面で達成すること |
| Exact Button | 押すボタン |
| Exact Input | 入れる文字列。秘密値は書かない |
| Do Not Touch | 押さない / 貼らないもの |
| Expected Result | 操作後に起きること |
| Completion Check | 完了判断 |
| If Failed | 失敗時の戻り方 |
| Security Warning | 秘密・Recovery・権限の注意 |
| Owner Office | このStepの責任Office |
| Human Action Required | Humanが操作する必要があるか true/false |

## Current Guided Steps

### 1. Vercel Project Import

Service: Vercel

Current Screen:
Vercel Dashboard / Add New / Import Project

Current Goal:
GitHub repository `yoshihiro0001/evolution-factory` をVercel ProjectとしてImportする。

Exact Button:
`Add New` または `Import Project`

Exact Input:
GitHub repository: `yoshihiro0001/evolution-factory`

Do Not Touch:
Environment Variablesにはまだ何も入れない。Secret / service_role / DB password / PATを貼らない。

Expected Result:
Vercel Projectが作成され、Preview URLが発行される。

Completion Check:
Vercel Project URL / Preview URLをCEO Consoleへ記録できる。

If Failed:
GitHub連携権限でrepoが見えない場合、VercelのGitHub integration設定でrepository accessを確認する。

Security Warning:
Import時点では公開Previewに重要情報を入れない。

### 2. Supabase API Settings確認

Service: Supabase

Current Screen:
Project Dashboard → Settings → API

Current Goal:
Project URLとanon / publishable keyだけを確認する。

Exact Button:
`Settings` → `API`

Exact Input:
なし。確認のみ。

Do Not Touch:
service_role / secret key / DB passwordをコピーしない。Chat / Git / Markdownへ貼らない。

Expected Result:
Project URLとclient-side用keyの場所が分かる。

Completion Check:
CEO Consoleへ「確認済み」と記録できる。値そのものをMarkdownへ保存しない。

If Failed:
API画面が見つからない場合、Supabase Dashboard左下またはサイドバーのSettingsを探す。

Security Warning:
anon / publishable keyは公開前提だがRLS設計とセットで扱う。

### 3. Vercel Environment Variables設定

Service: Vercel

Current Screen:
Project → Settings → Environment Variables

Current Goal:
Supabase接続用の公開envをVercelへ入れる。

Exact Button:
`Settings` → `Environment Variables` → `Add`

Exact Input:
`NEXT_PUBLIC_SUPABASE_URL`
`NEXT_PUBLIC_SUPABASE_ANON_KEY` または publishable key用の公開名

Do Not Touch:
service_role / secret key / DB password / PATをclient-side envへ入れない。

Expected Result:
Vercel build/runtimeからSupabase public client接続が可能になる。

Completion Check:
Previewが再deployされ、env varsが設定済みと分かる。

If Failed:
Production / Preview / Developmentの対象Environmentを確認する。

Security Warning:
server-only secretは将来API route側で扱う。現時点では保存しない。

### 4. GitHub repo rename / remote update

Service: GitHub / Git

Current Screen:
Local terminal / GitHub repository

Current Goal:
旧repo `start2026` から新repo `evolution-factory` へIdentityを揃える。

Exact Button:
なし。Git commandで確認。

Exact Input:
`git remote -v`
`git remote set-url origin https://github.com/yoshihiro0001/evolution-factory.git`

Do Not Touch:
破壊的操作は禁止。`git reset --hard` や履歴削除はしない。

Expected Result:
originが新repoを指す。

Completion Check:
`git remote -v` が `https://github.com/yoshihiro0001/evolution-factory.git` を表示する。

If Failed:
GitHub rename redirectが出る場合、remote URLを再確認する。

Security Warning:
PATは保存しない。認証はGitHub credential / app flowに任せる。

### 5. Bitwarden保存確認

Service: Bitwarden

Current Screen:
Bitwarden item / vault

Current Goal:
DB passwordやRecovery CodeをGit / ChatではなくPassword Managerだけに保存する。

Exact Button:
`New Item` または既存item編集

Exact Input:
項目名だけCEO Consoleに残してよい。値は書かない。

Do Not Touch:
DB password / Recovery Code / service_role / PATをMarkdownへ貼らない。

Expected Result:
秘密値はBitwardenにだけ保存される。

Completion Check:
CEO Consoleには `Bitwarden saved` だけ記録される。

If Failed:
保存先が分からない場合、作業を止めてHumanに確認する。

Security Warning:
秘密値のスクショ共有も避ける。

## Reality Navigator Rule

Current Screenだけでなく、各Stepは必ず以下を持つ。

- current_screen
- current_goal
- exact_button
- exact_input
- do_not_touch
- expected_result
- failure_branch
- owner_office
- human_action_required true/false

目的:
Humanが「どこを押すのか」で止まらないようにする。
Human actionが不要な場合は、明確に `false` と表示する。

Current Owner Office:
Runtime Office owns the Supabase Reality Verification investigation.

Current Human Action Required:
false, until Runtime Office produces the next CEO Decision.
