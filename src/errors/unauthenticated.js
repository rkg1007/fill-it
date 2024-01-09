import CustomError from './custom-error';

class UnauthenticatedError extends CustomError {
  constructor(message = 'Authentication required') {
    super(message, 401);
  }
}

export default UnauthenticatedError;
