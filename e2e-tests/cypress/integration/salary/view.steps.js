// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormSalary } from '../../pages/salary/salary.page';

const formSalary = new FormSalary();

And(/^the user click on the salary$/, () => {
  formSalary.getSalary();
});

And(/^the user view all fields desabilited$/, () => {
  // to check if all fields there are values disabled
  formSalary.getTitle().should('be.visible');
  formSalary.getTableSalary().should('be.visible');
  formSalary.getDisplayDirectDeposit();
});
