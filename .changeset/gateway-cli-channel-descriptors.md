---
"@getloopscale/loopzero-gateway-signal": minor
"@getloopscale/loopzero-gateway-imessage": minor
"@getloopscale/loopzero-gateway-raft": minor
---

Export `signalChannel`, `imessageChannel` and `raftChannel`: channel descriptors with an environment variable bound to each option, for `createChannels` and `configFromEnv`.

The three packages now require `@getloopscale/loopzero-gateway >=0.22.0` and read channel config with its shared `channelConfigReaders`.
