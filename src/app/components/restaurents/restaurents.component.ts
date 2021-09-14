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
  title = AppConstants.CONSTANTS.PAGE_TITLES.RESTAURANTS_PAGE;
  items = [];
  cardType="cardRestaurent"
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
      .get<any>(AppConstants.CONSTANTS.API_URLS.RESTAURANTS_API)
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
      this.showError = false;
  }

  ngDoCheck() {
    // console.log('Length', this.searchService.itemz.length);
    // if (this.searchService.itemz.length === 0) {
    //   this.showError = true;
    // }
  }

  ngAfterViewChecked(){
    console.log('Length', this.searchService.itemz.length);
    this.len = this.searchService.itemz.length;
  }

  onSearch() {
    this.searchName = this.searchForm.value.search;

    // console.log("Search", this.cardsSel);
    // console.log("Search", this.renderer.);

    
    // console.log('Items', this.items.length);
    // if (this.len === 0) {
    //   this.showError = true;
    // } 
  }
}
