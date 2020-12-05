import { TestBed } from '@angular/core/testing';

import { OrderedListService } from './ordered-list.service';

describe('OrderedListService', () => {
  let service: OrderedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
