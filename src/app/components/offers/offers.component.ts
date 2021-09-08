import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardTypeService } from 'src/app/services/card/card-type.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  items = [];
  constructor(
    private cardService: CardTypeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cardService.onOffersCard();
    // TODO: Move urls to constants
    this.httpClient
      .get<any>('https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366')
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
  }
}
