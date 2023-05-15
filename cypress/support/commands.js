// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// /// <reference types="Cypress"/>

// Cypress.Commands.add('login',(user) => {
//     cy.fixture(user).as('accountsData')
//     cy.get('@accountsData').each((user) => {
//         cy.clearCookies()
//         cy.clearAllLocalStorage()
//         cy.get('#user-name').clear()
//         cy.get('#user-name').type(user.username)
//         cy.get('#password').clear()
//         cy.get('#password').type(user.password)
//         cy.contains('Login').click()
//     })
// })

/// <reference types="Cypress"/>

function login(userLogin) {
    cy.fixture(userLogin).as('accountsData')
    cy.get('@accountsData').each((userLogin) => {
      cy.clearCookies()
      cy.clearAllLocalStorage()
      cy.get('#user-name').clear()
      cy.get('#user-name').type(userLogin.username)
      cy.get('#password').clear()
      cy.get('#password').type(userLogin.password)
      cy.contains('Login').click()
    })
  }
  
Cypress.Commands.add('login', login)

module.exports = {
    login
}

Cypress.Commands.add('Checkout',(firstName, lastName, postalCode) => {
  cy.clearCookies()
  cy.clearAllLocalStorage()
  cy.get('#first-name').type(firstName)
  cy.get('#last-name').type(lastName)
  cy.get('#postal-code').type(postalCode)
})
  

/// <reference types="cypress"/>

Cypress.Commands.add('login',(username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()

    cy.get('h2').should('contain.text', 'Cash Accounts')
})

/// <reference types="cypress" />

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').check()
    cy.contains('Sign in').click()
})

Cypress.Commands.add('pay',(amount, date, description) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date).click()
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click()
})


