import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateMessage } from '@impactech/common/src/lib/authentication/common-form/common-form.interface';
import { AuthenticationService } from '@impactech/common/src/public-api';
import { AddMessageComponent } from './dialog/add-message/add-message.component';
import { monthList } from '../dashboard/monthList';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  messages: CreateMessage[] = [];
  displayedColumns: string[] = ['Email', 'Message', 'Date', 'optional'];
  currentUser: any;

  constructor(
    private dialog: MatDialog,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getNotification();
  }

  /**
   * open dialog to add/create message
   */
  addMessages() {
    const dialogRef = this.dialog.open(AddMessageComponent, {
      data: {},
      autoFocus: false,
      panelClass: 'full-window-dialog',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getNotification();
    });
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
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

  /**
   * delete notification based upon id
   * @param id id
   */
  deleteNotification(id) {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        materialIcon: 'delete',
        title: 'Delete Forever?',
        proceedTitle: 'Delete',
        text: 'Deleting this message is permanent and cannot be undone.',
      },
      hasBackdrop: false,
    });

    dialog.afterClosed().subscribe((confirmation) => {
      if (confirmation) {
        this.authService.deleteNotification(id).subscribe((response: any) => {
          if (response?.status == 'SUCCESS') {
            this.toastr.success('Notification deleted Successfully!');
            this.getNotification();
          } else {
            this.toastr.success('An error occurred !');
          }
        });
      }
    });
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
}
