describe('Pruebas_login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
  })
  
  it('The user is logged', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area!')
  })

  it('Empty Password', () => { 
    cy.get('#username').type('tomsmith')
    cy.get('#password')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your password is invalid!')
  })

  it('Empty Fields', () => { 
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
  }) 

})