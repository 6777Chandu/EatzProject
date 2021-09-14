import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemsModel } from 'src/app/models/cart-items/cartItems.model';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  // previous usage  -->
  // cartItems = [];
  cartItem = new BehaviorSubject<any>({});

  /**
   * @description: Adds items to the cartItem BehaviourSubject received from FoodItemCardComponent
   * @param items : Accepts items of Model CartItemModel
   */
  onAddToCart(items: CartItemsModel) {
    this.cartItem.next(items);
    // console.log(this.cartItem.value);
    // previous usage  -->
    // this.cartItems.push(items);
    // console.log(this.cartItems)
  }

  // previous usage  -->
  // onShowCartItems() {
  //   return this.cartItem.value;
  // }
}
