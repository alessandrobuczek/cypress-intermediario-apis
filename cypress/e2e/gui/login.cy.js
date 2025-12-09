describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false } //desativa o cache da sessao para este teste especifico, com isso

    cy.login(user, password, options) //usa o comando customizado login definido em gui_commands.js

    cy.get('.qa-user-avatar').should('be.visible')
  })
})