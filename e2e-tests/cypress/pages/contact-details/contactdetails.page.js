export class FormContactDetails {
  getContactDetails() {
    return cy.get('.selected').get('li').contains('Contact Details').click();
  }

  getEditButton() {
    cy.get('#frmEmpContactDetails').within(() => {
      cy.get('#btnSave').click();
    });
  }

  getEditBtn() {
    return cy.get('#frmEmpContactDetails').within(() => {
      cy.get('#btnSave');
    });
  }

  getSaveButton() {
    cy.get('#frmEmpContactDetails').within(() => {
      cy.get('#btnSave').click();
    });
  }

  // Form contact details
  getAddressStreet1() {
    return cy.get('#contact_street1');
  }

  fillAddressStreet1(CONTACT_STREET1) {
    this.getAddressStreet1().clear().type(CONTACT_STREET1);
  }

  getCity() {
    return cy.get('#contact_city');
  }

  fillCity(city) {
    this.getCity().clear().type(city);
  }

  getContactProvince() {
    return cy.get('#contact_province');
  }

  fillContactProvince(CONTACT_PROVINCE) {
    this.getContactProvince().clear().type(CONTACT_PROVINCE);
  }

  getContactEmpZipCode() {
    return cy.get('#contact_emp_zipcode');
  }

  fillContactEmpZipCode(CONTACT_EMP_ZIPCODE) {
    this.getContactEmpZipCode().clear().type(CONTACT_EMP_ZIPCODE);
  }

  getContactCountry() {
    return cy.get('#contact_country').select('Brazil');
  }

  checkContactCountry() {
    return cy.get('#contact_country');
  }

  selectContactCountry(CONTACT_COUNTRY) {
    this.getContactCountry().type(CONTACT_COUNTRY);
  }

  getContactEmpHmTelephone() {
    return cy.get('#contact_emp_hm_telephone');
  }

  fillContactEmpHmTelephone(CONTACT_EMP_HM_TELEPHONE) {
    this.getContactEmpHmTelephone().clear().type(CONTACT_EMP_HM_TELEPHONE);
  }

  getContactEmpMobile() {
    return cy.get('#contact_emp_mobile');
  }

  fillContactEmpMobile(CONTACT_EMP_MOBILE_) {
    this.getContactEmpMobile().clear().type(CONTACT_EMP_MOBILE_);
  }

  getContactEmpWorkTelephone() {
    return cy.get('#contact_emp_work_telephone');
  }

  fillContactEmpWorkTelephone(CONTACT_EMP_WORK_TELEPHONE) {
    this.getContactEmpWorkTelephone().clear().type(CONTACT_EMP_WORK_TELEPHONE);
  }

  getContactEmpWorkEmail() {
    return cy.get('#contact_emp_work_email');
  }

  fillContactEmpWorkEmail(CONTACT_EMP_WORK_EMAIL) {
    this.getContactEmpWorkEmail().clear().type(CONTACT_EMP_WORK_EMAIL);
  }

  getContactEmpOthEmail() {
    return cy.get('#contact_emp_oth_email');
  }

  fillContactEmpOthEmail(CONTACT_EMP_OTH_EMAIL) {
    this.getContactEmpOthEmail().clear().type(CONTACT_EMP_OTH_EMAIL);
  }
}
