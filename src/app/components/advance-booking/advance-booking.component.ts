import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AppConstants } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-advance-booking',
  templateUrl: './advance-booking.component.html',
  styleUrls: ['./advance-booking.component.scss'],
})
export class AdvanceBookingComponent implements OnInit {
  constructor(private alertService: AlertService) {}

  advanceBookingTitle: string =
    AppConstants.CONSTANTS.PAGES.HOME_PAGE.PAGE_COMPONENTS_TITLE
      .ADVANCE_BOOKING;
  advanceBookingError: string =
    AppConstants.CONSTANTS.PAGES.HOME_PAGE.PAGE_COMPONENTS_TITLE
      .ADVANCE_BOOKING_ERROR;

  // showAlert = true;
  advanceBookingForm: FormGroup;
  myDateRange = [];
  myTimeRange =
    AppConstants.CONSTANTS.PAGES.HOME_PAGE.PAGE_COMPONENTS_TITLE
      .ADVANCE_BOOKING_TIMING;
  guests = AppConstants.CONSTANTS.PAGES.HOME_PAGE.PAGE_COMPONENTS_TITLE
  .ADVANCE_BOOKING_GUESTS;
  mySortedTimeRange = [];

  myDate = new Date();

  locale =
    AppConstants.CONSTANTS.PAGES.HOME_PAGE.PAGE_COMPONENTS_TITLE
      .ADVANCE_BOOKING_OPTIONS.LOCALE;

  formattedDate = formatDate(this.myDate, 'dd', this.locale);
  formattedDateByYear = formatDate(this.myDate, 'yyyy', this.locale);
  formattedDateByMonth = formatDate(this.myDate, 'mm', this.locale);
  formattedDateByTime = formatDate(this.myDate, 'HH:mm', this.locale);
  minRange: number = 0;
  maxRange: number = 0;
  // temp: Temporary Variable that holds the previous data of Array
  temp = [];

  ngOnInit(): void {
    // DONE: Move to shorter functions. Too much of unrelated logic in a single function
    const maxDate = new Date(
      parseInt(this.formattedDateByYear),
      parseInt(this.formattedDateByMonth),
      0
    );
    const formatMaxDate = formatDate(maxDate, 'dd', this.locale);

    for (
      let i = parseInt(this.formattedDate);
      i <= parseInt(formatMaxDate);
      i++
    ) {
      this.myDateRange.push(i);
    }

    this.onCheckMinAndMaxRanges();

    this.advanceBookingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      date: new FormControl(this.formattedDate),
      time: new FormControl(this.mySortedTimeRange[0]),
      guests: new FormControl('1'),
    });

    this.temp = this.mySortedTimeRange;

    this.onformValueChange();
  }

  /**
   * @description Checks and Gives te Min and Max Range for Time Preview for Future Dates
   */
  onCheckMinAndMaxRanges() {
    const parsedDateByTime = parseInt(this.formattedDateByTime);
    if (parsedDateByTime <= 8) {
      this.minRange = 0;
      this.maxRange = 3;
    } else if (parsedDateByTime <= 11) {
      this.minRange = 1;
      this.maxRange = 3;
    } else if (parsedDateByTime <= 14) {
      this.minRange = 2;
      this.maxRange = 3;
    } else if (parsedDateByTime <= 19) {
      this.minRange = 3;
      this.maxRange = 3;
    } else {
      this.minRange = 4;
      this.maxRange = 4;
    }

    for (let j = this.minRange; j <= this.maxRange; j++) {
      this.mySortedTimeRange.push(this.myTimeRange[j]);
    }
  }

  /**
   * On Change of Advance Booking 'date' ValueChange
   */
  onformValueChange() {
    this.advanceBookingForm.get('date').valueChanges.subscribe((value) => {
      if (value === this.formattedDate) {
        this.mySortedTimeRange = this.temp;
        console.log(this.mySortedTimeRange);
        this.advanceBookingForm.patchValue({
          time: this.mySortedTimeRange[0],
        });
      } else {
        this.mySortedTimeRange = [];
        for (let j = 0; j <= 3; j++) {
          this.mySortedTimeRange.push(this.myTimeRange[j]);
        }

        this.advanceBookingForm.patchValue({
          time: this.mySortedTimeRange[0],
        });
      }
    });
  }

  /**
   * @description On Advance Booking Form Submit, opens alertBox
   */
  onAdvanceBookingFormSubmit() {
    console.log(this.advanceBookingForm.value);
    this.alertService.onBooking();
    this.alertService.onOpenAlert();
    console.log(this.alertService.showAlert);
  }
}
