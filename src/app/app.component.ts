import { HttpModule, Http } from '@angular/http';
import { MyServiceService } from './my-service.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   template: `
//       {{firstName + ' ' + lastName}}
// `
})
export class AppComponent {
  title = 'ProjectHub';
  firstName='Tom';
  lastName='Hopkins';
  color='yellow';
  todayDate;
  displaydata;

  Employees = [];
  newEmployees = [];
  
  componentProperty:string;
  getfullName(){
    this.firstName + this.lastName
  }
  // constructor(private myService: MyServiceService, private _http : MyServiceService){  }
  // ngOnInit(){

  //   this.myService.getEmployees()
  //                 .subscribe(resEmployeeData => this.Employees = resEmployeeData);
                                   
    // this.todayDate = this.myService.showDate();
    // console.log("Service Property: " + this.myService.serviceProperty);
    // this.myService.serviceProperty = "Component Created";
    // this.componentProperty = this.myService.serviceProperty;
    // console.log("component Property :" + this.componentProperty);
  // }

   constructor(private newservice:NewserviceService, private _http:NewserviceService){}

  ngOnInit(){
    this.newservice.getNewEmployees()
                   .subscribe(resEmpData => this.newEmployees = resEmpData);
  }
  
}
