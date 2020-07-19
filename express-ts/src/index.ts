import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

import './controllers/LoginController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dg5yDF^5fd35%^%D$fdshgfv36'] }));
app.use(router);

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening o port 3000');
});