---
"@getloopscale/loopzero-gateway-line": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
"@getloopscale/loopzero-gateway-nextcloud-talk": patch
"@getloopscale/loopzero-gateway-yuanbao": patch
---

Verify webhook signatures with the core `verifyHmac`, and compare the WhatsApp verify token with `safeEqualString`; an empty expected verify token now never matches. Raises the `@getloopscale/loopzero-gateway` peer floor to 0.26.0.
