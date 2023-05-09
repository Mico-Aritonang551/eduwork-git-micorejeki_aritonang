/// <reference types="cypress"/>

describe('Writing with inputs',{ testIsolation: false },() => {
    it('Sould fill username',() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Sould fill username',() => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Sould fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    it('Should fill check box', () => {
        cy.get('#user_remember_me').check()
    })
});