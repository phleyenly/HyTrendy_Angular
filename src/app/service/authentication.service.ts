import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interface/authentication';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginInfo: Login): Observable<string> {
  
    return this.http.post<string>(`${baseUrl}/login`, loginInfo, { responseType: 'text' as 'json' }) ;

  }

  authentication(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/authentication`)
  }
}
