// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormWorkExperience } from '../../pages/qualifications/work-experience.page';

const formWorkExperience = new FormWorkExperience();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formWorkExperience.getQualifications();
});

And(/^the user select a list work experience$/, () => {
  formWorkExperience.getSelectTable();
});

And(/^the user click on delete a work experience$/, () => {
  formWorkExperience.getDelete();
});

Then(/^the system display a message Successfully deleted a work experience$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
