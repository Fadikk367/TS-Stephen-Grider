import { Sorter, Sortable } from './Sorter';

export class Characters extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const rightHand = characters[rightIndex];
    characters[rightIndex] = characters[leftIndex];
    characters[leftIndex] = rightHand;

    this.data = characters.join('');
  }
}