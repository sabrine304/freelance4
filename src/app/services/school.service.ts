import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  school: School;
  constructor(private http : HttpClient) {
    this.school = new School();
   }


  async GetSchoolById(id: number) {
    const data = this.http.get<any>("https://localhost:44308/GetSchoolById/"+id);
    return data.toPromise();
  }
  
}
