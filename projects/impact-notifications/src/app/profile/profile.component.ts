import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Register } from '@impactech/common/src/lib/authentication/common-form/common-form.interface';
import { FormlyFormOptions } from '@ngx-formly/core';
import {
  AuthenticationService,
  profileForm,
} from '@impactech/common/src/public-api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({});
  options: FormlyFormOptions = {};
  currentUser: any;
  commonForm = profileForm;

  model: Register = {
    email: null,
    password: null,
  };

  constructor(
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  /**
   * get currently active user
   */
  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
    this.model = {
      email: this.currentUser.userDetails.email,
      password: this.currentUser.userDetails.password,
    };
  }

  /**
   * updates user profile
   **/
  updateUser() {
    if (this.profileForm.invalid) {
      return;
    }

    this.authService
      .updateUserProfile(this.model)
      .subscribe((response: any) => {
        if (response.status == 'SUCCESS') {
          this.toastr.success('Profile updated successfully!');
        } else {
          this.toastr.error('An error occurred!');
        }
      });
  }
}
