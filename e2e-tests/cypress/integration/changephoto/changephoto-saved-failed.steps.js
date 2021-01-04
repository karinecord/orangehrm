// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';
import { MessagesComponent } from '../../pages/components/messages.page';
import 'cypress-file-upload';

const formPhoto = new FormPhoto();
const msgWarning = new MessagesComponent();
const filePathPNG = 'model/image200x200.png';

// # Upload a photo with format '.exe', size < 1MB
And(/^the user click "Browse" and then select a photograph from the relevant path png$/, () => {
  formPhoto.doFileUpload().attachFile(filePathPNG);
});

Then(/^the system display a message Failed to Save: File Type Not Allowed$/, () => {
  msgWarning.getSuccess().should('be.visible').contains('Successfully Uploaded');
});
