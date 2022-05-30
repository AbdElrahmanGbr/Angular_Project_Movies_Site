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
   }
   getTest():string
  {
    return "hlbessa";
  }
}
