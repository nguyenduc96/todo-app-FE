import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskForm} from '../../interface/task-form';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {Task} from '../../interface/task';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  taskForm: TaskForm = {};


  constructor(private _taskService: TaskService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  addNewTask(formCreate: NgForm) {
    this.taskForm = formCreate.value;
    this._taskService.createTask(this.taskForm).subscribe(() => {
      console.log('Task created');
      this._router.navigateByUrl('/api/task/list');
    });
  }
}
