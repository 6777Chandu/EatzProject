import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardTypeService } from 'src/app/services/card/card-type.service';
import { CartDataService } from 'src/app/services/cart-data.service';
import { LoginService } from 'src/app/services/login/login.service';

interface Cart {
  title: string;
  val: number;
}

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
  constructor(
    private cardService: CardTypeService,
    private loginService: LoginService,
    private router: Router,
    private cartService: CartDataService
  ) {
    this.cardHome = this.cardService.cardHome;
    this.cardOffers = this.cardService.cardOffers;
    this.cardRestaurent = this.cardService.cardRestaurent;
  }

  ngOnInit(): void {
    const rating = Math.random() * (5 - 1) + 1;
    this.ratingVal = rating.toFixed(2);
    // console.log(this.ratingVal);
  }

  onAddToCart() {
    console.log(this.cartService.cartItems.length);
    if (this.loginService.isLoggedIn === false) {
      this.router.navigate(['/login']);
    }
  //   for(const i of this.cartService.cartItems){
  //  if(i.title === this.item.title){
     
  //  }
  //  else{
    this.cartService.cartItems.push({ title: this.item.name, val: 1 });
  //  }
  //   }
  
    // use functions
    // change this to behaviour subject (subscribe method) (use: Subject)
    // use the id to identify the val , if exists use Array.filter, Array.find methods


    // console.log(this.item.name);
    // if (this.cartService.cartItems.length === 0) {
    //   this.cartService.cartItems.push({ title: this.item.name, val: 1 });
    // } else {
    //   this.cartService.cartItems.forEach((obj, index) => {
    //     const key = `${obj.title}`;
    //     if (key === this.item.name) {
    //       this.cartService.cartItems[index].val += 1;
    //     }else{
    //   this.cartService.cartItems.push({ title: this.item.name, val: 1 });

    //     }
    //     console.log('Here', obj);
    //   });
    // }

    console.log(this.cartService.cartItems);
  }
}
