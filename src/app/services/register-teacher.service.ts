import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterTeacherModel } from '../models/register-model';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterTeacherService {

  constructor(private http : HttpClient) {
  }


  formData: RegisterTeacherModel = new RegisterTeacherModel();
  list: RegisterTeacherModel[];
  
//   GetTeacherList() {
//    this.http.get<RegisterTeacherModel[]>("https://localhost:44308/GetAllRegisterTeacher")
//    .toPromise()
//    .then(res => this.list)
//  }

 async GetTeacherList() {
  const data = this.http.get<any>(
     "https://localhost:44308/GetAllRegisterTeacher",
  );
  return data.toPromise();
}

async GetTeacherById(id: any) {
  const data = this.http.get<any>("https://localhost:44308/GetAllRegisterTeacherByID/"+id);
  return data.toPromise();
}

 postRegister() {
  this.formData.roleCode = "TC";
  return this.http.post("https://localhost:44308/api/RegisterTeacher/PostRegister" , this.formData);
 }

 public putRegister(id?: number ,dataTecher?: RegisterTeacherModel) {
   return this.http.put("https://localhost:44308/api/RegisterTeacher/PutRegister/"+id,dataTecher);
  }

  // deleteRegister(id: number) {
  //  return this.http.delete(`${this.baseURL}/${id}`);

  // }

}
