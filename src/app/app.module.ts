import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginationConfigFormComponent } from './pagination-config-form/pagination-config-form.component';
import { PaginationWithoutCustomizationComponent } from './pagination-without-customization/pagination-without-customization.component';
import { PaginationExplicitTemplateCustomizationComponent } from './pagination-explicit-template-customization/pagination-explicit-template-customization.component';
import { PaginationImplicitTemplateCustomizationComponent } from './pagination-implicit-template-customization/pagination-implicit-template-customization.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationConfigFormComponent,
    PaginationWithoutCustomizationComponent,
    PaginationExplicitTemplateCustomizationComponent,
    PaginationImplicitTemplateCustomizationComponent
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
