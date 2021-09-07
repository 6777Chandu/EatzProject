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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component';

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
    LoginComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [LoginService, AuthGuardService, CardTypeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
