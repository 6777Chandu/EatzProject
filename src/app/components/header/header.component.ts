import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/services/cart/cart-data.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private cartService: CartDataService
  ) {}

  // previous usage  -->
  // CartItems = this.cartService.onShowCartItems();

  CartItems = [];

  isCartEmpty:boolean = true;
  showCart: boolean = false;
  cartCount:number = 0;
  isLoginMode: boolean;

  ngOnInit() {
    this.cartService.cartItem.subscribe((data) => this.CartItems.push(data));
    this.CartItems.splice(0, 1);
  }

  ngDoCheck() {
    this.isLoginMode = this.loginService.isLoggedIn;
    this.cartCount = this.CartItems.length;
    if (this.cartCount > 0) {
      this.isCartEmpty = false;
    }
    // console.log(this.CartItems)
  }

  /**
   * @description: On Clicks , logs out the logged in user
   */
  onLogOut() {
    this.loginService.toLogOut();
    this.isLoginMode = false;
    // this.router.navigate(['/home']);
  }

  
  /**
   * @description: On Click Toggles the Cart
   */
  onClickShowCart() {
    this.showCart = !this.showCart;
  }
}
