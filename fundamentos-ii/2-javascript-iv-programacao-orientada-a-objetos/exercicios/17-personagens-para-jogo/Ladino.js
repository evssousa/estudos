const Personagem = require('./Personagem')

class Ladino extends Personagem {
    atacar(alvo) {
        alvo.pv -= (this.atq - alvo.def) * 2
    }
}

module.exports = Ladino