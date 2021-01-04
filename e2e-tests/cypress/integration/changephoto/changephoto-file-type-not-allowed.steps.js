// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';
import { MessagesComponent } from '../../pages/components/messages.page';
import 'cypress-file-upload';

const formPhoto = new FormPhoto();
const msgFail = new MessagesComponent();
const filePathPDF = 'model/book.pdf';

// # Upload a photo with format '.pdf', size < 1MB
And(/^the user click "Browse" and then select a photograph from the relevant path pdf$/, () => {
  formPhoto.doFileUpload().attachFile(filePathPDF);
});

Then(/^the system display a message Failed to Save: File Type Not Allowed$/, () => {
  msgFail.getWarn().should('be.visible').contains('Failed to Save: File Type Not Allowed');
});
