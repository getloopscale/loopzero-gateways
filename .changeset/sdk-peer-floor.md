---
"@getloopscale/loopzero-gateway": patch
"@getloopscale/loopzero-gateway-agent": patch
---

Raise the `@getloopscale/loopzero-sdk` peer floor from `2.18.0` to `4.62.0`: `@getloopscale/loopzero-sdk@2.18.0` publishes declarations that reference names it never defines, so a consumer at the old floor failed declaration checking (#584).
