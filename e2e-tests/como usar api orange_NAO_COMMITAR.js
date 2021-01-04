// <reference types="cypress" />
import { Before, When, After, Given, Then, And } from 'cypress-cucumber-preprocessor/steps';


let accessToken;
let employeeId;

// this will get called before each scenario
Before(() => {
  cy.getApiToken(Cypress.env('apiClientId'), Cypress.env('apiClientSecret'))
    .then((bodyResponse) => accessToken = bodyResponse);
});

Given("I have an existing employee", () => {
  cy.request({
    url: '/symfony/web/api/v1/employee/6',
    method: 'POST',
    auth: { bearer: accessToken.access_token },
    headers: { "Content-Type": "application/json" },
    body: {
      firstName: 'Employee',
      middleName: 'Test',
      lastName: 'QA',
      code: '0336',
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    employeeId = response.body.id;
  })
});

When("Visting the employee details", () => {
  cy.visit(`/symfony/web/index.php/pim/viewEmployee/empNumber/${employeeId}`)
});
