import { CastPage } from './app.po';

describe('cast App', function() {
  let page: CastPage;

  beforeEach(() => {
    page = new CastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
