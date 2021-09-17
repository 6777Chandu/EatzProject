import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false); // <== Change this to false
  }
  isLoggedIn: BehaviorSubject<boolean>;

  /**
   * @description Login the user and navigate to orders page
   */
  toLogIn() {
    // console.log('Fired Log In');
    this.isLoggedIn.next(true);
    this.router.navigate(['/orders']);
  }

  /**
   * @description Logout the user and navigate to Login page
   */
  toLogOut() {
    // console.log('Fired Log Out');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
