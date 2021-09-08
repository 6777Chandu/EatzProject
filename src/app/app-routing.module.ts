import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrdersComponent } from './components/orders/orders.component';
// TODO:Lets name is ErrorPageCompoent. It is good practice to avoid numbers in component class name
import { Page404Component } from './components/page404/page404.component';
import { RestaurentsComponent } from './components/restaurents/restaurents.component';
import { AuthGuardService } from './services/login/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurents', component: RestaurentsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: Page404Component },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
