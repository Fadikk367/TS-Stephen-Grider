import { Request, Response, NextFunction } from 'express';
import { Get, Controller, Post, ValidateBody, Use } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not permitted');
}


@Controller('')
class RootController {
  @Get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>
            You are logged in
          </div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>
            You are NOT logged in
          </div>
          <a href="/auth/login">login</a>
        </div>
      `);  
    }
  };
  
  @Get('/protected')
  @Use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route logged user');
  };
}