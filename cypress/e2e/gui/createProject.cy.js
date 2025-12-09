import { faker } from '@faker-js/faker' // importa a biblioteca faker para gerar dados aleatórios

describe('Create Project', () => {
  beforeEach(() => {

    cy.api_deleteProjects() //comando customizado para deletar todos os projetos antes de cada cenário
    cy.login() // comando customizado para fazer login via GUI
 
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`, // Gera um nome único para o projeto usando UUID
      description: faker.random.words(5) // Gera uma descrição aleatória com 5 palavras
    }

    cy.gui_createProject(project) // Usa o comando customizado para criar o projeto

    // Verifica se o projeto foi criado com sucesso

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})