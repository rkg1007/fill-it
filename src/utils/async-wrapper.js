export default function (middleware) {
  return async function (req, res, next) {
    try {
      const apiResponse = await middleware(req, res, next);
      if (!res.writableEnded) {
        if (apiResponse.statusCode != undefined && apiResponse.data != undefined) {
          const { statusCode, data } = apiResponse;
          res.status(statusCode).send(data);
        } else {
          res.send(apiResponse);
        }
      }
    } catch (error) {
      next(error);
    }
  };
}
