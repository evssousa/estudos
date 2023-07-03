// Importando o script do arquivo render.js e guardando numa variável "const render".
const render = require('./render')
const store = require('./store')

console.log('Aplicação iniciada.')
render()
store()
console.log('Aplicação finalizada.')