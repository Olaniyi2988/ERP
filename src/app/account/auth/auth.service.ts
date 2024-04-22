// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-backend-api-url.com'; // Replace this with your API URL

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    this.isLoggedIn= true
    const body ={
        email, password
    };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const body = { firstname, lastname, email, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
}
