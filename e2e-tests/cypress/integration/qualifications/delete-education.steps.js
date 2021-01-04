// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormEducation } from '../../pages/qualifications/education.page';

const formEducation = new FormEducation();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formEducation.getQualification();
});

And(/^the user select a list of education$/, () => {
  formEducation.getSelectTable();
});

And(/^the user click on delete an education$/, () => {
  formEducation.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
