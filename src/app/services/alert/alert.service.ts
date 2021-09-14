import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  alertType:string = '';
  showAlert:boolean = false;
  item = {};

  /**
   * @description Sets alertType to Booking
   */
  onBooking() {
    this.alertType = 'booking';
  }

  /**
   * @description Sets alertType to Orders
   */
  onOrders() {
    this.alertType = 'orders';
  }

  /**
   * @description Sets ShowAlert to true, which displays the alert Box
   */
  onOpenAlert() {
    this.showAlert = true;
  }

  /**
   * @description Sets ShowAlert to false, which closes the alert Box
   */
  onCloseAlert() {
    this.showAlert = false;
  }
}
