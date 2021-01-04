// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../../pages/components/messages.page';
import { FormAttachment } from '../../../pages/attachment/attachment.page';
import 'cypress-file-upload';

const messageSuccess = new MessagesComponent();
const formAttachment = new FormAttachment();

And(/^the user click on Add attachment$/, () => {
  formAttachment.getAddAttachment();
});

And('the user select {string} and {string}', (fileName, comment) => {
  formAttachment.getFile().attachFile(`model/${fileName}`, { force: true });
  formAttachment.fillTxtAtDesc(comment);
});

And(/^the user click on Upload$/, () => {
  formAttachment.getUpload();
});

Then(/^the system display a message Successfully Saved$/, () => {
  messageSuccess.getSuccess();
});

And(/^the user view the list of the attachment$/, () => {
  formAttachment.getTableAttachment();
});
