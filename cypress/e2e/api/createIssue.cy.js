import { faker } from '@faker-js/faker'

describe('Create issue', () => {
  beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const issue = { //gerar dados dinâmicos usando faker na variável issue
      title: `issue-${faker.datatype.uuid()}`, // variavel dinâmica para o título da issue
      description: faker.random.words(3), // variavel dinâmica para a descrição da issue
      project: { // variavel dinâmica para o projeto da issue
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_createIssue(issue) //chamada ao comando customizado passando a variável issue da rotina acima
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue.title)
        expect(response.body.description).to.equal(issue.description)
      })
  })
})