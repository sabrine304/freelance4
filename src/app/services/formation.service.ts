import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }


  postFormation(data: Formation) {
    return this.http.post("https://localhost:44308/api/Formation/PostFormation" , data);
   }
}
