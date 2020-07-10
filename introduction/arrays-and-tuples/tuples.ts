const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// This is just an array!
const pepsi = ['brown', true, 40];

// Order of elements in a tuple have very specific meaning

const coke: [string, boolean, number] = ['brown', true, 35];

// Type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 45];
const tea: Drink = ['green', false, 10];

// Why tuples are not used that often

// we have no idea what those numbers means
const carSpecs: [number, number] = [400, 3354];

// with keys in object we know exactly what specific number means
const carStats = {
  horsepower: 400,
  weight: 3354
}