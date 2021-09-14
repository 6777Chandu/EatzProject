import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardTypeService } from 'src/app/services/card/card-type.service';
import { AppConstants } from 'src/app/constants/app.constants'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  title = AppConstants.CONSTANTS.PAGE_TITLES.ORDERS_PAGE;
  scrollHeight = AppConstants.CONSTANTS.VIRTUAL_SCROLL_HEIGHT;
  items = [];
  constructor(
    private cardService: CardTypeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    // this.cardService.onOffersCard();
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.API_URLS.ORDERS_API)
      .subscribe((response) => {
        this.items = response.orders;
        // console.log(this.items);
      });
  }
}
