export class FormAttachment {
  getQualification() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddAttachment() {
    cy.get('#attachmentActions').within(() => {
      cy.get('#btnAddAttachment').click();
    });
  }

  getFileUpload() {
    return cy.get('#ufile');
  }

  getTxtAtDesc() {
    return cy.get('#txtAttDesc');
  }

  fillTxtAtDesc(txt) {
    this.getTxtAtDesc().clear().type(txt);
  }

  getUpload() {
    return cy.get('#btnSaveAttachment').click();
  }

  getTableAttachment() {
    return cy.get('#attachmentList');
  }

  getDelete() {
    return cy.get('p#attachmentActions').within(() => {
      cy.get('#btnDeleteAttachment').click();
    });
  }

  getSelectTable() {
    return cy.get('#attachmentsCheckAll').check();
  }
}
