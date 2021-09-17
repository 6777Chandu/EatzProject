import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  cartSubscription: Subscription;
  loginSubscription: Subscription;

  cartItems = [];

  isCartEmpty: boolean = true;
  showCart: boolean = false;
  cartCount: number = 0;
  isLoginMode: boolean;

  ngOnInit() {
    this.cartSubscription = this.cartService.cartItems.subscribe((title: string) => {
      let prevItemInCartCount = 0;
      this.cartItems.map((item) => {
        if (item.name === title) {
          item.val++;
          prevItemInCartCount++;
        }
      });
      if (prevItemInCartCount === 0) {
        this.cartItems.push({ name: title, val: 1 });
      } else {
      }
      this.cartCount = this.cartItems.length;
      if (this.cartCount > 0) {
        this.isCartEmpty = false;
      }
      // console.log('cartItems', a);
      console.log(this.cartItems);
    });

    this.loginSubscription = this.loginService.isLoggedIn.subscribe(
      (value) => (this.isLoginMode = value)
    );
  }

  getItem(index: number) {
    this.cartItems.splice(index, 1);
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

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.loginSubscription.unsubscribe();
  }
}
