describe('Logout', () => {
//before sempre é executado uma vez antes de todos os testes
//precisamos estar logados para testar o logout
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('successfully', () => {
    cy.logout()

    //verifica se estamos na pagina de login
    
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  })
})