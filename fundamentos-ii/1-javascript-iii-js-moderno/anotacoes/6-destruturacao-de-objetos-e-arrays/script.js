/*
- Funcionalidade que permite criar variáveis a partir de propriedades de um objeto ou elemento de um array.
- No caso das propriedades do objeto, as variáveis são criadas com mesmo nome da propriedade.
- No caso dos elementos do array, podemos atribuir qualquer nome para a variável.
- Também pode ser utilizada de outras formas, como nos parâmetros de uma função.
*/

// Exemplo:
const { nome, email } = pessoa
const { x, y } = coordenadas

function ola({ nome }) {
    console.log(`Olá, ${nome}`)
}

// ===============================================
// Outros exemplos:
// ===============================================

const pessoa = {
    nome: 'Luke',
    classe = 'Alquimista',
    parentes = ['Anakin', 'Padme']
} 

// Forma tradicinal
const nome = pessoa.nome 

// Usando destruturação
const { nome } = pessoa
console.log(nome) // Luke

// ===============================================
// DESTRUTURANDO ARRAYS
// ===============================================

// [pai, mae] => pode ter qualquer nome dentro do array, ele vai pegar o que tiver na ordem e printar
const [ pai, mae ] = parentes
console.log(pai, mae) // Anakin Padme

// Pode-se também fazer com funções
// Pode destruturar direto no parâmetro
function criarUsuario({ nome, classe, parentes }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,         // aqui tá gerando um número aleatório da variável acima
        nome,       // aqui e o restando abaixo tá pegando do exemplo da linha 20~24
        classe,
        parentes
    }
}
const luke = criarUsuario(pessoa)
console.log(luke)
// id: 6555
// nome: 'Luke'
// classe: 'Alquimista'
// parentes: (2) ['Anakin', 'Padme']