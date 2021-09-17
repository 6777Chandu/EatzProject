import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConstants, CardTypes } from 'src/app/constants/app.constants';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  items = [];
  cardType: string = CardTypes.offers; //
  title = AppConstants.CONSTANTS.PAGES.OFFER_PAGE.PAGE_TITLE;

  constructor(private apiService: ApiService) {}

  offerApiSubscription: Subscription;

  ngOnInit(): void {
    this.offerApiSubscription = this.apiService
      .fetchData(AppConstants.CONSTANTS.PAGES.OFFER_PAGE.OFFERS_API)
      .subscribe((data) => (this.items = data.result));
  }

  ngOnDestroy() {
    this.offerApiSubscription.unsubscribe();
  }
}
