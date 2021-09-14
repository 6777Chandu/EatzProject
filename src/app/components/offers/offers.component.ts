import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  items = [];
  cardType="cardOffers"
  title = AppConstants.CONSTANTS.PAGE_TITLES.OFFER_PAGE;
  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {

    this.httpClient
      .get<any>(AppConstants.CONSTANTS.API_URLS.OFFERS_API)
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
  }
}
