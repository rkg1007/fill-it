import { Router } from 'express';
import asyncWrapper from '../utils/async-wrapper';
import routes from './routes';

const router = Router();

routes.forEach((route) => {
  const { prefix, routes: moduleRoutes, middlewares: moduleMiddlewares } = route;
  if (Array.isArray(moduleRoutes)) {
    moduleRoutes.map((moduleRoute) => {
      const { method, path, middlewares } = moduleRoute;
      let apiMiddlewares = [];
      if (Array.isArray(moduleMiddlewares)) {
        apiMiddlewares = apiMiddlewares.concat(moduleMiddlewares);
      }
      if (Array.isArray(middlewares)) {
        apiMiddlewares = apiMiddlewares.concat(middlewares);
      }
      if (apiMiddlewares.length > 0) {
        const apiPath = prefix + path;
        const apiMethod = method.toLowerCase();
        apiMiddlewares = apiMiddlewares.map((middleware) => asyncWrapper(middleware));
        console.log('registering route :-', method.toUpperCase(), apiPath);
        switch (apiMethod) {
          case 'get': {
            router.get(apiPath, ...apiMiddlewares);
            break;
          }
          case 'post': {
            router.post(apiPath, ...apiMiddlewares);
            break;
          }
          case 'patch': {
            router.patch(apiPath, ...apiMiddlewares);
            break;
          }
          case 'put': {
            router.put(apiPath, ...apiMiddlewares);
            break;
          }
          case 'delete': {
            router.delete(apiPath, ...apiMiddlewares);
            break;
          }
          default: {
            router.use(apiPath, ...apiMiddlewares);
          }
        }
      }
    });
  }
});

export default router;
