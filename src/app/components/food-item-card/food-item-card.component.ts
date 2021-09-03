import { Component, Input, OnInit } from '@angular/core';
import { CardTypeService } from 'src/app/services/card/card-type.service';

@Component({
  selector: 'app-food-item-card',
  templateUrl: './food-item-card.component.html',
  styleUrls: ['./food-item-card.component.scss'],
})
export class FoodItemCardComponent implements OnInit {
  @Input() item;
  cardRestaurent: boolean = false;
  cardHome: boolean = false;
  cardOffers: boolean = false;
  constructor(private cardService: CardTypeService) {
    this.cardHome = this.cardService.cardHome;
    this.cardOffers = this.cardService.cardOffers;
    this.cardRestaurent = this.cardService.cardRestaurent;
  }

  ngOnInit(): void {}

  ngDoCheck() {}
}
