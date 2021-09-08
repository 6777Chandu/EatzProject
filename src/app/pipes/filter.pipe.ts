import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../services/search.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private searchService: SearchService) {}

  transform(value: any, names: string) {
    const items = [];
    if (names.length === 0) {
      return value;
    }
    for (const item of value) {
      if (item.name.toLowerCase().includes(names.toLowerCase())) {
        items.push(item);
      }
    }
    if (items.length === 0) {
      console.log("Fired")
      this.searchService.val = "allow"
    }
    return items;
  }
}
