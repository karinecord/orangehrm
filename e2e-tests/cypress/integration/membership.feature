@e2e-test @membership @add
Feature: Managing membership
  As a Registered  ESS-User
  User want to add membership

  Scenario: Verify ESS user cannot to add a membership
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on memberships
    And the user click on Add
    And the user sets the informations about the membership
    And the user click on Save
    Then the system display a message Successfully Saved
    And the user view the list of membership

  Scenario: Verify ESS user can to delete a membership
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on memberships
    And the user select a membership inter the list
    And the user click on delete a membership
    Then the system display a message Successfully deleted

  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on memberships
    And the user click on Add attachment
    And the user select 'image200x200.png' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment

  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on memberships
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted
