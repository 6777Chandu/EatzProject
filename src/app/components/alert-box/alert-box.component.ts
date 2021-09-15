import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
})
export class AlertBoxComponent implements OnInit {
  alertOpen: boolean = true;
  constructor(private alertService: AlertService) {}

  alertType = '';
  item = {};

  ngOnInit(): void {}

  ngDoCheck() {
    this.alertType = this.alertService.alertType;
    this.item = this.alertService.item;
  }

  /**
   * @description Closes the alertBox and Resets the alertType both in AlertSerivce
   */
  onClose(name:string) {
    let time=0;
    this.alertOpen = false;
    if(name !== "booking"){
      time = 500;
    }
    setTimeout(() => {
      this.alertService.onCloseAlert();
      this.alertService.alertType = '';
    }, time);
  }
}
