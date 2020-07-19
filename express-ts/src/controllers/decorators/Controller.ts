import 'reflect-metadata';
import { Methods } from './Methods';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';


export function Controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

      if (!!path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  }
}