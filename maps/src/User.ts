import faker from 'faker';
import { Locatable } from './CustomMap';

export class User implements Locatable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  getMarkerContent(): string {
    return `
      <div>
        <h2>Hey there, My name is ${this.name}<h2>
      </div>
    `;
  }
}