import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { CircleComponent } from './components/circle/circle.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';
import { CityComponent } from './components/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CircleComponent,
    DateComponent,
    TimeComponent,
    CityComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
