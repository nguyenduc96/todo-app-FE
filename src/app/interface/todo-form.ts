import {User} from './user';
import {Task} from './task';

export interface TodoForm {
  id?: number;
  title?: string;
  content?: string;
  isDone?: boolean;
  dateline?: Date;
  user?: User;
  category?: any;
  task?: Task;
}
