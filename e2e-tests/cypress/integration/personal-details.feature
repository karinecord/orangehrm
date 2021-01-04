@personalDetails @edit @view
Feature: Managing Personal Details
  As a Registered  ESS-User
  User want to edit a personal details

  Scenario: Verify ESS user can to view a personal details information of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the personal details
    And the user view all fields disabled and button edit visible
   

  Scenario: Verify ESS user can to edit a personal details information of an employee
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the personal details
    And the user click on edit a personal details
    And the user sets the informations about a personal details
    And the user click on save a personal details
    Then the system display a message Successfully Saved from a user

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the personal details
    And the user click on Add attachment
    And the user select 'book.pdf' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment
