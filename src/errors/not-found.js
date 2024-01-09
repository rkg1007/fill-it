import CustomError from './custom-error';

class NotFoundError extends CustomError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

export default NotFoundError;
