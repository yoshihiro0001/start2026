# Human Navigator: Vercel 2FA Guide

Last updated: 2026-07-05

## Purpose

Vercelの2FA設定画面でHumanが止まらないように、現在画面から次の操作までを短く案内する。

Current Reality Step:
Vercel 2FA Setup

Current Screen:
Authenticator App QR Code

Detected Task:
認証アプリでQRを読み取り、6桁コードをMacのVercel画面へ入力する。

---

## 2FAとは何か

2FAは、パスワードに加えて、スマホ側で表示される一時的な6桁コードを入れる安全確認。

目的:
誰かがパスワードを知っても、スマホ側の認証コードがなければログインしにくくする。

---

## 認証アプリとは何か

認証アプリは、Vercelなどのサービス用に、短時間だけ使える6桁コードを表示するアプリ。

今回使う候補:

- Google Authenticator
- iPhone標準パスワードアプリ

Google Authenticator App Store:
https://apps.apple.com/app/google-authenticator/id388497605

Google公式Help:
https://support.google.com/accounts/answer/1066447

Vercel 2FA docs:
https://vercel.com/docs/accounts/account-security/two-factor-authentication

---

## Google Authenticatorでの手順

1. iPhoneでGoogle Authenticatorを開く。
2. 右下または画面内の `+` を押す。
3. `QRコードをスキャン` を選ぶ。
4. MacのVercel画面に出ているQRコードをiPhoneカメラで読み取る。
5. Google Authenticatorに `Vercel` のような項目が追加される。
6. そこに表示される6桁コードをMacのVercel入力欄へ入れる。
7. Vercel側でContinue / Verifyを押す。

6桁コードはGoogle Authenticator内に表示される。
時間が経つと変わるため、今表示されている数字を入れる。

---

## iPhone標準パスワードアプリでの手順

追加ダウンロードなしで進めたい場合の候補。

iOS 18以降:

1. iPhoneで `パスワード` アプリを開く。
2. Vercel用のログイン項目を作る、または既存のVercel項目を開く。
3. 確認コード / Verification Code の追加を選ぶ。
4. QRコードをスキャン、またはセットアップキーを入力する。
5. 表示された6桁コードをMacのVercel入力欄へ入れる。

もし項目が見つからない、または設定が分かりにくい場合は、Google Authenticatorを使う方が簡単。

---

## Macへ何を入力するか

MacのVercel画面にある入力欄へ、認証アプリに表示された6桁コードを入力する。

入力するもの:

```text
123456 のような6桁数字
```

入力しないもの:

- QRコードそのもの
- 英数字のSecret key
- Recovery Code
- Googleアカウントのパスワード

---

## QRが読めない時の手入力方法

Vercel画面に、QRコードの近くまたは上部に英数字のセットアップキーが表示されている場合がある。

手順:

1. Vercel画面の英数字キーをコピーする。
2. Google Authenticatorで `セットアップキーを入力` を選ぶ。
3. Account nameは `Vercel` と入力する。
4. Keyへ英数字キーを貼る。
5. Time basedを選ぶ。
6. 追加後に出る6桁コードをMacへ入力する。

注意:
英数字キーはSecret扱い。Git / Chat / Screenshot共有へ保存しない。

---

## 完了したら次に何が出るか

想定される次画面:

- Recovery Codeの表示
- 2FA完了確認
- GitHub repository import画面

Completion Check:
Vercelの2FA設定が完了し、次のGitHub Import画面へ進む。

---

## Recovery Codeが出た場合

Recovery Codeは必ずPassword Managerへ保存する。

やってよい:

- Password Managerへ保存
- 紙で一時保管して安全な場所へ保管

やってはいけない:

- Gitへ保存
- MrBrain本文へ保存
- ChatGPT / Codexへ貼る
- Screenshotを共有場所へ置く

---

## Human Navigator Summary

Current Step:
Vercel 2FA Setup

Exact Next Action:
Google Authenticatorを開く → + → QRコードをスキャン → 表示された6桁をMacへ入力

If Failed:
QRが読めない場合は、画面上部の英数字キーを認証アプリへ手入力する。

After Completion:
GitHub repo `yoshihiro0001/evolution-factory` をImportする。
