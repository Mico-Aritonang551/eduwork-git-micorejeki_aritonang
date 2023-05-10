/// <reference types="cypress"/>

describe('Writing with inputs',{ testIsolation: false },() => {
    it('Sould fill username',() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.login(username,password) 
        })
    });

    it('Should to paybill', () => {
        cy.get('#pay_bills_tab').click()
        cy.fixture('payment').then(payment => {
            const amount = payment.amount
            const date = payment.date
            const description = payment.description
            cy.pay(amount,date,description)
        })
    })
});