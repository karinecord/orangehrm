// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormContactDetails } from '../../pages/contact-details/contactdetails.page';

const formContactDetails = new FormContactDetails();

And(/^the user view all fields desabilited and button edit$/, () => {
  // to check if all fields there are values disabled
  cy.fixture('/model/contactdetails').then(() => {
    formContactDetails.getAddressStreet1().should('be.disabled');
    formContactDetails.getCity().should('be.disabled');
    formContactDetails.getContactProvince().should('be.disabled');
    formContactDetails.getContactEmpZipCode().should('be.disabled');
    formContactDetails.checkContactCountry().should('be.disabled');
    formContactDetails.getContactEmpHmTelephone().should('be.disabled');
    formContactDetails.getContactEmpMobile().should('be.disabled');
    formContactDetails.getContactEmpWorkTelephone().should('be.disabled');
    formContactDetails.getContactEmpWorkEmail().should('be.disabled');
    formContactDetails.getContactEmpOthEmail().should('be.disabled');
    formContactDetails.getEditBtn().should('be.visible');
  });
});
