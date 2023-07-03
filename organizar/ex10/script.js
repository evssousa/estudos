const num = prompt('Digite um número para ser calculado:')

let calculo = ''

for (let i = 1; i <= 10; i++) {
    calculo += `${num} * ${i} = ${num * i}\n`
}

alert(`Tabuada do ${num}
Resultado da tabuada:

${calculo}`)