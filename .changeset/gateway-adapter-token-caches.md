---
"@getloopscale/loopzero-gateway-qq": patch
"@getloopscale/loopzero-gateway-yuanbao": patch
"@getloopscale/loopzero-gateway-x": patch
"@getloopscale/loopzero-gateway-google-chat": patch
---

Cache access tokens with the core `createTokenCache`, so concurrent sends with an empty cache make one token request. Raises the `@getloopscale/loopzero-gateway` peer floor to `>=0.25.0`.
