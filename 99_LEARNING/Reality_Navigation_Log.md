# Reality Navigation Log

Purpose:
Humanがどの画面で止まったかをEvidenceとして残し、次回のHuman Navigatorへ戻す。

---

## 2026-07-05 / Vercel 2FA

Service: Vercel

Screen: 2FA Authenticator App Setup

Stop Point: 6-digit code source unclear

Cause: Authenticator app workflow was not explained

Guidance Needed:
Download app / scan QR / get code / enter code / complete

Human State:
認証アプリとは何か、QRを何で読むか、6桁コードがどこに出るか、Mac画面とiPhone操作がどうつながるかが不明。

Learning:
Docs URLだけでは不十分。Current ScreenからExact Next Action、Required App、If Failed、Completion CheckまでConsoleへ出す必要がある。

Next Reuse:
GitHub / Supabase / Cloudflare / OpenAI / Anthropic / Google の初期設定や2FAにも同じHuman Navigator形式を使う。


---

## Security Foundation Evidence / Vercel 2FA

Service:
Vercel

Stop Point:
2FA

Cause:
認証アプリとは何か分からない。

Improvement:
Current Screen Navigation / Official Guide / Required App / Recovery Guide

Learning:
Security setup requires Human Navigator. Docs URLだけではなく、現在画面、押すボタン、必要なアプリ、Recovery、完了条件まで出す。
