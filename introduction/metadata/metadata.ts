import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 15, plane);
// Reflect.defineMetadata('hue', 120, plane, 'color');

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// const hue = Reflect.getMetadata('hue', plane, 'color');

// console.log(note, height);

@Controller
class Plane {
  color: string = 'red';

  @GET('users')
  fly(): void {
    console.log('vrrrrr');
  }
}

function GET(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}


function Controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    // router.get(path, middleware, target.prototype[key]);
    console.log(path);
  }
}

