import { Component } from '@angular/core';
import { TimeconversionService } from '../timeconversion.service';

@Component({
  selector: 'app-dateformat2',
  templateUrl: './dateformat2.component.html',
  styleUrl: './dateformat2.component.css'
})
export class Dateformat2Component {
  constructor(private timeConversionService:TimeconversionService){}
  date = this.timeConversionService.yyyymmdd;
}
