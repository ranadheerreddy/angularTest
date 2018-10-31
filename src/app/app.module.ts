import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCmpComponent } from './my-cmp/my-cmp.component';
import { HighlightDirective } from './highlight.directive';
import{ MyServiceService } from './my-service.service';
import { HttpModule } from '@angular/http';
import { NewserviceService } from './newservice.service';


@NgModule({
  declarations: [
    AppComponent,
    MyCmpComponent,
    HighlightDirective    
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [MyServiceService,NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
