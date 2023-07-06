class Endereco {
    constructor(rua, numero, bairro, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    enderecoCompleto() {
        return `${this.rua}, ${this.numero}, ${this.bairro}, ${this.cidade}/${this.estado}`
    }
}

module.exports = Endereco