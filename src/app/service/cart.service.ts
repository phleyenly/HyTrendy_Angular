import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../interface/cart';

const baseUrl = "http://localhost:8080/api/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { }

  getCart() : Observable <Cart[]> {
    return this.http.get<Cart[]>(baseUrl);

  }
 
  deleteCartByIdProduct(id: number) : Observable<string> {
    return this.http.delete<string>(`${baseUrl}/${id}`)
  }
}
