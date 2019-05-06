describe('Check search results by title', () => {

  it('Type the text in the input field', () => {
    cy.visit('http://localhost:8080/')
    const typedText = 'a'

    cy.get('input[type=text]')
      .type(typedText)
      .should('have.value', typedText)
  })

  it('Click on search button', () => {
    cy.get('input[value=SEARCH]')
      .click()
  })
  
  it('Check the results', () => {
    cy.get('div[class^=moviesList] > div')
      .its('length')
      .should('be', 9)
  })
})

/*describe('Check sorting by rating', () => {

  it('Click on rating', () => {
    cy.get('div[class*=sortBar]:last-child')
      .click()
  })
  
  it('Check the results', () => {
    cy.get('div[class^=moviesList] > div:nth-child(2) h3')
      .contains('Zootopia')
  })

})*/

describe('Check empty search input', () => {

  it('Type empty value in the input field', () => {
    cy.get('input[type=text]')
      .clear()
      .should('have.value', '')
  })

  it('Click on search button', () => {
    cy.get('input[value=SEARCH]')
      .click()
  })

  /*it('Check the results', () => {
    cy.get('div[class^=moviesList] > p')
      .contains('No films found')
  })*/

  it('Check the results', () => {
    cy.get('div[class^=moviesList] > div')
      .its('length')
      .should('be', 3000)
  })
  
})
  
describe('Check search by genre', () => {
  
  it('Type the value in the input field for checking null results', () => {
    const typedText = 'adv'
    cy.get('input[type=text]')
      .type(typedText)
      .should('have.value', typedText)
  })

  it('Click on genre button', () => {
    cy.get('input[value=GENRE]')
      .click()
  })

  it('Click on search button', () => {
    cy.get('input[value=SEARCH]')
      .click()
  })

  it('Check the results', () => {
    cy.get('div[class^=moviesList] > div')
      .its('length')
      .should('be', 7)
  })
})
