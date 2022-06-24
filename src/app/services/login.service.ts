import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
   baseURL ="https://localhost:44308/api/Auth/Login";
   formData: LoginModel = new LoginModel()

  public login() {
  return this.http.post(this.baseURL, this.formData);
  }
}
