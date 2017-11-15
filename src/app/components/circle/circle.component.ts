import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  city:String;

  constructor() {

  }

  ngOnInit() {
    
    var VanillaTilt = require('vanilla-tilt');
    VanillaTilt.init({
      reverse: false,
      max: 35,
      perspective: 1000,
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      reset: true,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      glare: false,
      'max-glare': 1,
      'glare-prerender': false,
    });

  }
}
