---
"@getloopscale/loopzero-gateway-feishu-lark": patch
"@getloopscale/loopzero-gateway-nostr": patch
"@getloopscale/loopzero-gateway-synology-chat": patch
"@getloopscale/loopzero-gateway-tlon-urbit": patch
"@getloopscale/loopzero-gateway-twitch": patch
---

Refuse an outbound that carries images with `attachments_unsupported`, making no platform call,
instead of sending its text and dropping the images. The same refusal answers an outbound with
attachments on every adapter that sends text only.
