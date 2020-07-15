import { Sorter } from './Sorter';
import { Numbers } from './Numbers';
import { Characters } from './Characters';
import { LinkedList } from './LinkedList/LinkedList';


const numCollection = new Numbers([10, -4, 1, -3, 7]);
// const numSorter = new Sorter(numCollection);
numCollection.sort();
console.log(numCollection.data);

const charCollection = new Characters('Xaayb');
// const charSorter = new Sorter(charCollection);
charCollection.sort();
console.log(charCollection.data);

const list = new LinkedList();
list.print();

list.add(4);
list.add(0);
list.add(-1);
list.add(7);
list.add(2);

list.print();
// const listSorter = new Sorter(list);
list.sort();
list.print();

