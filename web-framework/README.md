> type assertion:

    attrs.get('id') as number 

> in TS Types can be strings:

    type BestName = 'Stephen';

> in both JS & TS object keys are strings!

> Generic constrains limits types that our type parameter could be!

    interface HasId {
        id: number;
    }

    export class Sync<T extends HasId> { ... }

T must contain a property of a type of number which is named "id"