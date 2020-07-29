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
  private attr: Attributes<UserProps> = new Attributes<UserProps>({});

}