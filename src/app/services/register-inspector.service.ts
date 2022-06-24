import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInspectorModel } from '../models/register-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterInspectorService {

  constructor(private http : HttpClient) {

  }
  readonly baseURL ='https://localhost:44308/api/RegisterInspector'
  formData: RegisterInspectorModel = new RegisterInspectorModel();
  list: RegisterInspectorModel[];

  refreshList() {
   this.http.get(this.baseURL)
   .toPromise()
   .then(res => this.list = res as  RegisterInspectorModel[])
 }

 postRegister() {
  this.formData.roleCode = "IN";

  return this.http.post(this.baseURL+"/PostRegister",this.formData);
 }

 putRegister() {
   return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);
  }

  deleteRegister(id: number) {
   return this.http.delete(`${this.baseURL}/${id}`);

  }

}
