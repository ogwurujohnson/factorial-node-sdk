import BaseError from "./BaseError";
import type { Options } from "../../types";

class NotAcceptableError extends BaseError {
  /**
   * The NotAcceptableError Constructor.
   * @param {Object} options - A configuration object for errors.
   * @param {String} options.message - The error message if any.
   * @constructor NotAcceptableError
   */
  constructor (options: Options) {
    super(options);
    this.name = this.constructor.name;
    this.message = options?.message;
  }
}

export default NotAcceptableError;
