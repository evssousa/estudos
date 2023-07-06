const Post = require('./Post')

class Autor {
    constructor(nome) {
        this.nome = nome
        this.posts = []
    }

    escreverPost(titulo, conteudo) {
        const post = new Post(titulo, conteudo, this)
        this.posts.push(post)
        
        return post
    }
}

module.exports = Autor