const Personagem = require('./Personagem')

class Mago extends Personagem {
    constructor(nome, pv, pm, atq, def) {
        super(nome, pv, atq, def)
        this.pm = pm
    }

    atacar(alvo) {
        alvo.pv -= (this.atq + this.pm) - alvo.def
    }

    curar(alvo) {
        alvo.pv += this.pm * 2
    }
}

module.exports = Mago