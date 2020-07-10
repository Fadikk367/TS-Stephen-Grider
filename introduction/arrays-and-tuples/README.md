## Arrays & tuples

Simple declaration of an array of strings:

    const sentences = ['Sentence 1', 'Some another one', 'And one more'];

Type inferrence works fine there!

Mulitdimensional array type annotation:

    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]

### When do we want to annotate type for arrays?
> 1. When we initialize it with en empty one so that TS will know objects of what type does it contain:

    const arr: number[] = [];

> 2. When we have array of multiple types allowed and in initialization table there are some types missing:

    const importantDates: (Date | string)[] = [new Date()];
    importantDates.push('2030-10-10');

### Tuple 
> An array-like structure where each element may be of a different type and it represents some property of a record. Order of elements  is very improtant to be consistent.

### If it comes to tuples they are not often used in TypeScript (But there are some cases where tuples fit well)

The reason for that is lack of information about what specific element means and usually it is better to use plan object where keys gives us that information missing in tuples:

    const coke: [string, boolean, number] = ['brown', true, 35];

    type Drink = [string, boolean, number];
    const sprite: Drink = ['clear', true, 45];

> OK OK, but what the heck is true and 45? 'clear' or 'brown' are colors with great probability but true?

    const tea = {
      color: string,
      carbonated: boolean,
      sugar: number
    }

> Damn boy, now it makes sense.





