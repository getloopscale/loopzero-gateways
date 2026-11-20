---
"@getloopscale/loopzero-gateway-irc": minor
"@getloopscale/loopzero-gateway-nextcloud-talk": minor
"@getloopscale/loopzero-gateway-nostr": minor
---

Export a `ChannelDescriptor` with environment variable bindings: `ircChannel`, `nextcloudTalkChannel` and `nostrChannel`, for use with `createChannels` and `configFromEnv`. The `@getloopscale/loopzero-gateway` peer floor is `>=0.23.0`, the release that adds the `readNumber`, `readList` and `readBooleanString` readers the descriptors call.
