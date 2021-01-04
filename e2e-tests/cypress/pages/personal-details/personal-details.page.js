export class FormPersonalDetails {
  getPersonalDetails() {
    return cy.get('.selected').get('li').contains('Personal Details').click();
  }

  getEditButton() {
    cy.get('#frmEmpPersonalDetails').within(() => {
      cy.get('#btnSave').click();
    });
  }

  // Form personal details
  getFullName() {
    return cy.get('#personal_txtEmpFirstName');
  }

  fillFullName(fullName) {
    this.getFullName().type(fullName);
  }

  getMiddleName() {
    return cy.get('#personal_txtEmpMiddleName');
  }

  fillMiddleName(middleName) {
    this.getMiddleName().clear().type(middleName);
  }

  getLastName() {
    return cy.get('#personal_txtEmpLastName');
  }

  fillLastName(lastName) {
    this.getLastName().clear().type(lastName);
  }

  getOtherID() {
    return cy.get('#personal_txtOtherID');
  }

  fillOtherID(otherID) {
    this.getOtherID().clear().type(otherID);
  }

  getLicExpDate() {
    return cy.get('#personal_txtLicExpDate');
  }

  fillLicExpDate(date) {
    this.getLicExpDate().clear().type(date);
  }

  getOptGenderMale() {
    return cy.get('#personal_optGender_1');
  }

  checkOptGenderMale() {
    this.getOptGenderMale().check();
  }

  getOptGenderFemale() {
    return cy.get('#personal_optGender_2');
  }

  checkOptGenderFemale() {
    this.getOptGenderFemale().check();
  }

  getMarital() {
    return cy.get('#personal_cmbMarital');
  }

  selectMarital(marital) {
    this.getMarital().select(marital, { force: true });
  }

  getNation() {
    return cy.get('#personal_cmbNation');
  }

  selectNation(nation) {
    this.getNation().select(nation);
  }

  getSaveButton() {
    return cy.get('#frmEmpPersonalDetails').within(() => {
      cy.get('#btnSave').click();
    });
  }

  // disable fields
  getEmployeeId() {
    return cy.get('#personal_txtEmployeeId');
  }

  getLicenNo() {
    return cy.get('#personal_txtLicenNo');
  }

  getBirth() {
    return cy.get('#personal_DOB');
  }
}
