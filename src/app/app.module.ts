import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dateformat1Component } from './dateformat1/dateformat1.component';
import { Dateformat2Component } from './dateformat2/dateformat2.component';
import { Dateformat3Component } from './dateformat3/dateformat3.component';
import { Dateformat4Component } from './dateformat4/dateformat4.component';
import { Dateformat5Component } from './dateformat5/dateformat5.component';

@NgModule({
  declarations: [
    AppComponent,
    Dateformat1Component,
    Dateformat2Component,
    Dateformat3Component,
    Dateformat4Component,
    Dateformat5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
