import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

const baseUrl = "https://hytrendy-production.up.railway.app/api/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getAllProduct(page: number, limit: number): Observable <Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?page=${page}&limit=${limit}`)
  }

  getByCategoryAndType( categoryCode : string ,  typeCode : string): Observable< Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/${categoryCode}/${typeCode}`)
  }

  getById (id: number) : Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`)
  }

  updatedById (id: number , product: Product) : Observable<string> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<string>(`${baseUrl}/${id}`, JSON.stringify(product), { headers } )
  }

  createProduct (product: Product) : Observable <string> {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.post<string>(baseUrl,  JSON.stringify(product), { headers })
  }

  deleteProduct (id: number) : Observable <string> {
    return this.http.delete<string> (baseUrl, {body: id})
  }

  countProduct(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/count`)
  }
}
