import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponentCustomizationByInputsComponent } from './pagination-component-customization-by-inputs.component';

describe('PaginationComponentCustomizationByInputsComponent', () => {
  let component: PaginationComponentCustomizationByInputsComponent;
  let fixture: ComponentFixture<PaginationComponentCustomizationByInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponentCustomizationByInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponentCustomizationByInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
