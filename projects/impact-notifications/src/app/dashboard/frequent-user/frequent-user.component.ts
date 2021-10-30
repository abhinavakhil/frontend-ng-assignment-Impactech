import { Component, Input, OnInit } from '@angular/core';
import { CreateMessage } from '@impactech/common/src/lib/authentication/common-form/common-form.interface';

@Component({
  selector: 'app-frequent-user',
  templateUrl: './frequent-user.component.html',
  styleUrls: ['./frequent-user.component.scss'],
})
export class FrequentUserComponent implements OnInit {
  @Input() messages: CreateMessage[];
  mostFrequentUser: any;

  constructor() {}

  ngOnInit(): void {
    this.getMostFrequentUser(this.messages);
  }

  /**
   * get most frequent user based upon the to_email
   * @param number
   */
  getMostFrequentUser(messages) {
    let mf = 1;
    let index = 0;
    let frequentItem;

    for (let i = 0; i < messages.length; i++) {
      for (let j = i; j < messages.length; j++) {
        if (messages[i].to_email == messages[j].to_email) {
          index++;
          if (index > mf) {
            mf = index;
            frequentItem = messages[i];
          }
        }
      }
      index = 0;
    }

    this.mostFrequentUser = { ...frequentItem };
  }
}
