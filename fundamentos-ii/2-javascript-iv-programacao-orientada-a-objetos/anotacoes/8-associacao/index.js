const Endereco = require("./Endereco");
const Pessoa = require("./Pessoa");

// rua, numero, bairro, cidade, estado
const end = new Endereco('Rua Cruz Saldanha', '45', 'Parquelândia', 'Fortaleza', 'CE')

// nome, endereco
const everson = new Pessoa('Everson', end)

console.log(everson)
console.log(everson.endereco.enderecoCompleto())