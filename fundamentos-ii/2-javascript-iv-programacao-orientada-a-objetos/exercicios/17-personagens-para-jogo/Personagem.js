class Personagem {
    constructor(nome, pv, atq, def) {
        this.nome = nome
        this.pv = pv
        this.atq = atq
        this.def = def
    }

    atacar(alvo) {
        alvo.pv -= this.atq - alvo.def
    }
}

module.exports = Personagem