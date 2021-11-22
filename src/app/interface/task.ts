import {User} from './user';

export interface Task {
id?: number;
content?: string;
isDone?: boolean;
createdAt?: Date;
updatedAt?: Date;
user?: User;
}
