// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormLanguage } from '../../pages/qualifications/language.page';

const formLanguage = new FormLanguage();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formLanguage.getQualification();
});

And(/^the user select a language inter the list$/, () => {
  formLanguage.getSelectTable();
});

And(/^the user click on delete a language$/, () => {
  formLanguage.getDelete();
});

Then(/^the system display a message Successfully deleted a language$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
