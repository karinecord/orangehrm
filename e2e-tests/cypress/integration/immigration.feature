@e2e-test @immigration @add
Feature: Managing Immigration
  As a Registered  ESS-User
  User want to add imigration

  Scenario: Verify ESS user can to add immigration of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on immigration
    And the user click on Add
    And the user sets the informations immigration
    And the user click on Save
    Then the system display a message Successfully Saved
    And the user view the list of immigration

  Scenario: Verify ESS user can to delete immigration of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on immigration
    And the user select a list immigration
    And the user click on delete an immigration
    Then the system display a message Successfully deleted

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on immigration
    And the user click on Add attachment
    And the user select 'image200x200.png' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment


  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on immigration
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted