import { GroundPage } from './app.po';

describe('ground App', function() {
  let page: GroundPage;

  beforeEach(() => {
    page = new GroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
