import { Component, Input, OnInit } from '@angular/core';
import { CreateMessage } from '../../../../../impact-common/src/lib/authentication/common-form/common-form.interface';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { monthList } from '../monthList';

@Component({
  selector: 'app-latest-feed',
  templateUrl: './latest-feed.component.html',
  styleUrls: ['./latest-feed.component.scss'],
})
export class LatestFeedComponent implements OnInit {
  @Input() messages: CreateMessage[];

  currentUser: any;
  inbox: Array<any> = [];
  outbox: Array<any> = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getLatestFeed();
  }

  /**
   * get last 10 messages user has received
   */
  getLatestFeed() {
    if (this.messages?.length) {
      this.messages.forEach((message) => {
        if (message.from_email !== this.currentUser.userDetails.email) {
          this.inbox.push(message);
        } else {
          this.outbox.push(message);
        }
      });

      this.inbox = this.inbox.slice(this.inbox.length - 10, this.inbox.length);
    }
  }

  /**
   * get current date by converting epoch timestamp
   * @param timestamp epoch
   * @returns current date
   */
  getCurrentDate(timestamp) {
    let year = new Date(timestamp * 1000).getUTCFullYear();
    let m = new Date(timestamp * 1000).getUTCMonth() + 1;
    let day = new Date(timestamp * 1000).getUTCDate();

    let month = monthList[m - 1];
    return `${month} ${day},${year}`;
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }
}
