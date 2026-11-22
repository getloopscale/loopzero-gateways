---
"@getloopscale/loopzero-gateway": patch
"@getloopscale/loopzero-gateway-signal": minor
"@getloopscale/loopzero-gateway-imessage": minor
---

Remove the two package-local copies of the line-framed JSON-RPC client: `gateway-signal` and `gateway-imessage` now use the one `JsonRpcLineClient` exported by `@getloopscale/loopzero-gateway`, so a single implementation exists. Raises their `@getloopscale/loopzero-gateway` peer floor to `>=0.27.0`, the first core release that exports it.
