const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
}

// Always annotate function paramethers!

const add = (a: number, b: number): number => {
  return a + b;
}

// also returned type should be annotated...

const subtract = (a: number, b: number): number => {
  return a - b;
}

// thanks to that we have TS who makes sure that we return object of a correct type from the function

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a*b;
}

// and the "void" type

const logger = (message: string): void => {
  console.log(message);
  // return void;
  // return undefined; - those two will work, it is OK
}

// never tells us that we will never reach the end of a function, it NEVER returns anything

const throwError = (message: string): never => {
  throw new Error(message);
}

const throwError2 = (message: string): void => {
  if (!message)
    throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
