// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormLicense } from '../../pages/qualifications/license.page';

const formLicense = new FormLicense();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formLicense.getQualification();
});

And(/^the user click on Add$/, () => {
  formLicense.getAddLicense();
});

And(/^the user sets the informations about the license$/, () => {
  cy.fixture('/model/qualification').then((license) => {
    const lcs = license.addLicense;
    formLicense.selectLicenseCode(lcs.license_code);
    formLicense.fillLicenseNum(lcs.license_license_no);
    formLicense.fillLicenseDate(lcs.license_date);
    formLicense.fillRenewalDate(lcs.license_renewal_date);
  });

  And(/^the user click on Save$/, () => {
    formLicense.getSaveList();
  });

  Then(/^the system display an message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of the license$/, () => {
    formLicense.getTableLicense();
  });
});
