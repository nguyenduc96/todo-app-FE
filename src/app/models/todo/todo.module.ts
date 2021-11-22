import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoDeleteComponent} from './todo-delete/todo-delete.component';
import {TodoListComponent} from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoCreateComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
