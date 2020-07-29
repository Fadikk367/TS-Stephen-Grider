import { AxiosResponse } from 'axios';

import { Event } from './Event'; 
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Event = new Event();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attrs: Attributes<UserProps>;

  constructor(attributes: UserProps) {
    this.attrs = new Attributes<UserProps>(attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set(update: UserProps): void {
    this.attrs.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attrs.getAll());
  }
}