import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { AlertBoxComponent } from 'src/app/components/alert-box/alert-box.component';
import { FoodItemCardComponent } from 'src/app/components/food-item-card/food-item-card.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    FilterPipe,
    LogoComponent,
    AlertBoxComponent,
    FoodItemCardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FilterPipe,
    LogoComponent,
    AlertBoxComponent,
    FoodItemCardComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
