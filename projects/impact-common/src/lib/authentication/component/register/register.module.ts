import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '../../../../../../impact-notifications/src/shared/material/material.module';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MaterialModule,
    ToastrModule,
    TranslateModule,
  ],
  providers: [AuthenticationService],
  exports: [RegisterComponent],
})
export class RegisterModule {}
