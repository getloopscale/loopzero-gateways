/** Typed errors for `@getloopscale/loopzero-gateway-feishu-lark`. */

import { GatewayConfigurationError, type GatewayConfigurationErrorOptions } from "@getloopscale/loopzero-gateway";

/** Misconfiguration of the channel, raised before any network call. */
export class ConfigurationError extends GatewayConfigurationError {
  override readonly name = "ConfigurationError";
  constructor(opts: GatewayConfigurationErrorOptions) {
    super("gateway-feishu-lark", opts);
  }
}
