Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate, //funcao que valida se a sessao esta ativa
  }

//se cacheSession for true, usa o comando cy.session para cachear a sessao
//conteúdo explicado no arquivo de aula 4  - salvando sessões de login

  if (cacheSession) {
    cy.session(user, login, options) //usa o comando session do cypress para cachear a sessao
  } else {
    login()
  }
})

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click() //clica no avatar do usuario no canto superior direito
  cy.contains('Sign out').click() //comando cntains procura o texto na pagina

})

//gui significa projeto de interface grafica (graphical user interface)
Cypress.Commands.add('gui_createProject', project => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(project.name) //clica no campo nome do projeto, # indica id
  cy.get('#project_description').type(project.description) //clica no campo descricao do projeto, # indica id
  cy.get('.qa-initialize-with-readme-checkbox').check() //marca a checkbox para inicializar com README, . indica classe
  cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {

  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`) //navega para a pagina de criacao de issue do projeto

  cy.get('.qa-issuable-form-title').type(issue.title) //clica no campo titulo da issue, . indica classe
  cy.get('.qa-issuable-form-description').type(issue.description)
  cy.contains('Submit issue').click()
})