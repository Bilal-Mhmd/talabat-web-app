import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderedMenuItemsComponent } from './list-ordered-menu-items.component';

describe('ListOrderedMenuItemsComponent', () => {
  let component: ListOrderedMenuItemsComponent;
  let fixture: ComponentFixture<ListOrderedMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderedMenuItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderedMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
