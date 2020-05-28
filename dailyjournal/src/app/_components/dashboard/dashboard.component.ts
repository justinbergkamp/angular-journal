import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  dateToday: number = Date.now();
  date : string;


  constructor(private datePipe: DatePipe) {
    this.date = this.datePipe.transform(this.dateToday, 'MMddyyyy');
    console.log(this.date)
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.dateToday = Date.now();
    //   }, 1000);

  }

}
