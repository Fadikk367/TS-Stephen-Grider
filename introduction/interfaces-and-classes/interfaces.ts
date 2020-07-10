interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Car info: ${this.name}, ${this.year}, ${this.broken}`;
  }
};

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

printSummary(oldCivic);
printSummary(someDrink);
