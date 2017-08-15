import { ServicesDemoPage } from './app.po';

describe('services-demo App', () => {
  let page: ServicesDemoPage;

  beforeEach(() => {
    page = new ServicesDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
