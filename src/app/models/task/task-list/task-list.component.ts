import {Component, Inject, OnInit} from '@angular/core';
import {TaskService} from '../../../service/task.service';
import {Task} from '../../../interface/task';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Todo} from '../../../interface/todo';
import {TodoService} from '../../../service/todo.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../interface/category';
import {TodoForm} from '../../../interface/todo-form';
import {logger} from 'codelyzer/util/logger';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  todo: Todo = {};

  task: Task = {};

  todos: Todo[] = [];

  categories: Category[] = [];

  todoForm: TodoForm = {};

  taskList: any[] = [];

  constructor(private _taskService: TaskService,
              private _todoService: TodoService,
              private _categoryService: CategoryService,
              private _router: Router) {
  }

  ngOnInit() {
    this.getAllTasks();
    this.getAllTodo();
    this.getAllCategories();
    this.getTaskName();
  }

  getTaskName() {
    this.tasks.forEach(task => {
      this.taskList.push(task.content);
    })
  }

  getAllCategories() {
    this._categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    );
  }

  getAllTodo() {
    this._todoService.getTodos().subscribe(
      (data: Todo[]) => {
        this.todos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllTasks() {
    this._taskService.getTasks().subscribe(
      data => {
        this.tasks = data;
        console.table(this.tasks);
      },
      error => {
        console.log(error);
      }
    );
  }

  drop(event: CdkDragDrop<Todo[], Task[]>, taskId: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  confirmDelete(id: number) {
    this.task = this.tasks.find(task => task.id === id);
  }

  deleteTask(id: number) {
    this._taskService.deleteTask(id).subscribe(() => {
      this.getAllTasks();
      this.getAllTodo();
      console.log('xóa thành công');
    });
  }

  createTodo(id: number) {
    this.task = this.tasks.find(task => task.id === id);
  }

  addNewTodo(formCreateTodo: NgForm) {
    this.todoForm = formCreateTodo.value;
    this.todoForm.category = {
      id: this.todoForm.category,
      name: null
    };
    this.todoForm.task = this.task;
    this._todoService.addTodo(this.todoForm).subscribe(() => {
      this.getAllTasks();
      this.getAllTodo();
    }, error => console.log(error));
  }


  deleteTodo(id: number) {
    this._todoService.deleteTodo(id).subscribe(() => {
      this.getAllTasks();
      this.getAllTodo();
    });
  }

  confirmDeleteTodo(id: number) {
    this.todo = this.todos.find(todo => todo.id === id);
  }

  modalUpdate(id: number, taskId: number) {
    this.todo = this.todos.find(todo => todo.id === id);
    this.task = this.tasks.find(task => task.id === taskId);
  }

  updateTodo(formUpdateTodo: NgForm) {
    this.todoForm = formUpdateTodo.value;
    this.todoForm.category = {
      id: this.todoForm.category,
      name: null
    };
    this.todoForm.task = this.task;
    this._todoService.updateTodo(this.todoForm, this.todo.id).subscribe(() => {
      this.getAllTasks();
      this.getAllTodo();
    }, error => console.log(error));
  }
}
