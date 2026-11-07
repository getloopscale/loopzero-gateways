---
"@getloopscale/loopzero-gateway": minor
"@getloopscale/loopzero-gateway-discord": patch
"@getloopscale/loopzero-gateway-slack": patch
"@getloopscale/loopzero-gateway-teams": patch
"@getloopscale/loopzero-gateway-telegram": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
"@getloopscale/loopzero-gateway-mattermost": patch
---

Keep Markdown table rows whole when Discord, Slack, Teams, Telegram, WhatsApp and Mattermost split a long reply. A cut that fell inside a table row now moves back to the start of that row when the row fits in a part, so each row reaches the platform byte-identical. `chunkText` gains the opt-in `keepTableRows` option; text with no table row splits into the same chunks as before.
