
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  constructor() {}

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErr('Oops, boat has sunk in the ocean..')
  pilot(
    @parameterDecorator speed: string, 
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}


function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('Key: ', key);
}

function logErr(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}

new Boat().pilot('fast', true);