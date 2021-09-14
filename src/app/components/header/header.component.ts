import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private cartService: CartDataService
  ) {}
  CartItems = this.cartService.onShowCartItems();
  errorMsg = true;
  cartCount = 0;
  loginMode: boolean;

  ngOnInit() {
    
  }

  ngDoCheck() {
    this.loginMode = this.loginService.isLoggedIn;
    this.cartCount = this.CartItems.length;
    if(this.cartCount > 0){
      this.errorMsg = false
    }
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
