import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-orders-modal-box',
  templateUrl: './orders-modal-box.component.html',
  styleUrls: ['./orders-modal-box.component.scss'],
})
export class OrdersModalBoxComponent implements OnInit {
  alertOpen: boolean = true;
  itemSubscription: Subscription;
  constructor(private alertService: AlertService) {}
  item: any;

  ngOnInit(): void {
    this.itemSubscription = this.alertService.orderItems.subscribe(
      (value) => (this.item = value)
    );
  }

  /**
   * @description Closes the alertBox and Resets the alertType both in AlertService
   */
  onClose(name: string) {
    this.alertOpen = false;
    setTimeout(() => {
      this.alertService.onCloseAlertOrders();
    }, 500);
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
