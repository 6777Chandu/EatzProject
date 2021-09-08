import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardTypeService } from 'src/app/services/card/card-type.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.scss'],
})
export class RestaurentsComponent implements OnInit {
  items = [];
  @ViewChild('searchForm') searchForm: NgForm;
  @ViewChild('cards') cardsSel: ElementRef;
  constructor(
    private cardService: CardTypeService,
    private searchService: SearchService,
    private httpClient: HttpClient,
    private renderer: Renderer2
  ) {}

  names = this.searchService.searchValue;
  searchName = this.searchService.searchValue;

  ngOnInit(): void {
    this.cardService.onRestaurantCard();
    this.httpClient
      .get<any>('https://run.mocky.io/v3/59b84146-7de3-4794-8534-8979236ec0bc')
      .subscribe((response) => {
        this.items = response.result;
        console.log(this.items);
      });
  }

  ngAfterViewInit() {
    console.log('search', this.cardsSel);
    console.log('search', this.cardsSel.nativeElement.childElementCount);
  }

 
  onSearch() {
    this.searchName = this.searchForm.value.search;
    this.ngAfterViewInit();
    // console.log("Search", this.cardsSel);
    // console.log("Search", this.renderer.);
    console.log('Items', this.items.length);
  }
}
