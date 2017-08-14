import { InputsOutputsPage } from './app.po';

describe('inputs-outputs App', () => {
  let page: InputsOutputsPage;

  beforeEach(() => {
    page = new InputsOutputsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
