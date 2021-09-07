import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardTypeService } from 'src/app/services/card/card-type.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.scss'],
})
export class RestaurentsComponent implements OnInit {
  items = [];
  @ViewChild('searchForm') searchForm: NgForm;
  names ="Hey There";
  constructor(
    private cardService: CardTypeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cardService.onRestaurantCard();
    this.httpClient
      .get<any>('https://run.mocky.io/v3/59b84146-7de3-4794-8534-8979236ec0bc')
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });

    // this.searchForm.setValue({
    //   search: 'hey',
    // });
    // console.log(this.searchForm)
  }

  onSearch() {}
}
