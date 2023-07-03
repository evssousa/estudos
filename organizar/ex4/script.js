const nome = prompt('Escreva o nome do personagem')
const poderDeAtaque = prompt('Digite o poder de ataque do personagem:')

const nome2 = prompt('Escreva o nome do outro personagem:')
let vida = prompt('Quantos pontos de vida tem esse personagem?')
const poderDeDefesa = prompt('Digite o poder de defesa desse personagem:')
const escudo = prompt('Esse personagem possui escudo? [S / N]')

let dano = 0

if (poderDeAtaque > poderDeDefesa && escudo === 'N') {
    dano = poderDeAtaque - poderDeDefesa
    vida = vida - dano
    alert(`O personagem ${nome2} recebeu ${dano} de dano.
    O personagem ${nome2} agora tem ${vida} de vida.`)
} else if (poderDeAtaque > poderDeDefesa && escudo === 'S') {
    dano = (poderDeAtaque - poderDeDefesa) / 2
    vida = vida - dano
    alert(`O personagem ${nome2} recebeu ${dano} de dano.
    O personagem ${nome2} agora tem ${vida} de vida.`)
} else if (poderDeAtaque < poderDeDefesa) {
    alert(`O personagem ${nome2} não sofreu nenhum dano.`)
}