import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../interface/todo';
import {TODO_URL, URL_BASE} from '../interface/url-base';
import {TodoForm} from '../interface/todo-form';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${URL_BASE}/${TODO_URL}`);
  }

  getTodo(id: number): Observable<Todo> {
    return this._http.get<Todo>(`${URL_BASE}/${TODO_URL}/${id}`);
  }

  addTodo(todoForm: TodoForm): Observable<TodoForm> {
    return this._http.post<TodoForm>(`${URL_BASE}/${TODO_URL}`, todoForm);
  }

  updateTodo(todoForm: TodoForm, id: number): Observable<TodoForm> {
    return this._http.put<TodoForm>(`${URL_BASE}/${TODO_URL}/${id}`, todoForm);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this._http.delete<Todo>(`${URL_BASE}/${TODO_URL}/${id}`);
  }
}
