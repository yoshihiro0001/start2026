# Preview Deployment Decision

Last updated: 2026-07-05

## Selected Method

Immediate selected method:

```text
GitHub Pages + simple client-side password gate
```

Reason:
Vercel built-in Password Protection is not the lowest-cost immediate option because official docs show Password Protection is available on Enterprise, or as a paid add-on for Pro. Cloudflare Pages + Cloudflare Access is safer and more scalable, but requires Cloudflare domain / Access setup. GitHub Pages + simple gate has the lowest Human Cost for a non-sensitive temporary preview.

Important:
This is only for temporary, non-sensitive preview.
Do not use this for production, personal information, sales, tax, API keys, or important internal screens.

---

## Candidate Comparison

| Candidate | Password protection | Human Cost | Security | Scalability | Decision |
|---|---|---:|---:|---:|---|
| Vercel Password Protection | Built-in password protection exists, but requires Enterprise or Pro paid add-on | Medium | High | High | Not immediate due to cost/plan condition |
| Vercel Authentication | Available on all plans for protected deployments, but requires Vercel user auth rather than a shared `123456` password | Medium | Medium-High | High | Good later if Vercel login is acceptable |
| Cloudflare Pages + Cloudflare Access | Access policies can protect preview deployments | Medium-High | High | High | Best secure next step once Cloudflare/DNS is ready |
| GitHub Pages + simple password gate | Client-side only, not true security | Low | Low | Low-Medium | Selected for temporary non-sensitive preview |

---

## Official Docs URL

Vercel Deployment Protection:
https://vercel.com/docs/deployment-protection

Vercel Password Protection:
https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection

Cloudflare Pages Preview Deployments:
https://developers.cloudflare.com/pages/configuration/preview-deployments/

Cloudflare Access self-hosted applications:
https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/

GitHub Pages:
https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

---

## Password Protection Feasibility

Selected temporary gate:

```text
Password: 123456
```

This password is embedded in client-side JavaScript.
It is not a real security boundary.
It only reduces accidental access for a temporary low-risk preview.

---

## Security Notes

- `123456` is temporary preview only.
- Do not use `123456` for production, external sharing with sensitive content, or important screens.
- Secret / API Key / GitHub PAT must never be committed.
- Do not put private customer, sales, tax, contract, or credential information into this preview.
- Move to Cloudflare Access or proper auth before important data is shown.

---

## Adoption Reason

The current highest ROI action is to make Human Console accessible from smartphone with the lowest Human Cost.

GitHub Pages + simple gate is chosen because:

- start2026 is already on GitHub.
- It can serve static HTML.
- It requires no API, DB, or server.
- It is enough for a non-sensitive Human Console preview.
- It creates the first deploy loop: Codex updates -> GitHub push -> Human checks URL.

---

## Unconfirmed Items

- Whether GitHub Pages is enabled for `yoshihiro0001/start2026`.
- Whether the repository is public or private.
- Whether GitHub Pages deployment from `main` root is already allowed.
- Whether the final preview URL will be `https://yoshihiro0001.github.io/start2026/`.
- Whether `fashionhoteljoy.com` DNS is managed by Cloudflare or another provider.

---

## Next Action

Enable GitHub Pages for `yoshihiro0001/start2026` from the `main` branch root, then open:

```text
https://yoshihiro0001.github.io/start2026/
```
