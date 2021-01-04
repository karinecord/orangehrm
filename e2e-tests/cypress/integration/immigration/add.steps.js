// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormImmigration } from '../../pages/immigration/immigration.page';

const formImmigration = new FormImmigration();
const msgSuccess = new MessagesComponent();

And(/^the user click on immigration$/, () => {
  formImmigration.getImmigration();
});

And(/^the user click on Add$/, () => {
  formImmigration.getAddImmigration();
});

And(/^the user sets the informations immigration$/, () => {
  cy.fixture('/model/immigration').then((immigration) => {
    const immig = immigration.add;
    formImmigration.getImmigrationTypePassport();
    formImmigration.fillNumber(immig.immigration_number);
    formImmigration.fillImmigrationPassportIssueDate(immig.immigration_passport_issue_date);
    formImmigration.fillImmigrationPassportExpireDate(immig.immigration_passport_expire_date);
    formImmigration.fillImmigrationI9Status(immig.immigration_i9_status);
    formImmigration.selectContactCountry(immig.immigration_country);
    formImmigration.fillImmigrationI9ReviewDate(immig.immigration_i9_review_date);
    formImmigration.fillImmigrationComments(immig.immigration_comments);
  });

  And(/^the user click on Save$/, () => {
    formImmigration.getSave();
  });

  Then(/^the system display a message Successfully Saved$/, () => {
    msgSuccess.getSuccess();
  });

  And(/^the user view the list of immigration$/, () => {
    formImmigration.getTableImmigration();
  });
});
