import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

const baseUrl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  createOrder(): Observable<any> {
    return this.http.post<any>(`${baseUrl}/order`, {});
  }

  
}
