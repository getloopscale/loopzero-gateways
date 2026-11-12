# @getloopscale/loopzero-gateway-wechat

## 0.1.0

### Minor Changes

- 3efe7e7: Add `@getloopscale/loopzero-gateway-wechat`, a WeChat (Weixin) Official Account adapter.

  `WeChatAdapter` verifies the server-URL signature (`handleWebhook`), turns text messages into
  messages and replies through the customer-service message API, splitting a reply over 600
  characters. Requires `@getloopscale/loopzero-gateway` 0.12.0 or later. Not yet run against a live account.
