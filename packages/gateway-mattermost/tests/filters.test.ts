import { describe, expect, it } from "vitest";

import { hasMentionWithBoundary, shouldRespond } from "../src/filters.js";
import type { MattermostPost } from "../src/types.js";

function makePost(overrides: Partial<MattermostPost> = {}): MattermostPost {
  return {
    id: "p1",
    user_id: "u-alice",
    channel_id: "c-1",
    root_id: "",
    message: "hi",
    create_at: 0,
    ...overrides,
  };
}

describe("hasMentionWithBoundary (EC-2)", () => {
  it("matches exact bot mention", () => {
    expect(hasMentionWithBoundary("hi @loopzero can you help?", "loopzero")).toBe(true);
  });

  it("ignores substring match for longer username", () => {
    // EC-2: @loopzero_dept should NOT match a bot called @loopzero.
    expect(hasMentionWithBoundary("hi @loopzero_dept sync today", "loopzero")).toBe(false);
  });

  it("matches at start of message", () => {
    expect(hasMentionWithBoundary("@loopzero!", "loopzero")).toBe(true);
  });

  it("matches at end of message", () => {
    expect(hasMentionWithBoundary("ping @loopzero", "loopzero")).toBe(true);
  });

  it("matches with punctuation immediately after", () => {
    expect(hasMentionWithBoundary("@loopzero, please", "loopzero")).toBe(true);
  });

  it("does not match inside a word", () => {
    expect(hasMentionWithBoundary("apartheid", "loopzero")).toBe(false);
  });

  it("ignores empty bot username", () => {
    expect(hasMentionWithBoundary("anything", "")).toBe(false);
  });

  it("escapes regex metacharacters in bot username", () => {
    expect(hasMentionWithBoundary("hi @my.bot.v2 status?", "my.bot.v2")).toBe(true);
    expect(hasMentionWithBoundary("hi @my-bot please", "my-bot")).toBe(true);
  });
});

describe("shouldRespond pipeline (D403)", () => {
  it("rejects own posts (loop guard)", () => {
    const post = makePost({ user_id: "u-bot" });
    expect(
      shouldRespond({
        post,
        channelType: "dm",
        botUserId: "u-bot",
        botUsername: "bot",
        requireMention: false,
      }),
    ).toBe(false);
  });

  it("DM always dispatches (no mention required)", () => {
    const post = makePost({ message: "just a question" });
    expect(
      shouldRespond({
        post,
        channelType: "dm",
        botUserId: "u-bot",
        botUsername: "bot",
        requireMention: true,
      }),
    ).toBe(true);
  });

  it("channel + no mention + requireMention=false → dispatch", () => {
    const post = makePost({ message: "just a thought" });
    expect(
      shouldRespond({
        post,
        channelType: "group",
        botUserId: "u-bot",
        botUsername: "bot",
        requireMention: false,
      }),
    ).toBe(true);
  });

  it("channel + no mention + requireMention=true → ignore", () => {
    const post = makePost({ message: "just a thought" });
    expect(
      shouldRespond({
        post,
        channelType: "group",
        botUserId: "u-bot",
        botUsername: "bot",
        requireMention: true,
      }),
    ).toBe(false);
  });

  it("EC-2: metadata.mentions priority — dispatches when bot.id in mentions even if text doesn't match", () => {
    const post = makePost({
      message: "hey team please review",
      metadata: { mentions: ["u-bot"] },
    });
    expect(
      shouldRespond({
        post,
        channelType: "group",
        botUserId: "u-bot",
        botUsername: "loopzero",
        requireMention: true,
      }),
    ).toBe(true);
  });

  it("EC-2: word-boundary text fallback — @loopzero_dept ignored, @loopzero matched", () => {
    const ambig = makePost({ message: "@loopzero_dept please review" });
    expect(
      shouldRespond({
        post: ambig,
        channelType: "group",
        botUserId: "u-bot",
        botUsername: "loopzero",
        requireMention: true,
      }),
    ).toBe(false);

    const direct = makePost({ message: "@loopzero please review" });
    expect(
      shouldRespond({
        post: direct,
        channelType: "group",
        botUserId: "u-bot",
        botUsername: "loopzero",
        requireMention: true,
      }),
    ).toBe(true);
  });
});
