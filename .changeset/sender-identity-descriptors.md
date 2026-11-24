---
"@getloopscale/loopzero-gateway-imessage": patch
"@getloopscale/loopzero-gateway-raft": patch
"@getloopscale/loopzero-gateway-tlon-urbit": patch
"@getloopscale/loopzero-gateway-sms": patch
---

SMS declares `senderIdentity` as unauthenticated ("the caller id of a text message"). iMessage, Raft and Tlon still declare none, so apps treat them as not authenticated until a maintainer confirms each; their tests now assert that.
