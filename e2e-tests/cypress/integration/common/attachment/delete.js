// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../../pages/components/messages.page';
import { FormAttachment } from '../../../pages/attachment/attachment.page';
import 'cypress-file-upload';

const messageSuccess = new MessagesComponent();
const formAttachment = new FormAttachment();

And(/^the user select a list of attachment$/, () => {
  formAttachment.getSelectTable();
});

And(/^the user click on delete$/, () => {
  formAttachment.getDelete();
});

Then(/^the system display a message Successfully deleted$/, () => {
  messageSuccess.getSuccess();
});
