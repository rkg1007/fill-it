import { Router } from 'express';
import asyncWrapper from '../utils/async-wrapper';
import definedRoutes from './routes';

const mainRouter = Router();

definedRoutes.forEach((routeConfig) => {
  const { prefix: routePrefix, routes: moduleRoutes, middlewares: moduleMiddlewares } = routeConfig;

  if (Array.isArray(moduleRoutes)) {
    moduleRoutes.forEach((moduleRouteConfig) => {
      const { method: routeMethod, path: routePath, middlewares } = moduleRouteConfig;

      const apiMiddlewares = [];

      // Combine middlewares from different sources
      if (Array.isArray(moduleMiddlewares)) {
        apiMiddlewares.push(...moduleMiddlewares);
      }
      if (Array.isArray(middlewares)) {
        apiMiddlewares.push(...middlewares);
      }

      if (apiMiddlewares.length > 0) {
        const fullApiPath = routePrefix + routePath;
        const normalizedApiMethod = routeMethod.toLowerCase();

        // Apply async wrapper to middlewares
        const wrappedApiMiddlewares = apiMiddlewares.map((middleware) => asyncWrapper(middleware));

        console.log('Registering route:', routeMethod.toUpperCase(), fullApiPath);

        switch (normalizedApiMethod) {
          case 'get':
            mainRouter.get(fullApiPath, wrappedApiMiddlewares);
            break;
          case 'post':
            mainRouter.post(fullApiPath, wrappedApiMiddlewares);
            break;
          case 'patch':
            mainRouter.patch(fullApiPath, wrappedApiMiddlewares);
            break;
          case 'put':
            mainRouter.put(fullApiPath, wrappedApiMiddlewares);
            break;
          case 'delete':
            mainRouter.delete(fullApiPath, wrappedApiMiddlewares);
            break;
          default:
            mainRouter.use(fullApiPath, wrappedApiMiddlewares);
        }
      }
    });
  }
});

export default mainRouter;
