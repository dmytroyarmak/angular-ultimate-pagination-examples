import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, Inject } from '@angular/core';
import { getPaginationModel, PaginationModelItem, ITEM_TYPES } from 'ultimate-pagination';
import { PAGE_COMPONENT, ELLIPSIS_COMPONENT, FIRST_PAGE_LINK_COMPONENT, PREVIOUS_PAGE_LINK_COMPONENT, NEXT_PAGE_LINK_COMPONENT, LAST_PAGE_LINK_COMPONENT } from '../constants';

@Component({
  selector: 'ultimate-pagination-component-customization-by-di',
  templateUrl: './pagination-component-customization-by-di.component.html',
  styleUrls: ['./pagination-component-customization-by-di.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponentCustomizationByDiComponent implements OnChanges {
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

  constructor(
    @Inject(PAGE_COMPONENT) private pageComponent,
    @Inject(ELLIPSIS_COMPONENT) private ellipsisComponent,
    @Inject(FIRST_PAGE_LINK_COMPONENT) private firstPageLinkComponent,
    @Inject(PREVIOUS_PAGE_LINK_COMPONENT) private previousPageLinkComponent,
    @Inject(NEXT_PAGE_LINK_COMPONENT) private nextPageLinkComponent,
    @Inject(LAST_PAGE_LINK_COMPONENT) private lastPageLinkComponent
  ) {
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
