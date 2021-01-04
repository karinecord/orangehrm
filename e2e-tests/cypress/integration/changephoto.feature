
@changephoto
Feature: Change photo
  In order to test login page
  As a Registered ESS-User
  User wants to change photo in the employee details


  Scenario: Upload a photo with format '.zip', size < 1MB
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the photograph at corner of the screen
    And the user click "Browse" and then select a photograph from the relevant path zip
    And the user click "Upload" once you have selected the picture
    Then the system display a message Credentials Required

  Scenario: Upload a photo with format '.pdf', size < 1MB
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the photograph at corner of the screen
    And the user click "Browse" and then select a photograph from the relevant path pdf
    And the user click "Upload" once you have selected the picture
    Then the system display a message Failed to Save: File Type Not Allowed


  Scenario: Upload a photo with format '.png', size < 1MB
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the photograph at corner of the screen
    And the user click "Browse" and then select a photograph from the relevant path png
    And the user click "Upload" once you have selected the picture
    Then the system display a message Successfully Uploaded


  Scenario: Upload a photo with format '.gif', size > 1MB
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the photograph at corner of the screen
    And the user click "Browse" and then select a photograph from the relevant path gif
    And the user click "Upload" once you have selected the picture
    Then the system display a message Validation Failed


  Scenario: Upload a photo with format '.zip', size > 1MB
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on the photograph at corner of the screen
    And the user click "Browse" and then select a picture and from the relevant path zip
    And the user click "Upload" once you have selected the picture
    Then the system display a message Credentials Required
