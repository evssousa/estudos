const Personagem = require('./Personagem')

class Guerreiro extends Personagem {
    constructor(nome, pv, atq, def, escudo) {
        super(nome, pv, atq, def)
        this.escudo = escudo
        this.posicao = 'Ataque'
    }

    atacar(alvo) {
        if (this.posicao === 'Ataque') {
            super.atacar(alvo)
        }
    }

    mudarPosicao() {
        if (this.posicao === 'Ataque') {
            this.posicao = 'Defesa'
            this.def += this.escudo
        } else {
            this.posicao = 'Ataque'
            this.def -= this.escudo
        }
    }
}

module.exports = Guerreiro