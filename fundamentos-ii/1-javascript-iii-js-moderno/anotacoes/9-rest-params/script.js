/*
- É uma técnica que permite a uma função receber qualquer número de parâmetros
- Também permite manipular esses parâmetros como um array na definição da função (o que diferencia do objeto 'arguments')
*/

// Exemplo:
function soma(...numeros) {
    return numeros.reduce((acum, num) => acum + num, 0)
}
console.log(soma(2, 2, 2, 2, 2)) // 10

// ===============================================
// Outros exemplos:
// ===============================================