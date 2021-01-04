@e2e-test @qualifications @addWork @deleteWork @addEducation @deleteEducation @addSkill @deleteSkill @addlanguage @deletelanguage
@addLicense @deleteLicense @addAttachment @deleteAttachment
Feature: Managing qualifications
  As a Registered  ESS-User
  User want to add qualifications


  Scenario: Verify ESS user can to add an work experience
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on add work experience
    And the user setting the informations about work experience
    And the user click on save to a work experience
    Then the system display to a message Successfully Saved
    And the user view the list of work experience


  Scenario: Verify ESS user can to delete an work experience
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a list work experience
    And the user click on delete a work experience
    Then the system display a message Successfully deleted a work experience

  Scenario: Verify ESS user can to add education
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on add education
    And the user sets the informations about the education
    And the user click on save to an education
    Then the system display to a message Successfully Saved from the user
    And the system display to a list of education from the User

  Scenario: Verify ESS user can to delete education
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a list of education
    And the user click on delete an education
    Then the system display a message Successfully deleted

  Scenario: Verify ESS user can to add skill
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on add a new skill
    And the user sets the informations about the new skill
    And the user click on save a new skill
    Then the system display to a message Successfully Saved a new skill
    And the system loading a list of skill

  Scenario: Verify ESS user can to delete a skill
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a skill inter the list
    And the user click on delete a skill
    Then the system display a message Successfully deleted a skill


  Scenario: Verify ESS user can to add language
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on add a language
    And the user sets the informations about a language
    And the user click on save a language
    Then the system display to a message Successfully Saved from an user
    And the system showing a list of language from an user

  Scenario: Verify ESS user can to delete a language
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a language inter the list
    And the user click on delete a language
    Then the system display a message Successfully deleted a language


  Scenario: Verify ESS user can to add license
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on add a license
    And the user sets the information about a license
    And the user click on save a license
    Then the system display an message Successfully Saved a license
    And the system showing a list of license from an user

  Scenario: Verify ESS user can to delete a license
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a license inter the list
    And the user click on delete a license
    Then the system display a message Successfully deleted


  Scenario: Add attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user click on Add attachment
    And the user select 'image200x200.png' and "Hello! How are you? I'm good and you? I,m very well!"
    And the user click on Upload
    Then the system display a message Successfully Saved
    And the user view the list of the attachment


  Scenario: Delete attachment
    Given the user has access to system
    When the user click on "My Info tab"
    And the user click on qualifications
    And the user select a list of attachment
    And the user click on delete
    Then the system display a message Successfully deleted