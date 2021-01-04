export class FormLicense {
  getQualification() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddLicense() {
    cy.get('#actionLicense').within(() => {
      cy.get('#addLicense').click();
    });
  }

  getLicenceCode() {
    return cy.get('#license_code');
  }

  selectLicenseCode(code) {
    this.getLicenceCode().select(code);
  }

  getLicenseNum() {
    return cy.get('#license_license_no');
  }

  fillLicenseNum(num) {
    this.getLicenseNum().clear().type(num);
  }

  getLicenseDate() {
    return cy.get('input[name="license[date]"]').invoke('val').then(() => {
      cy.get('#license_date').click();
    });
  }

  fillLicenseDate(date) {
    this.getLicenseDate().clear().type(date);
    cy.get('#headChangeLicense').click();
  }

  getRenewalDate() {
    return cy.get('input[name="license[renewal_date]"]').invoke('val').then(() => {
      cy.get('#license_renewal_date').click();
    });
  }

  fillRenewalDate(renewaldate) {
    this.getRenewalDate().clear().type(renewaldate);
    cy.get('#headChangeLicense').click();
  }

  getSaveList() {
    return cy.get('#btnLicenseSave').click();
  }

  getTableLicense() {
    return cy.get('#tblLicense');
  }

  getDelete() {
    return cy.get('p#actionLicense').within(() => {
      cy.get('#delLicense').click();
    });
  }

  getSelectTable() {
    return cy.get('#licenseCheckAll').check();
  }

  getListEmergencyContact() {
    return cy.get('#emgcontact_list');
  }

  getHead() {
    return cy.get('#listEmegrencyContact').within(() => {
      cy.get('h1').contains('Assigned Emergency Contacts');
    });
  }
}
