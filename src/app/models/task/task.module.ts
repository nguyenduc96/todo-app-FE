import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskCreateComponent} from './task-create/task-create.component';
import {TaskDeleteComponent} from './task-delete/task-delete.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent,
    TaskDeleteComponent,
    TaskEditComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    DragDropModule,
    FormsModule
  ]
})
export class TaskModule { }
