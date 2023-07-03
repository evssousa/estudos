/*
- Operador que permite espalhar (do inglês, 'spread') os elementos de um objeto iterável, como um array ou uma string
- Utiliza três pontos: ...iterableObject
- Pode se usado para diferentes fins, como por exemplo:
*/

// Exemplo:
let str = 'Olá mundo'
let arr = [4, 2, 8, 3, 1]

console.log(...str) // separa as letras O l á ,  m u n d o
console.log(...arr) // separa os elementos 4 2 8 3 1

/*
Pode ser usado para diferentes fins, como por exemplo:
- Passar vários parâmetros de uma única vez
- Clonar objetos iteráveis
- Fazer manipulação sem afetar o objeto original
- Transformar strings em arrays
*/

// ===============================================
// Outros exemplos:
// ===============================================

const cidades = ['Prontera', 'Izlude', 'Payon']
console.log(...cidades)         // Prontera Izlude Payon (exibiu separado)
console.log(...cidades[0])      // P r o n t e r a

const cidadesClone = [...cidades]       // clonado array acima
cidadesClone.push('Aldebaran')          // adicionado item ao array
console.log({ cidades, cidadesClone})   // o array original não será alterado