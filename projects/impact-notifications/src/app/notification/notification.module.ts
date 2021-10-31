import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { AddMessageModule } from './dialog/add-message/add-message.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationComponent,
  },
];

@NgModule({
  declarations: [NotificationComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatTableModule,
    AddMessageModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  exports: [NotificationComponent],
})
export class NotificationModule {}
