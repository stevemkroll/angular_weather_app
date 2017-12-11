import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import $ from 'jquery';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css'],
})
export class DegreesComponent implements OnInit {

  weather: Weather;

  constructor(private data: DataService) {
    console.log('Degrees component ran...')
  }

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