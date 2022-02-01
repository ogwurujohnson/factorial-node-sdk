import ForbiddenError from "../errors/ForbiddenError";
import InvalidResourceError from "../errors/InvalidResourceError";
import NotAcceptableError from "../errors/NotAcceptableError";
import ServerError from "../errors/ServerError";
import ServiceUnavailableError from "../errors/ServiceUnavailableError";
import UnauthorizedError from "../errors/UnauthorizedError";
import InvalidPayloadError from "../errors/InvalidPayloadError";

/**
 * @class Helper
 */
class Helper {
  /**
   *
   * @param {object} error - The error object
   * @returns {Object} - The an error instance
   * @memberof Helper
   */
  static processError (error: any) {
    const errordata = error.response.data.error;
    switch (error.response.status) {
      case 401:
        throw new UnauthorizedError({ message: error.response.data.message });
      case 403:
        throw new ForbiddenError({ message: error.response.data.message });
      case 404:
        throw new InvalidResourceError({ message: error.response.data.message });
      case 406:
        throw new NotAcceptableError({ message: error.response.data.message });
      case 422 : Object.keys(errordata).forEach((key) => {
        throw new InvalidPayloadError({ message: errordata[key] });
      });
        break;
      case 503:
        throw new ServiceUnavailableError({ message: error.response.data.message });
      default:
        throw new ServerError({ message: error.response.data.message });
    }
  }
}

export default Helper;
