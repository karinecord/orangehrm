// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormPersonalDetails } from '../../pages/personal-details/personal-details.page';

const formPersonalDetails = new FormPersonalDetails();
const messageSuccess = new MessagesComponent();

And(/^the user click on the personal details$/, () => {
  formPersonalDetails.getPersonalDetails();
});

And(/^the user click on edit a personal details$/, () => {
  formPersonalDetails.getEditButton();
});

And(/^the user sets the informations about a personal details$/, () => {
  cy.fixture('/model/personal-details').then((personal) => {
    const personalDetails = personal.edit;
    formPersonalDetails.fillFullName(personalDetails.personal_txtEmpFirstName);
    formPersonalDetails.fillMiddleName(personalDetails.personal_txtEmpMiddleName);
    formPersonalDetails.fillLastName(personalDetails.personal_txtEmpLastName);
    formPersonalDetails.fillOtherID(personalDetails.personal_txtOtherID);
    formPersonalDetails.fillLicExpDate(personalDetails.personal_txtLicExpDate);
    formPersonalDetails.checkOptGenderMale(personalDetails.personal_optGender_1);
    formPersonalDetails.selectMarital(personalDetails.personal_cmbMarital);
    formPersonalDetails.selectNation(personalDetails.personal_cmbNation);
    formPersonalDetails.getEmployeeId().should('be.disabled');
    formPersonalDetails.getLicenNo().should('be.disabled');
    formPersonalDetails.getBirth().should('be.disabled');
  });
});

And(/^the user click on save a personal details$/, () => {
  formPersonalDetails.getSaveButton();
});

Then(/^the system display a message Successfully Saved from a user$/, () => {
  messageSuccess.getSuccess().contains('Successfully Saved').should('be.visible');
});
