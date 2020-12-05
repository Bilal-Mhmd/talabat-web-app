import { TestBed } from '@angular/core/testing';

import { MenuItemsDataService } from './menu-items.service';

describe('MenuItemsDataService', () => {
  let service: MenuItemsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
