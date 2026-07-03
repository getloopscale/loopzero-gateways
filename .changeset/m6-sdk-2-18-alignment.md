---
"@getloopscale/loopzero-gateway": patch
"@getloopscale/loopzero-gateway-telegram": patch
"@getloopscale/loopzero-gateway-discord": patch
"@getloopscale/loopzero-gateway-slack": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
"@getloopscale/loopzero-gateway-teams": patch
"@getloopscale/loopzero-gateway-email": patch
"@getloopscale/loopzero-gateway-sms": patch
"@getloopscale/loopzero-gateway-line": patch
"@getloopscale/loopzero-gateway-matrix": patch
"@getloopscale/loopzero-gateway-mattermost": patch
---

Align the gateway cluster to the hardened `@getloopscale/loopzero-sdk` 2.18.0 Harness (ecosystem M6). Bumped the `@getloopscale/loopzero-sdk` peer + dev dependency from `^1.9.0` to `^2.18.0` across all 11 packages. The only consumed SDK surface is `Security.redact` (in the gateway core runner) — a stable public API (ADR D68) unchanged across 1.x→2.x — so the alignment is a pin bump, not a migration. Validated: all 11 packages typecheck + build + test green against 2.18.0 (543 tests passed). No dead/unwired surfaces (`no-stubs-no-mocks-no-wired` checklist clean).
