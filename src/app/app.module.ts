import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { CircleComponent } from './components/circle/circle.component';
import { DateComponent } from './components/date/date.component';
import { TimeComponent } from './components/time/time.component';
import { CityComponent } from './components/city/city.component';
import { DegreesComponent } from './components/weather/degrees/degrees.component';
import { InfoComponent } from './components/weather/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CircleComponent,
    DateComponent,
    TimeComponent,
    CityComponent,
    DegreesComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
