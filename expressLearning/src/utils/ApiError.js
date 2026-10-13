class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.isOperational = true;
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
