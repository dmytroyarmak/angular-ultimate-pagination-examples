import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationExplicitTemplateCustomizationComponent } from './pagination-explicit-template-customization.component';

describe('PaginationExplicitTemplateCustomizationComponent', () => {
  let component: PaginationExplicitTemplateCustomizationComponent;
  let fixture: ComponentFixture<PaginationExplicitTemplateCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationExplicitTemplateCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationExplicitTemplateCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
