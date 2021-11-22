import { Component, OnInit } from '@angular/core';
import {TaskForm} from '../../../interface/task-form';
import {NgForm} from '@angular/forms';
import {TaskService} from '../../../service/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: TaskForm = {};

  constructor(private _taskService: TaskService,
              private _router: Router) { }

  ngOnInit() {
  }


  addTask(formAddTask: NgForm) {
    this.taskForm = formAddTask.value;
    this._taskService.createTask(this.taskForm).subscribe((data) => {
      this.taskForm = data;
      this._router.navigateByUrl('api/task/list')
    });
  }
}
