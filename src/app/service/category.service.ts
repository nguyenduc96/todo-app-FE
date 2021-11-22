import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../interface/category';
import {CATEGORIES_URL, URL_BASE} from '../interface/url-base';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${URL_BASE}/${CATEGORIES_URL}`);
  }

  getCategory(id: number): Observable<Category> {
    return this._http.get<Category>(`${URL_BASE}/${CATEGORIES_URL}/${id}`);
  }
}
