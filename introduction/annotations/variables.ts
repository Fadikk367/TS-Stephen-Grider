// annotation --> ": <type>"
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// inferrence:
let plums = 12; // plums: number 
let words = ['word1', 'word2', 'word3'] // words: string[]

// Built in objects
let date: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4];
let thruths: boolean[] = [!false, true, true];

// Classes

class Car {
  public readonly brand: string;
  public readonly  year: number;
  private readonly accidents: boolean;
  constructor(brand: string = 'audi', year: number = 2010, accidents: boolean = false) {
    this.brand = brand;
    this.year = year;
    this.accidents = accidents;
  }
}
let car1: Car;
let car2: Car = new Car('mercedes', 2020, true);

console.log(car1); // undefined
console.log(car2); // Car { brand: ..., year: ..., accidents: ...}

// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};