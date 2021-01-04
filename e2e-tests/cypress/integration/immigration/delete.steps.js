// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormImmigration } from '../../pages/immigration/immigration.page';

const formImmigration = new FormImmigration();
const messageSuccess = new MessagesComponent();

And(/^the user click on immigration$/, () => {
  formImmigration.getImmigration();
});

And(/^the user select a list immigration$/, () => {
  formImmigration.getSelectTable();
});

And(/^the user click on delete an immigration$/, () => {
  formImmigration.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
