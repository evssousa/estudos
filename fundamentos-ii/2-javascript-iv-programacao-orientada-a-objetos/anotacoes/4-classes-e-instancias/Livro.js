class Livro {
    constructor(titulo) { // método para iniciar a adição de atributos
        this.titulo = titulo
        this.publicado = false
    }

    publicar() {
        this.publicado = true // referencia a linha 4, se o chamar, trocará o valor
    }
}

const eragon = new Livro('Eragon')
const eldest = new Livro('Eldest')

eragon.publicar() // chama o método da linha 7, trocando o this.publicado da linha 4

console.log(eragon)
console.log(eldest)