import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardTypeService {
  constructor() {}
  cardRestaurent: boolean = false;
  cardHome: boolean = false;
  cardOffers: boolean = false;
  homeItems = [];
  onHomeCard() {
    this.cardHome = true;
   
  }
  onOffersCard() {
    this.cardOffers = true;
  }
  onRestaurantCard() {
    this.cardRestaurent = true;
  }
}
