import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from 'src/app/services/search/search.service';
import { AppConstants } from 'src/app/constants/app.constants'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  items = [];
  imgPath: string = AppConstants.CONSTANTS.PAGES.HOME_PAGE.HERO_IMG_PATH;
  constructor(
    private searchService: SearchService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  location: string;
  cardType:string = "cardHome";

  ngOnInit(): void {
   
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.PAGES.OFFER_PAGE.OFFERS_API)
      .subscribe((response) => {
        this.items = response.result;
      });

    this.httpClient
      .get<any>(AppConstants.CONSTANTS.PAGES.HOME_PAGE.API.LOCATION_API)
      .subscribe((response) => {
        if (response.city === null) {
          this.location = response.country_name;
        } else {
          this.location = response.city;
        }
      });
  }

  @ViewChild('searchForm') searchForm: NgForm;

  /**
   * @description On Search, It takes value from the form and supplies to Search Service and Navigates to Restaurents page to show results
   */
  onSearch() {
    // console.log(this.searchForm.value.search);
    this.searchService.onSearchFromHome(this.searchForm.value.search);
    this.router.navigate(['/restaurents']);
  }
}
