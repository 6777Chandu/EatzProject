import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {
    this.isLoggedIn = false; // <== Change this to false
  }
  isLoggedIn: boolean;

  toLogIn() {
    // console.log('Fired Log In');
    this.isLoggedIn = true;
    this.router.navigate(['/orders']);
  }

  toLogOut() {
    // console.log('Fired Log Out');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
