---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-telegram": minor
"@getloopscale/loopzero-gateway-discord": patch
"@getloopscale/loopzero-gateway-email": patch
"@getloopscale/loopzero-gateway-line": patch
"@getloopscale/loopzero-gateway-matrix": patch
"@getloopscale/loopzero-gateway-mattermost": patch
"@getloopscale/loopzero-gateway-slack": patch
"@getloopscale/loopzero-gateway-sms": patch
"@getloopscale/loopzero-gateway-teams": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
---

Send an image from a gateway handler, and refuse it wherever a platform cannot show one.

`@getloopscale/loopzero-gateway` exports `OutboundAttachment` (`kind: "image"`, `mediaType`, `data`, optional
`filename`). `OutboundMessage` gains an optional `attachments` list, `ctx.reply(text, { attachments })`
carries it to the adapter (an empty list is left out), and `BasePlatformAdapter` declares
`supportsAttachments`, `false` by default. `DeliveryRouter.send` takes the same `attachments`
field. The runner and the router refuse an outbound carrying attachments as
`attachments_unsupported`, with no `sendMessage` call, when the adapter does not declare
`supportsAttachments`.

`@getloopscale/loopzero-gateway-telegram` reports `supportsAttachments: true` and sends each image through
`sendPhoto`, the text as the first photo's caption up to 1024 UTF-16 units and after the photos
when longer. A non-image kind is refused as `attachments_unsupported`; a missing image, more
than 10 images or an image over 10 MiB as `invalid_attachment`; all with no request.

Every other adapter, and every adapter's `editMessage`, refuses an outbound carrying attachments
with `attachments_unsupported` and makes no platform call, instead of sending the text and
dropping the image.
