import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api_key } from '../../../api_key';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

	private locationURL = 'http://ip-api.com/json';
	private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.003922&lon=-87.970352&units=imperial&APPID=' + api_key;

	location:any;
	weather:any;

	constructor(public http:Http) { 
		console.log("Data service connected...");
  }

  getLocation(){
  	return this.http.get(this.locationURL)
    .map(res => res.json());
  }
  getWeather() {
    return this.http.get(this.weatherURL)
    .map(res => res.json());
  }

  // getWeather(){
  // 	this.getLocation().subscribe((location) => {
  // 		var lat  = location.lat;
  // 		var lon = location.lon;
  // 		var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '2&APPID=' + api_key;
  // 		return this.http.get(url)
  // 		.map(res => res.json());
  // 	})
  // }

}
