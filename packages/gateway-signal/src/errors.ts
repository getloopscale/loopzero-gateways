/** Typed errors for `@getloopscale/loopzero-gateway-signal`. */

import { GatewayConfigurationError, type GatewayConfigurationErrorOptions } from "@getloopscale/loopzero-gateway";

/** Misconfiguration of this adapter, raised from the constructor before signal-cli starts. */
export class ConfigurationError extends GatewayConfigurationError {
  override readonly name = "ConfigurationError";
  constructor(opts: GatewayConfigurationErrorOptions) {
    super("gateway-signal", opts);
  }
}
