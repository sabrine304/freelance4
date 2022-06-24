import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterDirectorModel } from '../models/register-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterDirectorService {

  constructor(private http : HttpClient) {

  }
  readonly baseURL ='https://localhost:44308/api/RegisterDirector'
  formData: RegisterDirectorModel = new RegisterDirectorModel();
  list: RegisterDirectorModel[];

  refreshList() {
   this.http.get(this.baseURL)
   .toPromise()
   .then(res => this.list = res as  RegisterDirectorModel[])
 }

 postRegister() {
  this.formData.roleCode = "DR";
  return this.http.post(this.baseURL+"/PostRegister",this.formData);
 }

 putRegister() {
   return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  deleteRegister(id: number) {
   return this.http.delete(`${this.baseURL}/${id}`);

  }

}
