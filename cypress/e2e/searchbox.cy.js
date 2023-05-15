/// <reference types="cypress"/>

describe('Searchbox Test', {testIsolation: false},function () {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('Should type into searchbox and submit', () => {
    cy.get('#searchTerm').type('online {enter}')
  });
  
  it('Should show search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
  });
});