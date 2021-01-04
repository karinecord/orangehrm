export class FormDependent {
  getDependents() {
    return cy.get('.selected').get('li').contains('Dependents').click();
  }

  getAddDependent() {
    cy.get('p#listActions').within(() => {
      cy.get('#btnAddDependent').click();
    });
  }

  getSelectTable() {
    return cy.get('.checkbox').check();
  }

  getDelete() {
    return cy.get('#delDependentBtn').click();
  }

  getDependentname() {
    return cy.get('#dependent_name');
  }

  fillDependentName(DEPENDENT_NAME) {
    this.getDependentname().clear().type(DEPENDENT_NAME);
  }

  getDependentRelationshipTypeChild() {
    return cy.get('#dependent_relationshipType').select('Child');
  }

  selectDepedentRelationshipTypeChild() {
    this.getDependentRelationshipTypeChild();
  }

  getDependentRelationshipTypeOther() {
    return cy.get('#dependent_relationshipType').select('Other');
  }

  selectDepedentRelationshipTypeOther() {
    this.getDependentRelationshipTypeOther();
  }

  getRelationshipDesc() {
    return cy.get('#dependent_relationship');
  }

  fillRelationshipDesc(relationshipDesc) {
    this.getRelationshipDesc().type(relationshipDesc);
  }

  getdependentDateOfBirth() {
    return cy.get('#dependent_dateOfBirth');
  }

  filldependentDateOfBirth(dependentDateOfBirth) {
    this.getdependentDateOfBirth().clear().type(dependentDateOfBirth);
  }

  getSave() {
    return cy.get('#btnSaveDependent').click();
  }

  getTableDependent() {
    return cy.get('#dependent_list');
  }
}
