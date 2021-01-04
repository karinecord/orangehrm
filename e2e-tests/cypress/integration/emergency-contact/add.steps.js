// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormEmergencyContact } from '../../pages/emergency-contact/emergency-contact.page';

const formEmergencyContact = new FormEmergencyContact();
const messageSuccess = new MessagesComponent();

And(/^the user click on Emergency contact$/, () => {
  formEmergencyContact.getEmergencyContact();
});

And(/^the user click on Add$/, () => {
  formEmergencyContact.getAddEmergencyContact();
});

And(/^the user sets the informations providing Emergency contact$/, () => {
  cy.fixture('/model/emergencycontact').then((emergency) => {
    const emergencycontact = emergency.add;
    formEmergencyContact.fillEmgContactsName(emergencycontact.emgcontacts_name);
    formEmergencyContact.fillEmgContactsRelationship(emergencycontact.emgcontacts_relationship);
    formEmergencyContact.fillEmgContactsHomePhone(emergencycontact.emgcontacts_relationship);
    formEmergencyContact.fillEmgContactsHomePhone(emergencycontact.emgcontacts_homePhone);
    formEmergencyContact.fillEmgContactsMobilePhone(emergencycontact.emgcontacts_mobilePhone);
    formEmergencyContact.fillEmgContactsWorkPhone(emergencycontact.emgcontacts_workPhone);
  });

  And(/^the user click on Save$/, () => {
    formEmergencyContact.getSave();
  });

  Then(/^the system display a message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of emergency contact$/, () => {
    formEmergencyContact.getTableEmgContacts();
  });
});
