import { Component } from '@angular/core';
import { TimeconversionService } from '../timeconversion.service';

@Component({
  selector: 'app-dateformat4',
  templateUrl: './dateformat4.component.html',
  styleUrl: './dateformat4.component.css'
})
export class Dateformat4Component {
  constructor(private timeConversionService:TimeconversionService){}
  date = this.timeConversionService.eeddmmyyhhmm;
}
