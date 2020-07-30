import { User } from './models/User';

const user = User.create({ id: 1, name: 'YEYY', age: 11111 });

user.on('change', () => {
    console.log(user, 'CHANGED');
});

user.fetch();
