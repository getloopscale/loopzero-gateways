# CLAUDE.md — LoopZero Pro Telegram Bot

Claude-specific extension on top of AGENTS.md. LoopZero Pro uses
`@getloopscale/loopzero-sdk` agents that can run against any OpenRouter-compatible
provider including Claude.

## Claude-flavored conventions

- When asked about SDK design decisions, cite ADRs in
  `.claude/knowledge-base/adrs/` by D-number.
- Prefer concise replies; the user is reading on a phone screen.
- For long-form replies, use `/factstream` to demonstrate streaming
  rather than a single wall of text.
