export class FormEmergencyContact {
  getEmergencyContact() {
    return cy.get('.selected').get('li').contains('Emergency Contacts').click();
  }

  getAddEmergencyContact() {
    cy.get('p#listActions').within(() => {
      cy.get('#btnAddContact').click();
    });
  }

  getEmgContactsName() {
    return cy.get('#emgcontacts_name');
  }

  fillEmgContactsName(EMGCONTACTS_NAME) {
    this.getEmgContactsName().clear().type(EMGCONTACTS_NAME);
  }

  getEmgContactsRelationship() {
    return cy.get('#emgcontacts_relationship');
  }

  fillEmgContactsRelationship(EMGCONTACTS_RELATIONSHIP) {
    this.getEmgContactsRelationship().clear().type(EMGCONTACTS_RELATIONSHIP);
  }

  getEmgContactsHomePhone() {
    return cy.get('#emgcontacts_homePhone');
  }

  fillEmgContactsHomePhone(EMGCONTACTS_HOMEPHONE) {
    this.getEmgContactsHomePhone().clear().type(EMGCONTACTS_HOMEPHONE);
  }

  getEmgContactsMobilePhone() {
    return cy.get('#emgcontacts_mobilePhone');
  }

  fillEmgContactsMobilePhone(EMGCONTACTS_MOBILEPHONE) {
    this.getEmgContactsMobilePhone().clear().type(EMGCONTACTS_MOBILEPHONE);
  }

  getEmgContactsWorkPhone() {
    return cy.get('#emgcontacts_workPhone');
  }

  fillEmgContactsWorkPhone(EMGCONTACTS_WORKPHONE) {
    this.getEmgContactsWorkPhone().clear().type(EMGCONTACTS_WORKPHONE);
  }

  getSave() {
    return cy.get('#btnSaveEContact').click();
  }

  getSaveList() {
    return cy.get('#btnAddContact');
  }

  getTableEmgContacts() {
    return cy.get('#emgcontact_list');
  }

  getDelete() {
    return cy.get('#delContactsBtn').click();
  }

  getDeleteView() {
    return cy.get('input#delContactsBtn');
  }

  getSelectTable() {
    return cy.get('.checkbox').check();
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
