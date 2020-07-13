export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}


export class Sorter {
  constructor(public collection: Sortable) {
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - i - 1; ++j) {

        if (this.collection.compare(j, j+1)) 
          this.collection.swap(j, j+1);
      }
    }
  }
}




// export class Sorter {
//   constructor(public collection: number[] | string) {
//   }

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; ++i) {
//       for (let j = 0; j < length - i - 1; ++j) {
//         // Methods available for this.collection are intersection of two sets of methods: for string and for array
//         // only common methods we can use there without warnings and errors

//         if (this.collection instanceof Array) {
//           // there, thanks to typeguard we are sure that the type of collection is an array so all array methods
//           // are available there while outside of this if statment they were not
//           if (this.collection[j] > this.collection[j+1]) {
//             const rightHand = this.collection[j+1];
//             this.collection[j+1] = this.collection[j];
//             this.collection[j] = rightHand;
//           }
//         }

//         if (typeof this.collection === 'string') {
//           // there we are sure that type of this.collection is string so we can use all methods available for strings
//           // "typeof" we use for: number, string, boolean, symbol
//           // other types makes use of "instance of"
//         }


//       }
//     }
//   }
// }