import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';
import * as ConstantVariables from '../../app/app.constants'

const baseUrl = `${ConstantVariables.baseUrl}/api/category`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl)
  }

  getCategoryByCode(categoryCode: string): Observable<Category> {
    return this.http.get<Category>(`${baseUrl}/${categoryCode}`)
  }

}
