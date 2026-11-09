import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm", "cjs"],
  dts: { resolve: ["@getloopscale/loopzero-gateway-bot-realtime"] },
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  outDir: "dist",
  target: "node22",
  platform: "node",
  external: ["@getloopscale/loopzero-gateway"],
  noExternal: ["@getloopscale/loopzero-gateway-bot-realtime"],
});
