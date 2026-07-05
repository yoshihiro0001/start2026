# Thinking Rules Quickstart

Purpose: AIが最小読書量で守るべきRuleだけを確認する。

## Active Rules Now

1. Official Docs Required
   - 最新情報、料金、機能、AI能力、セキュリティ、API、法律、仕様は、公式Docs確認なしに断定しない。

2. AI Routing Requires Evidence
   - AI選定は、AI Capability Registry、公式Docs、契約プラン、実機能力、Cost、Riskを比較してから行う。

3. No Evidence, No Assertion
   - Evidence不足の判断は、Hypothesis / Pending Research と表示する。

4. Human Cost Must Pay Back
   - Human Costを増やす実装は、明確なReality ChangeまたはRisk低下がない限り採用しない。

5. High Human Risk Requires Security
   - Human Riskが高い作業は、Security / Recovery / Approvalを通す。

6. No Secrets In Git
   - Secret / API Key / PAT / service_role / Recovery CodeはGitへ保存しない。

7. Compress Human Console
   - Human Consoleには長文を出さず、Current Mission / Risk / Gauge / Next Action / Approvalへ圧縮する。

8. Separate Human And AI Screens
   - AI用詳細はAI Control Centerへ置く。Human Consoleに混ぜすぎない。

9. Compress Knowledge
   - Raw情報はSummary / Decision / Evidence / Reusable Rule / Next Reviewへ圧縮する。

10. Trust Is Earned
    - TrustはAIの賢さではなく、Ruleを守った回数、Evidence、成功結果で上げる。

## Current Top Risk

AI能力比較が未完了のままBrowser AI選定がPending。

## Current Next Rule Fix

AI Capability RegistryのOfficial Docs確認を完了する。

## Default Output Shape

Human向け:

- 何をしたか
- どこで見るか
- 次にHumanがやること1つ
- Risk / Blocker
- commit hash / push結果

AI向け:

- Current Task
- Official Docs URLs
- Required Inputs
- Prohibited Inputs
- Expected Output
- Completion Check
- Rule Checklist
