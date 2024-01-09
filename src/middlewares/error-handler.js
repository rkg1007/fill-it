import CustomError from '../errors';

export const errorHandler = async (err, _req, res, _next) => {
  console.error(err); // Log all errors to the console

  if (err instanceof CustomError) {
    // Handle CustomError instances
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    // Handle other errors (send a generic 500 response)
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
