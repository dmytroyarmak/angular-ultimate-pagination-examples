import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { getPaginationModel, PaginationModelItem, ITEM_TYPES } from 'ultimate-pagination';

@Component({
  selector: 'ultimate-pagination-explicit-template-customization',
  templateUrl: './pagination-explicit-template-customization.component.html',
  styleUrls: ['./pagination-explicit-template-customization.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationExplicitTemplateCustomizationComponent implements OnChanges {
  ITEM_TYPES;
  paginationModel: PaginationModelItem[];
  @Input() currentPage;
  @Input() totalPages;
  @Input() boundaryPagesRange;
  @Input() siblingPagesRange;
  @Input() hidePreviousAndNextPageLinks;
  @Input() hideFirstAndLastPageLinks;
  @Input() hideEllipsis;

  @Input() pageTemplateRef: TemplateRef<any>;
  @Input() ellipsisTemplateRef: TemplateRef<any>;
  @Input() firstPageLinkTemplateRef: TemplateRef<any>;
  @Input() previousPageLinkTemplateRef: TemplateRef<any>;
  @Input() nextPageLinkTemplateRef: TemplateRef<any>;
  @Input() lastPageLinkTemplateRef: TemplateRef<any>;

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

  getTemplateRefForItem(item) {
    switch (item.type) {
      case this.ITEM_TYPES.PAGE: return this.pageTemplateRef;
      case this.ITEM_TYPES.ELLIPSIS: return this.ellipsisTemplateRef;
      case this.ITEM_TYPES.FIRST_PAGE_LINK: return this.firstPageLinkTemplateRef;
      case this.ITEM_TYPES.PREVIOUS_PAGE_LINK: return this.previousPageLinkTemplateRef;
      case this.ITEM_TYPES.NEXT_PAGE_LINK: return this.nextPageLinkTemplateRef;
      case this.ITEM_TYPES.LAST_PAGE_LINK: return this.lastPageLinkTemplateRef;
    }
  }

  getContextForItem(item) {
    return {
      $implicit: item,
      onClick: this.onItemClick.bind(this, item)
    };
  }

  onItemClick(item: PaginationModelItem) {
    this.currentPageChange.next(item.value);
  }
}
