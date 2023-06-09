import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interface/authentication';
import { Observable } from 'rxjs';
import { LoginData } from '../interface/loginData';
import * as ConstantVariables from '../../app/app.constants'

const baseUrl = `${ConstantVariables.baseUrl}/api`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginInfo: Login): Observable<LoginData> {
  
    return this.http.post<LoginData>(`${baseUrl}/login`, loginInfo) ;

  }

  authentication(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/authentication`)
  }
}
