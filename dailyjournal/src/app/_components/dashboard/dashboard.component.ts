import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  dateToday: number = Date.now();


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
  this.dateToday = Date.now();
  }, 1000);

  }

}
