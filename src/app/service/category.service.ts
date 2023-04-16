import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';

const baseUrl = "http://localhost:8080/api/category";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(baseUrl)
  }

}
