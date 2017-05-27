import { Component, OnInit, OnChanges, OnDestroy, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ultimate-pagination-config-form',
  templateUrl: './pagination-config-form.component.html',
  styleUrls: ['./pagination-config-form.component.css']
})
export class PaginationConfigFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() config;
  @Output() configChange = new EventEmitter();
  paginationConfigForm: FormGroup;
  valueChangesSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.paginationConfigForm = this.fb.group({
      totalPages: '',
      currentPage: '',
      boundaryPagesRange: '',
      siblingPagesRange: '',
      hidePreviousAndNextPageLinks: '',
      hideFirstAndLastPageLinks: '',
      hideEllipsis: ''
    });
  }

  ngOnInit() {
    this.valueChangesSubscription = this.paginationConfigForm.valueChanges.subscribe((value) => {
      this.configChange.next(value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      this.paginationConfigForm.setValue(this.config);
    }
  }

  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }
}
