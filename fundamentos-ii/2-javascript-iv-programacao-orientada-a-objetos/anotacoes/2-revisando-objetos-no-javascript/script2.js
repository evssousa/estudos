// Funções construtoras
// Nome da função deve ser escrito em PascalCase

function Livro(titulo, paginas, tags, autor) {
    this.titulo = titulo
    this.paginas = paginas
    this.tags = tags
    this.autor = autor

    this.publicado = false
    this.estoque = 0
    this.addEstoque = function addEstoque(quantidade) {
        this.estoque += quantidade
    }
    this.save = function () {
        // salva no banco de dados
    }
}

const autor = { nome: 'Everson Sousa' }
const tags = ['fantasia', 'medieval']

// forma de chamar as funções construtoras
const eragon = new Livro('Eragon', 468, tags, autor)
const eldest = new Livro('Eldest', 644, tags, autor)

console.log(eragon)
console.log(eldest)