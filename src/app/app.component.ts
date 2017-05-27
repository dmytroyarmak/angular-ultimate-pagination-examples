import { Component } from '@angular/core';

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
}
