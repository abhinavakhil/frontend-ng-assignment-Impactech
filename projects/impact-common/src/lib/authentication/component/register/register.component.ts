import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { commonForm } from '../../common-form/common-form';
import { Register } from '../../common-form/common-form.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'imp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({});
  options: FormlyFormOptions = {};
  commonForm = commonForm;
  model: Register = {
    email: null,
    password: null,
  };
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  /** register user */
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.model).subscribe((response: any) => {
      if (response.status == 'SUCCESS') {
        this.toastr.success('user registered successfully!');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      } else {
        this.registerForm.reset();
        this.toastr.error('An Error Occurred');
      }
    });
  }
}
