import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardTypes } from 'src/app/constants/app.constants';
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

  ratingVal: string;
  isLoggedIn: boolean;
  cardHome: string = CardTypes.home;
  cardOffers: string = CardTypes.offers;
  cardRestaurent: string = CardTypes.restaurents;

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
    this.loginService.isLoggedIn.subscribe(
      (value) => (this.isLoggedIn = value)
    );
  }

  /**
   * @description: Adds Items to Carts and Supplies to Cart Data Service
   */
  onAddToCart() {
    if (this.isLoggedIn) {
      this.cartService.cartItems.next(this.item.name);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
