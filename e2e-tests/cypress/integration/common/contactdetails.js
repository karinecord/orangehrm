// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormContactDetails } from '../../pages/contact-details/contactdetails.page';

const formContactDetails = new FormContactDetails();

And(/^the user click on the Contact Details$/, () => {
  formContactDetails.getContactDetails().click();
});
