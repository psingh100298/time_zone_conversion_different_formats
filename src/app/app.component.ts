import { Component } from '@angular/core';
import { TimeconversionService } from './timeconversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'datetimeformat';
  constructor(private timeConversionService:TimeconversionService){
    // this.datetiemconversion();
  }
  date =  this.timeConversionService.ddmmyy;
  // datetiemconversion(){
  //  this.timeConversionService.currentDate$.subscribe((res)=>{
  //   this.date = res;
  //   console.log("Date is", this.date);
  //  });
  // }

}
