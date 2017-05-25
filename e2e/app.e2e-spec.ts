import { AngularUltimatePaginationExamplesPage } from './app.po';

describe('angular-ultimate-pagination-examples App', () => {
  let page: AngularUltimatePaginationExamplesPage;

  beforeEach(() => {
    page = new AngularUltimatePaginationExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
