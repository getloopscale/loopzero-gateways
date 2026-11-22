---
"@getloopscale/loopzero-gateway-google-chat": patch
"@getloopscale/loopzero-gateway-teams": patch
---

Verify inbound tokens with the core `jwksKeySet` and `verifyRs256Jwt` instead of an own key-set cache and RS256 check. Both adapters now need `@getloopscale/loopzero-gateway` >=0.26.0, which ships them.
