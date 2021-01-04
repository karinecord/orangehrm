// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';
import { MessagesComponent } from '../../pages/components/messages.page';
import 'cypress-file-upload';

const formPhoto = new FormPhoto();
const msgFail = new MessagesComponent();
const filePathZip = 'model/file.zip';

// # Upload a photo with format '.exe', size > 1MB
And(/^the user click "Browse" and then select a photograph from the relevant path zip$/, () => {
  formPhoto.doFileUpload().attachFile(filePathZip);
});

Then(/^the system display a message Credentials Required$/, () => {
  msgFail.getWarn().should('be.visible').contains('Credentials Required');
});
