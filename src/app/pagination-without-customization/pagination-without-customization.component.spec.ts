import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationWithoutCustomizationComponent } from './pagination-without-customization.component';

describe('PaginationWithoutCustomizationComponent', () => {
  let component: PaginationWithoutCustomizationComponent;
  let fixture: ComponentFixture<PaginationWithoutCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationWithoutCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationWithoutCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
