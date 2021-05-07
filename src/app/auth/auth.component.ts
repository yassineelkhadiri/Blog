import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/feed']);
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
      this.usersService.findLogger(email);
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/insertinfo']);
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
