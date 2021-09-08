import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/services/cart-data.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private cartService: CartDataService
  ) {}
  CartItems = this.cartService.cartItems;
  loginMode: boolean;
  ngDoCheck() {
    this.loginMode = this.loginService.isLoggedIn;
  }
  onLogOut() {
    this.loginService.toLogOut();
    this.loginMode = false;
    // this.router.navigate(['/home']);
  }
  showCart: boolean = false;

  onClickShowCart() {
    this.showCart = !this.showCart;
  }
}
