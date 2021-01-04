@e2e-test @Login
Feature: Login
  In order to test login page
  As a Registered  ESS-User
  User wants to specify the login conditions

  Scenario: Check the login with valid ESS user and valid password
    Given the user has access to system
    When the user sets correct credentials
    Then the "Dashboard" is displayed to user

  Scenario: Check the login with valid ESS user and invalid password
    Given the user has access to system
    When the user sets invalid password
    Then Error message should display as "Credentials not valid"

  Scenario: Check the login with invalid ESS user and valid password
    Given the user has access to system
    When the user sets invalid username
    Then Error message should display as "Credentials not valid"

  Scenario: Check the login with invalid ESS user and invalid password
    Given the user has access to system
    When the user sets invalid username and password
    Then Error message should display as "Credentials not valid"


