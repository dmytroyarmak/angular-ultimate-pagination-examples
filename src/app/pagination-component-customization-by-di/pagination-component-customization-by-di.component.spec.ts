import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponentCustomizationByDiComponent } from './pagination-component-customization-by-di.component';

describe('PaginationComponentCustomizationByDiComponent', () => {
  let component: PaginationComponentCustomizationByDiComponent;
  let fixture: ComponentFixture<PaginationComponentCustomizationByDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponentCustomizationByDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponentCustomizationByDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
