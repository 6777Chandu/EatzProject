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
  imgPath: string = 'assets/images/LoginImage.png';
  constructor(
    private searchService: SearchService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  location: string;
  cardType = "cardHome";

  ngOnInit(): void {
   
   
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.API_URLS.OFFERS_API)
      .subscribe((response) => {
        this.items = response.result;
      });

    this.httpClient
      .get<any>(AppConstants.CONSTANTS.API_URLS.LOCATION_API)
      .subscribe((response) => {
        if (response.city === null) {
          this.location = response.country_name;
        } else {
          this.location = response.city;
        }
      });
  }

  @ViewChild('searchForm') searchForm: NgForm;

  onSearch() {
    console.log(this.searchForm.value.search);
    this.searchService.onSearchFromHome(this.searchForm.value.search);
    this.router.navigate(['/restaurents']);
  }
}
