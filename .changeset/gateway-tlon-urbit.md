---
"@getloopscale/loopzero-gateway-tlon-urbit": minor
---

Add `@getloopscale/loopzero-gateway-tlon-urbit`, a Tlon (Urbit) adapter.

`@getloopscale/loopzero-gateway-tlon-urbit` (first release) exports `TlonUrbitAdapter`, which logs in to a bot
ship with its `+code`, reads DMs from the `chat` app's `/v3` subscription over the ship's HTTP
channel and replies with `chat-dm-action` pokes, accepting DM invites. The stream reconnects with
backoff, replaces a channel the ship dropped, logs in again when the session expires, and stops with
`TlonAuthError` when the code is refused. The wire shapes follow OpenClaw's Tlon extension and have
not yet been observed against a ship. It depends on `@urbit/aura` and requires `@getloopscale/loopzero-gateway`
0.12.0 or later.
