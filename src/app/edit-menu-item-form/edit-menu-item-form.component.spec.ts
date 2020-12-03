import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemFormComponent } from './edit-menu-item-form.component';

describe('EditMenuItemFormComponent', () => {
  let component: EditMenuItemFormComponent;
  let fixture: ComponentFixture<EditMenuItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
