import { ProjectProductMangementPage } from './app.po';

describe('project-product-mangement App', () => {
  let page: ProjectProductMangementPage;

  beforeEach(() => {
    page = new ProjectProductMangementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
