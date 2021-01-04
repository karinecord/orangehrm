// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import { FormReportTo } from '../../pages/report-to/report-to.page';

const formReportTo = new FormReportTo();

And(/^the user click on the report-to$/, () => {
  formReportTo.getReportTo();
});

And(/^the user view all fields desabilited$/, () => {
  // to check if all fields there are values disabled
  formReportTo.getTitleSupervisors().should('be.visible');
  formReportTo.getViewTableSupervisors().should('be.visible');
  formReportTo.getDetailsSubordinates().should('be.not.visible');
  formReportTo.getViewTableAttachments().should('be.not.visible');
});
