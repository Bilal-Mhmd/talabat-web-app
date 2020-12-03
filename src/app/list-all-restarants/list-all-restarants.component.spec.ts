import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllRestarantsComponent } from './list-all-restarants.component';

describe('ListAllRestarantsComponent', () => {
  let component: ListAllRestarantsComponent;
  let fixture: ComponentFixture<ListAllRestarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllRestarantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllRestarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
