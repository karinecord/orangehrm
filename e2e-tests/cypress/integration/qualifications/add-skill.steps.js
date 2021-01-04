// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormSkill } from '../../pages/qualifications/skill.page';

const formSkill = new FormSkill();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formSkill.getQualification();
});

And(/^the user click on add a new skill$/, () => {
  formSkill.getAddSkill();
});

And(/^the user sets the informations about the new skill$/, () => {
  cy.fixture('/model/qualification').then((skills) => {
    const skill = skills.addSkill;
    formSkill.selectSkill(skill.skill_code);
    formSkill.fillSkillYearsOfExp(skill.skill_years_of_exp);
    formSkill.fillSkillComments(skill.skill_comments);
  });

  And(/^the user click on save a new skill$/, () => {
    formSkill.getSaveList();
  });

  Then(/^the system display to a message Successfully Saved a new skill$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the system loading a list of skill$/, () => {
    formSkill.getTableSkill();
  });
});
