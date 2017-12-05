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
  lat:Number;
  lon:Number;

  constructor(private http: Http) { 
    this.getCoordinates();
    this.setCoordinates(latitude, longitude);
  	this.getLocationObject();
  }

  getLocation() {
    return this.http.get(this.locationURL)
    .map((res: Response) => res.json() );
  }

  getLocationObject() {
    this.getLocation().subscribe(location => {
      this.city = location.city.toUpperCase();
    });
  }

  getCoordinates() {
    this.getLocation().subscribe(location => {
      this.lat = location.lat;
      this.lon = location.lon
      // debugger;
      // console.log(this.lat);
      // console.log(this.lon);
    });
  }

  setCoordinates(latitude, longitude) {
    // latitude = '5';
    // longitude = '10';
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    // console.log('this.lat', this.lat);
    // console.log('this.lon', this.lon);
  }

  ngOnInit() {

  }

}