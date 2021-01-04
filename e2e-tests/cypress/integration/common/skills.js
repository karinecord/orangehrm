// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormSkill } from '../../pages/qualifications/skill.page';

const formSkill = new FormSkill();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formSkill.getQualification();
});

And(/^the user click on Add$/, () => {
  formSkill.getAddSkill();
});

And(/^the user sets the informations about the skill$/, () => {
  cy.fixture('/model/qualification').then((skills) => {
    const skill = skills.addSkill;
    formSkill.selectSkill(skill.skill_code);
    formSkill.fillSkillYearsOfExp(skill.skill_years_of_exp);
    formSkill.fillSkillComments(skill.skill_comments);
  });

  And(/^the user click on Save$/, () => {
    formSkill.getSaveList();
  });

  Then(/^the system display from a message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of the skill$/, () => {
    formSkill.getTableSkill();
  });
});
