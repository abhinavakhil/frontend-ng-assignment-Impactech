import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { monthList } from '../monthList';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      label: '0 Notifications / Month',
    },
  ];

  lineChartLabels: Label[] = monthList;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  dataSet: Array<any>;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getNotification();
  }

  /**
   * get notification
   */
  getNotification() {
    this.authService.getNotifications().subscribe((response: any) => {
      if (response) {
        this.mapDataSet(response);
      }
    });
  }

  /**
   * map dateset using the notifications array
   * @param notifications
   */
  mapDataSet(notifications) {
    this.dataSet = new Array(12).fill(0);
    notifications.forEach(
      (message) =>
        (this.dataSet[
          new Date(message.created_at * 1000).getUTCMonth() + 1 - 1
        ] += 1)
    );

    this.lineChartData = [
      {
        data: [...this.dataSet],
        label: 'Total Notifications / Month',
      },
    ];
  }
}
