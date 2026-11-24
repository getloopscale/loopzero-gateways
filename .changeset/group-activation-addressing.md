---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-telegram": minor
"@getloopscale/loopzero-gateway-slack": minor
"@getloopscale/loopzero-gateway-mattermost": minor
"@getloopscale/loopzero-gateway-whatsapp": minor
"@getloopscale/loopzero-gateway-discord": minor
"@getloopscale/loopzero-gateway-matrix": minor
"@getloopscale/loopzero-gateway-teams": minor
"@getloopscale/loopzero-gateway-line": minor
---

`MessageEvent` gains an optional `addressed` flag, set by these adapters on group and thread events whether or not `requireMention` is on, and `@getloopscale/loopzero-gateway` adds `groupActivationHook({ mode, modeFor? })`, which blocks unaddressed group messages per chat.
