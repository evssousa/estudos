const primeiroNome = prompt('Informe o primeiro nome:')
const sobrenome = prompt('Informe o sobrenome:')
const campoDeEstudo = prompt('Qual é o campo de estudo:')
const anoNascimento = prompt('Qual é o ano de nascimento:')

alert(`
    Cadastrado com sucesso!
    Nome Completo: ${primeiroNome}
    Sobrenome: ${sobrenome}
    Campo de Estudo: ${campoDeEstudo}
    Idade: ${2023 - anoNascimento} anos
`)