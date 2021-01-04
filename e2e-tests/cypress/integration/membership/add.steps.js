// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormMembership } from '../../pages/membership/membership.page';

const formMembership = new FormMembership();
const messageSuccess = new MessagesComponent();

And(/^the user click on memberships$/, () => {
  formMembership.getMembership();
});

And(/^the user click on Add$/, () => {
  formMembership.getAddMembership();
});

And(/^the user sets the informations about the membership$/, () => {
  cy.fixture('/model/membership').then((memb) => {
    const member = memb.addMembership;
    formMembership.selectMembership(member.membership_membership);
    formMembership.selectMembershipSubscriptionPaidBy(member.membership_subscriptionPaidBy);
    formMembership.fillMembershipSubscriptionAmount(member.membership_subscriptionAmount);
    formMembership.selectMembershipCurrency(member.membership_currency);
    formMembership.fillMembership(member.membership_subscriptionCommenceDate);
    formMembership.fillMembershipSubscriptionRenewalDate(member.membership_subscriptionRenewalDate);
  });
});

And(/^the user click on Save$/, () => {
  formMembership.getSaveList();
});

Then(/^the system display a message Successfully Saved$/, () => {
  messageSuccess.getSuccess();
});

And(/^the user view the list of membership$/, () => {
  formMembership.getTableMembership();
});
