# Rule Audit Checklist

Purpose: Execution前後に、Thinking ConstitutionとTrust Rulesを守れているか確認する。

## Before Decision

- [ ] Human Intent is separated from Goal.
- [ ] Purpose check is clear.
- [ ] Human Cost and Human Risk are checked.
- [ ] Goal Validation is done if execution changes reality.
- [ ] Current Reality / Screen / Context is known.
- [ ] Official Docs are checked for current facts, pricing, security, API, AI capability, law, or specs.
- [ ] Unknowns are marked as Unknown / Pending Research.
- [ ] Capability and Implementation options are compared.
- [ ] AI Routing is supported by AI Capability Registry when choosing AI/tool.
- [ ] Human Approval is required for high-risk actions.

## Before Execution

- [ ] Secrets / API Keys / PAT / service_role / Recovery Codes are not in Git.
- [ ] Required Inputs and Prohibited Inputs are separated.
- [ ] Completion Check is defined.
- [ ] Failure path is defined.
- [ ] Human Console summary is short.
- [ ] AI Control Center has detailed task context if needed.

## After Execution

- [ ] Result is validated.
- [ ] Stop points are logged to Reality Navigation Log.
- [ ] Evidence is saved with date/source/confidence.
- [ ] Knowledge is compressed into Summary / Decision / Evidence / Reusable Rule / Next Review.
- [ ] Registry / Status JSON / Gauge are updated.
- [ ] Route Audit checks links and drift.

## Human Console Summary Fields

- Rule Compliance
- Evidence Status
- Official Docs Check
- AI Routing Confidence
- Current Highest Trust Risk
- Next Rule Fix
