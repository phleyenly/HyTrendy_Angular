import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

const baseUrl = "http://localhost:8080/api/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getAllProduct(): Observable <Product[]> {
    return this.http.get<Product[]>(baseUrl)
  }

  getByCategoryAndType( categoryCode : string ,  typeCode : string): Observable< Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/${categoryCode}/${typeCode}`)
  }

  getById (id: number) : Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`)
  }
}
