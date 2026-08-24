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
| [`loopzero`](https://github.com/getloopscale/loopzero) | The HTTP route and the signature check. `handleChannelWebhook` validates the request, then hands your app the raw body as `payload: unknown` |
| **`loopzero-gateways`** (here) | Translating that payload. `parseInbound` turns it into a canonical `MessageEvent`, so your app never re-declares a platform's wire format |
| [`loopzero-sdk`](https://github.com/getloopscale/loopzero-sdk) | Measured today: one redaction helper, used when logging a handler error. Whether it should do more is open — see `BACKLOG.md` B-012 |

```ts
// In a LoopZero route. The signature was already checked before this runs.
import { parseInbound } from "@getloopscale/loopzero-gateway-telegram";

const event = parseInbound(await request.json());
if (event !== null) {
  console.log(`${event.channel.id}: ${event.text}`);
}
```

`parseInbound` returns `null` and never throws — `onMessage` runs after LoopZero has already answered
200, so there is no status left to change. Adapters whose platform uses a long-lived connection
rather than a webhook (Discord, Slack, Mattermost, Matrix, e-mail) do not go through this seam; they
own their transport, and running one alongside a LoopZero server needs a process lifecycle that does
not exist yet.

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
