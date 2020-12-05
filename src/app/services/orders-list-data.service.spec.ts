import { TestBed } from '@angular/core/testing';

import { OrdersListDataService } from './orders-list-data.service';

describe('OrdersListDataService', () => {
  let service: OrdersListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
