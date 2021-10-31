import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';

@Component({
  selector: 'app-message-stats',
  templateUrl: './message-stats.component.html',
  styleUrls: ['./message-stats.component.scss'],
})
export class MessageStatsComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Inbox'], ['Outbox']];
  public pieChartData: SingleDataSet = [0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  totalMessage: Array<any> = [];
  currentUser: any;

  constructor(private authService: AuthenticationService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getNotification();
  }

  /**
   * get notification and update chart
   */
  getNotification() {
    this.authService.getNotifications().subscribe((response: any) => {
      if (response) {
        this.totalMessage = [...response];

        const inbox = [];
        const outbox = [];
        this.totalMessage.forEach((message) => {
          if (message.from_email !== this.currentUser.userDetails.email) {
            inbox.push(message);
          } else {
            outbox.push(message);
          }
        });

        // set data to chart
        this.pieChartData = [inbox.length, outbox.length];
      }
    });
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }
}
