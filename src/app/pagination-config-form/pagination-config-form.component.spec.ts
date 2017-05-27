import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationConfigFormComponent } from './pagination-config-form.component';

describe('PaginationConfigFormComponent', () => {
  let component: PaginationConfigFormComponent;
  let fixture: ComponentFixture<PaginationConfigFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationConfigFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
