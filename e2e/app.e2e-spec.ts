import { MrGutTemplatePage } from './app.po';

describe('MrGut App', function() {
  let page: MrGutTemplatePage;

  beforeEach(() => {
    page = new MrGutTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
