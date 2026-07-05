# AI Capability Registry

Purpose: HumanがChatGPT / Codex / Gemini / Claude / Browser Agentのどれを使うべきか迷わないように、AI選定を公式Docs、現在契約プラン、実能力、Cost、Risk、Human Costで判断する。

This is not a Principle. This is an Evolution Factory workflow asset connected to MrBrain Architecture Discussion.

## Current Contract Snapshot

Human-reported current status:

| AI | Current Plan | Monthly Cost | Confidence |
| --- | --- | ---: | --- |
| ChatGPT | Pro最上位プラン | 約30,000円 | Plan name / exact feature limits need official account check |
| Gemini | 有料中間プラン | 約1,600円 | Exact plan name / feature limits need official account check |
| Claude | Free | 0円 | Browser / computer-use availability needs official docs + plan check |
| Codex | ChatGPT / OpenAI側で使用中 | Included / unknown | Current local Codex capability is known; plan limits need account check |

## Registry Fields

- AI Name
- Current Plan
- Official Docs URL
- Browser Operation Capability
- Coding Capability
- Research Capability
- Long Context Capability
- File / Project Context Capability
- Security / Privacy Notes
- API Availability
- Cost
- Best Use Case
- Weak Use Case
- Confidence
- Last Checked
- Next Review

## Initial Registry

| AI Name | Current Plan | Official Docs URL | Browser Operation Capability | Coding Capability | Research Capability | Long Context Capability | File / Project Context Capability | Security / Privacy Notes | API Availability | Cost | Best Use Case | Weak Use Case | Confidence | Last Checked | Next Review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| ChatGPT | Pro最上位 / exact plan pending | https://chatgpt.com/pricing/ / https://help.openai.com/ | Agent / browser capability exists in plan table, but exact available tool and current account state need verification | Medium for code reasoning; Codex preferred for repo edits | High for reasoning + research when browsing/tools available | High, but exact context varies by mode | Files only when attached or connected; not repo-native by default | Do not paste secrets; confirm data controls before sensitive work | OpenAI API is separate from ChatGPT subscription | High | Architecture, Principle, Evolution Discussion, final synthesis | Git/file edits, deploy, browser actions without tool confirmation | 45% | 2026-07-05 | Verify current Pro feature limits and available Agent/browser surfaces |
| Codex | OpenAI / ChatGPT side in use | https://developers.openai.com/codex | Depends on current Codex browser/computer-use tools; do not assume external website control unless available | High | Medium; official docs / web may require explicit tools | Good for repo-local context | High inside the current workspace/repo | Needs file permissions, sandbox, approvals; do not store secrets | Codex SDK / automation docs exist, exact plan limits pending | Included / unknown | Markdown edits, code, Git, deploy prep, validation | Final business decision, high-risk external actions without approval | 65% | 2026-07-05 | Verify Codex pricing/limits and browser/computer-use surfaces |
| Gemini | Paid middle plan / exact plan pending | https://support.google.com/gemini/ / https://gemini.google.com/ | Unknown. Google ecosystem strength does not automatically mean browser operation | Medium/unknown | Medium/high for Google ecosystem research; needs plan check | Unknown | Google Workspace integration may be useful, but account scope unknown | Check data usage and Workspace permissions before sensitive data | Gemini API / Google AI Studio separate from consumer plan | Medium-low | Google ecosystem tasks after evidence; Workspace-related research | Repo edits/Git unless tool integration exists; browser actions without evidence | 25% | 2026-07-05 | Verify exact plan, Workspace integration, browser/agent capability |
| Claude | Free | https://docs.anthropic.com/ / https://support.anthropic.com/ | Anthropic docs describe computer use tool via API/beta; current Free UI capability unknown | Medium/high for review and writing | Medium; web/search availability depends on plan/tool | Potentially strong; exact Free limits unknown | Not repo-native unless integrated | Computer use has unique risks; use isolated environment and Human confirmation | Anthropic API available separately | Low now; paid if upgraded | Review, critique, long document compression after plan check | Direct repo edits/deploy unless integrated; high-risk operations without approval | 30% | 2026-07-05 | Verify Free vs paid capabilities and computer-use availability |
| Browser Agent / Computer Use系 | Tool-dependent | OpenAI: https://platform.openai.com/docs/ / Anthropic: https://docs.anthropic.com/ | High potential, but must be tested per tool/session | Low/medium unless paired with coding agent | Medium for current-screen tasks | N/A | Screen-level context, not source-of-truth project context | Highest risk: secrets, login, payment, external sends require Human Approval | Depends on provider/tool | Variable | Human Navigator, setup screens, current-screen guidance | Secrets, irreversible operations, financial/legal actions without approval | 25% | 2026-07-05 | Compare tools in real tasks with official docs and safety constraints |
| Cursor | Not recorded | https://docs.cursor.com/ | Not primary browser tool | High for app development | Low/medium | Good for codebase context | High for app code in IDE | Depends on repo access and local secrets handling | N/A / product dependent | Unknown | Long app development, UI implementation, refactor | MrBrain正本編集 unless explicitly used | 20% | 2026-07-05 | Verify installed plan and repo workflow |
| GitHub Copilot | Not recorded | https://docs.github.com/en/copilot | Not primary browser tool | Medium/high in IDE/GitHub context | Low/medium | Code-context dependent | GitHub-native | Enterprise/security policy depends on account/org | N/A / product dependent | Unknown | Code suggestions, PR assistance | Architecture decisions, non-code operations | 20% | 2026-07-05 | Verify plan and integration status |

## Routing Confidence Rule

- 70%+: Can recommend as default for a task type.
- 40-69%: Can recommend with caveats and validation.
- Below 40%: Do not route by default. Research first.

## Security Rule

For security setup, external account changes, payment, DNS, production deployment, or secret handling:

1. Official docs evidence is required.
2. Human Approval is required before irreversible action.
3. Secret / API Key / PAT / recovery code must not be saved in Git.
4. Browser operation must be treated as high-risk until tested in a constrained environment.
