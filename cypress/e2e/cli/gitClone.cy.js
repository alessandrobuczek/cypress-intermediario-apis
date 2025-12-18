import { faker } from '@faker-js/faker'

describe('git clone', () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {

//limpa os projetos antes de cada teste
    cy.api_deleteProjects() 


///cria um novo projeto via API antes de cada teste
// project recebe o objeto com name e description criado acima
    cy.api_createProject(project) //variável project criada acima
  })

  it('successfully', () => {
    cy.cloneViaSSH(project) //repassando o objeto project criado acima

    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should('contain', `# ${project.name}`)
      .and('contain', project.description)
  })
})
