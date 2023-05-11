/// <reference types="cypress" />

describe ('My First Test', () => {
    it('clicking "type" shows the right headings',() => {
        cy.visit('https://example.cypress.io')

        cy.get('.dropdown-toggle',{timeout:5000}).click()
        
        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')
    
        cy.get('.action-email')
          .type('mico@email.com')
          .should('have.value','mico@email.com')
    })
})
