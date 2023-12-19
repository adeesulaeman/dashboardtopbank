import { userInterface, userPost } from './../model/userModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: userInterface | null = null;

  private baseUrl = 'https://6580e5273dfdd1b11c4232d7.mockapi.io/api/v1/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<userInterface[]> {
    return this.http.get<userInterface[]>(this.baseUrl)
  }

  deleteUsers(userId: number): Observable<any> {
    const url = `${this.baseUrl}/${userId}`
    return this.http.delete(url)
  }

  addUsers(user: userPost): Observable<userPost> {
    const url = `${this.baseUrl}`
    return this.http.post<userPost>(url, user)
  }
  
  getUserById(userId: number): Observable<any> {
    const url = `${this.baseUrl}/${userId}`
    return this.http.get(url)
  }
}
