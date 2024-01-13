import * as userRepo from '../repository/user.js';

export const getAllUsers = async () => {
  return await userRepo.getAllUsers();
};

export var getUser = async (user) => {
  const userId = user.userid;
  return await userRepo.getUser(userId);
};

export async function UpdateUser(req) {
  const { userid, fullName, email, password } = req.body;
  const user = await userRepo.UpdateUser(userid, fullName, email, password);
  return user;
}

