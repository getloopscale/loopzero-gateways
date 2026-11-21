---
"@getloopscale/loopzero-gateway-yuanbao": patch
"@getloopscale/loopzero-gateway-qq": patch
"@getloopscale/loopzero-gateway-zalo": patch
---

Export `yuanbaoChannel`, `qqChannel` and `zaloChannel`: webhook channel descriptors whose `verify` and `ingest` check the signed request and dispatch the event, so `createWebhookHandler` serves them over Fetch. `qqChannel` also answers the callback URL validation.
