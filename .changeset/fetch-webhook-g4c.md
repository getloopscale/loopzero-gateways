---
"@getloopscale/loopzero-gateway-google-chat": minor
"@getloopscale/loopzero-gateway-yuanbao": minor
"@getloopscale/loopzero-gateway-qq": minor
"@getloopscale/loopzero-gateway-zalo": minor
---

Answer webhooks through the Fetch webhook contract: each descriptor declares `methods: ["POST"]` and a `handle`, so `createWebhookHandler` serves the route. `googleChatChannel` is now a `webhook` transport that builds its adapter with `webhook: "external"`.
