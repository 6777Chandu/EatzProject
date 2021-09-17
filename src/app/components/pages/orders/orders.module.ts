import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [{ path: '', component: OrdersComponent }];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    SharedModule,
    // RouterModule.forChild(routes),
  ],
  exports: [OrdersComponent],
})
export class OrdersModule {}
