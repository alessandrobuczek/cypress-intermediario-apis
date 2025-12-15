import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } } //opções para o comando cy.api_snapshot

describe('Create Issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }


  //antes de cada teste, faz login e cria um projeto 
  beforeEach(() => {

  cy.api_deleteProjects() //comando customizado para deletar todos os projetos antes de cada cenário
  cy.login() 
  
 
  //cy.gui_createProject(issue.project) //aqui cria o projeto via interface gráfica
  cy.api_createProject(issue.project) // aqui cria o projeto via API
  

})


  //teste para criar uma issue
  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})

