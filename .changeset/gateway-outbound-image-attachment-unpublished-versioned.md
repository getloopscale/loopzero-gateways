---
"@getloopscale/loopzero-gateway-google-chat": patch
"@getloopscale/loopzero-gateway-imessage": patch
"@getloopscale/loopzero-gateway-irc": patch
"@getloopscale/loopzero-gateway-nextcloud-talk": patch
"@getloopscale/loopzero-gateway-signal": patch
---

Refuse an outbound that carries images with `attachments_unsupported`, making no platform call,
instead of sending its text and dropping the images. The same refusal answers an outbound with
attachments on every adapter that sends text only.
