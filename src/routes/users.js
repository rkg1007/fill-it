import * as userController from '../controllers/user.js';

export default [
  {
    method: 'get',
    path: '/',
    middlewares: [userController.getAllUsers],
  },

  {
    method: 'get',
    path: '/me',
    middlewares: [userController.getMe],
  },
  {
    method: 'get',
    path: '/:userId',
    middlewares: [userController.getUser],
  },
  {
    method: 'patch',
    path: '/:userId',
    middlewares: [userController.updateUser],
  },
];
