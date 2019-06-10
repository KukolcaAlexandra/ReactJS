describe('Check the movie description display', () => {
  it('Type the text in the input field', () => {
    cy.visit('http://localhost:8080/');
    const typedText = 'd';

    cy.get('input[type=text]')
      .type(typedText)
      .should('have.value', typedText);
  });

  it('Click on search button', () => {
    cy.get('input[value=SEARCH]')
      .click();
  });

  it('Click on first movie', () => {
    cy.get('div[class^=moviesList] > div:first-child')
      .click();
  });

  it('Check the changes in header', () => {
    cy.get('div[class^=header] > img')
      .should('exist');
  });

  it('Click on search button', () => {
    cy.get('input[value=SEARCH]')
      .click();
  });

  it('Check the changes in header', () => {
    cy.get('div[class^=header] > img')
      .should('not.exist');
  });
});
