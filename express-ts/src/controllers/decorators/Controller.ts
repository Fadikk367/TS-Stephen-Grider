import 'reflect-metadata';
import { Methods } from './Methods';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Request, Response, NextFunction, RequestHandler } from 'express';

function validateBody(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send('ERROR: Invalid request - Missing requests body');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`ERROR: Invalid request - Missing property "${key}" in req.body`);
        return;
      }
    }
    next();
  }
}


export function Controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

      const validator = validateBody(requiredBodyProps);

      if (!!path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  }
}