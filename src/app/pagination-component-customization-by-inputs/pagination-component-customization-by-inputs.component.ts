import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { getPaginationModel, PaginationModelItem, ITEM_TYPES } from 'ultimate-pagination';

@Component({
  selector: 'ultimate-pagination-component-customization-by-inputs',
  templateUrl: './pagination-component-customization-by-inputs.component.html',
  styleUrls: ['./pagination-component-customization-by-inputs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponentCustomizationByInputsComponent implements OnChanges {
  ITEM_TYPES;
  paginationModel: PaginationModelItem[];
  @Input() currentPage;
  @Input() totalPages;
  @Input() boundaryPagesRange;
  @Input() siblingPagesRange;
  @Input() hidePreviousAndNextPageLinks;
  @Input() hideFirstAndLastPageLinks;
  @Input() hideEllipsis;

  @Input() pageComponent;
  @Input() ellipsisComponent;
  @Input() firstPageLinkComponent;
  @Input() previousPageLinkComponent;
  @Input() nextPageLinkComponent;
  @Input() lastPageLinkComponent;

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

  getComponentForItem(item) {
    switch (item.type) {
      case this.ITEM_TYPES.PAGE: return this.pageComponent;
      case this.ITEM_TYPES.ELLIPSIS: return this.ellipsisComponent;
      case this.ITEM_TYPES.FIRST_PAGE_LINK: return this.firstPageLinkComponent;
      case this.ITEM_TYPES.PREVIOUS_PAGE_LINK: return this.previousPageLinkComponent;
      case this.ITEM_TYPES.NEXT_PAGE_LINK: return this.nextPageLinkComponent;
      case this.ITEM_TYPES.LAST_PAGE_LINK: return this.lastPageLinkComponent;
    }
  }

  trackByKey(index: number, item: PaginationModelItem): number {
    return item.key;
  }

  onItemActivate(item: PaginationModelItem) {
    this.currentPageChange.next(item.value);
  }
}
