/*
- Operador que permite ler propriedades internas de uma cadeia de objetos sem que a validação de cada referência da cadeia seja realizada.
- Em outras palavras, permite acessar propriedades internas sem lançar erros quando uma propriedade é 'nullish' (null ou undefined).
- Funciona de forma similar ao encadeamento normal (operador "."), porém é escreito com "?".
*/

// Exemplo:
const usuario = {
    nome: 'John Doe',
    email: 'doejhon@email.com',
    amigos: [{
        nome: 'Mary',
        endereco: {
            rua: 'Rua Some',
            numero: 89
        }
    }],
    idade: 42,
    contato: {
        codigoPais: '+55',
        ddd: '22',
        numero: '99876543'
    }
}
// aqui dá erro de 'Cannot read properties of undefined (reading 'ddd)
console.log(usuario.amigos[0].contato.ddd)
// aqui é o correto
console.log(usuario?.amigos[0]?.contato?.ddd) // undefined