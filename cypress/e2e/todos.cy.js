describe('Pruebas_pagina_todo', () => {

    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })
    
    it('User can add ONE task', () => {
        cy.get('.new-todo').type('comprar el pan{enter}')
        cy.get('.toggle').click()
    })

    it('User can add ONE task', () => {

    })

    it('User can add ONE task', () => {

    })

    it('User can add ONE task', () => {

    })

    it('User can add ONE task', () => {

    })

    it('User can add ONE task', () => {

    })
  
})


