import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interface/person';

const baseUrl = "http://localhost:8080/api";
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getRole(): Observable<string[]> {
    return this.http.get<string[]>(`${baseUrl}/role`)
  }

  getAllPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(`${baseUrl}/person`)
  }

  // getPersonByRole(role: string) : Observable<Person[]> {
  //   return this.http.get<Person[]>(`${baseUrl}/person/${role}`)
  // }

  getPersonByRole(role: string): Observable<Person[]> {
    const params = new HttpParams().set('role', role);
    return this.http.get<Person[]>(`${baseUrl}/person`, { params });
  }

  getPersonById(id: number) : Observable<Person> {
    return this.http.get<Person>(`${baseUrl}/person/${id}`)
  }

  findPersonByUsername() : Observable<Person> {
    return this.http.get<Person>(`${baseUrl}/person/user`)
  }

  updataPersonById(id: number, person: Person) : Observable <string> {
    return this.http.put<string>(`${baseUrl}/person/${id}`, person)
  
  }
  createPerson(person: Person) : Observable<string> {
    return this.http.post<string>(`${baseUrl}/person`, person)
  }

  deleteById(id:number) : Observable<string> {
    return this.http.delete<string>(`${baseUrl}/person/${id}`)
  }

}


