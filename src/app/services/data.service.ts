import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api_key } from '../../../api_key';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

private locationURL = 'http://ip-api.com/json';

	constructor(public http:Http) { 
		console.log("Data service connected...");
  }

  getLocation(){
  	return this.http.get(this.locationURL)
    .map(res => res.json()) ;
  }


}
