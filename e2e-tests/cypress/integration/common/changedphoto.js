// <reference types="cypress" />
import { When, And } from 'cypress-cucumber-preprocessor/steps';
import { FormPhoto } from '../../pages/employeeDetails/changephoto.page';

const formPhoto = new FormPhoto();

When(/^the user click on "My Info tab"$/, () => {
  formPhoto.getMyInfo();
});

And(/^the user click on the photograph at corner of the screen$/, () => {
  formPhoto.getImageHolder();
});

And(/^the user click "Upload" once you have selected the picture$/, () => {
  formPhoto.doFileSubmit();
});
