export class FormJob {
  getJob() {
    return cy.get('#sidenav > :nth-child(6) > a').contains('Job').click();
  }

  getJobTitle() {
    return cy.get('#job_job_title');
  }

  getJobSpecifications() {
    return cy.get('#fileLink > #notDefinedLabel');
  }

  getJobStatus() {
    return cy.get('#job_emp_status');
  }

  getJobCategory() {
    return cy.get('#job_eeo_category');
  }

  getJobJoinedDate() {
    return cy.get('#job_joined_date');
  }

  getJobSubUnit() {
    return cy.get('#job_sub_unit');
  }

  getJobLocation() {
    return cy.get('#job_location');
  }

  getJobContractStartDate() {
    return cy.get('#job_contract_start_date');
  }

  getJobContractEndDate() {
    return cy.get('#job_contract_end_date');
  }

  getContractDetails() {
    return cy.get('.contractReadMode > #notDefinedLabel');
  }
}
