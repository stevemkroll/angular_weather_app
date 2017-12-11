import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import $ from 'jquery';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})

export class CityComponent implements OnInit {
	
  location: Location;

  constructor(private data: DataService) { 
    console.log('Constructor ran...');
  }

  ngOnInit() {

    this.data.getLocation().subscribe((location) => {
     // console.log("LOCATION :", location);
     this.location = location;
   })
   
  }

}

interface Location{
  city:string,
}