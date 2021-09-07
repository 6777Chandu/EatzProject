import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardTypeService } from 'src/app/services/card/card-type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [];
  imgPath: string = 'assets/images/LoginImage.png';
  constructor(
    private cardService: CardTypeService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  location: string;

  ngOnInit(): void {
    this.cardService.onHomeCard();
    this.httpClient
      .get<any>('https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366')
      .subscribe((response) => {
        this.items = response.result;
      });

    this.httpClient
      .get<any>('https://geolocation-db.com/json/')
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
    console.log(this.searchForm);
    this.router.navigate(['/restaurents']);
  }
}
