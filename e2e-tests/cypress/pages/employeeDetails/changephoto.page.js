export class FormPhoto {
  // menu access
  getMyInfo() {
    return cy.get('#mainMenu')
      .contains('My Info').click();
  }

  // image holder access
  getImageHolder() {
    return cy.get('#sidebar').within(() => {
      cy.get('#profile-pic').within(() => {
        cy.get('.imageHolder').click();
      });
    });
  }

  selectImage() {
    return cy.get('#empPic');
  }

  // Select photo
  doFileUpload() {
    return cy.get('#photofile').click();
  }

  doFileSubmit() {
    return cy.get('#btnSave').click();
  }
}
