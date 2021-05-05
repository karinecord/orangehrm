export class FormSalary {
  getSalary() {
    return cy.get('.selected').get('li').contains('Salary').click();
  }

  getTitle() {
    return cy.get('h1').contains('Assigned Salary Components');
  }

  getTableSalary() {
    return cy.get('#tblSalary').within(() => {
      cy.get('td.component').contains('Annual Basic Payment');
      cy.get('td').contains('Monthly');
      cy.get('td.currency').contains('Canadian Dollar');
      cy.get('td.amount').contains('30000');
      cy.get('td.comments').should('be.empty');
    });
  }

  getDisplayDirectDeposit() {
    if (cy.get('input.chkbox.displayDirectDeposit').check().should('be.checked')) {
      cy.get('td').contains('123');
      cy.get('td').contains('Savings');
      cy.get('td').contains('12');
      cy.get('td').contains('3000.00');
    } else {
      cy.get('input.chkbox.displayDirectDeposit').should('be.empty');
    }
    return this;
  }
}
