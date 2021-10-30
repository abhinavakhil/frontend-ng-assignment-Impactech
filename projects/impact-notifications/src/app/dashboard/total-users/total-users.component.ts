import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@impactech/common/src/public-api';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss'],
})
export class TotalUsersComponent implements OnInit {
  totalUsers: Array<any> = [];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.getRegisteredUser();
  }

  /**
   * get registered user
   */
  getRegisteredUser() {
    this.totalUsers = this.authService.getRegisteredUser();
  }
}
