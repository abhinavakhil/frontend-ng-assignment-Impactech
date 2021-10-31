import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeModule } from 'ngx-autosize';
import { AddMessageComponent } from './add-message.component';
import { MaterialModule } from 'projects/impact-notifications/src/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AddMessageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AutosizeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [AddMessageComponent],
})
export class AddMessageModule {}
