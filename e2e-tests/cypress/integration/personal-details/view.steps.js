// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormPersonalDetails } from '../../pages/personal-details/personal-details.page';

const formPersonalDetails = new FormPersonalDetails();

And(/^the user view all fields disabled and button edit visible$/, () => {
  formPersonalDetails.getFullName().should('be.disabled');
  formPersonalDetails.getMiddleName().should('be.disabled');
  formPersonalDetails.getLastName().should('be.disabled');
  formPersonalDetails.getOtherID().should('be.disabled');
  formPersonalDetails.getLicExpDate().should('be.disabled');
  formPersonalDetails.getOptGenderMale().should('be.disabled');
  formPersonalDetails.getOptGenderFemale().should('be.disabled');
  formPersonalDetails.getMarital().should('be.disabled');
  formPersonalDetails.getNation().should('be.disabled');
  formPersonalDetails.getEmployeeId().should('be.disabled');
  formPersonalDetails.getLicenNo().should('be.disabled');
  formPersonalDetails.getBirth().should('be.disabled');
  formPersonalDetails.getSaveButton().should('be.visible');
});
