import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * @description : on Click navigates to Home Page
   */
  onClick() {
    this.router.navigate(['/home']);
  }
}
