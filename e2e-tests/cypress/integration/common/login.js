// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { FormLogin } from '../../pages/login/login.page';

const formLogin = new FormLogin();

Given(/^the user has access to system$/, () => {
  formLogin.visit();
  formLogin.doLogin('', '');
});
