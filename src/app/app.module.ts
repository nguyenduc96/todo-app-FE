import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { FooterComponent } from './models/footer/footer.component';
import { TodoCreateComponent } from './models/todo/todo-create/todo-create.component';
import { TodoEditComponent } from './models/todo/todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './models/todo/todo-delete/todo-delete.component';
import { TodoListComponent } from './models/todo/todo-list/todo-list.component';
import { TaskListComponent } from './models/task/task-list/task-list.component';
import { TaskCreateComponent } from './models/task/task-create/task-create.component';
import { TaskDeleteComponent } from './models/task/task-delete/task-delete.component';
import { TaskEditComponent } from './models/task/task-edit/task-edit.component';
import { CategoryListComponent } from './models/category/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDeleteComponent,
    TodoListComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskDeleteComponent,
    TaskEditComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
