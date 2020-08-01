import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';


const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.create(json);
});

users.on('change', () => {
  const root = document.getElementById('root')!;
  new UserList(root, users).render(); 
});

users.fetch();