import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Type } from '../interface/type';
import * as ConstantVariables from '../../app/app.constants'


const baseUrl = `${ConstantVariables.baseUrl}/api/type`;

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {}

  getTypeByCode(categoryCode: string, typeCode: string): Observable<string> {
    return this.http.get<string>(`${baseUrl}/${categoryCode}/${typeCode}`, { responseType: 'text' as 'json' });
  }
  
}
