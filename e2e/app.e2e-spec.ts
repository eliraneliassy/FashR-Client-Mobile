import { FashRClientMobilePage } from './app.po';

describe('fash-r-client-mobile App', () => {
  let page: FashRClientMobilePage;

  beforeEach(() => {
    page = new FashRClientMobilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
