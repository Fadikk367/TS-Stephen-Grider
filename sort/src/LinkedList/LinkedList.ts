import { Node } from './Node';

export class LinkedList {
  head: Node | null = null;

  constructor() {}

  get length(): number {
    if (!this.head) return 0;
    else {
      let count = 1;
      let tail = this.head;

      while (!!tail.next) {
        tail = tail.next;
        count++;
      }

      return count;
    }
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('List is empty');
    } else if (index < 0) {
      throw new Error('Invalid index: cannot be negative');
    } else {
      let counter = 0;
      let node: Node | null = this.head;

      while (!!node) {
        if (counter === index) {
          return node;
        }

        node = node.next;
        counter++;
      }

      throw new Error('Index out of bounds');
    }
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;

      while (!!tail.next) 
        tail = tail.next;

      tail.next = node;
    }
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // temporary, greedy and super incorrect implementation
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const rightHand = rightNode.data;
    rightNode.data = leftNode.data;
    leftNode.data = rightHand;
  }

  print(): void {
    let output = 'list: ';
    let node: Node | null = this.head;

    while (!!node) {
      output += `(${node.data})`;
      node = node.next;
      if (!!node) {
        output += ' -> ';
      }
    }

    console.log(output);
  }
}