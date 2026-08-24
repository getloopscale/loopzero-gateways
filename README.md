# loopzero-gateways

Multi-channel gateway packages for the LoopScale ecosystem, extracted from `loopzero-sdk` (2026-06-18, plan `monorepo-cohesion-split`) so the SDK stays a cohesive Agent-AI **Harness** while these platform adapters evolve on their own cadence.

## Packages

| Package | Platform |
| --- | --- |
| `@getloopscale/loopzero-gateway` | Transport-agnostic core (BasePlatformAdapter, SessionRouter, DeliveryRouter, GatewayRunner). |
| `@getloopscale/loopzero-gateway-telegram` | Telegram (grammy) |
| `@getloopscale/loopzero-gateway-discord` | Discord (discord.js) |
| `@getloopscale/loopzero-gateway-slack` | Slack (@slack/bolt) |
| `@getloopscale/loopzero-gateway-whatsapp` | WhatsApp (Meta Cloud API + whatsapp-web.js) |
| `@getloopscale/loopzero-gateway-teams` | Microsoft Teams |
| `@getloopscale/loopzero-gateway-email` | Email (nodemailer + imapflow) |
| `@getloopscale/loopzero-gateway-sms` | SMS (Twilio / Plivo / Vonage) |
| `@getloopscale/loopzero-gateway-line` | LINE Messaging API |
| `@getloopscale/loopzero-gateway-matrix` | Matrix |
| `@getloopscale/loopzero-gateway-mattermost` | Mattermost |

## How this fits with LoopZero

Receiving a message spans three repositories, and each owns one part of it.

| Repository | Its half |
|---|---|
| [`loopzero`](https://github.com/getloopscale/loopzero) | The HTTP route and the signature check. `handleChannelWebhook` verifies the signature, parses the body, and hands your app the parsed JSON as `payload: unknown` |
| **`loopzero-gateways`** (here) | Translating that payload. `parseInbound` turns it into a canonical `MessageEvent`, so your app never re-declares a platform's wire format |
| [`loopzero-sdk`](https://github.com/getloopscale/loopzero-sdk) | Measured today: one redaction helper, called at two sites when logging a throw. Whether it should do more is open — see `BACKLOG.md` B-012 |

```ts
// Inside handleChannelWebhook's onMessage. The signature and the JSON parse already happened.
import { parseInbound } from "@getloopscale/loopzero-gateway-telegram";

const event = parseInbound(message.payload);
if (event !== null) {
  console.log(`${event.channel.id}: ${event.text}`);
}
```

`parseInbound` returns `null` and never throws. Measured against `loopzero@0.48.14`: your `onMessage`
is awaited **before** the 200 is built, and nothing inside `handleChannelWebhook` catches — so a
throw on an unparseable payload means the 200 is never built. The rejection reaches the route's
error boundary, and LoopZero answers **500** (`handleRequestError` → `INTERNAL_ERROR`): the platform
sees a failed delivery where it expected an acknowledgement. Returning `null` lets an app ignore a
message it cannot read and still answer normally.

`parseInbound` itself exists on `@getloopscale/loopzero-gateway-telegram` and `@getloopscale/loopzero-gateway-sms` today. The
other adapters export their own translation under their own names — `lineEventToMessageEvent`,
`normalizeTeamsActivity`, and `parseWebhookPayload` composed with `normalizeInboundMessages` for
WhatsApp Cloud — and each has its own signature: read the one you are using rather than assuming
this one's. Adapters whose transport is a long-lived connection (Discord, Slack, Mattermost, Matrix,
e-mail, and WhatsApp's `web` and `baileys` backends) do not go through this seam at all; they own
their transport, and running one alongside a LoopZero server needs a process lifecycle that does not
exist yet.

## Relationship to `@getloopscale/loopzero-sdk`

Every adapter consumes `@getloopscale/loopzero-sdk` as a **published npm dependency** (`^1.9.0`). `@getloopscale/loopzero-gateway` (the core) is an in-repo workspace dependency of the adapters.

## Develop

```bash
nvm use
corepack enable && corepack prepare pnpm@9.15.0 --activate
pnpm install
pnpm build
pnpm test
```

## History

Extracted with full git history via `git filter-repo` from `getloopscale/loopzero-sdk`.
