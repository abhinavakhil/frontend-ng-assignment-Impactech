import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsModule } from './statistics/statistics.module';
import { LatestFeedComponent } from './latest-feed/latest-feed.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { FrequentUserComponent } from './frequent-user/frequent-user.component';
import { TotalMessagesComponent } from './total-messages/total-messages.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent, LatestFeedComponent, TotalUsersComponent, FrequentUserComponent, TotalMessagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    StatisticsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
