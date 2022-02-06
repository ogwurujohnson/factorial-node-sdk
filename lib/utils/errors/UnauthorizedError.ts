import BaseError from "./BaseError";
import type { Options } from "../_types";

class UnauthorizedError extends BaseError {
  /**
   * The UnauthorizedError Constructor.
   * @param {Object} options - A configuration object for errors.
   * @param {String} options.message - The error message if any.
   * @constructor UnauthorizedError
   */
  constructor (options: Options) {
    super(options);
    this.name = this.constructor.name;
    this.message = options?.message;
  }
}

export default UnauthorizedError;