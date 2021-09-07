import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  loginMode: boolean;
  ngDoCheck() {
    this.loginMode = this.loginService.isLoggedIn;
  }
  onLogOut() {
    this.loginService.toLogOut();
    this.loginMode = false;
    // this.router.navigate(['/home']);
  }
}
