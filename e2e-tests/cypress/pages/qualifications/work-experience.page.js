export class FormWorkExperience {
  getQualifications() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddWorkExperience() {
    cy.get('#actionWorkExperience').within(() => {
      cy.get('#addWorkExperience').click();
    });
  }

  getCompany() {
    return cy.get('#experience_employer');
  }

  fillCompany(EXPERIENCE_EMPLOYER) {
    this.getCompany().clear().type(EXPERIENCE_EMPLOYER);
  }

  getJobTitle() {
    return cy.get('#experience_jobtitle');
  }

  fillJobTitle(EXPERIENCE_JOBTITLE) {
    this.getJobTitle().clear().type(EXPERIENCE_JOBTITLE);
  }

  getExpFromDate() {
    return cy.get('input[name="experience[from_date]"]').invoke('val').then(() => {
      cy.get('#experience_from_date').click();
    });
  }

  selectExpFromDate(EXPERIENCE_FROM_DATE) {
    this.getExpFromDate().clear().type(EXPERIENCE_FROM_DATE);
    cy.get('#headChangeWorkExperience').click();
  }

  getExpToDate() {
    return cy.get('input[name="experience[to_date]"]').invoke('val').then(() => {
      cy.get('#experience_to_date').click();
    });
  }

  selectExpToDate(EXPERIENCE_TO_DATE) {
    this.getExpToDate().clear().type(EXPERIENCE_TO_DATE);
    cy.get('#headChangeWorkExperience').click();
  }

  getExpcomments() {
    return cy.get('#experience_comments').click({ multiple: true });
  }

  fillExpcomments(EXPERIENCE_COMMENTS) {
    this.getExpcomments().clear().type(EXPERIENCE_COMMENTS);
  }

  getSave() {
    return cy.get('#btnWorkExpSave').click();
  }

  getSaveList() {
    return cy.get('#btnAddContact');
  }

  getTableWorkExperience() {
    return cy.get('form#frmDelWorkExperience');
  }

  getDelete() {
    return cy.get('p#actionWorkExperience').within(() => {
      cy.get('#delWorkExperience').click();
    });
  }

  getSelectTable() {
    return cy.get('.chkbox1').check();
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
