import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
 
  title = 'EatzProject';
  constructor( public router:Router, private alertService:AlertService){}
  showAlert = false;
  ngOnInit() {
    console.log(this.alertService.showAlert)
  }

  ngDoCheck(){
    this.showAlert = this.alertService.showAlert;
  }

  
}
