// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormDependent } from '../../pages/dependent/dependent.page';

const formDependent = new FormDependent();
const messageSuccess = new MessagesComponent();

And(/^the user click on Dependents$/, () => {
  formDependent.getDependents();
});

And(/^the user click on Add$/, () => {
  formDependent.getAddDependent();
});

And(/^the user sets the informations providing dependents$/, () => {
  cy.fixture('/model/dependent').then((dependents) => {
    const dependent = dependents.add;
    formDependent.fillDependentName(dependent.dependent_name);
    formDependent.selectDepedentRelationshipTypeOther();
    formDependent.fillRelationshipDesc(dependent.dependent_relationship);
    formDependent.filldependentDateOfBirth(dependent.dependent_dateOfBirth);
  });

  And(/^the user click on Save$/, () => {
    formDependent.getSave();
  });

  Then(/^the system display a message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of dependents$/, () => {
    formDependent.getTableDependent();
  });
});
