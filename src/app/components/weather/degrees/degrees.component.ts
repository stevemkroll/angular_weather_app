import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { api_key } from '../../../../../api_key';
import { latitude, longitude } from '../../../../../coordinates';
import 'rxjs/add/operator/map';
import $ from 'jquery';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
	
	private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&APPID=' + api_key;

	weather: any = {};
	degrees:Number;

  constructor(private http: Http) { 
  		this.getWeatherObject();
  }

  getWeather() {
  	console.log('Degrees - INIT', latitude);
  	console.log(this.weatherURL);
    return this.http.get(this.weatherURL)
    .map((res: Response) => res.json());
  }

  getWeatherObject(){
  	this.getWeather().subscribe(weather => {
  		this.degrees = weather.main.temp
  	});
  	
  }

  ngOnInit() {
  	
  }

}