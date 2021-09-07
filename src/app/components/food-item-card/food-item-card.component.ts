import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardTypeService } from 'src/app/services/card/card-type.service';
import { LoginService } from 'src/app/services/login/login.service';

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
  ratingVal;
  constructor(private cardService: CardTypeService, private loginService:LoginService, private router: Router) {
    this.cardHome = this.cardService.cardHome;
    this.cardOffers = this.cardService.cardOffers;
    this.cardRestaurent = this.cardService.cardRestaurent;
  }

  ngOnInit(): void {
    const rating = Math.random() * (5 - 1) + 1;
    this.ratingVal = rating.toFixed(2);
    // console.log(this.ratingVal);
  }

  onAddToCart(){
    if(this.loginService.isLoggedIn === false){
      this.router.navigate(['/login']);
    }
  }
  
}
