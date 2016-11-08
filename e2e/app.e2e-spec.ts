import { SmarthomePage } from './app.po';

describe('smarthome App', function() {
  let page: SmarthomePage;

  beforeEach(() => {
    page = new SmarthomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
