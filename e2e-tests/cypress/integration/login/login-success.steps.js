// <reference types="cypress" />
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
import { FormLogin } from '../../pages/login/login.page';

const loginSuccess = new FormLogin();

// # Check the login with valid ESS user and valid password
Given(/the user has access to system/, () => {
  loginSuccess.visit();
});

When(/^the user sets correct credentials$/, () => {
  cy.fixture('/model/user').then((user) => {
    cy.log(user);
    const successUser = user.success;

    loginSuccess.doLogin(successUser.username, successUser.password);
    cy.log(loginSuccess);
  });
});

Then(/^the "Dashboard" is displayed to user$/, () => {
  loginSuccess.getPageHead().contains('Dashboard');
});
