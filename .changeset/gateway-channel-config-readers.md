---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-line": patch
---

`@getloopscale/loopzero-gateway` exports `channelConfigReaders(prefix)`, the config readers (`invalid`, `isAbsent`, `readString`, `requiredString`, `readBoolean`, `readFunction`) that channel packages each copied. `@getloopscale/loopzero-gateway-line` keeps its own copy of the readers until `@getloopscale/loopzero-gateway@0.22.0` ships the export, and raises its `@getloopscale/loopzero-gateway` peer floor to `>=0.21.0`.
