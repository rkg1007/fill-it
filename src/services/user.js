import * as userService from '../repository/user.js';

export const getAllUsers = async () => {
  return await userService.getAllUsers();
};

export var getUser = async (user) => {
  const userId = user.userid;
  return await userService.getUser(userId);
};

export async function UpdateUser(req) {
  const { userid, fullName, email, password } = req.body;
  const user = await userService.UpdateUser(userid, fullName, email, password);
  return user;
}

