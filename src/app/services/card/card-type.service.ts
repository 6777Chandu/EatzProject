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
    this.cardOffers = false;
    this.cardRestaurent = false;
  }
  onOffersCard() {
    this.cardOffers = true;
    this.cardHome = false;
    this.cardRestaurent = false;
  }
  onRestaurantCard() {
    this.cardRestaurent = true;
    this.cardOffers = false;
    this.cardHome = false;
  }
}
