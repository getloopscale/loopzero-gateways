import { GatewayConfigurationError, type GatewayConfigurationErrorOptions } from "@getloopscale/loopzero-gateway";

/** Configuration error of `@getloopscale/loopzero-gateway-qq`. */
export class ConfigurationError extends GatewayConfigurationError {
  override readonly name = "ConfigurationError";
  constructor(opts: GatewayConfigurationErrorOptions) {
    super("gateway-qq", opts);
  }
}
