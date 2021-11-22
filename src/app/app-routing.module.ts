import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'api/task',
    pathMatch: 'full'
  },
  {
    path: 'api/todo',
    loadChildren: () => import('./models/todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'api/task',
    loadChildren: () => import('./models/task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'api/categories',
    loadChildren: () => import('./models/category/category.module').then(m => m.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
