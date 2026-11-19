import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const read = (p) => readJson(`../../packages/${p}/package.json`);

/** `[major, minor, patch]` of the lower bound of a `>=x.y.z` or `^x.y.z` range. */
function lowerBound(range) {
  const match = /(?:>=|\^)\s*(\d+)\.(\d+)\.(\d+)/.exec(range);
  if (match === null) throw new Error(`no lower bound in range ${JSON.stringify(range)}`);
  return match.slice(1).map(Number);
}

function atLeast(version, minimum) {
  for (let i = 0; i < 3; i += 1) {
    if (version[i] !== minimum[i]) return version[i] > minimum[i];
  }
  return true;
}

describe("@getloopscale/loopzero-sdk peer floor", () => {
  it.each(["gateway", "gateway-agent"])(
    "%s does not admit sdk releases with broken declarations",
    (pkg) => {
      const range = read(pkg).peerDependencies["@getloopscale/loopzero-sdk"];
      expect(atLeast(lowerBound(range), [4, 62, 0])).toBe(true);
    },
  );

  // gateway-agent's public declarations import `@getloopscale/loopzero-presenter`, and every presenter its
  // range admits names its own `@getloopscale/loopzero-sdk` peer. An sdk below that peer's floor installs no
  // presenter gateway-agent accepts, so the range would advertise combinations that cannot exist.
  // The presenter read here is the one the lockfile installs for gateway-agent, which is its
  // declared floor.
  it("gateway-agent admits no sdk below the floor its presenter floor requires", () => {
    const agent = read("gateway-agent");
    const presenter = readJson(
      "../../packages/gateway-agent/node_modules/@getloopscale/loopzero-presenter/package.json",
    );
    expect(presenter.version).toBe(
      lowerBound(agent.peerDependencies["@getloopscale/loopzero-presenter"]).join("."),
    );
    const sdkFloor = lowerBound(agent.peerDependencies["@getloopscale/loopzero-sdk"]);
    const presenterNeeds = lowerBound(presenter.peerDependencies["@getloopscale/loopzero-sdk"]);
    expect(atLeast(sdkFloor, presenterNeeds)).toBe(true);
  });
});
