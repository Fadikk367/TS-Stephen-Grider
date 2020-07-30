import { Model } from './Model';
import { Attributes } from './Attributes';
import { APISync } from './APISync';
import { MyEvent } from './MyEvent';

export interface UserProps {
  id?: number,
  name?: string,
  age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static create(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new MyEvent(),
      new APISync<UserProps>(rootUrl)
    )
  }
}