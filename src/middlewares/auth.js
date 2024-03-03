import UnauthenticatedError from '../errors';
import * as jwt from '../utils/jwt';

export default function () {
  return async (req, _res, next) => {
    const user = getLoggedInUser(req);

    if (!user) {
      throw new UnauthenticatedError('User is not logged in.');
    }

    req.loggedInUser = user;
    await next();
  };
}

const getLoggedInUser = (req) => {
  const authorizationHeader = req.get('authorization');
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split(' ')[1];
    try {
      const payload = jwt.verifyToken(token);
      return payload;
    } catch {
      return null;
    }
  }
  return null;
};
