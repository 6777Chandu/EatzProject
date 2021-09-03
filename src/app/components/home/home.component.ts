import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.cardService.onHomeCard();
    this.httpClient
      .get<any>('https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366')
      .subscribe((response) => {
        // console.log(response.result);
        this.items = response.result;
        console.log(this.items);
      });
  }
}
