import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  showAlertBooking = new BehaviorSubject<boolean>(false);
  showAlertOrders = new BehaviorSubject<boolean>(false);
  orderItems = new BehaviorSubject<object>({});

  /**
   * @description Sets ShowAlertBooking to true, which displays the alert Box
   */
  onOpenAlertBooking() {
    this.showAlertBooking.next(true);
  }

  /**
   * @description Sets ShowAlertBooking to false, which closes the alert Box
   */
  onCloseAlertBooking() {
    this.showAlertBooking.next(false);
  }

  /**
   * @description Sets showAlertOrders to true, which displays the alert Box
   */
  onOpenAlertOrders() {
    this.showAlertOrders.next(true);
  }

  /**
   * @description Sets showAlertOrders to false, which closes the alert Box
   */
  onCloseAlertOrders() {
    this.showAlertOrders.next(false);
  }
}
