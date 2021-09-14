import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/app.constants';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  title: string = AppConstants.CONSTANTS.PAGES.LOGIN_PAGE.PAGE_TITLE;
  formErrorMessage: string =
    AppConstants.CONSTANTS.PAGES.LOGIN_PAGE.FORM_VALIDATIONS.ERROR_MSG;
  formUserError: string =
    AppConstants.CONSTANTS.PAGES.LOGIN_PAGE.FORM_VALIDATIONS.USERNAME_MSG;
  formPassError: string =
    AppConstants.CONSTANTS.PAGES.LOGIN_PAGE.FORM_VALIDATIONS.PASSWORD_MSG;
  formButtonName: string =
    AppConstants.CONSTANTS.PAGES.LOGIN_PAGE.FORM_VALIDATIONS.BUTTON_NAME;

  // Static User
  user = {
    name: 'Chandu',
    password: 'Chandu@123',
    access: null,
  };

  ngOnInit(): void {
    if (this.loginService.isLoggedIn === true) {
      this.router.navigate(['/orders']);
    }
  }

  @ViewChild('loginForm') loginForm: NgForm;

  /**
   * @description On Form Submit Check for Username and Password to Validate user and grant access using loginService
   */
  onFormSubmit() {
    if (
      this.loginForm.value.username === this.user.name &&
      this.loginForm.value.password === this.user.password
    ) {
      // console.log('Working');
      this.loginService.toLogIn();
      this.user.access = true;
    } else {
      // console.log('try Again!');
      this.user.access = false;
    }
  }
}
