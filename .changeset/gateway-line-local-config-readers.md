---
"@getloopscale/loopzero-gateway-line": patch
---

`@getloopscale/loopzero-gateway-line` keeps its own config readers instead of importing `channelConfigReaders`, which `@getloopscale/loopzero-gateway@0.21.0` does not export, so it loads against any core its peer range admits.
