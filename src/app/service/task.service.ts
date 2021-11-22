import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskForm} from '../interface/task-form';
import {Task} from '../interface/task';
import {Observable} from 'rxjs';
import {TASK_URL, URL_BASE} from '../interface/url-base';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {
  }

  createTask(taskForm): Observable<TaskForm> {
    return this._http.post<TaskForm>(`${URL_BASE}/${TASK_URL}`, taskForm);
  }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(`${URL_BASE}/${TASK_URL}`);
  }

  getTask(id): Observable<Task>{
    return this._http.get<Task>(`${URL_BASE}/${TASK_URL}/${id}`);
  }

  updateTask(id, taskForm): Observable<TaskForm> {
    return this._http.put<TaskForm>(`${URL_BASE}/${TASK_URL}/${id}`, taskForm);
  }

  deleteTask(id): Observable<Task> {
    return this._http.delete(`${URL_BASE}/${TASK_URL}/${id}`);
  }
}
