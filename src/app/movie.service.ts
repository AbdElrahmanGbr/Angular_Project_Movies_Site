import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) {
   }
   getTrendingAll():Observable<any>
   {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=ea3a1fce6409d9a1d16b3801182db0a4");
   }
   getTest():string
  {
    return "hlbessa";
  }
}
