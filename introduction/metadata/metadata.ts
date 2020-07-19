import 'reflect-metadata';

const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 15, plane);
Reflect.defineMetadata('hue', 120, plane, 'color');

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const hue = Reflect.getMetadata('hue', plane, 'color');

console.log(note, height);