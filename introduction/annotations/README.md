## Type annotations and inferrence

### Rely on type inference whenever it works correctly => *variables*

### When to use type annotations for variables?
> 1) When a function returns the 'any' type and we need to clarify it:

    const json = '{"x": 10, "y": 20}';
    const coords: { x: number, y: number } = JSON.parse(json);
    console.log(coords); // {x: 10, y: 20}

> 2) When we declare a variable on one line and initialize it later:

    let words = ['red', 'green', 'blue'];
    let foundWord: boolean;

    for (let i = 0; i < words.length; ++i) {
      if (words[i] === 'green') {
        foundWord = true;
      }
    }

> 3) Variables whose type cannot be inferred correctly

    let numbers = [-10, -1, 12];
    let numberAboveZero: boolean | number = false;

    for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
      }
    }

### Always annotate function parameters and returning types

    const add = (a: number, b: number): number => {
      return a + b;
    }

It makes TypeScript able to check if function returns declared type so you have additional guard covering your back.

> Use "never" value for returning type annotation if you are sure that our function never reaches its end (it never returns anything) 

    const throwError = (message: string): never => {
      throw new Error(message);
    }