import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginationConfigFormComponent } from './pagination-config-form/pagination-config-form.component';
import { PaginationWithoutCustomizationComponent } from './pagination-without-customization/pagination-without-customization.component';
import { PaginationExplicitTemplateCustomizationComponent } from './pagination-explicit-template-customization/pagination-explicit-template-customization.component';
import { PaginationImplicitTemplateCustomizationComponent } from './pagination-implicit-template-customization/pagination-implicit-template-customization.component';
import { PaginationComponentCustomizationByInputsComponent } from './pagination-component-customization-by-inputs/pagination-component-customization-by-inputs.component'
import { PaginationItemPageComponent } from './pagination-item-page/pagination-item-page.component';
import { PaginationItemEllipsisComponent } from './pagination-item-ellipsis/pagination-item-ellipsis.component';
import { PaginationItemFirstPageComponent } from './pagination-item-first-page/pagination-item-first-page.component';
import { PaginationItemPreviousPageComponent } from './pagination-item-previous-page/pagination-item-previous-page.component';
import { PaginationItemNextPageComponent } from './pagination-item-next-page/pagination-item-next-page.component';
import { PaginationItemLastPageComponent } from './pagination-item-last-page/pagination-item-last-page.component';
import { PaginationItemComponentOutletDirective } from './pagination-item-component-outlet/pagination-item-component-outlet.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaginationConfigFormComponent,
    PaginationWithoutCustomizationComponent,
    PaginationExplicitTemplateCustomizationComponent,
    PaginationImplicitTemplateCustomizationComponent,
    PaginationComponentCustomizationByInputsComponent,
    PaginationItemPageComponent,
    PaginationItemEllipsisComponent,
    PaginationItemFirstPageComponent,
    PaginationItemPreviousPageComponent,
    PaginationItemNextPageComponent,
    PaginationItemLastPageComponent,
    PaginationItemComponentOutletDirective
  ],
  entryComponents: [
    PaginationItemPageComponent,
    PaginationItemEllipsisComponent,
    PaginationItemFirstPageComponent,
    PaginationItemPreviousPageComponent,
    PaginationItemNextPageComponent,
    PaginationItemLastPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
