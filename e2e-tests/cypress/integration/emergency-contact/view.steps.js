// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormEmergencyContact } from '../../pages/emergency-contact/emergency-contact.page';

const formEmergencyContact = new FormEmergencyContact();

And(/^the user click on Emergency contact$/, () => {
  formEmergencyContact.getEmergencyContact();
});

And(/^the system display a list of emergency contact with save and delete button$/, () => {
  formEmergencyContact.getHead().should('be.visible');
  formEmergencyContact.getSaveList().should('be.visible');
  formEmergencyContact.getDeleteView().should('be.disabled');
  formEmergencyContact.getTableEmgContacts().should('be.visible');
  formEmergencyContact.getListEmergencyContact().should('be.visible');
});
