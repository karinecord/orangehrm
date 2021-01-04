 @e2e-test @salary @view
Feature: View Salary Details
As a Registered  ESS-User
User want to view salary details
 
  Scenario: Verify ESS user cannot to view a salary
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the salary
    And the user view all fields desabilited