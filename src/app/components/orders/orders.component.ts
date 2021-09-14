import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';
import { AlertService } from 'src/app/services/alert/alert.service';

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
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // previous usage  -->
    // this.cardService.onOffersCard();
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.PAGES.ORDERS_PAGE.ORDERS_API)
      .subscribe((response) => {
        this.items = response.orders;
        // console.log(this.items);
      });
  }

  /**
   * @description: On Click of View Details, Opens Modalw with Orders and Loads Alert Box
   * @param idx : It fetches the Index of the Item that is been Clicked
   */
  onViewDetails(idx: number) {
    this.alertService.item = this.items[idx];
    // console.log(this.alertService.item)
    this.alertService.onOrders();
    this.alertService.onOpenAlert();
  }
}
