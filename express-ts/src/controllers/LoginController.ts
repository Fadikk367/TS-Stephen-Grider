import { Request, Response, NextFunction } from 'express';
import { Get, Controller, Post, ValidateBody, Use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log(`GET - [${new Date()}] - User <${req.body.email}> login attempt`);
  next();
}

@Controller('/auth')
class LoginController {

  @Get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email">
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password">
        </div>
        <button>SUBMIT</button>
      </form>
    `);
  }

  @Post('/login')
  @ValidateBody('email', 'password')
  @Use(logger)
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {  
      res.send('Invalid email or password!');
    }
  }

  @Get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}