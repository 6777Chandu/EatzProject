import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  alertType = "";
  showAlert = false;
  item = {}

  onBooking(){
    this.alertType = "booking"
  }

  onOrders(){
    this.alertType = "orders"
  }

  onOpenAlert(){
    this.showAlert = true
  }


  onCloseAlert(){
    this.showAlert = false
  }
}
