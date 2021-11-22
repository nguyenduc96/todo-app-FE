import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../interface/todo';
import {TODO_URL, URL_BASE} from '../interface/url-base';

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

  addTodo(todo: Todo): Observable<Todo> {
    return this._http.post<Todo>(`${URL_BASE}/${TODO_URL}`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this._http.put<Todo>(`${URL_BASE}/${TODO_URL}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this._http.delete<Todo>(`${URL_BASE}/${TODO_URL}/${id}`);
  }
}
