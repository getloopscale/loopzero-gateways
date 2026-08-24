# @getloopscale/loopzero-gateway

Multi-platform messaging gateway for `@getloopscale/loopzero-sdk`. Transport-agnostic primitives — adapters live in separate peer-dep packages.

> **Status: 0.1.0 — pre-release.** Breaking changes allowed within the `0.x` line per semver.

## Install

```bash
pnpm add @getloopscale/loopzero-gateway @getloopscale/loopzero-sdk
# Plus one or more transport adapters:
pnpm add @getloopscale/loopzero-gateway-telegram grammy
pnpm add @getloopscale/loopzero-gateway-discord discord.js
```

## Architecture (5 pieces)

| Module | Responsibility |
|---|---|
| `BasePlatformAdapter` | Contract every adapter implements: `connect`, `disconnect`, `sendMessage`, `onInbound` |
| `GatewayRunner` | Orchestrator: holds adapters, dispatches inbound events to your handler |
| `SessionRouter` | Pure function: `MessageEvent → agentId` (composes `Agent.resume`, ADR D174) |
| `DeliveryRouter` | Dispatch outbound messages (composes `Cron`, ADR D175) |
| `HookExecutor` | `pre_inbound` / `post_outbound` / `on_error` hooks (own contract, ADR D176) |

## Minimal example

```typescript
import { Agent } from "@getloopscale/loopzero-sdk";
import { GatewayRunner, SessionRouter } from "@getloopscale/loopzero-gateway";
import { TelegramAdapter } from "@getloopscale/loopzero-gateway-telegram";

const router = new SessionRouter();
const adapter = new TelegramAdapter({ token: process.env.TELEGRAM_BOT_TOKEN! });

const runner = new GatewayRunner({
  adapters: [adapter],
  handler: async (event, ctx) => {
    const agent = await Agent.resume(router.resolveAgentId(event), {
      apiKey: process.env.OPENROUTER_API_KEY!,
      model: { id: "openai/gpt-4o-mini" },
    });
    const run = await agent.send(event.text);
    const result = await run.wait();
    await ctx.reply(result.result ?? "no reply");
    await agent.dispose();
  },
});

await runner.start();
```

## Receiving from a LoopZero app

Three repositories share this path. `loopzero` owns the HTTP route and the signature check —
`handleChannelWebhook` verifies the signature, parses the body, and hands your app the parsed JSON
as `payload: unknown`. These packages own the translation. `loopzero-sdk` is used here for one thing
today: redacting a throw before it reaches a log, at two call sites.

```ts
import { parseInbound } from "@getloopscale/loopzero-gateway-telegram";

// Inside onMessage. The signature and the JSON parse already happened.
const event = parseInbound(message.payload);
if (event !== null) {
  console.log(`${event.platform} ${event.channel.id}: ${event.text}`);
}
```

`parseInbound` returns `null` and never throws. Measured against `loopzero@0.48.14`: `onMessage` is
awaited **before** the 200 is built, and nothing inside `handleChannelWebhook` catches — so a throw
on an unparseable payload means the 200 is never built. The rejection reaches the route's error
boundary and LoopZero answers **500**: the platform sees a failed delivery where it expected an
acknowledgement.

`parseInbound` under that name exists on `@getloopscale/loopzero-gateway-telegram` and `@getloopscale/loopzero-gateway-sms`.
Every other adapter exports its translation under its own name — `gateway-line` has
`lineEventToMessageEvent`, `gateway-whatsapp` composes `parseWebhookPayload` with
`normalizeInboundMessages` — each with its own signature: read the one you are using rather than
assuming this one's.

Adapters whose transport is a long-lived connection rather than a webhook own that transport and do
not go through this seam.

## Design principles

- **Compose, don't reimplement.** The gateway never owns session persistence (SDK does), never owns scheduling (Cron does), never owns prompt resolution (SystemPromptResolver does).
- **Adapters are peer-dep packages.** Install only the transports you need.
- **Hooks live in the gateway, not the SDK.** Transport-layer concerns shouldn't pollute the SDK's Plugin contract.

See `.claude/knowledge-base/adrs/D170-D181-*.md` for the full design rationale.

## License

Apache-2.0
