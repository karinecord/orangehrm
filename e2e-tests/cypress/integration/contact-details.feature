@ContactDetails @edit
Feature: Managing Details
  As a Registered  ESS-User
  User want to edit contact details


  Scenario: Verify ESS user can to view contact information of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the Contact Details
    And the user view all fields desabilited and button edit

  Scenario: Verify ESS user can to edit contact information of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the Contact Details
    And the user click on Edit
    And the user sets the informations
    And the user click on Save
    Then the system display a message Successfully Saved

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the Contact Details
    And the user click on Add attachment
    And the user select 'book.pdf' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment


  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the Contact Details
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted