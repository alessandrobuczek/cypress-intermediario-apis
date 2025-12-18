/*const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true, // esconde as credenciais nos logs do Cypress
      requestMode: true, // ativa o modo de requisição da biblioteca cypress-plugin-api
    },
  },
  fixturesFolder: false,
  video: false,
})*/


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true, // executa todos os arquivos de teste em uma única execução do Cypress
  },
  fixturesFolder: false,
  video: false,
})


