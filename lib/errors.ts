class FactorialHRException extends Error {}

class MalformedResponseError extends FactorialHRException {
  response: object;
  requestId: string;

  constructor(message: string, response: any) {
    super(message);

    this.response = response;
    this.requestId = response.headers["x-request-id"];
  }
}

interface ErrorObject {
  message?: string;
  reason?: string;
  field?: string;
  links?: object;
  metadata?: object;
  request_pointer?: string;
}

class ApiError extends FactorialHRException {
  message: string;
  errors: ErrorObject[];
  documentationUrl: string;
  errorType: string;
  requestId: string;
  code: string;
  response: object;

  constructor(response: any) {
    const {
      data: { error },
    } = response;
    const {
      message,
      errors,
      documentation_url: documentationUrl,
      type,
      request_id: requestId,
      code,
    } = error;

    super(message);

    this.response = response;
    this.message = message;
    this.errors = errors;
    this.documentationUrl = documentationUrl;
    this.errorType = type;
    this.requestId = requestId;
    this.code = code;
  }

  static buildFromResponse(response: any) {
    const {
      status,
      data
    } = response;

    // These statuses are for unique errors
    switch (status) {
      case 401:
        return new AuthenticationError(response);
      case 403:
        return new PermissionsError(response);
      case 429:
        return new RateLimitError(response);
      default:
      //noop
    }

    switch (data) {
      // HINT: dummy error handlers and classes, later change this to fit factorial use case
      case "validation_failed":
        return new ValidationFailedError(response);
      case "invalid_api_usage":
        return new InvalidApiUsageError(response);
      case "invalid_state":
        return new InvalidStateError(response);
      case "factorialhr":
        return new FactorialHRInternalError(response);
      default:
        return
        // TODO: uncomment after fixing error handling
        // return new ApiError(response);
    }
  }

  toString() {
    const messages = (this.errors || [])
      .filter(e => e.message !== this.message)
      .map(e => e.message);

    if (messages.length > 0) {
      return `${this.message} (${messages.join(", ")})`;
    }

    return this.message;
  }
}

class IdempotentCreationConflictError extends ApiError {
  conflictingResourceId: string;

  constructor(response: any, conflictingResourceId: any) {
    super(response);
    this.conflictingResourceId = conflictingResourceId;
  }
}

class ValidationFailedError extends ApiError {
  toString() {
    const messages = (this.errors || [])
      .filter(e => e.field)
      .map(e => `${e.field} ${e.message}`);

    if (messages.length > 0) {
      return `${this.message} (${messages.join(", ")})`;
    }

    return this.message;
  }
}

class InvalidApiUsageError extends ApiError {}
class InvalidStateError extends ApiError {}
class FactorialHRInternalError extends ApiError {}
class AuthenticationError extends ApiError {}
class PermissionsError extends ApiError {}
class RateLimitError extends ApiError {}

export {
  FactorialHRException,
  MalformedResponseError,
  ApiError,
  IdempotentCreationConflictError,
  ValidationFailedError,
  InvalidApiUsageError,
  InvalidStateError,
  FactorialHRInternalError,
  AuthenticationError,
  PermissionsError,
  RateLimitError,
};