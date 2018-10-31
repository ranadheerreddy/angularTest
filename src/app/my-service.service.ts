import { HttpModule, Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  serviceProperty:string = "Service Property created";
  private _url:string = 'http://jsonplaceholder.typicode.com/users';
  constructor(private _http:Http) { }
  
  getEmployees(){
    return this._http.get(this._url)
                .map((response:Response) => response.json());
  }

  showDate(){
    let newdate = new Date();
    return newdate;
    console.log("Service Property : " + this.serviceProperty);
  }
}
