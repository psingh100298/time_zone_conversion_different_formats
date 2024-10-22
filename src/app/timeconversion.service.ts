import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeconversionService {

  today = new Date();
  ddmmyy = '';
  ddmmyyyy= '';
  yyyymmdd= '';
  ddmmyyhhmm= ''
  eeddmmyyhhmm= '';
  eeddmmyy= '';
  constructor() {
     this.ddmmyy = formatDate(this.today, 'dd/MM/yy', 'en-US', 'UTC+09:00');
    this.ddmmyyyy = formatDate(this.today, 'dd/MM/yyy', 'en-US');
    this.yyyymmdd = formatDate(this.today, 'yyyy-mm-dd', 'en-US');
    this.ddmmyyhhmm = formatDate(this.today, 'dd/MM/yy HH:mm', 'en-US');
    this.eeddmmyyhhmm = formatDate(this.today, 'EE, dd/MM/yy - HH:mm', 'en-US','UTC+09:00');
    this.eeddmmyy = formatDate(this.today, 'EE, dd/MM/yy', 'en-US');

  }
  // dateFormat = "EE, dd/MM/yy - HH:mm";
  // currentDate$ = of(formatDate(this.today, this.dateFormat, this.locale));
  // constructor(@Inject(LOCALE_ID) public locale: string) {}

}
