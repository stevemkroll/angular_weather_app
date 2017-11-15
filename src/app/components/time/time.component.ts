import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent implements OnInit {

  time: any;

  constructor() { 

  }

  ngOnInit() {
    var moment = require('moment');
    this.time = moment().format('h:mm:ss a');
    this.updateTime();
  }

  updateTime() {
    var moment = require('moment');
    setInterval(() => {
      var now = moment();
      this.time = now.format('h:mm:ss a');
    }, 1000);
  }
}
