const livro = {
    titulo: 'Eragon', // propriedade
    paginas: 468,
    publicado: true,
    estoque: 20,
    tags: ['fantasia', 'aventura', 'medieval'],
    autor: {
        nome: 'Christopher Paolini'
    },
    addEstoque(quantidade) {
        this.estoque += quantidade
        // this é o próprio objeto: livro
    },
    salvar: function () {
        // salva no banco de dados
    }
}

console.log(livro.titulo) // Eragon

livro.addEstoque(50)
console.log(livro.estoque) // 70