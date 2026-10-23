---
"@getloopscale/loopzero-gateway-feishu-lark": minor
---

Add `@getloopscale/loopzero-gateway-feishu-lark`, a Feishu / Lark adapter.

`@getloopscale/loopzero-gateway-feishu-lark` (first release) exports `FeishuLarkAdapter`, which receives
`im.message.receive_v1` text messages over the open platform SDK's long connection and replies with
`im.message.create` or `im.message.reply`, on Feishu or on Lark (`domain`). `connect()` proves the
App ID and Secret with a tenant token and waits for the connection to come up; a redelivered event
is answered once. The SDK keeps its own reconnect. `@larksuiteoapi/node-sdk` is an optional peer,
and `@getloopscale/loopzero-gateway` 0.12.0 or later is required. Not yet run against a live app.
