export class FormSkill {
  getQualification() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddSkill() {
    cy.get('#actionSkill').within(() => {
      cy.get('#addSkill').click();
    });
  }

  getSkill() {
    return cy.get('#skill_code');
  }

  selectSkill(skill) {
    this.getSkill().select(skill);
  }

  getSkillYearsOfExp() {
    return cy.get('#skill_years_of_exp');
  }

  fillSkillYearsOfExp(skillYearsOfExp) {
    this.getSkillYearsOfExp().clear().type(skillYearsOfExp);
  }

  getSkillComments() {
    return cy.get('#skill_comments');
  }

  fillSkillComments(skillComments) {
    this.getSkillComments().clear().type(skillComments);
  }

  getSaveList() {
    return cy.get('#btnSkillSave').click();
  }

  getTableSkill() {
    return cy.get('form#frmDelSkill');
  }

  getDelete() {
    return cy.get('p#actionSkill').within(() => {
      cy.get('#delSkill').click();
    });
  }

  getSelectTable() {
    return cy.get('#skillCheckAll').check();
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
