import * as userService from '../services/user.js';

export var getAllUsers = async () => {
  const users = userService.getAllUsers();
  return users;
};

export var getUser = async (req) => {
  const user = userService.getUser(req.params);
  return user;
};

export var getMe = async (req) => {
  const USER = req.user;
  const user = userService.getUser(USER);
  return user;
};

export function UpdateUser(req) {
  const user = userService.UpdateUser(req);
  return user;
}
