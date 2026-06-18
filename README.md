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
