---
"@getloopscale/loopzero-gateway-qq": patch
"@getloopscale/loopzero-gateway-yuanbao": patch
"@getloopscale/loopzero-gateway-zalo": patch
---

Share the HTTP failure handling (non-2xx answers, rejected fetches, send-error mapping) in one internal module instead of three copies. No behaviour change.
