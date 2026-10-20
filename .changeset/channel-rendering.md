---
"@getloopscale/loopzero-gateway": minor
---

Pair each platform with the rendering `ChatPresenter` needs.

`@getloopscale/loopzero-gateway` exports `channelRendering(platform)` and the type `ChannelRendering`, a
`{ translate, format }` pair to spread into `@getloopscale/loopzero-presenter`'s `ChatPresenter` options.
whatsapp and slack get single-character emphasis (`*bold*`, `_italic_`, `~strike~`), discord,
mattermost and teams keep markdown, and telegram, matrix, email, line and sms get the four inline
markers removed with `format: "plain"`. Before this, the presenter's defaults put `**bold**` on
the wire as characters on matrix and email, and handed telegram and slack a bold spelled for
another dialect.

Only bold, italic, strikethrough and inline code are translated. Headings, links, lists and block
quotes pass through, and fenced code blocks are not handled yet: the inline-code rule rewrites
their backticks. A platform the table does not know throws a `RangeError`. `toDialect` is
unchanged, and `@getloopscale/loopzero-gateway` still does not depend on `@getloopscale/loopzero-presenter`.
