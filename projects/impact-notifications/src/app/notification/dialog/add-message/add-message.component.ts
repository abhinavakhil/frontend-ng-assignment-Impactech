import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { ToastrService } from 'ngx-toastr';
import { map, startWith } from 'rxjs/operators';
import * as generateUniqueId from 'generate-unique-id';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss'],
})
export class AddMessageComponent implements OnInit {
  users: any;
  totalUsers: any;
  selectedEmail: any;
  message: string;
  currentUser: any;
  myControl = new FormControl();

  constructor(
    private authService: AuthenticationService,
    private dialogRef: MatDialogRef<AddMessageComponent>,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => this._filterUsers(value))
      )
      .subscribe((response) => {
        this.users = response;
      });

    this.getCurrentUser();
    this.getRegisteredUser();
  }

  /**
   * filter users based upon email
   * @param value email
   * @returns the value which matches the condition
   */
  _filterUsers(value) {
    if (this.totalUsers) {
      return this.totalUsers.filter((user) =>
        user.email.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  /**
   * get all the registered users
   */
  getRegisteredUser() {
    this.users = this.authService.getRegisteredUser();
    this.users = this.users.filter((user) => {
      return user.email != this.currentUser?.userDetails.email;
    });

    this.totalUsers = [...this.users];
  }

  /**
   * close dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * get selected user
   * @param event event
   * @param user value
   */
  selectedUser(event, user) {
    if (event.source.selected) {
      this.selectedEmail = user;
    }
  }

  /**
   * get message text
   * @param value text message
   */
  getMessage(value) {
    this.message = value;
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }

  /**
   * create messsage
   **/
  createMessage() {
    if (this.message?.length <= 0 && !this.selectedEmail?.email) {
      return;
    }

    const payload = {
      from_email: this.currentUser.userDetails.email,
      to_email: this.selectedEmail?.email,
      message: this.message,
      created_at: ~~(+new Date() / 1000),
      id: generateUniqueId({
        length: 4,
        useLetters: true,
      }),
    };

    this.authService.sendNotifications(payload).subscribe((response: any) => {
      if (response.status == 'SUCCESS') {
        this.toastr.success('Message Sent Successfully!');
        this.closeDialog();
      } else {
        this.toastr.error('An error occurred!');
      }
    });
  }
}
