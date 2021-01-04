export class FormLanguage {
  getQualification() {
    return cy.get('.selected').get('li').contains('Qualifications').click();
  }

  getAddLanguage() {
    cy.get('#actionLanguage').within(() => {
      cy.get('#addLanguage').click();
    });
  }

  getLanguage() {
    return cy.get('#language_code');
  }

  selectLanguage(langu) {
    this.getLanguage().select(langu);
  }

  getLanguageType() {
    return cy.get('#language_lang_type');
  }

  selectLanguageType(language) {
    this.getLanguageType().select(language);
  }

  getLanguageCompetency() {
    return cy.get('#language_competency');
  }

  selectLanguageCompetency(LANGUAGE_COMPETENCY) {
    this.getLanguageCompetency().select(LANGUAGE_COMPETENCY);
  }

  getLanguageComments() {
    return cy.get('#language_comments');
  }

  fillLanguageComments(LANGUAGE_COMMENTS) {
    this.getLanguageComments().clear().type(LANGUAGE_COMMENTS);
  }

  getSaveList() {
    return cy.get('#btnLanguageSave').click();
  }

  getTableLanguage() {
    return cy.get('form#frmDelLanguage');
  }

  getDelete() {
    return cy.get('p#actionLanguage').within(() => {
      cy.get('#delLanguage').click();
    });
  }

  getSelectTable() {
    return cy.get('.chkbox').check();
  }
}
