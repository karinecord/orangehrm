// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormWorkExperience } from '../../pages/qualifications/work-experience.page';

const formWorkExperience = new FormWorkExperience();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formWorkExperience.getQualifications();
});

And(/^the user click on add work experience$/, () => {
  formWorkExperience.getAddWorkExperience();
});

And(/^the user setting the informations about work experience$/, () => {
  cy.fixture('/model/qualification').then((work) => {
    const workexperience = work.addWorkExperience;
    formWorkExperience.fillCompany(workexperience.experience_employer);
    formWorkExperience.fillJobTitle(workexperience.experience_jobtitle);
    formWorkExperience.selectExpFromDate(workexperience.experience_from_date);
    formWorkExperience.selectExpToDate(workexperience.experience_to_date);
    formWorkExperience.fillExpcomments(workexperience.experience_comments);
  });

  And(/^the user click on save to a work experience$/, () => {
    formWorkExperience.getSave();
  });

  Then(/^the system display to a message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of work experience$/, () => {
    formWorkExperience.getTableWorkExperience();
  });
});
