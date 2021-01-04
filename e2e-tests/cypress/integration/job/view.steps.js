// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormJob } from '../../pages/job/job.page';

const formJob = new FormJob();

And(/^the user click on the Job$/, () => {
  formJob.getJob();
});

And(/^the user view all fields desabilited$/, () => {
  // to check if all fields there are values disabled
  cy.fixture('/model/job').then(() => {
    formJob.getJobTitle().should('be.disabled');
    formJob.getJobSpecifications().should('not.contain', 'Not defined');
    formJob.getJobStatus().should('be.disabled');
    formJob.getJobCategory().should('be.disabled');
    formJob.getJobJoinedDate().should('be.disabled');
    formJob.getJobSubUnit().should('be.disabled');
    formJob.getJobLocation().should('be.disabled');
    formJob.getJobContractStartDate().should('be.disabled');
    formJob.getJobContractEndDate().should('be.disabled');
    formJob.getContractDetails().should('not.contain', 'Not defined');
  });
});
