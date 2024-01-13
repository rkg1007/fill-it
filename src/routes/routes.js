import homeRoutes from './home';
import authRoutes from './auth';

export default [
  { prefix: '', routes: homeRoutes },
  { prefix: '/auth', routes: authRoutes },
  { prefix: '/user', routes: userRoutes },
];
