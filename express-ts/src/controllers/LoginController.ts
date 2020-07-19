import { Request, Response } from 'express';
import { Get, Controller } from './decorators';

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
}