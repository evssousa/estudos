// importar os arquivos
import { label, input, br } from './functions.js'

console.log(label({
    for: 'nomeCompleto', 
    textContent: 'Nome Completo'
}))

console.log(input({
    id: 'nomeCompleto',
    name: 'nomeCompleto',
    placeholder: 'Digite seu nome completo...'
}))

console.log(br())