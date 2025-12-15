import { faker } from '@faker-js/faker'

describe('Create Project', () => {

  beforeEach(() => cy.api_deleteProjects()) //comando customizado para deletar todos os projetos antes de cada cenário


  it('successfully', () => {
    
    //gerar dados dinâmicos usando faker na variável project
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_createProject(project) //chamada ao comando customizado passando a variável project
      .then(response => {
        expect(response.status).to.equal(201) //validar o status da resposta
        expect(response.body.name).to.equal(project.name) //validar o retorno no body nome do projeto
        expect(response.body.description).to.equal(project.description) //vailidar o retorno no body descrição do projeto
      })
  })
})

