import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { latitude, longitude } from '../../../../coordinates';
import 'rxjs/add/operator/map';
import $ from 'jquery';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
	private locationURL = 'http://ip-api.com/json';
	location: any = {};

	city:String;
  latitude:Number;
  longitude:Number;

  constructor(private http: Http) { 
  	this.getLocationObject(latitude,longitude);
  }

  getLocation() {
    return this.http.get(this.locationURL)
    .map((res: Response) => res.json() );
  }

  getLocationObject(latitude, longitude) {
    console.log('City - BEFORE', latitude);
    this.getLocation().subscribe(location => {
      this.city = location.city.toUpperCase();
      this.latitude = location.lat;
      this.longitude = location.lon;
      latitude = this.latitude
    });
    console.log('City - AFTER', latitude);
  }

  ngOnInit() {
    
  }

}