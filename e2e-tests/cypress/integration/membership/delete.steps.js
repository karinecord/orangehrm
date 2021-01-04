// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormMembership } from '../../pages/membership/membership.page';

const formMembership = new FormMembership();
const messageSuccess = new MessagesComponent();

And(/^the user click on memberships$/, () => {
  formMembership.getMembership();
});

And(/^the user select a membership inter the list$/, () => {
  formMembership.getSelectTable();
});

And(/^the user click on delete a membership$/, () => {
  formMembership.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
