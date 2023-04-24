import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Type } from '../interface/type';


const baseUrl = "http://localhost:8080/api/type";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {}

  getTypeByCode(categoryCode: string, typeCode: string): Observable<ArrayBuffer> {
    return this.http.get<ArrayBuffer>(`${baseUrl}/${categoryCode}/${typeCode}`, { responseType: 'text' as 'json' });
  }
  
}
