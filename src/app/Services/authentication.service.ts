import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:5000';

  constructor(private http: HttpClient) { }

  AuthenticateMember(loginModel: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${this.apiUrl}/api/authentication/member`, loginModel);
  }

  
}