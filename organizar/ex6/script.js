// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então, continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const turista = prompt('Turista, digite seu nome:')
let cidades = ''
let contagem = 0
let visitaTurista = prompt(`${turista}, você já visitou alguma cidade? [Sim/Não]`)

while (visitaTurista === 'Sim') {
    let cidade = prompt('Qual o nome da cidade que você visitou?')
    cidades += `- ${cidade}\n`
    contagem ++
    visitaTurista = prompt('Visitou outra cidade? [Sim/Não]')
}

alert(
    `Turista: ${turista}
    Quantidade de cidades visitadas: ${contagem}
    
    Cidades visitadas:\n`
    + cidades
)