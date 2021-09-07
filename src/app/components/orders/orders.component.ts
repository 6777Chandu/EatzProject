import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardTypeService } from 'src/app/services/card/card-type.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  items = [];
  constructor(
    private cardService: CardTypeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cardService.onOffersCard();
    this.httpClient
      .get<any>('https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6')
      .subscribe((response) => {
        this.items = response.orders;
        // console.log(this.items);
      });
  }
}
