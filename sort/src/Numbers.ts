export class Numbers {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const rightHand = this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex];
    this.data[leftIndex] = rightHand;
  }
}