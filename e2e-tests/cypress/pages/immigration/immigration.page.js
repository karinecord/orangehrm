export class FormImmigration {
  getImmigration() {
    return cy.get('.selected').get('li').contains('Immigration').click();
  }

  getAddImmigration() {
    cy.get('#listActions').within(() => {
      cy.get('#btnAdd').click();
    });
  }

  getImmigrationTypePassport() {
    return cy.get('#immigration_type_flag_1').should('be.visible') // Passes
      .check({ multiple: true }).should('be.checked');
  }

  getImmigrationTypeVisa() {
    return cy.get('#immigration_type_flag_2').should('be.visible') // Passes
      .check({ multiple: true }).should('be.checked');
  }

  getNumber() {
    return cy.get('#immigration_number');
  }

  fillNumber(number) {
    this.getNumber().clear().type(number);
  }

  getImmigrationPassportIssueDate() {
    return cy.get('input[name="immigration[passport_issue_date]"]').invoke('val').then(() => {
      cy.get('#immigration_passport_issue_date').click();
    });
  }

  fillImmigrationPassportIssueDate(passportIssueDate) {
    this.getImmigrationPassportIssueDate().type(passportIssueDate);
    cy.get('#immigrationHeading').click();
  }

  getImmigrationPassportExpireDate() {
    return cy.get('input[name="immigration[passport_expire_date]"]').invoke('val').then(() => {
      cy.get('#immigration_passport_expire_date').click();
    });
  }

  fillImmigrationPassportExpireDate(expireDate) {
    this.getImmigrationPassportExpireDate().type(expireDate).click();
    cy.get('#immigrationHeading').click();
  }

  getImmigrationI9Status() {
    return cy.get('#immigration_i9_status');
  }

  fillImmigrationI9Status(status) {
    this.getImmigrationI9Status().type(status);
  }

  getImmigrationCountry() {
    return cy.get('#immigration_country').select('Brazil');
  }

  selectContactCountry(country) {
    this.getImmigrationCountry().type(country);
  }

  fillImmigrationCountry(country) {
    this.getImmigrationCountry().type(country);
  }

  getImmigrationI9ReviewDate() {
    return cy.get('#immigration_i9_review_date');
  }

  fillImmigrationI9ReviewDate(review) {
    this.getImmigrationI9ReviewDate().type(review);
    cy.get('#immigrationHeading').click();
  }

  getImmigrationComments() {
    return cy.get('#immigration_comments');
  }

  fillImmigrationComments(comments) {
    this.getImmigrationComments().type(comments);
  }

  getSave() {
    return cy.get('#btnSave').click();
  }

  getTableImmigration() {
    return cy.get('#immidrationList');
  }

  getDelete() {
    return cy.get('#btnDelete').click();
  }

  getSelectTable() {
    return cy.get('.checkbox').check();
  }
}
