// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormLicense } from '../../pages/qualifications/license.page';

const formLicense = new FormLicense();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formLicense.getQualification();
});

And(/^the user select a license inter the list$/, () => {
  formLicense.getSelectTable();
});

And(/^the user click on delete a license$/, () => {
  formLicense.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
