import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {
    this.isLoggedIn = true; // <== Change this to false
  }
  isLoggedIn: boolean;

  /**
   * @description Login the user and navigate to orders page
   */
  toLogIn() {
    // console.log('Fired Log In');
    this.isLoggedIn = true;
    this.router.navigate(['/orders']);
  }

  /**
   * @description Logout the user and navigate to Login page
   */
  toLogOut() {
    // console.log('Fired Log Out');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
