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
      this.lon = location.lon;
      $('#city_text').attr('latitide', this.lat);
      $('#city_text').attr('longitude', this.lon);
    });
  }

  ngOnInit() {

  }

}