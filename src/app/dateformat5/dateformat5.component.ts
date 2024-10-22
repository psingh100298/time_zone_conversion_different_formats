import { Component } from '@angular/core';
import { TimeconversionService } from '../timeconversion.service';

@Component({
  selector: 'app-dateformat5',
  templateUrl: './dateformat5.component.html',
  styleUrl: './dateformat5.component.css'
})
export class Dateformat5Component {
  constructor(private timeConversionService:TimeconversionService){}
  date = this.timeConversionService.eeddmmyy;
}
