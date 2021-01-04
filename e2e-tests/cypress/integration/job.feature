@e2e-test @job @view
Feature: View Job Details
As a Registered  ESS-User
User want to view job details


  Scenario: Verify ESS user cannot to edit a job
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the Job
    And the user view all fields desabilited