import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import $ from 'jquery';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css'],
  template: '{{message}}'
})
export class DegreesComponent implements OnInit {


  constructor(private data: DataService) {
   
  }

  ngOnInit() {
   
  }

}