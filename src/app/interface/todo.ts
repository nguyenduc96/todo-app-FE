import {User} from './user';
import {Category} from './category';
import {Task} from './task';

export interface Todo {
  id?: number;
  title?: string;
  content?: string;
  isDone?: boolean;
  dateline?: Date;
  user?: User;
  category?: Category;
  task?: Task;
}
