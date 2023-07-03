/*
- Uma forma diferente de escrever funções anônimas
- Não utiliza a palavra function, utiliza => após os parâmetros (por isso 'arrow', do inglês, seta ou flecha)
- Não possui seus próprios 'this', 'arguments', 'super' e 'new.target'
- Também permite retornar diretamente uma expressão, caso seja uma função de uma única linha.
*/

// Exemplo:
const soma = (a, b) => {
    return a + b
}

const multiplicar = (a, b) => a * b

// ==============================================
// Funções conhecidas:
// ==============================================

function somaNormal(a, b) {
    return a + b
}
console.log(`Soma normal: ${somaNormal(2, 2)}`)

// ==============================================

const somaAnonima = function (a, b) {
    return a + b
}
console.log(`Soma anônima: ${somaAnonima(2, 2)}`)

// ==============================================

const arrowSoma = (a, b) => {
    return a + b
}
console.log(`Soma arrow function: ${arrowSoma(2, 2)}`)

// ==============================================
// Caso de uso:
// ==============================================

// Filtrando o nome das cidades que iniciam com a letra P
const cidades = ['Prontera', 'Izlude', 'Payon', 'Alberta']
const inicioComP = cidades.filter(cidade => cidade[0] === 'P')
console.log(inicioComP)