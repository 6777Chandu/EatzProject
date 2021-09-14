import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService implements OnInit {
  cartItems = [];
  constructor() {}

  ngOnInit() {}

  onPushItemstoCart(items: { title: string; val: number }) {
    this.cartItems.push(items);
  }

  onShowCartItems() {
    return this.cartItems;
  }
}
