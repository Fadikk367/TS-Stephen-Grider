import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';


export function Use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares: RequestHandler[] = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
  }
}

