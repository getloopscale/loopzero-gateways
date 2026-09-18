---
"@getloopscale/loopzero-gateway": minor
---

The `@getloopscale/loopzero-sdk` peer range admits the published `latest`. `>=2.18.0 <5` excluded `5.9.0`, so the
dependency gate counted this package among those a release would strand
(getloopscale/shared-workflows#64).

**Both ends were installed and run, not reasoned about:**

| sdk | typecheck | suite |
| --- | --- | --- |
| 2.18.0 — the declared floor, three majors below the devDependency | clean | 164 passed |
| 5.9.0 — the published latest | clean | 164 passed |

The floor is the surprise: `>=2.18.0` had never been exercised here — the devDependency was
`^4.62.0` — and it holds. This package makes one import from `@getloopscale/loopzero-sdk`, and it has not moved
across three majors.

No code changed. A clean consumer install of the tarball with `@getloopscale/loopzero-sdk@5.9.0` reports no
`ERESOLVE` and resolves one copy.
