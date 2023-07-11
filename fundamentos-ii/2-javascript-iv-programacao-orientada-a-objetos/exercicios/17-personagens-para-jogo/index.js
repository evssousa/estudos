const Mago = require('./Mago')
const Ladino = require('./Ladino')
const Guerreiro = require('./Guerreiro')

// nome, pv, pm, atq, def
const arthur = new Mago('Arthur', 90, 14, 4, 2)

// nome, pv, atq, def
const beatrice = new Ladino('Beatrice', 140, 22, 8)

// nome, pv, atq, def, escudo
const cain = new Guerreiro('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.mudarPosicao()
arthur.atacar(cain)

console.table({ arthur, beatrice, cain })