import authCheck from '../middlewares/auth';
import homeRoutes from './home';
import authRoutes from './auth';
import userRoutes from './users';

export default [
  { prefix: '', routes: homeRoutes },
  { prefix: '/auth', routes: authRoutes },
  { prefix: '/users', routes: userRoutes, middlewares: [authCheck()] },
];
