export class MessagesComponent {
  constructor() {
    this.warning = 'div.message.warning.fadable';
    this.success = 'div.message.success.fadable';
    this.warn = 'div.message.warning';
    this.msgfail = 'span#spanMessage';
  }

  getWarning() {
    return cy.get(this.warning);
  }

  getSuccess() {
    return cy.get('div.message.success.fadable');
  }

  getWarn() {
    return cy.get('div.message.warning');
  }

  getMessage() {
    return cy.get('span#spanMessage');
  }
}
