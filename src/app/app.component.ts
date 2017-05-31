import { Component } from '@angular/core';

import { PaginationItemPageComponent } from './pagination-item-page/pagination-item-page.component';
import { PaginationItemEllipsisComponent } from './pagination-item-ellipsis/pagination-item-ellipsis.component';
import { PaginationItemFirstPageComponent } from './pagination-item-first-page/pagination-item-first-page.component';
import { PaginationItemPreviousPageComponent } from './pagination-item-previous-page/pagination-item-previous-page.component';
import { PaginationItemNextPageComponent } from './pagination-item-next-page/pagination-item-next-page.component';
import { PaginationItemLastPageComponent } from './pagination-item-last-page/pagination-item-last-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
      totalPages: 10,
      currentPage: 1,
      boundaryPagesRange: 1,
      siblingPagesRange: 1,
      hidePreviousAndNextPageLinks: false,
      hideFirstAndLastPageLinks: false,
      hideEllipsis: false
  };

  pageComponent = PaginationItemPageComponent;
  ellipsisComponent = PaginationItemEllipsisComponent;
  firstPageLinkComponent = PaginationItemFirstPageComponent;
  previousPageLinkComponent = PaginationItemPreviousPageComponent;
  nextPageLinkComponent = PaginationItemNextPageComponent;
  lastPageLinkComponent = PaginationItemLastPageComponent;
}
