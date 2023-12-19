import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ]

  getUser(username: string): Observable<any> {
    const user = this.users.find((item) => item.username === username);
    return of(user);
  }
}
