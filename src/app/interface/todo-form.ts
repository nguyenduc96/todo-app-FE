import {User} from './user';
import {Task} from './task';

export interface TodoForm {
  id?: number;
  position?: number;
  content?: string;
  isDone?: boolean;
  dateline?: Date;
  user?: User;
  category?: any;
  task?: Task;
}
