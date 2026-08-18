---
"@getloopscale/loopzero-gateway": patch
"@getloopscale/loopzero-gateway-discord": patch
"@getloopscale/loopzero-gateway-email": patch
"@getloopscale/loopzero-gateway-line": patch
"@getloopscale/loopzero-gateway-matrix": patch
"@getloopscale/loopzero-gateway-mattermost": patch
"@getloopscale/loopzero-gateway-sms": patch
"@getloopscale/loopzero-gateway-teams": patch
"@getloopscale/loopzero-gateway-telegram": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
---

Six defects that broke real conversations, found by testing the adapters against the live platforms instead of against fakes.

**LINE — no outbound message was ever delivered.** The adapter called the v9 SDK client with positional arguments while that client takes a single request object, so LINE received an empty request and rejected every send with a 400. Upgrade if you use this adapter at all: nothing it sent reached anyone.

**Telegram — the bot froze on long replies.** Any message over 4096 characters that began with an unclosed code span (a stray backtick) put the splitter into an infinite loop, hanging the process until it ran out of memory. Long agent answers now split correctly whatever markdown they contain.

**Mattermost — long messages silently vanished.** The adapter never split anything, so any reply over 16,383 characters was rejected by the server and the user simply saw nothing. Long replies are now split into parts Mattermost accepts.

**SMS — long messages were rejected from the hundredth part onward.** The `(i/N)` prefix outgrew the space reserved for it, pushing every later part past the provider's limit.

**Matrix and LINE — `connect()` reported success with an invalid token.** Both now verify the credential with the server before returning `true`, so a wrong token fails at startup instead of silently receiving nothing forever.

**Email and Teams — the bot could go permanently deaf.** Replacing an inbound handler and then disposing of the previous one removed the new handler as well, and the gateway stopped receiving messages with nothing logged.

Also: a `pre_inbound` hook that threw put its raw error text into the user's chat, which could expose internal details such as connection strings or tokens. Users now see only which hook failed; the detail goes to the server log, redacted.

WhatsApp additionally stops opening a second session when `connect()` is called twice, and its group mention filter no longer treats unrelated digits scattered through a message as a mention of the bot.
