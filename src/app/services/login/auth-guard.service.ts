import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  isLoggedin: Boolean;
  loginSubscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginSubscription = this.loginService.isLoggedIn.subscribe(
      (value) => (this.isLoggedin = value)
    );
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isLoggedin == false) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
