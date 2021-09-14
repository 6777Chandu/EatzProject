import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {

  constructor(private alertService:AlertService) { }

  alertType = ""
  item = {}

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.alertType = this.alertService.alertType
    this.item = this.alertService.item
  }
  
  onClickClose(){
    this.alertService.onCloseAlert()
   this.alertService.alertType = "";
  }

}
