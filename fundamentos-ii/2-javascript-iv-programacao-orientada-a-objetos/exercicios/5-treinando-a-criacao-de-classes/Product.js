/*
Product, que deverá possuir:
- um atributo name, atribuível na instanciação
- um atributo description, atribuível na instanciação
- um atributo price, atribuível na instanciação
- um atributo inStock, inicializando sempre em 0
- um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
- um método calculateDiscount, que tem como parâmetro a porcentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado
*/

class Produto {
    constructor(nome, descricao, preco) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.estoque = 0
    }

    addEstoque(quantidade) {
        this.estoque += quantidade
    }

    calcularDesconto(desconto) {
        this.preco = this.preco - (desconto * this.preco / 100)
    }
}

const tormenta20 = new Produto('Tormenta20', 'Livro básico de RPG da editora Jambo', 299)

tormenta20.addEstoque(10)
tormenta20.calcularDesconto(5)

console.log(tormenta20)