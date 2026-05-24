/**
 * `@getloopscale/gateway-teams` — public API.
 *
 * Microsoft Teams adapter for `@getloopscale/gateway`, built on `@microsoft/teams.apps@^2`.
 *
 * @public
 */

export { TeamsAdapter } from "./adapter.js";
export type { TeamsAdapterOptions } from "./types.js";

export { mapTeamsError } from "./errors.js";
export { normalizeTeamsActivity, stripTeamsMentions } from "./normalize.js";
export { splitForTeams } from "./split.js";

// Re-export for consumer ergonomics.
export type { TeamsMessageEvent } from "@getloopscale/gateway";
