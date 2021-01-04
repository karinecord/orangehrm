// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormSkill } from '../../pages/qualifications/skill.page';

const formSkill = new FormSkill();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formSkill.getQualification();
});

And(/^the user select a skill inter the list$/, () => {
  formSkill.getSelectTable();
});

And(/^the user click on delete a skill$/, () => {
  formSkill.getDelete();
});

Then(/^the system display a message Successfully deleted a skill$/, () => {
  messageSuccess.getSuccess().contains('Successfully Deleted');
});
