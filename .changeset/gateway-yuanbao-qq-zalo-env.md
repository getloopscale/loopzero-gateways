---
"@getloopscale/loopzero-gateway-yuanbao": minor
"@getloopscale/loopzero-gateway-qq": minor
"@getloopscale/loopzero-gateway-zalo": minor
---

`yuanbaoChannel`, `qqChannel` and `zaloChannel` bind their config fields to environment variables for `configFromEnv`, validate values with the package `ConfigurationError` (`invalid_config`), and expose optional endpoint overrides. Peer range on `@getloopscale/loopzero-gateway` is now `>=0.20.0`. The Zalo access token variable is `ZALO_ACCESS_TOKEN`.
