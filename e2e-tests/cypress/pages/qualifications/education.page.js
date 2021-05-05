export class FormEducation {
  getQualification() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddEducation() {
    cy.get('#actionEducation').within(() => {
      cy.get('#addEducation').click();
    });
  }

  getLevel() {
    return cy.get('#education_code').select("Bacharelor's Degree");
  }

  getInstitute() {
    return cy.get('#education_institute');
  }

  fillInstitute(Institute) {
    this.getInstitute().clear().type(Institute);
  }

  getMajor() {
    return cy.get('#education_major');
  }

  fillMajor(major) {
    this.getMajor().clear().type(major);
  }

  getYear() {
    return cy.get('#education_year');
  }

  fillYear(year) {
    this.getYear().clear().type(year);
  }

  getGPA() {
    return cy.get('#education_gpa');
  }

  fillGPA(gpa) {
    this.getGPA().clear().type(gpa);
  }

  getStartDate() {
    return cy.get('#education_start_date').click({ multiple: true });
  }

  fillStartDate(START_DATE) {
    this.getStartDate().clear().type(START_DATE);
  }

  getEndtDate() {
    return cy.get('#education_end_date').click({ multiple: true });
  }

  fillStart(END_DATE) {
    this.getEndtDate().clear().type(END_DATE);
  }

  getSaveList() {
    return cy.get('#btnEducationSave').click();
  }

  getTableEducation() {
    return cy.get('form#frmDelEducation');
  }

  getDelete() {
    return cy.get('#educationCheckAll').get('#delEducation').click();
  }

  getSelectTable() {
    return cy.get('.chkbox').first().check();
  }

  getListEmergencyContact() {
    return cy.get('#emgcontact_list');
  }

  getHead() {
    return this.cy.get('#listEmegrencyContact').within(() => {
      cy.get('h1').contains('Assigned Emergency Contacts');
    });
  }
}
