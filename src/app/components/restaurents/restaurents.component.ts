import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';
import { AppConstants, CardTypes } from 'src/app/constants/app.constants';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.scss'],
})
export class RestaurentsComponent implements OnInit {
  title = AppConstants.CONSTANTS.PAGES.RESTAURANTS_PAGE.PAGE_TITLE;
  items = [];
  cardType: string = CardTypes.restaurents;
  len = 0;
  showError;

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('cards') cardsSel: ElementRef;

  constructor(
    private searchService: SearchService,
    private apiService: ApiService
  ) {}

  names = this.searchService.searchValue;
  searchName = this.searchService.searchValue;

  restaurentApiSubscription: Subscription;

  ngOnInit(): void {
    this.restaurentApiSubscription = this.apiService
      .fetchData(AppConstants.CONSTANTS.PAGES.RESTAURANTS_PAGE.RESTAURANTS_API)
      .subscribe((data) => (this.items = data.result));
    this.showError = false;
  }

  ngAfterViewChecked() {
    console.log('Length', this.searchService.items.length);
    this.len = this.searchService.items.length;
  }

  onSearch() {
    this.searchName = this.searchForm.value.search;
  }

  ngOnDestroy(){
    this.restaurentApiSubscription.unsubscribe();
  }
}
