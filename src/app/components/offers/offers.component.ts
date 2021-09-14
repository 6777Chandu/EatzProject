import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  items = [];
  cardType: string = 'cardOffers';
  title = AppConstants.CONSTANTS.PAGES.OFFER_PAGE.PAGE_TITLE;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.PAGES.OFFER_PAGE.OFFERS_API)
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
  }
}
