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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter/filter.pipe';
import { LogoComponent } from './components/logo/logo.component';
import { ErrorPageComponent } from './components/page404/errorpage.component';
import { AdvanceBookingComponent } from './components/advance-booking/advance-booking.component';

// TODO: Consider using the shared module concept and move shared component and dumb components into a shared module
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
    ErrorPageComponent,
    FilterPipe,
    LogoComponent,
    AdvanceBookingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuardService, CardTypeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
