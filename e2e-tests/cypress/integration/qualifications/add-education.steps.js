// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormEducation } from '../../pages/qualifications/education.page';

const formEducation = new FormEducation();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formEducation.getQualification();
});

And(/^the user click on add education$/, () => {
  formEducation.getAddEducation();
});

And(/^the user sets the informations about the education$/, () => {
  cy.fixture('/model/qualification').then((education) => {
    const edu = education.addEducation;
    formEducation.getLevel();
    formEducation.fillInstitute(edu.education_institute);
    formEducation.fillMajor(edu.education_major);
    formEducation.fillYear(edu.education_year);
    formEducation.fillStartDate(edu.education_start_date);
    formEducation.fillStartDate(edu.education_end_date);
  });

  And(/^the user click on save to an education$/, () => {
    formEducation.getSaveList();
  });

  Then(/^the system display to a message Successfully Saved from the user$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the system display to a list of education from the User$/, () => {
    formEducation.getTableEducation();
  });
});
