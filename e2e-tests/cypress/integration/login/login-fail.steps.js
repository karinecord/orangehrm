// <reference types="cypress" />
import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
import { FormLogin } from '../../pages/login/login.page';
import { MessagesComponent } from '../../pages/components/messages.page';

const loginFail = new FormLogin();
const msgFail = new MessagesComponent();

// # Check the login with valid ESS user and invalid password
Given(/the user has access to system/, () => {
  loginFail.visit();
});

When(/^the user sets invalid password$/, () => {
  cy.fixture('/model/user').then((user) => {
    const failUser = user.failPassword;
    loginFail.doLogin(failUser.username, failUser.password);
  });
});

Then(/^Error message should display as "Credentials not valid"$/, () => {
  msgFail.getMessage().contains('Invalid credentials');
});

// #Check the login with Invalid ESS user and valid password
Given(/the user has access to system/, () => {
  loginFail.visit();
});

When(/^the user sets invalid username$/, () => {
  cy.fixture('/model/user').then((user) => {
    const failUser = user.failLogin;
    loginFail.doLogin(failUser.username, failUser.password);
  });
});

Then(/^Error message should display as "Credentials not valid"$/, () => {
  msgFail.getMessage().contains('Invalid credentials');
});

// #Check the login with invalid ESS user and invalid password
Given(/the user has access to system/, () => {
  loginFail.visit();
});

When(/^the user sets invalid username and password$/, () => {
  cy.fixture('/model/user').then((user) => {
    const failUser = user.failLoginPassword;
    loginFail.doLogin(failUser.username, failUser.password);
  });
});

Then(/^Error message should display as "Credentials not valid"$/, () => {
  msgFail.getMessage().contains('Invalid credentials');
});
