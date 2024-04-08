import * as userService from '../services/user.js';

export const getAllUsers = async () => {
  const users = await userService.getAllUsers();
  return users;
};

export const getUser = async () => {
  const user = await userService.getUser();
  return user;
};

export const getMe = async (req) => {
  const { loggedInUser } = req;
  return loggedInUser;
};

export const updateUser = async () => {
  const updateResult = await userService.updateUser();
  return updateResult;
};
