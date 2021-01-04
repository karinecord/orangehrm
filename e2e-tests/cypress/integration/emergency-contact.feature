@e2e-test @EmergencyContact @add @delete
Feature: Managing Emergency Contact
  As a Registered  ESS-User
  User want to add emeregency contact

  Scenario: Verify ESS user can to view emergency contact of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Emergency contact
    And the system display a list of emergency contact with save and delete button


  Scenario: Verify ESS user can to add emergency contact of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Emergency contact
    And the user click on Add
    And the user sets the informations providing Emergency contact
    And the user click on Save
    Then the system display a message Successfully Saved
    And the user view the list of emergency contact

  Scenario: Verify ESS user can to delete emergency contact of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Emergency contact
    And the user select a list emergency contact
    And the user click on delete emergency contact
    Then the system display a message Successfully deleted

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Emergency contact
    And the user click on Add attachment
    And the user select 'image200x200.png' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment

  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on Emergency contact
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted