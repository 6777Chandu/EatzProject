import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/services/cart/cart-data.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-food-item-card',
  templateUrl: './food-item-card.component.html',
  styleUrls: ['./food-item-card.component.scss'],
})
export class FoodItemCardComponent implements OnInit {
  @Input() item: any;
  @Input() cardType: string;

  cartItems = [];

  ratingVal: string;

  constructor(
    // previous usage  -->
    // private cardService: CardTypeService,
    private loginService: LoginService,
    private router: Router,
    private cartService: CartDataService
  ) {}
  ngOnInit(): void {
    const rating = Math.random() * (5 - 1) + 1;
    this.ratingVal = rating.toFixed(2);
    this.cartService.cartItem.subscribe((data) => this.cartItems.push(data));
  }

  /**
   * @description: Adds Items to Carts and Supplies to Cart Data Service
   */
  onAddToCart() {
    let itemValue = 0;

    if (this.loginService.isLoggedIn === false) {
      this.router.navigate(['/login']);
    } else {
      for (let i of this.cartItems) {
        if (i.title === this.item.name) {
          itemValue++;
        }
      }

      if (itemValue > 0) {
        this.cartItems.map((data) => {
          if (data.title == this.item.name) {
            data.val++;
          }
        });
      } else {
        this.cartService.onAddToCart({
          title: this.item.name,
          val: 1,
        });
      }
    }
  }
}
