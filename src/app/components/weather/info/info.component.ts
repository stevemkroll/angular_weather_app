import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

	weather:Weather;

  constructor(private data:DataService) { }

  ngOnInit() {
  	this.data.getWeather().subscribe((weather) => {
      this.weather = weather;
      console.log(this.weather);
    });
  }

}

interface Weather{
	main: {
    humidity:number,
    pressure:number,
    temp:number,
    temp_max:number,
    temp_min:number
  }
}