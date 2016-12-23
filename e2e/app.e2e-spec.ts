import { DirectivesWorkshopPage } from './app.po';

describe('directives-workshop App', function() {
  let page: DirectivesWorkshopPage;

  beforeEach(() => {
    page = new DirectivesWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('swat works!');
  });
});
