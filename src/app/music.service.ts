import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public baseURL = "http://localhost:5040/music"

  constructor(private http : HttpClient) { }

  getAllbuns(){
    return this.http.get<any>(this.baseURL).pipe(map((res : any) => {
      return res
    }))
  }

  getUnique(id :any){
    return this.http.get<any>(`${this.baseURL}/${id}`).pipe(map((res : any) => {
      return res
    }))
  }
}
