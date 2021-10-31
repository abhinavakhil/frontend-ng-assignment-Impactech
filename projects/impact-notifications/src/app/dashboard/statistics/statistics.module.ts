import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, MaterialModule, ChartsModule, TranslateModule],
  exports: [StatisticsComponent],
})
export class StatisticsModule {}
