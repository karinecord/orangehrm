export class FormReportTo {
  getReportTo() {
    return cy.get('.selected').get('li').contains('Report-to').click();
  }

  getTitleSupervisors() {
    return cy.get('#listReportToSupDetails').within(() => {
      cy.get('.head').get('h1').contains('Assigned Supervisors');
    });
  }

  getViewTableSupervisors() {
    return cy.get('form#frmEmpDelSupervisors').within(() => {
      cy.get('#sup_list').within(() => {
        cy.get('th.supName').contains('Name');
        cy.get('th.supReportMethod').contains('Reporting Method');
      });
    });
  }

  getTableSubordinates() {
    return cy.get('form#frmEmpDelSubordinates').within(() => {
      cy.get('th.supName').contains('Name');
      cy.get('th.supReportMethod').contains('Reporting Method');
    });
  }

  getViewTableAttachments() {
    return cy.get('form#frmEmpDelAttachments');
  }

  getDetailsSubordinates() {
    return cy.get('#listReportToSubDetails');
  }
}
