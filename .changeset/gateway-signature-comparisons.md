---
"@getloopscale/loopzero-gateway-zalo": patch
"@getloopscale/loopzero-gateway-wechat": patch
"@getloopscale/loopzero-gateway-wecom": patch
"@getloopscale/loopzero-gateway-synology-chat": patch
---

Compare webhook signatures and callback tokens with the core `verifyDigest` and `safeEqualString` instead of local `timingSafeEqual` copies. Raises the `@getloopscale/loopzero-gateway` peer floor to `>=0.26.0`.
