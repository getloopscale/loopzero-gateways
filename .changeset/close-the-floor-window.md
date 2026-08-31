---
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

The peer floor on `@getloopscale/loopzero-gateway` is `>=0.9.0`, which is what these packages have needed since
they gained `deliver`.

`deliver` and `runHandler` arrived in the core at 0.9.0, and the previous release shipped these
adapters still declaring `>=0.6.0` — a floor `dep-check` had already proven false by building the
workspace against it: TS4113 on the override, TS2551 on `runHandler`, in all ten packages.

It could not be corrected in that release. `dep-check`'s install check packs an adapter and installs
it the way a consumer would, and until 0.9.0 was on npm no consumer could resolve a package asking
for it — the check was right about the world as it stood. The floor is raised here, against a
registry where the version it names exists.

Between the two releases a consumer installing against an older core got a build error rather than a
resolution error: the same failure, later and less clearly. That window is closed.
