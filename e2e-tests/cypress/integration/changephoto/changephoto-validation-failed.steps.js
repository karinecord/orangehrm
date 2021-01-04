// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';
import { MessagesComponent } from '../../pages/components/messages.page';
import 'cypress-file-upload';

const formPhoto = new FormPhoto();
const msgWarning = new MessagesComponent();
const filePathZip = 'model/file.zip';

// #Upload a photo with format '.gif', size > 1MB
And(/^the user click "Browse" and then select a picture and from the relevant path zip$/, () => {
  formPhoto.doFileUpload().attachFile(filePathZip);
});

Then(/^the system display a message Validation Failed$/, () => {
  msgWarning.getWarn().should('be.visible').contains('Validation Failed');
});
