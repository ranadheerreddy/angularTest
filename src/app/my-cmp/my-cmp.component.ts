import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})


export class MyCmpComponent implements OnInit {

  name:string = 'my-component';
  myName:string = "Ranadheer";
  imageUrl:string = "../../assets/angulardart-logo.png";

  isBold:boolean=true;
  isItalic:boolean=true;
  fontSize:number=30;

  isTrue:boolean=false;
  childcomponentProperty:string;

  addStyles(){
    let styles={
      'font-weight':this.isBold ? 'bold': 'normal',
      'font-style': this.isItalic ? 'italic': 'normal',
      'font-size.px':this.fontSize,
 };
    return styles;
  }
// Service Injection
  todayDate;
  constructor(private myService : MyServiceService) { }
  ngOnInit() {
  this.todayDate= this.myService.showDate();
  this.childcomponentProperty=this.myService.serviceProperty;
  
  console.log('childcomponent Property: ' + this.childcomponentProperty);
  }

}