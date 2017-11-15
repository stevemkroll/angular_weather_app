import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  month: any;
  day: any;

  constructor() { }

  ngOnInit() {
    this.getMonth();
    this.getDate();

  }
  getMonth() {
    const month = new Date().getMonth();
    switch (month) {
      case 0:
        this.month = 'Jan';
        break;
      case 1:
        this.month = 'Feb';
        break;
      case 2:
        this.month = 'Mar';
        break;
      case 3:
        this.month = 'Apr';
        break;
      case 4:
        this.month = 'May';
        break;
      case 5:
        this.month = 'Jun';
        break;
      case 6:
        this.month = 'Jul';
        break;
      case 7:
        this.month = 'Aug';
        break;
      case 8:
        this.month = 'Sep';
        break;
      case 9:
        this.month = 'Oct';
        break;
      case 10:
        this.month = 'Nov';
        break;
      case 11:
        this.month = 'Dec';
    }
  }
  getDate() {
    const day = new Date().getDate();
    if (day < 10 ) {
      this.day = '0' + day.toString();
    } else {
      this.day = day;
    }
  }

}
