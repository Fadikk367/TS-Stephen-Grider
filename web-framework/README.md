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

> Little shortcut for getters inside a class:

    get on() {
        return this.events.on; // this is a function
    }

    on = this.events.on; // shorter version of getter above


## Order of properties initialization inside a class:

> In this examle below we would get an error: "Cannot read property start of undefined":

    class Engine {
        start() {
            console.log('STARTED!!!');
        }
    }

    class Car {
        engine: Engine;

        constructor() {
            this.engine = newEngine();
        }

        start = this.engine.start; // HERE IS THE PROBLEM
    }

We cannot use this shortcut here because properties declared like strat above are initialized before constructors body executes so this.engine is undefined at this point of time. (We can see it in TS => JS transpilator, order of assignments will clearly show it)

    class Car {
        constructor(public engine: Engine) {}

        start = this.engine.start; // NOW IT IS OK
    }


   