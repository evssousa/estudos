const Comentario = require('./Comentario')

class Post {
    constructor(autor, titulo, conteudo) {
        this.autor = autor
        this.titulo = titulo
        this.conteudo = conteudo

        this.comentario = []
    }

    addComentario(usuario, conteudo) {
        this.comentario.push(new Comentario(usuario, conteudo))
    }
}

module.exports = Post