import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.createUserCollection();
collection.fetch();

console.log(collection);