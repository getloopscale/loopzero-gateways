---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-line": patch
---

`@getloopscale/loopzero-gateway` exports `channelConfigReaders(prefix)`, the config readers (`invalid`, `isAbsent`, `readString`, `requiredString`, `readBoolean`, `readFunction`) that channel packages each copied. `@getloopscale/loopzero-gateway-line` uses them and raises its `@getloopscale/loopzero-gateway` peer floor to `>=0.21.0`.
