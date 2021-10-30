import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { commonForm } from '../../common-form/common-form';
import { Login } from '../../common-form/common-form.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'imp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  options: FormlyFormOptions = {};
  commonForm = commonForm;
  model: Login = {
    password: null,
    username: null,
  };

  constructor(
    private authService: AuthenticationService,
    private readonly router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  /**
   * login user
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.model).subscribe((response: any) => {
      if (response.authenticated) {
        this.router.navigate(['/']);
        this.authService.setCurrentUser(response);
        this.toastr.success('LoggedIn Successfully');
      } else {
        this.toastr.error('error occurred');
      }
    });
  }
}
