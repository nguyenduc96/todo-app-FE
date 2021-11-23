import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskCreateComponent} from './task-create/task-create.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskDeleteComponent} from './task-delete/task-delete.component';
import {TodoCreateComponent} from '../todo/todo-create/todo-create.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: TaskListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: TaskCreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'delete/:id',
    component: TaskDeleteComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
