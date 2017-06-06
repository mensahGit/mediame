import { MediamePage } from './app.po';

describe('mediame App', () => {
  let page: MediamePage;

  beforeEach(() => {
    page = new MediamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
