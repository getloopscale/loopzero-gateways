---
"@getloopscale/loopzero-gateway-wecom": minor
"@getloopscale/loopzero-gateway-yuanbao": minor
"@getloopscale/loopzero-gateway-zalo": minor
"@getloopscale/loopzero-gateway-zalo-personal": minor
"@getloopscale/loopzero-gateway-buzz": minor
"@getloopscale/loopzero-gateway-clickclack": minor
"@getloopscale/loopzero-gateway-twitch": minor
"@getloopscale/loopzero-gateway-nextcloud-talk": minor
"@getloopscale/loopzero-gateway-irc": minor
---

Report `capabilities.maxMessageChars` from the splitter's limit. IRC leaves it undefined because its limit is in bytes. None of these adapters produces thread events, so `threads` stays `false`.
