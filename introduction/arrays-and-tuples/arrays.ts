const carMakres = ['ford', 'toyota', 'saab']; // type inferrence works fine
const carMakres2: string[] = ['ford', 'toyota', 'chevy']; // still we can make type annotations

// When we want to annotate array type?
// when we declare an empty array in order to specify its type

const arr: number[] = [];

const dates = [new Date(), new Date()];

// two dimensional array: eg. string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const car = carMakres[0];
const myCar = carMakres.pop();

// TS prevent incompatible values
// carMakres.push(4);

const lengths = carMakres.map((car: string): number => {
  return car.length;
})

// Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');

