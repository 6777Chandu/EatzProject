import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-booking',
  templateUrl: './advance-booking.component.html',
  styleUrls: ['./advance-booking.component.scss'],
})
export class AdvanceBookingComponent implements OnInit {
  constructor() {}
  advanceBookingForm: FormGroup;
  myDateRange = [];
  myTimeRange = [
    '9 AM to 11 AM',
    '12 PM to 2 PM',
    '3 PM to 5 PM',
    '7 PM to 9 PM',
    'No Slots',
  ];
  mySortedTimeRange = [];
  Mydate = new Date();
  format = 'dd';
  locale = 'en-US';
  formattedDate = formatDate(this.Mydate, 'dd', this.locale);
  formattedDateByYear = formatDate(this.Mydate, 'yyyy', this.locale);
  formattedDateByMonth = formatDate(this.Mydate, 'mm', this.locale);
  formattedDateByTime = formatDate(this.Mydate, 'HH:mm', this.locale);
  minRange = 0;
  maxRange = 0;
  temp = [];

  ngOnInit(): void {
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

    // if (+this.formattedDate > +this.formattedDate + 1) {
    //   console.log('Hi There !');
    // }

    if (
      parseInt(this.formattedDateByTime) >= 0 &&
      parseInt(this.formattedDateByTime) <= 8
    ) {
      this.minRange = 0;
      this.maxRange = 3;
    } else if (
      parseInt(this.formattedDateByTime) >= 0 &&
      parseInt(this.formattedDateByTime) <= 11
    ) {
      this.minRange = 1;
      this.maxRange = 3;
    } else if (
      parseInt(this.formattedDateByTime) >= 0 &&
      parseInt(this.formattedDateByTime) <= 14
    ) {
      this.minRange = 2;
      this.maxRange = 3;
    } else if (
      parseInt(this.formattedDateByTime) >= 0 &&
      parseInt(this.formattedDateByTime) <= 19
    ) {
      this.minRange = 3;
      this.maxRange = 3;
    } else {
      this.minRange = 4;
      this.maxRange = 4;
    }

    for (let j = this.minRange; j <= this.maxRange; j++) {
      this.mySortedTimeRange.push(this.myTimeRange[j]);
    }
    console.log('hi There');
    console.log(this.myDateRange);
    console.log(this.formattedDateByTime);
    console.log('Hi', this.mySortedTimeRange);

    this.advanceBookingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      date: new FormControl(this.formattedDate),
      // time: new FormControl('9 AM to 11 AM'),
      time: new FormControl(this.mySortedTimeRange[0]),
      guests: new FormControl('1'),
    });

    this.temp = this.mySortedTimeRange
    console.log(this.temp)

    this.advanceBookingForm.get('date').valueChanges.subscribe((value) => {
      if (value === this.formattedDate) {
        this.mySortedTimeRange = this.temp;
        console.log(this.mySortedTimeRange)
        this.advanceBookingForm.patchValue({
          time: this.mySortedTimeRange[0]
        });
        
      } else {
        this.mySortedTimeRange = [];
        for (let j = 0; j <= 3; j++) {
          this.mySortedTimeRange.push(this.myTimeRange[j]);  
        }

        this.advanceBookingForm.patchValue({
          time: this.mySortedTimeRange[0]
        });
      }
    });

    // if()
  }

  onAdvanceBookingFormSubmit() {
    console.log(this.advanceBookingForm.value);
  }
}
