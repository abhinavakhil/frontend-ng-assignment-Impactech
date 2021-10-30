import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, MaterialModule, ChartsModule],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
