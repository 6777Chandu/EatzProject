import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  title = AppConstants.CONSTANTS.PAGES.ORDERS_PAGE.PAGE_TITLE;
  scrollHeight = AppConstants.CONSTANTS.PAGES.ORDERS_PAGE.VIRTUAL_SCROLL_HEIGHT;
  items = [];
  constructor(
    // private cardService: CardTypeService,
    private apiService: ApiService,
    private alertService: AlertService
  ) {}

  ordersApiSubscription: Subscription;

  ngOnInit(): void {
    this.ordersApiSubscription = this.apiService
      .fetchData(AppConstants.CONSTANTS.PAGES.ORDERS_PAGE.ORDERS_API)
      .subscribe((data) => (this.items = data.orders));
  }

  /**
   * @description: On Click of View Details
   * @param idx : It fetches the Index of the Item that is been Clicked
   */
  onViewDetails(idx: number) {
    // this.alertService.item = this.items[idx];
    this.alertService.orderItems.next(this.items[idx]);
    this.alertService.onOpenAlertOrders();
  }

  ngOnDestroy() {
    this.ordersApiSubscription.unsubscribe();
  }
}
