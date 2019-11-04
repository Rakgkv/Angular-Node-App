import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  nameInput() {
    return element(by.id('txtName'));
  }
  surnameInput() {
    return element(by.id('txtSurName'));
  }
  numberInput() {
    return element(by.id('txtNumber'));
  }

  birtdayInput() {
    return element(by.name('birthday'));
  }

  addressInput() {
    return element(by.id('txtAddress'));
  }

  clickOnSubmit() {
    return element(by.id('submitButton')).click();
  }

  isTableRendered() {
    return element(by.tagName('table')).isPresent();
  }
}








