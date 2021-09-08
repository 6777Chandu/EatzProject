import { Injectable } from '@angular/core';
// TODO: Please try to use similar app folder structure. Either have it in pecific folders or have all services under services folder directly. 
@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  cartItems = [];
  constructor() {}
}
