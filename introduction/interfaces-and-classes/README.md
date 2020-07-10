## Interfaces
> Interface is new, custom type, describing the property names and value types of and object. It can be considered as a gatekeeper in terms of function parameter or kind of a contract for classes and interface implementation. Function that accepts specific interface as a parameter requires from values passed to it as an argument to meet conditions given by interface - argument must match interface and have all properties and functions included in it. Arguments have to satysfy 'Reportable' interface to work with function:

    interface Reportable {
      summary(): string;
    }

    const someDrink = {
      color: 'brown',
      carbonated: true,
      sugar: 40,
      summary(): string {
        return `This drink is of a color of ${this.color}`;
      }
    }

    const printSummary = (item: Reportable): void => {
      console.log(item.summary());
    }

    printSummary(someDrink);

> If it comes to interfaces implemented by a class it is some kind of contract - if class wants to implement specific interface it have to implement methods specified in the interface and must contain properties defined in it.