# @getloopscale/loopzero-gateway-twitch

## 0.1.0

### Minor Changes

- 67e0b78: Add `@getloopscale/loopzero-gateway-twitch`, a Twitch chat adapter.

  `@getloopscale/loopzero-gateway-twitch` (first release) exports `TwitchAdapter`, which reads `channel.chat.message`
  notifications from an EventSub WebSocket and replies with Helix Send Chat Message, splitting a reply
  over 500 characters into messages sent in order (`splitForTwitch` is exported). It validates the
  token's owner and scopes, keeps the session through keepalive gaps, drops and `session_reconnect`
  handovers, and reports a dropped message with Twitch's reason. It does not refresh the access token.
  It has no runtime dependencies and requires `@getloopscale/loopzero-gateway` 0.12.0 or later. Not yet run against
  a live channel.

### Patch Changes

- acc8f25: Refuse an outbound that carries images with `attachments_unsupported`, making no platform call,
  instead of sending its text and dropping the images. The same refusal answers an outbound with
  attachments on every adapter that sends text only.
- e980fb8: The adapters import `SeenIds` from `@getloopscale/loopzero-gateway` instead of carrying a copy; their peer floor
  is now `>=0.13.0`.
