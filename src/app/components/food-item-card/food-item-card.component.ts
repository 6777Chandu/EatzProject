import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartDataService } from 'src/app/services/cart/cart-data.service';
import { LoginService } from 'src/app/services/login/login.service';

interface Cart {
  title: string;
  val: number;
}

@Component({
  selector: 'app-food-item-card',
  templateUrl: './food-item-card.component.html',
  styleUrls: ['./food-item-card.component.scss'],
})
export class FoodItemCardComponent implements OnInit {
  @Input() item;
  @Input() cardType;
  cartItems = this.cartService.onShowCartItems();
  cardRestaurent: boolean = false;
  cardHome: boolean = false;
  cardOffers: boolean = false;
  ratingVal;
  constructor(
    // private cardService: CardTypeService,
    private loginService: LoginService,
    private router: Router,
    private cartService: CartDataService
  ) {
    // this.cardHome = this.cardService.cardHome;
    // this.cardOffers = this.cardService.cardOffers;
    // this.cardRestaurent = this.cardService.cardRestaurent;
  }
  ngOnInit(): void {
    const rating = Math.random() * (5 - 1) + 1;
    this.ratingVal = rating.toFixed(2);
  }

  onAddToCart() {
    let val = 0;

    if (this.loginService.isLoggedIn === false) {
      this.router.navigate(['/login']);
    } else {
      for (let i of this.cartItems) {
        if (i.title === this.item.name) {
          val++;
        }
      }

      if (val > 0) {
        this.cartItems.map((data) => {
          if (data.title == this.item.name) {
            data.val++;
          }
        });
      } else {
        this.cartService.onPushItemstoCart({
          title: this.item.name,
          val: 1,
        });
      }

      // console.log(this.cartItems);
    }
  }
}
