import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { CreateMessage } from '@impactech/common/src/lib/authentication/common-form/common-form.interface';

@Component({
  selector: 'app-total-messages',
  templateUrl: './total-messages.component.html',
  styleUrls: ['./total-messages.component.scss'],
})
export class TotalMessagesComponent implements OnInit {
  messages: CreateMessage[] = [];
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
        this.messages = [...response];
      }
    });
  }
}
