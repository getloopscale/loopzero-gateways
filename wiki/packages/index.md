# Packages

Eleven packages in one pnpm workspace: one transport-agnostic core and ten
platform adapters. Every adapter depends on the core as a `workspace:^` peer and
on `@getloopscale/loopzero-sdk` as a published npm dependency.

## Core

* [@getloopscale/loopzero-gateway](loopzero-gateway.md) - v0.5.0. The adapter contract, `MessageEvent`, routing, hooks, and the shared text/error primitives.

## Adapters — migrated to core `chunkText` (Slack family)

* [@getloopscale/loopzero-gateway-slack](gateway-slack.md) - `@slack/bolt`. Limit 4000; the family's reference implementation.
* [@getloopscale/loopzero-gateway-whatsapp](gateway-whatsapp.md) - Two backends (Meta Cloud, whatsapp-web.js). Limit 4096, part-trimming.
* [@getloopscale/loopzero-gateway-teams](gateway-teams.md) - `@microsoft/teams.apps` v2. Limit 8000, the widest window.

## Adapters — migrated to core `chunkText` (Telegram family)

* [@getloopscale/loopzero-gateway-discord](gateway-discord.md) - discord.js. Hard 2000 / soft 1900, no space boundary.

## Adapters — migrated to core `chunkByGrapheme` (grapheme family)

* [@getloopscale/loopzero-gateway-line](gateway-line.md) - LINE Messaging API. Limit 5000; one-shot 60 s reply tokens.
* [@getloopscale/loopzero-gateway-sms](gateway-sms.md) - Twilio / Plivo / Vonage. Limit 1600 with an `(i/N) ` part prefix.

## Adapters — splitter deliberately not migrated

* [@getloopscale/loopzero-gateway-telegram](gateway-telegram.md) - grammy. Keeps a local splitter because it balances markdown pairs.

## Adapters — no splitter

* [@getloopscale/loopzero-gateway-email](gateway-email.md) - nodemailer + imapflow + mailparser. Header-driven threading.
* [@getloopscale/loopzero-gateway-matrix](gateway-matrix.md) - matrix-js-sdk. DM detection by joined-member count.
* [@getloopscale/loopzero-gateway-mattermost](gateway-mattermost.md) - WebSocket gateway + REST. Thread roots via `rootId`.
