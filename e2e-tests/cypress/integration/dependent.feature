@e2e-test @Dependents @add @delete
Feature: Managing Dependents
  As a Registered  ESS-User
  User want to add dependents

  Scenario: Verify ESS user can to add dependents of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Dependents
    And the user click on Add
    And the user sets the informations providing dependents
    And the user click on Save
    Then the system display a message Successfully Saved
    And the user view the list of dependents


  Scenario: Verify ESS user can to delete dependent of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Dependent
    And the user select a list dependent
    And the user click on delete dependent
    Then the system display a message Successfully deleted

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Dependents
    And the user click on Add attachment
    And the user select 'image200x200.png' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment

  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Dependents
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted