import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

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

    console.log("Items Copied")
    this.searchService.itemz = items;
    return items;
  }
}
