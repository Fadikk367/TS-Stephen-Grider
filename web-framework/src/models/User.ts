import { Model } from './Model';
import { Attributes } from './Attributes';
import { APISync } from './APISync';
import { MyEvent } from './MyEvent';
import { Collection } from './Collection';

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

  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.create(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random()*100);
    this.set({ age });
  }
}