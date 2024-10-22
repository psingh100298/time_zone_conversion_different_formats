import { Component } from '@angular/core';
import { TimeconversionService } from '../timeconversion.service';

@Component({
  selector: 'app-dateformat3',
  templateUrl: './dateformat3.component.html',
  styleUrl: './dateformat3.component.css'
})
export class Dateformat3Component {
  constructor(private timeConversionService:TimeconversionService){}
  date = this.timeConversionService.ddmmyyhhmm;
}
