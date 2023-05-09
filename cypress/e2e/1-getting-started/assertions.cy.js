/// <reference types="cypress"/>

describe('Browser actions',{ testIsolation: false }, () => {
    it('Should load correct url',() => {
        cy.visit('https://examples.com/',{timeout: 10000})
    });

    it('Should check correct url',() => {
        cy.url().should('include','examples.com')
    });

    it('Should check for correct element on page', () => {
        cy.get('h2').should('be.visible')
    });
});