import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}

export const Get = routeBinder(Methods.get);
export const Post = routeBinder(Methods.post);
export const Put = routeBinder(Methods.put);
export const Patch = routeBinder(Methods.patch);
export const Delete = routeBinder(Methods.delete);