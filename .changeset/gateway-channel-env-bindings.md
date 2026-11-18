---
"@getloopscale/loopzero-gateway-telegram": minor
"@getloopscale/loopzero-gateway-line": minor
"@getloopscale/loopzero-gateway-discord": minor
"@getloopscale/loopzero-gateway-slack": minor
---

Ship `ChannelDescriptor`s with env bindings for `configFromEnv`: `discordChannel` and `slackChannel` are new, and `telegramChannel` and `lineChannel` gain `env` names. `create` accepts comma-separated list strings and `"true"`/`"false"` strings.
