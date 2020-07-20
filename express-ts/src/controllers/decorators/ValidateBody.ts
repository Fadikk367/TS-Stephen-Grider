import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function ValidateBody(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  }
}