import { Directive } from '@angular/core';
import { PAGE_COMPONENT, ELLIPSIS_COMPONENT, FIRST_PAGE_LINK_COMPONENT, PREVIOUS_PAGE_LINK_COMPONENT, NEXT_PAGE_LINK_COMPONENT, LAST_PAGE_LINK_COMPONENT } from '../constants';
import { PaginationItemPageComponent } from '../pagination-item-page/pagination-item-page.component';
import { PaginationItemEllipsisComponent } from '../pagination-item-ellipsis/pagination-item-ellipsis.component';
import { PaginationItemFirstPageComponent } from '../pagination-item-first-page/pagination-item-first-page.component';
import { PaginationItemPreviousPageComponent } from '../pagination-item-previous-page/pagination-item-previous-page.component';
import { PaginationItemNextPageComponent } from '../pagination-item-next-page/pagination-item-next-page.component';
import { PaginationItemLastPageComponent } from '../pagination-item-last-page/pagination-item-last-page.component';

@Directive({
  selector: '[ultimatePaginationThemeBasic]',
  providers: [
    {provide: PAGE_COMPONENT, useValue: PaginationItemPageComponent},
    {provide: ELLIPSIS_COMPONENT, useValue: PaginationItemEllipsisComponent},
    {provide: FIRST_PAGE_LINK_COMPONENT, useValue: PaginationItemFirstPageComponent},
    {provide: PREVIOUS_PAGE_LINK_COMPONENT, useValue: PaginationItemPreviousPageComponent},
    {provide: NEXT_PAGE_LINK_COMPONENT, useValue: PaginationItemNextPageComponent},
    {provide: LAST_PAGE_LINK_COMPONENT, useValue: PaginationItemLastPageComponent}
  ]
})
export class PaginationThemeBasicDirective {}
