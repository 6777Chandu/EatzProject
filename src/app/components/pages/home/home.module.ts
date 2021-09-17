import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { AdvanceBookingComponent } from '../../advance-booking/advance-booking.component';

@NgModule({
  declarations: [HomeComponent, AdvanceBookingComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, AdvanceBookingComponent],
})
export class HomeModule {}
