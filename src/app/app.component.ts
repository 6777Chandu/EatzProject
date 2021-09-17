import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from './services/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'EatzProject';
  constructor(public router: Router, private alertService: AlertService) {}
  showAlert: boolean;
  showAlertOrders: boolean;
  alertSubscription: Subscription;
  alertOrdersSubscription: Subscription;
  ngOnInit() {
    this.alertSubscription = this.alertService.showAlertBooking.subscribe(
      (value) => (this.showAlert = value)
    );
    this.alertOrdersSubscription = this.alertService.showAlertOrders.subscribe(
      (value) => (this.showAlertOrders = value)
    );
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
    this.alertOrdersSubscription.unsubscribe();
  }
}
