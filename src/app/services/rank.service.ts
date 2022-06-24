import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rank } from '../models/rank';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  rank: Rank;
  constructor(private http : HttpClient) {
    this.rank = new Rank();
   }


  async GetRankById(id: number) {
    const data = this.http.get<any>("https://localhost:44308/GetRankById/"+id);
    return data.toPromise();
  }
  
}
