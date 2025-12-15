// aqui precisa declarar os comandos customizados criados nos arquivos api_commands.js e gui_commands.js
//com isso, quando qualquer teste for executado, esses comandos estarão disponíveis nos comandos cy

//import 'cypress-plugin-api/support' //importa os comandos customizados da biblioteca cypress-plugin-api

import 'cypress-plugin-api/dist/support' //importa os comandos customizados da biblioteca cypress-plugin-api gestão visual  

import './api_commands' //importa os comandos customizados criados para API
import './gui_commands' //importa os comandos customizados criados para GUI

