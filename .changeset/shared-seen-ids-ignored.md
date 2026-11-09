---
"@getloopscale/loopzero-gateway-twitch": patch
---

The adapters import `SeenIds` from `@getloopscale/loopzero-gateway` instead of carrying a copy; their peer floor
is now `>=0.13.0`.
