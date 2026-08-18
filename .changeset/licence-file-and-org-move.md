---
"@getloopscale/loopzero-gateway": patch
"@getloopscale/loopzero-gateway-discord": patch
"@getloopscale/loopzero-gateway-email": patch
"@getloopscale/loopzero-gateway-line": patch
"@getloopscale/loopzero-gateway-matrix": patch
"@getloopscale/loopzero-gateway-mattermost": patch
"@getloopscale/loopzero-gateway-slack": patch
"@getloopscale/loopzero-gateway-sms": patch
"@getloopscale/loopzero-gateway-teams": patch
"@getloopscale/loopzero-gateway-telegram": patch
"@getloopscale/loopzero-gateway-whatsapp": patch
---

**Every package now ships the licence it declares.** All twelve manifests in this repository declare `Apache-2.0`, and the repository had no `LICENSE` file at all — not at the root, and not in any package directory except `gateway-email`. So each published tarball asserted a licence while carrying none of its terms, and §4(a) of that licence requires a copy to travel with the distribution. Worse than a missing file: with no licence text anywhere, everything outside the manifests fell back to default copyright, which grants a recipient nothing.

The text is now at the repository root and inside every publishable package, byte-identical to the canonical Apache License 2.0 with the appendix filled in (`Copyright 2026 getloopscale.com`). The one pre-existing copy, in `gateway-email`, was replaced along with the rest: it carried the same truncated paragraph 4(d) found across the ecosystem, dropping "reasonable and customary use" from the NOTICE clause — a modified body under an unmodified SPDX identifier.

**The repository moved to the official `getloopscale` organization.** Existing clones and published URLs keep working through GitHub's permanent redirect; the root manifest now declares `Apache-2.0` explicitly rather than leaving the workspace root silent.
