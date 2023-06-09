import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../interface/cart';
import { InforCreateCart } from '../interface/infor-create-cart';
import * as ConstantVariables from '../../app/app.constants'

const baseUrl = `${ConstantVariables.baseUrl}/api/cart`;

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { }

  getCart() : Observable <Cart[]> {
    return this.http.get<Cart[]>(baseUrl);

  }
 
  deleteCartByIdCart(id: number) : Observable<string> {
    return this.http.delete<string>(`${baseUrl}/${id}`)
  }

  createCart(cart: InforCreateCart): Observable<string> {
    return this.http.post<string>(baseUrl, cart);
  }
}
