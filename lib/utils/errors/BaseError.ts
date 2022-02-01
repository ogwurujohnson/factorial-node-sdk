import type { Options } from "../../types";

class BaseError extends Error {
    /**
     * The BaseError Constructor.
     * @param {Object} options - A configuration object for errors.
     * @param {String} options.message - The error message if any.
     * @constructor BaseError
   */
  constructor (options: Options) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = options?.message;
  }
}

export default BaseError;
