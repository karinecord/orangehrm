// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';
import { MessagesComponent } from '../../pages/components/messages.page';
import 'cypress-file-upload';

const formPhoto = new FormPhoto();
const msgSuccess = new MessagesComponent();
const filePathGif = 'model/image2516x2999.gif';

// # Upload a photo with format '.png', size < 1MB
And(/^the user click "Browse" and then select a photograph from the relevant path gif$/, () => {
  formPhoto.doFileUpload().attachFile(filePathGif);
});

// # Successfully Uploaded
Then(/^the system display a message Successfully Uploaded$/, () => {
  msgSuccess.getSuccess().should('be.visible').contains('Successfully Uploaded');
});
