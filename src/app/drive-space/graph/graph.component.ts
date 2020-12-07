import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chart: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
