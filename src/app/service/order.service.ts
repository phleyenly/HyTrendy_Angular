import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Order } from '../interface/order';

const baseUrl = "https://hytrendy-production.up.railway.app/api";

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  createOrder(): Observable<any> {
    return this.http.post<any>(`${baseUrl}/order`, {});
  }

  findAllOrder() : Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/order`)
  }

  findOrderOfUser() : Observable<Order[]> {
    return this.http.get<Order[]>(`${baseUrl}/user/order`)
  }

  updateStatusOrderById(id: number, status: string): Observable<string> {
    return this.http.put<string>(`${baseUrl}/order`, {id, status});
  }

  deleteOrderById(id: number) : Observable<string> {
    return this.http.delete<string>(`${baseUrl}/order/${id}`);
  }
}
