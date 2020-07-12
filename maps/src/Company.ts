import faker from 'faker';
import { Locatable } from './CustomMap';

export class Company implements Locatable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  getMarkerContent(): string {
    return `
      <div>
        <h2>Hey there, There is ${this.companyName}<h2>
        <h3>${this.catchPhrase}</h3>
      </div>
    `;
  }
}