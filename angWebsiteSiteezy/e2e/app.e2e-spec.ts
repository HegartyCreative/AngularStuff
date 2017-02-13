import { SeanPage } from './app.po';

describe('sean App', function() {
  let page: SeanPage;

  beforeEach(() => {
    page = new SeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
