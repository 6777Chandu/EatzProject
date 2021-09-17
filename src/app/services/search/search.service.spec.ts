import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('searchValue is empty at init', () => {
    expect(service.searchValue).toBe('');
  });

  it('Change searchValue to params of onSearchFromHome when it is called', () => {
    expect(service.onSearchFromHome('name')).toBe(expect(service.searchValue).toBe('name'));
  });


});
