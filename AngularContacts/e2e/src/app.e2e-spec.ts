import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('AngularContacts app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
  it('should display contact page with all Ui elements with table', async () => {
    await page.navigateTo();
    await page.nameInput();
    await page.surnameInput();
    await page.numberInput();
    await page.birtdayInput();
    await page.addressInput();
    const isTableRendered = await page.isTableRendered();
    expect(isTableRendered).toBeTruthy();
  });
});





