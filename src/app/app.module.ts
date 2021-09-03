import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentsComponent } from './components/restaurents/restaurents.component';
import { OffersComponent } from './components/offers/offers.component';
import { FoodItemCardComponent } from './components/food-item-card/food-item-card.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AuthGuardService } from './services/login/auth-guard.service';
import { LoginService } from './services/login/login.service';
import { CardTypeService } from './services/card/card-type.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentsComponent,
    OffersComponent,
    FoodItemCardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LoginService, AuthGuardService, CardTypeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
