const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}` //pegar o token do arquivo de variáveis de ambiente


//comando customizado para criar um projeto via API
Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken }, //autenticação via token, passado no cabeçalho da requisição
  })
})


//comando customizado para listar todos os projetos via API
Cypress.Commands.add('api_getAllProjects', () => {
  cy.request({
    method: 'GET',
    url: '/api/v4/projects/',
    headers: { Authorization: accessToken },
  })
})


//comando customizado para deletar todos os projetos via API
Cypress.Commands.add('api_deleteProjects', () => {

  //chama primeiro o comando customizado que lista todos os projetos
  
  cy.api_getAllProjects().then(res => 

    //para cada projeto listado, faz uma requisição para deletar
    //usando comando foreach 
    res.body.forEach(project => cy.request({ 
      method: 'DELETE',
      url: `/api/v4/projects/${project.id}`,
      headers: { Authorization: accessToken },
    }))
  )
})


Cypress.Commands.add('api_createIssue', issue => {
  cy.api_createProject(issue.project) //primeiro cria o projeto via API, rotina acima
    .then(response => { //pega a resposta da criação do projeto
      cy.request({ //depois cria a issue vinculada ao projeto criado
        method: 'POST',
        url: `/api/v4/projects/${response.body.id}/issues`, //usa o id do projeto criado na URL
        body: {
          title: issue.title,
          description: issue.description
        },
        headers: { Authorization: accessToken },
      })
  })
})