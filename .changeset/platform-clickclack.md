---
"@getloopscale/loopzero-gateway": minor
---

Make `clickclack` a first-party platform.

`@getloopscale/loopzero-gateway` gains the `clickclack` key in `PlatformEventRegistry`, the `ClickClackMessageEvent`
type and a `channelRendering` row (`plain`, markers removed). `PlatformName` grows by one member.
Code that lists every platform in a `Record<PlatformName, …>` or in a switch with a `never` default
must add it.
