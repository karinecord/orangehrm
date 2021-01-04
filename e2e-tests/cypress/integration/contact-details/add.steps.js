// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormContactDetails } from '../../pages/contact-details/contactdetails.page';

const formContactDetails = new FormContactDetails();
const messageSuccess = new MessagesComponent();

And(/^the user click on the Contact Details$/, () => {
  formContactDetails.getContactDetails();
});

And(/^the user click on Edit$/, () => {
  formContactDetails.getEditButton();
});

And(/^the user sets the informations$/, () => {
  cy.fixture('/model/contactdetails').then((contact) => {
    const contactDetails = contact.editContact1;
    formContactDetails.fillAddressStreet1(contactDetails.contact_street1);
    formContactDetails.fillCity(contactDetails.contact_city);
    formContactDetails.fillContactProvince(contactDetails.contact_province);
    formContactDetails.fillContactEmpZipCode(contactDetails.contact_emp_zipcode);
    formContactDetails.selectContactCountry(contactDetails.contact_country);
    formContactDetails.fillContactEmpHmTelephone(contactDetails.contact_emp_hm_telephone);
    formContactDetails.fillContactEmpMobile(contactDetails.contact_emp_mobile);
    formContactDetails.fillContactEmpWorkTelephone(contactDetails.contact_emp_work_telephone);
    formContactDetails.fillContactEmpWorkEmail(contactDetails.contact_emp_work_email);
    formContactDetails.fillContactEmpOthEmail(contactDetails.contact_emp_oth_email);
  });
});

And(/^the user click on Save$/, () => {
  formContactDetails.getSaveButton();
});

Then(/^the system display a message Successfully Saved$/, () => {
  messageSuccess.getSuccess().contains('Successfully Saved').should('be.visible');
  // reload the page
  cy.reload();

  // to check if all fields there are values updated
  cy.fixture('/model/contactdetails').then((contact) => {
    const contactDetails = contact.editContact1;
    formContactDetails.getAddressStreet1().should('have.value', contactDetails.contact_street1);
    formContactDetails.getCity().should('have.value', contactDetails.contact_city);
    formContactDetails.getContactProvince().should('have.value', contactDetails.contact_province);
    formContactDetails.getContactEmpZipCode().should('have.value', contactDetails.contact_emp_zipcode);
    formContactDetails.checkContactCountry().should('have.value', contactDetails.contact_country);
    formContactDetails.getContactEmpHmTelephone().should('have.value', contactDetails.contact_emp_hm_telephone);
    formContactDetails.getContactEmpMobile().should('have.value', contactDetails.contact_emp_mobile);
    formContactDetails.getContactEmpWorkTelephone().should('have.value', contactDetails.contact_emp_work_telephone);
    formContactDetails.getContactEmpWorkEmail().should('have.value', contactDetails.contact_emp_work_email);
    formContactDetails.getContactEmpOthEmail().should('have.value', contactDetails.contact_emp_oth_email);
  });
});
