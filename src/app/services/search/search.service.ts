import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}
  itemz = [];
  searchValue: string = '';
  emptySearch: boolean;

  val: string = '';
  ngDoCheck() {
    this.emptySearch = false;
  }

  onSearchFromHome(value: string) {
    this.searchValue = value;
    console.log(this.searchValue);
  }

  onEmptySearch() {
    this.emptySearch = true;
  }
}
