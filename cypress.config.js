const { defineConfig } = require('cypress')

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
})

