import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { api_key } from '../../api_key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private locationURL = 'http://ip-api.com/json';
  private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.003922&lon=-87.970352&APPID=' + api_key;
  location: any = {};
  weather: any = {};

  test:String;

  constructor(private http: Http) {

    // this.getLocation();
    // this.getWeather();
    this.getObjects();
    this.test = 'HELLO WORLD';
    // console.log('APP COMPONENT -', this.test);
  }

  getLocation() {
    return this.http.get(this.locationURL)
    .map((res: Response) => res.json() );
  }

  getWeather() {
    return this.http.get(this.weatherURL)
    .map((res: Response) => res.json());
  }

  getObjects() {
    this.getLocation().subscribe(location => {
      // console.log('location', location);
    });
    this.getWeather().subscribe(weather => {
      // console.log('weather', weather);
    });
  }

}
