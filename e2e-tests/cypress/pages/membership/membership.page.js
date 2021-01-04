export class FormMembership {
  getMembership() {
    return cy.get('.selected').get('li').contains('Memberships').click();
  }

  getAddMembership() {
    cy.get('#listActions').within(() => {
      cy.get('#btnAddMembershipDetail').click();
    });
  }

  getMember() {
    return cy.get('#membership_membership');
  }

  selectMembership(membership) {
    this.getMember().select(membership);
  }

  getMembershipSubscriptionPaidBy() {
    return cy.get('#membership_subscriptionPaidBy');
  }

  selectMembershipSubscriptionPaidBy(paidBy) {
    this.getMembershipSubscriptionPaidBy().select(paidBy);
  }

  getMembershipSubscriptionAmount() {
    return cy.get('#membership_subscriptionAmount').click();
  }

  fillMembershipSubscriptionAmount(subscriptionAmount) {
    this.getMembershipSubscriptionAmount().clear().type(subscriptionAmount);
  }

  getMembershipCurrency() {
    return cy.get('#membership_currency');
  }

  selectMembershipCurrency(currency) {
    this.getMembershipCurrency().select(currency);
  }

  getMembershipSubscriptionCommenceDate() {
    return cy.get('input[name="membership[subscriptionCommenceDate]"]').invoke('val').then(() => {
      cy.get('#membership_subscriptionCommenceDate').click();
    });
  }

  fillMembership(date) {
    this.getMembershipSubscriptionCommenceDate().clear().type(date);
    cy.get('#membershipHeading').click();
  }

  getMembershipSubscriptionRenewalDate() {
    return cy.get('input[name="membership[subscriptionRenewalDate]"]').invoke('val').then(() => {
      cy.get('#membership_subscriptionRenewalDate').click();
    });
  }

  fillMembershipSubscriptionRenewalDate(date) {
    this.getMembershipSubscriptionRenewalDate().clear().type(date);
  }

  getSaveList() {
    return cy.get('#btnSaveMembership').click();
  }

  getDelete() {
    return cy.get('p#listActions').within(() => {
      cy.get('#delMemsBtn').click();
    });
  }

  getTableMembership() {
    return cy.get('form#frmEmpDelMemberships');
  }

  getSelectTable() {
    return cy.get('#checkAllMem').check();
  }
}
