class CustomError extends Error {
  /**
   * Creates a new CustomError instance with a message, status code, and optional additional details.
   *
   * @param {string} message - The error message.
   * @param {number} statusCode - The HTTP status code associated with the error.
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  /**
   * Overrides the default `toString()` method to include the status code and details in the error message.
   *
   * @returns {string} The formatted error message.
   */
  toString() {
    return `Status Code ${this.statusCode}: ${this.message}`;
  }
}

export default CustomError;
