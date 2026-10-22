---
"@getloopscale/loopzero-gateway-signal": minor
---

Add `@getloopscale/loopzero-gateway-signal`, a Signal adapter.

`@getloopscale/loopzero-gateway-signal` (first release) exports `SignalAdapter`, which starts
`signal-cli -a <account> jsonRpc` and talks to it over stdio. `connect()` returns `true` only once
signal-cli answers, and `false` when the binary is missing, the account is not registered, or no
answer arrives within `connectTimeoutMs`. Inbound messages with text become `SignalMessageEvent`s;
a markdown reply is sent with Signal text styles instead of literal asterisks. The package has no
runtime dependencies and requires `@getloopscale/loopzero-gateway` 0.12.0 or later, the first version with the
`signal` key. signal-cli itself, and a registered number, are the operator's to provide.
