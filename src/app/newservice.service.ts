import { Observable } from 'rxjs/Rx';
import { HttpModule,Response,Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  private _url:string= 'http://jsonplaceholder.typicode.com/users';
  constructor(private _http:Http) { }

  getNewEmployees(){
    return this._http.get(this._url)
                .map((response:Response)=>response.json());
  }
}
