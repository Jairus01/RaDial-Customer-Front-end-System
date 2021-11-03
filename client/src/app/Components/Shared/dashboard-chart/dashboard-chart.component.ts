import { Component, OnInit } from '@angular/core';
import { Chart, registerables  } from 'chart.js';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  constructor() { }

  datePipe: DatePipe = new DatePipe('en-US');

  ngOnInit(): void {
    Chart.register(...registerables);

    var date1 = new Date();
    var date_x1 = this.datePipe.transform(date1, 'dd-MMM');
    var date2 = new Date();
    date2.setDate(date2.getDate()-1)
    var date_x2 = this.datePipe.transform(date2, 'dd-MMM');
    var date3 = new Date();
    date3.setDate(date3.getDate()-2)
    var date_x3 = this.datePipe.transform(date3, 'dd-MMM');
    var date4 = new Date();
    date4.setDate(date4.getDate()-3)
    var date_x4 = this.datePipe.transform(date4, 'dd-MMM');
    var date5 = new Date();
    date5.setDate(date5.getDate()-4)
    var date_x5 = this.datePipe.transform(date5, 'dd-MMM');
    var date6 = new Date();
    date6.setDate(date6.getDate()-6)
    var date_x6 = this.datePipe.transform(date6, 'dd-MMM');
    var date7 = new Date();
    date7.setDate(date7.getDate()-7)
    var date_x7 = this.datePipe.transform(date7, 'dd-MMM');

    const myChart = new Chart("myChart", {
      type: 'line',

      data: {
        labels: [ date_x7, date_x6, date_x5, date_x4, date_x3, date_x2, "Today"],
        datasets: [{
          label: 'Number of Applicants',
          data: [1, 4, 8, 12, 20, 33, 40],
          fill: false,
          borderColor: 'rgb(251,208,54) ',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Programmer'
          }
        },
          scales: {
              y: {
                  beginAtZero: true
              },

          }
      }
  });
  }

}
