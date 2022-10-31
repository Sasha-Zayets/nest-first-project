import { User } from 'src/user/types/user.types';

export interface Task {
  title: string;
  user: User;
  done: boolean;
}
