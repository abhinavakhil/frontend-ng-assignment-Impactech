import { Component, HostListener, OnInit } from '@angular/core';
import { CreateMessage } from '@impactech/common/src/lib/authentication/common-form/common-form.interface';
import { AuthenticationService } from '@impactech/common/src/public-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  screenWidth: number;
  messages: CreateMessage[];

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  constructor(private authService: AuthenticationService) {
    this.onResize();
  }

  ngOnInit(): void {
    this.getNotification();
  }

  /**
   * get notification
   */
  getNotification() {
    this.authService.getNotifications().subscribe((response: any) => {
      if (response) {
        this.messages = [...response];
      }
    });
  }
}
