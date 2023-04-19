/// <reference types="cypress" />

export class LoginPage {

    introducirUsuario(text) {
        cy.get('#username').type(text)

    }

    introducirContrasenia(text) {
        cy.get('#password').type(text)

    }

    clicarBotonLogin() {
        cy.get('.fa').click()

    }    
}
