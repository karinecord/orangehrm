export class FormLogin {
  constructor() {
    this.btnLogin = '#btnLogin';
    this.userName = '#txtUsername';
    this.password = '#txtPassword';
    this.pageHead = '.head';
  }

  // visit auth page
  visit() {
    cy.visit('/symfony/web/index.php/auth/login');
  }

  // login to app
  doLogin(username, password) {
    cy.get(this.userName).type(username);
    cy.get(this.password).type(password);
    cy.get(this.btnLogin).click();
  }

  // page head
  getPageHead() {
    return cy.get(this.pageHead);
  }
}
