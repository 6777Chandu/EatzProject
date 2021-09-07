import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

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

  @ViewChild('form') loginForm: NgForm;

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
