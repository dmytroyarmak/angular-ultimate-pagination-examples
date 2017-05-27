import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationImplicitTemplateCustomizationComponent } from './pagination-implicit-template-customization.component';

describe('PaginationImplicitTemplateCustomizationComponent', () => {
  let component: PaginationImplicitTemplateCustomizationComponent;
  let fixture: ComponentFixture<PaginationImplicitTemplateCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationImplicitTemplateCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationImplicitTemplateCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
