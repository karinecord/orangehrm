 @e2e-test @report-to @view
Feature: View Report-to Details
  As a Registered  ESS-User
  User want to view report-to details
 
  Scenario: Verify user can only view the list of supervisors
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the report-to
    And the user view all fields desabilited