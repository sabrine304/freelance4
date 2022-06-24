import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) {

   }
   readonly baseURL ='https://localhost:44308/api/Register'
   formData: RegisterModel = new RegisterModel();
   list: RegisterModel[];

   refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as  RegisterModel[])
  }

  postRegister() {
    
   return this.http.post(this.baseURL +"/PostRegister",this.formData);
  }

  putRegister() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
   }

   deleteRegister(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);

   }

}
