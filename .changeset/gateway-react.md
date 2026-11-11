---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-discord": minor
"@getloopscale/loopzero-gateway-slack": minor
"@getloopscale/loopzero-gateway-telegram": minor
"@getloopscale/loopzero-gateway-matrix": minor
---

`BasePlatformAdapter` gains `react(channelId, messageId, emoji)`, which adds an emoji reaction to an inbound message. The default resolves `react_unsupported`; the Discord, Slack, Telegram and Matrix adapters implement it.
