---
"@getloopscale/loopzero-gateway-line": patch
---

`@getloopscale/loopzero-gateway-line` keeps its own copy of the channel config readers until `@getloopscale/loopzero-gateway@0.22.0` ships `channelConfigReaders`, so it works with every `@getloopscale/loopzero-gateway` its `>=0.21.0` peer floor admits (#564).
