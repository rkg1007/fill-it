import UnauthorizedError from '../errors/unauthorized';
import authentication from './auth.js';
import { check } from '../repositories/index.js';

//Responses can be accessed by the who gave response or who created the form
export async function AccessResponseAuth(req) {
  const responseId = req.params.responseId;
  const payload = authentication();
  const userId = payload.user;
  const result = await check(responseId, userId);
  if (result) {
    return true;
  } else {
    UnauthorizedError();
  }
}
