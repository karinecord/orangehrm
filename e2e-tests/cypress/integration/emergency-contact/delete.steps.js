// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormEmergencyContact } from '../../pages/emergency-contact/emergency-contact.page';

const formEmergencyContact = new FormEmergencyContact();
const messageSuccess = new MessagesComponent();

And(/^the user click on Emergency contact$/, () => {
  formEmergencyContact.getEmergencyContact();
});

And(/^the user click on delete emergency contact$/, () => {
  formEmergencyContact.getDelete();
});

And(/^the user select a list emergency contact$/, () => {
  formEmergencyContact.getSelectTable();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
