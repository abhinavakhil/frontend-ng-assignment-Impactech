import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageStatsComponent } from './message-stats.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MessageStatsComponent],
  imports: [CommonModule, MaterialModule, ChartsModule, TranslateModule],
  exports: [MessageStatsComponent],
})
export class MessageStatsModule {}
