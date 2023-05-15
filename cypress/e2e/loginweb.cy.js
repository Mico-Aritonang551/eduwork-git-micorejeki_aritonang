/// <reference types="cypress"/>

describe('Login tes', {testIsolation: false} , () => {
    before(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.url().should('include', 'saucedemo.com')
    })

    it('Should try to login with invalid and valid data', () => {
        cy.login('userLogin')      
    })
})

