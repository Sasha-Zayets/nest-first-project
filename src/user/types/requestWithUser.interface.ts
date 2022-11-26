import { Request } from 'express';
import { User } from 'src/user/user.model';

export interface RequestWithUser extends Request {
  user: User;
}
