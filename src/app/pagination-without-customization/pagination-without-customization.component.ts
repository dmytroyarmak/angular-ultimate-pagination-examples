import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { getPaginationModel, PaginationModelItem, ITEM_TYPES } from 'ultimate-pagination';

@Component({
  selector: 'ultimate-pagination-without-customization',
  templateUrl: './pagination-without-customization.component.html',
  styleUrls: ['./pagination-without-customization.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationWithoutCustomizationComponent implements OnChanges {
  ITEM_TYPES;
  paginationModel: PaginationModelItem[];
  @Input() currentPage;
  @Input() totalPages;
  @Input() boundaryPagesRange;
  @Input() siblingPagesRange;
  @Input() hidePreviousAndNextPageLinks;
  @Input() hideFirstAndLastPageLinks;
  @Input() hideEllipsis;

  @Output() currentPageChange = new EventEmitter();

  constructor() {
    this.ITEM_TYPES = ITEM_TYPES;
  }

  ngOnChanges() {
    this.paginationModel = getPaginationModel({
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      boundaryPagesRange: this.boundaryPagesRange,
      siblingPagesRange: this.siblingPagesRange,
      hidePreviousAndNextPageLinks: this.hidePreviousAndNextPageLinks,
      hideFirstAndLastPageLinks: this.hideFirstAndLastPageLinks,
      hideEllipsis: this.hideEllipsis
    });
  }

  trackByKey(index: number, item: PaginationModelItem): number {
    return item.key;
  }

  onItemClick(item: PaginationModelItem) {
    this.currentPageChange.next(item.value);
  }
}
