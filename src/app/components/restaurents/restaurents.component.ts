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
import { AppConstants } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.scss'],
})
export class RestaurentsComponent implements OnInit {
  title = AppConstants.CONSTANTS.PAGES.RESTAURANTS_PAGE.PAGE_TITLE;
  items = [];
  cardType: string = 'cardRestaurent';
  len = 0;
  showError;

  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('cards') cardsSel: ElementRef;

  constructor(
    private searchService: SearchService,
    private httpClient: HttpClient,
    private renderer: Renderer2
  ) {}

  names = this.searchService.searchValue;
  searchName = this.searchService.searchValue;

  ngOnInit(): void {
    this.httpClient
      .get<any>(AppConstants.CONSTANTS.PAGES.RESTAURANTS_PAGE.RESTAURANTS_API)
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
    this.showError = false;
  }

  ngAfterViewChecked() {
    console.log('Length', this.searchService.items.length);
    this.len = this.searchService.items.length;
  }

  onSearch() {
    this.searchName = this.searchForm.value.search;
  }
}
