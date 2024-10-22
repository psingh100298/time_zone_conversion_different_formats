import { Component } from '@angular/core';
import { TimeconversionService } from '../timeconversion.service';

@Component({
  selector: 'app-dateformat1',
  templateUrl: './dateformat1.component.html',
  styleUrl: './dateformat1.component.css'
})
export class Dateformat1Component {
  constructor(private timeConversionService:TimeconversionService){}
  date = this.timeConversionService.ddmmyyyy;
}
