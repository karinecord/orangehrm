// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormDependent } from '../../pages/dependent/dependent.page';

const formDependent = new FormDependent();
const messageSuccess = new MessagesComponent();

And(/^the user click on Dependent$/, () => {
  formDependent.getDependents();
});

And(/^the user select a list dependent$/, () => {
  formDependent.getSelectTable();
});

And(/^the user click on delete dependent$/, () => {
  formDependent.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
