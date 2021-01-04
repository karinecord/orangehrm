// <reference types="cypress" />
import { Then, And } from 'cypress-cucumber-preprocessor/steps';
import { MessagesComponent } from '../../pages/components/messages.page';
import { FormLanguage } from '../../pages/qualifications/language.page';

const formLanguage = new FormLanguage();
const messageSuccess = new MessagesComponent();

And(/^the user click on qualifications$/, () => {
  formLanguage.getQualification();
});

And(/^the user click on Add$/, () => {
  formLanguage.getAddLanguage();
});

And(/^the user sets the informations about the language$/, () => {
  cy.fixture('/model/qualification').then((language) => {
    const lang = language.addLanguage;
    formLanguage.selectLanguage(lang.language_code);
    formLanguage.selectLanguageType(lang.language_lang_type);
    formLanguage.selectLanguageCompetency(lang.language_competency);
    formLanguage.fillLanguageComments(lang.language_comments);
  });

  And(/^the user click on Save$/, () => {
    formLanguage.getSaveList();
  });

  Then(/^the system display to a message Successfully Saved$/, () => {
    messageSuccess.getSuccess();
  });

  And(/^the user view the list of language$/, () => {
    formLanguage.getTableLanguage();
  });
});
