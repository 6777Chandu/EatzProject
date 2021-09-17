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




  ngOnInit(): void {}



  /**
   * @description Closes the alertBox 
   */
  onClose() {
    this.alertOpen = false;
    this.alertService.onCloseAlertBooking();
    
  }
}
