const Autor = require("./Autor");

const everson = new Autor('Everson Sousa')
const post = everson.escreverPost('Titulo do Post', 'Lorem ipsum dolor...')

post.addComentario('Vanessa Ferreira', 'Muito bom!')
post.addComentario('Lucas', "Achei interessante...")

console.log(everson)
console.log(post)